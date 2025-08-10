import { supabase, VisitRecord, TestResult } from '../lib/supabase'

// 세션 ID 생성 함수
export function generateSessionId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// 사용자 방문 기록
export async function recordVisit(page: string): Promise<void> {
  try {
    // Supabase가 제대로 초기화되지 않았으면 스킵
    if (!supabase) {
      console.warn('Supabase client not initialized, skipping visit record')
      return
    }

    const sessionId = getSessionId()
    const userAgent = navigator.userAgent
    const timestamp = new Date().toISOString()

    const visitRecord: VisitRecord = {
      timestamp,
      user_agent: userAgent,
      page,
      session_id: sessionId,
    }

    const { error } = await supabase
      .from('visits')
      .insert([visitRecord])

    if (error) {
      console.error('Error recording visit:', error)
    }
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
  try {
    // Supabase가 제대로 초기화되지 않았으면 스킵
    if (!supabase) {
      console.warn('Supabase client not initialized, skipping test result record')
      return
    }

    const sessionId = getSessionId()
    const timestamp = new Date().toISOString()

    // 선택 입력: 사용자 이름/MBTI (메인에서 저장해 둔 값 사용)
    let userName: string | null = null
    let userMbti: string | null = null
    if (typeof window !== 'undefined') {
      try {
        userName = localStorage.getItem('humor_test_user_name')
        userMbti = localStorage.getItem('humor_test_user_mbti')
      } catch {
        // localStorage 접근 안될 때는 무시
      }
    }

    const testResult: TestResult = {
      result_type: resultType,
      result_title: resultTitle,
      result_description: resultDescription,
      user_name: extra?.userName,
      mbti: extra?.mbti,
      session_id: sessionId,
      timestamp,
      user_name: userName,
      user_mbti: userMbti,
    }

    const { error } = await supabase
      .from('test_results')
      .insert([testResult])

    if (error) {
      console.error('Error recording test result:', error)
    }
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
    // Supabase가 제대로 초기화되지 않았으면 null 반환
    if (!supabase) {
      console.warn('Supabase client not initialized, returning null analytics')
      return null
    }

    // 총 방문자 수
    const { count: totalVisits, error: visitsError } = await supabase
      .from('visits')
      .select('*', { count: 'exact', head: true })

    if (visitsError) throw visitsError

    // 고유 방문자 수 (세션 기준)
    const { data: uniqueVisitors, error: uniqueError } = await supabase
      .from('visits')
      .select('session_id')
      .not('session_id', 'is', null)

    if (uniqueError) throw uniqueError

    const uniqueVisitorCount = new Set(uniqueVisitors.map(v => v.session_id)).size

    // 테스트 완료 수
    const { count: totalTests, error: testsError } = await supabase
      .from('test_results')
      .select('*', { count: 'exact', head: true })

    if (testsError) throw testsError

    // 결과별 통계
    const { data: resultStats, error: statsError } = await supabase
      .from('test_results')
      .select('result_type')

    if (statsError) throw statsError

    const resultCounts = resultStats.reduce((acc, result) => {
      acc[result.result_type] = (acc[result.result_type] || 0) + 1
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