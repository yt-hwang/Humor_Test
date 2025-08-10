export const runtime = 'node'

import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const env = (globalThis as any).process?.env as any
const supabaseUrl = env?.SUPABASE_URL as string
const serviceKey = env?.SUPABASE_SERVICE_ROLE_KEY as string

const supabaseServer = supabaseUrl && serviceKey
  ? createClient(supabaseUrl, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } })
  : null

export async function POST(req: NextRequest) {
  if (!supabaseServer) {
    return Response.json({ error: 'Supabase service not configured' }, { status: 500 })
  }
  const body = await req.json().catch(() => ({}))
  const { result_type, result_title, result_description, user_name, user_mbti, session_id, timestamp } = body || {}
  const created_at = new Date().toISOString()
  const { data, error } = await supabaseServer
    .from('test_results')
    .insert([{ result_type, result_title, result_description, user_name, user_mbti, session_id, timestamp: timestamp || created_at }])
    .select()
    .single()
  if (error) return Response.json({ error: error.message }, { status: 400 })
  return Response.json({ data })
}


