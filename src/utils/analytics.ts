import type { VisitRecord, TestResult } from '../lib/supabase'
import type { SupabaseClient } from '@supabase/supabase-js'

// 세션 ID 생성 함수
export function generateSessionId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// 사용자 방문 기록
export async function recordVisit(page: string): Promise<void> {
  const DEBUG = process.env.NEXT_PUBLIC_DEBUG_ANALYTICS === '1'
  const USE_SERVER = process.env.NEXT_PUBLIC_USE_SERVER_ANALYTICS === '1'
  if (DEBUG) console.log('[recordVisit] start', { page, ts: new Date().toISOString() })
  try {
    // 서버/빌드 환경에서는 실행하지 않음
    if (typeof window === 'undefined') return

    // 서버 경유 모드: API 호출
    if (USE_SERVER) {
      const sessionId = getSessionId()
      const userAgent = navigator.userAgent
      const res = await fetch('/api/analytics/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page, sessionId, userAgent }),
      })
      const json: unknown = await res.json().catch(() => ({} as unknown))
      if (DEBUG) console.log('[recordVisit] via API ->', res.status, json)
      if (!res.ok) throw new Error((json as { error?: string } | null | undefined)?.error || `API ${res.status}`)
      return
    }

    const { supabase, isSupabaseConfigured } = await import('../lib/supabase')
    if (!isSupabaseConfigured || !supabase) {
      console.warn('Supabase not configured; skipping visit record')
      return
    }
    const client: SupabaseClient = supabase as SupabaseClient

    const sessionId = getSessionId()
    const userAgent = navigator.userAgent
    const timestamp = new Date().toISOString()

    const visitRecord: VisitRecord = {
      timestamp,
      user_agent: userAgent,
      page,
      session_id: sessionId,
    }

    if (DEBUG) console.log('[recordVisit] inserting to visits', visitRecord)
    const { data, error } = await client
      .from('visits')
      .insert([visitRecord])
      .select()
      .single()

    if (error) {
      console.error('Error recording visit:', error)
      return
    }
    if (DEBUG) console.log('[recordVisit] ok', { id: (data as { id?: string } | null | undefined)?.id })
  } catch (error) {
    console.error('Failed to record visit:', error)
  }
}

// 실패 재전송용 localStorage 큐 (key, 크기 상한, 재시도 정책)
const PENDING_RESULT_QUEUE_KEY = 'humor_test_pending_results_v1'
const PENDING_QUEUE_MAX = 50
const INSERT_RETRY_ATTEMPTS = 3
const INSERT_RETRY_BASE_MS = 500

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms))
}

function loadPendingQueue(): TestResult[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(PENDING_RESULT_QUEUE_KEY)
    return raw ? (JSON.parse(raw) as TestResult[]) : []
  } catch {
    return []
  }
}

function savePendingQueue(queue: TestResult[]): void {
  if (typeof window === 'undefined') return
  try {
    const trimmed = queue.slice(-PENDING_QUEUE_MAX)
    localStorage.setItem(PENDING_RESULT_QUEUE_KEY, JSON.stringify(trimmed))
  } catch {
    // storage full / blocked
  }
}

function enqueuePendingResult(record: TestResult): void {
  const q = loadPendingQueue()
  q.push(record)
  savePendingQueue(q)
}

async function insertTestResultOnce(client: SupabaseClient, record: TestResult): Promise<void> {
  const { error } = await client.from('test_results').insert([record])
  if (error) throw new Error(error.message)
}

async function insertTestResultViaApi(record: TestResult): Promise<void> {
  const res = await fetch('/api/analytics/result', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  })
  if (!res.ok) {
    const json = await res.json().catch(() => ({} as unknown))
    throw new Error((json as { error?: string } | null | undefined)?.error || `API ${res.status}`)
  }
}

async function insertWithRetry(
  record: TestResult,
  insertFn: (r: TestResult) => Promise<void>
): Promise<boolean> {
  for (let i = 0; i < INSERT_RETRY_ATTEMPTS; i++) {
    try {
      await insertFn(record)
      return true
    } catch (e) {
      if (i === INSERT_RETRY_ATTEMPTS - 1) {
        console.error(`[recordTestResult] insert failed after ${INSERT_RETRY_ATTEMPTS} attempts:`, e)
      }
      if (i < INSERT_RETRY_ATTEMPTS - 1) {
        await sleep(INSERT_RETRY_BASE_MS * Math.pow(2, i))
      }
    }
  }
  return false
}

// 누적된 실패분을 조용히 재전송 (ResultClient/메인에서 호출)
export async function flushPendingTestResults(): Promise<void> {
  if (typeof window === 'undefined') return
  const queue = loadPendingQueue()
  if (queue.length === 0) return

  const USE_SERVER = process.env.NEXT_PUBLIC_USE_SERVER_ANALYTICS === '1'
  let insertFn: (r: TestResult) => Promise<void>
  if (USE_SERVER) {
    insertFn = insertTestResultViaApi
  } else {
    const { supabase, isSupabaseConfigured } = await import('../lib/supabase')
    if (!isSupabaseConfigured || !supabase) return
    const client = supabase as SupabaseClient
    insertFn = (r) => insertTestResultOnce(client, r)
  }

  const remaining: TestResult[] = []
  for (const rec of queue) {
    const ok = await insertWithRetry(rec, insertFn)
    if (!ok) remaining.push(rec)
  }
  savePendingQueue(remaining)
}

