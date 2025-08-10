export const runtime = 'nodejs'

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
  const { page, sessionId, userAgent } = body || {}
  const timestamp = new Date().toISOString()
  const { data, error } = await supabaseServer
    .from('visits')
    .insert([{ timestamp, user_agent: userAgent || null, page, session_id: sessionId || null }])
    .select()
    .single()
  if (error) return Response.json({ error: error.message }, { status: 400 })
  return Response.json({ data })
}


