-- 공유 기록 테이블
CREATE TABLE IF NOT EXISTS shares (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT NOT NULL,
  result_code TEXT,
  lang TEXT DEFAULT 'ko',
  session_id TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_shares_platform ON shares(platform);
CREATE INDEX IF NOT EXISTS idx_shares_timestamp ON shares(timestamp);
CREATE INDEX IF NOT EXISTS idx_shares_result_code ON shares(result_code);

-- RLS 해제
ALTER TABLE shares DISABLE ROW LEVEL SECURITY;