// 사용자 테스트 결과 기록
export async function recordTestResult(
  resultType: string,
  resultTitle: string,
  resultDescription: string,
  extra?: { userName?: string; mbti?: string }
): Promise<void> {
  const DEBUG = process.env.NEXT_PUBLIC_DEBUG_ANALYTICS === '1'
  const USE_SERVER = process.env.NEXT_PUBLIC_USE_SERVER_ANALYTICS === '1'
  if (DEBUG) console.log('[recordTestResult] start', { resultType, hasTitle: !!resultTitle, hasDesc: !!resultDescription, extra })
  try {
    // 서버/빌드 환경에서는 실행하지 않음
    if (typeof window === 'undefined') return

    const sessionId = getSessionId()
    const timestamp = new Date().toISOString()

    // 선택 입력: 사용자 이름/MBTI (메인에서 저장해 둔 값 사용)
    let storedUserName: string | null = null
    let storedUserMbti: string | null = null
    try {
      storedUserName = localStorage.getItem('humor_test_user_name')
      storedUserMbti = localStorage.getItem('humor_test_user_mbti')
    } catch {
      // localStorage 접근 안될 때는 무시
    }

    const testResult: TestResult = {
      result_type: resultType,
      result_title: resultTitle,
      result_description: resultDescription,
      session_id: sessionId,
      timestamp,
      user_name: (extra?.userName ?? storedUserName) || null,
      user_mbti: (extra?.mbti ?? storedUserMbti) || null,
    }

    let insertFn: ((r: TestResult) => Promise<void>) | null = null
    if (USE_SERVER) {
      insertFn = insertTestResultViaApi
    } else {
      const { supabase, isSupabaseConfigured } = await import('../lib/supabase')
      if (!isSupabaseConfigured || !supabase) {
        console.warn('Supabase not configured; queuing test result for later')
        enqueuePendingResult(testResult)
        return
      }
      const client: SupabaseClient = supabase as SupabaseClient
      insertFn = (r) => insertTestResultOnce(client, r)
    }

    if (DEBUG) console.log('[recordTestResult] inserting to test_results', testResult)
    const ok = await insertWithRetry(testResult, insertFn)
    if (!ok) {
      enqueuePendingResult(testResult)
      if (DEBUG) console.log('[recordTestResult] enqueued after retries exhausted')
      return
    }
    if (DEBUG) console.log('[recordTestResult] ok')
  } catch (error) {
    console.error('Failed to record test result:', error)
  }
}

// 공유 기록
export async function recordShare(
  platform: string,
  resultCode: string,
  lang: string = 'ko'
): Promise<void> {
  const DEBUG = process.env.NEXT_PUBLIC_DEBUG_ANALYTICS === '1'
  if (DEBUG) console.log('[recordShare] start', { platform, resultCode, lang })
  try {
    if (typeof window === 'undefined') return

    const { supabase, isSupabaseConfigured } = await import('../lib/supabase')
    if (!isSupabaseConfigured || !supabase) {
      console.warn('Supabase not configured; skipping share record')
      return
    }
    const client: SupabaseClient = supabase as SupabaseClient

    const sessionId = getSessionId()
    const timestamp = new Date().toISOString()

    const shareRecord = {
      platform,
      result_code: resultCode,
      lang,
      session_id: sessionId,
      timestamp,
    }

    if (DEBUG) console.log('[recordShare] inserting to shares', shareRecord)
    const { error } = await client
      .from('shares')
      .insert([shareRecord])

    if (error) {
      console.error('Error recording share:', error)
      return
    }
    if (DEBUG) console.log('[recordShare] ok')
  } catch (error) {
    console.error('Failed to record share:', error)
  }
}

// 세션 ID 관리
function getSessionId(): string {
  let sessionId = localStorage.getItem('humor_test_session_id')
  if (!sessionId) {
    sessionId = generateSessionId()
    localStorage.setItem('humor_test_session_id', sessionId)
  }
  return sessionId
}

// 통계 데이터 가져오기 (관리자용)
export async function getAnalytics() {
  try {
    // 서버/빌드 환경에서는 실행하지 않음 (클라이언트에서만 조회)
    if (typeof window === 'undefined') return null

    const { supabase, isSupabaseConfigured } = await import('../lib/supabase')
    if (!isSupabaseConfigured || !supabase) {
      console.warn('Supabase not configured; returning null analytics')
      return null
    }
    const client: SupabaseClient = supabase as SupabaseClient

    // 총 방문자 수
    const { count: totalVisits, error: visitsError } = await client
      .from('visits')
      .select('*', { count: 'exact', head: true })

    if (visitsError) throw visitsError

    // 고유 방문자 수 (세션 기준)
    const { data: uniqueVisitors, error: uniqueError } = await client
      .from('visits')
      .select('session_id')
      .not('session_id', 'is', null)

    if (uniqueError) throw uniqueError

    const uniqueVisitorCount = new Set((uniqueVisitors as Array<{ session_id: string }>).map((v: { session_id: string }) => v.session_id)).size

    // 테스트 완료 수
    const { count: totalTests, error: testsError } = await client
      .from('test_results')
      .select('*', { count: 'exact', head: true })

    if (testsError) throw testsError

    // 결과별 통계
    const { data: resultStats, error: statsError } = await client
      .from('test_results')
      .select('result_type')

    if (statsError) throw statsError

    const resultCounts = (resultStats as Array<{ result_type: string }>).reduce((acc: Record<string, number>, r: { result_type: string }) => {
      acc[r.result_type] = (acc[r.result_type] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      totalVisits: totalVisits || 0,
      uniqueVisitors: uniqueVisitorCount,
      totalTests: totalTests || 0,
      resultCounts,
    }
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return null
  }
} 