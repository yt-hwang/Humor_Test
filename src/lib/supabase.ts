import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured: boolean = Boolean(supabaseUrl && supabaseKey)

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseKey as string)
  : null

// 런타임 경고: 환경변수 미설정 시 저장이 실패함
if (typeof window !== 'undefined' && !isSupabaseConfigured) {
  console.warn('Supabase env missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY for analytics to work.')
}

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
  // 선택 입력: 유저 이름/MBTI (있으면 저장)
  user_name?: string | null
  user_mbti?: string | null
  created_at?: string
} 