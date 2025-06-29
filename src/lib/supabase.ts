import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ylmvppmredooilpdoezi.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// 빌드 시에는 기본값 사용, 런타임에서만 에러 처리
const clientSupabaseKey = supabaseKey || 'dummy-key-for-build'

export const supabase = createClient(supabaseUrl, clientSupabaseKey)

// 사용자 방문 기록을 위한 타입 정의
export interface VisitRecord {
  id?: string
  timestamp: string
  user_agent: string
  page: string
  ip_address?: string
  session_id: string
  created_at?: string
}

// 사용자 테스트 결과를 위한 타입 정의
export interface TestResult {
  id?: string
  result_type: string
  result_title: string
  result_description: string
  session_id: string
  timestamp: string
  created_at?: string
} 