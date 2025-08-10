-- Supabase 데이터베이스 설정 스크립트
-- Supabase 대시보드 > SQL Editor에서 실행하세요

-- 방문 기록 테이블
CREATE TABLE IF NOT EXISTS visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  page TEXT,
  ip_address TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 테스트 결과 테이블
CREATE TABLE IF NOT EXISTS test_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  result_type TEXT,
  result_title TEXT,
  result_description TEXT,
  user_name TEXT,
  mbti TEXT,
  session_id TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_visits_session_id ON visits(session_id);
CREATE INDEX IF NOT EXISTS idx_visits_timestamp ON visits(timestamp);
CREATE INDEX IF NOT EXISTS idx_test_results_session_id ON test_results(session_id);
CREATE INDEX IF NOT EXISTS idx_test_results_result_type ON test_results(result_type);
CREATE INDEX IF NOT EXISTS idx_test_results_timestamp ON test_results(timestamp);

-- RLS (Row Level Security) 설정
-- 필요에 따라 RLS를 활성화하고 정책을 설정할 수 있습니다
-- ALTER TABLE visits ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- RLS 해제 (테스트용, 실제 운영 전에는 정책을 꼭 설정하세요)
ALTER TABLE visits DISABLE ROW LEVEL SECURITY;
ALTER TABLE test_results DISABLE ROW LEVEL SECURITY;

-- 샘플 데이터 삽입 (테스트용)
-- INSERT INTO visits (user_agent, page, session_id) VALUES 
--   ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', '/', 'test-session-1'),
--   ('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)', '/quiz', 'test-session-2');

-- INSERT INTO test_results (result_type, result_title, result_description, session_id) VALUES 
--   ('ONVB', '온빛', '항상 준비된 밝은 개그러!', 'test-session-1'),
--   ('INFP', '인프피', '창의적이고 독창적인 개그러!', 'test-session-2'); 