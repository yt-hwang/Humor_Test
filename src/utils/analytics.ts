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
    if (typeof window !== 'undefined') {
      try {
        storedUserName = localStorage.getItem('humor_test_user_name')
        storedUserMbti = localStorage.getItem('humor_test_user_mbti')
      } catch {
        // localStorage 접근 안될 때는 무시
      }
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

    // 서버 경유 모드: API 호출
    if (USE_SERVER) {
      const res = await fetch('/api/analytics/result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testResult),
      })
      const json: unknown = await res.json().catch(() => ({} as unknown))
      if (DEBUG) console.log('[recordTestResult] via API ->', res.status, json)
      if (!res.ok) throw new Error((json as { error?: string } | null | undefined)?.error || `API ${res.status}`)
      return
    }

    const { supabase, isSupabaseConfigured } = await import('../lib/supabase')
    if (!isSupabaseConfigured || !supabase) {
      console.warn('Supabase not configured; skipping test result record')
      return
    }
    const client: SupabaseClient = supabase as SupabaseClient

    if (DEBUG) console.log('[recordTestResult] inserting to test_results', testResult)
    const { data, error } = await client
      .from('test_results')
      .insert([testResult])
      .select()
      .single()

    if (error) {
      console.error('Error recording test result:', error)
      return
    }
    if (DEBUG) console.log('[recordTestResult] ok', { id: (data as { id?: string } | null | undefined)?.id })
  } catch (error) {
    console.error('Failed to record test result:', error)
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