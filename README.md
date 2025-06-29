# 개그유형 테스트

당신만의 개그 유형을 테스트해보세요! 유재석, 김준호, 박명수 등 유명 개그맨들과 비교해보는 재미있는 테스트입니다.

## 기능

- 16가지 개그 유형 테스트
- 실시간 사용자 분석 및 통계
- 카카오톡 공유 기능
- 결과 이미지 캡처 기능
- 반응형 디자인

## 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Analytics**: Supabase Analytics
- **Deployment**: Vercel

## 설치 및 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트를 생성합니다.
2. 프로젝트 설정에서 다음 테이블들을 생성합니다:

#### visits 테이블
```sql
CREATE TABLE visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  page TEXT,
  ip_address TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### test_results 테이블
```sql
CREATE TABLE test_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  result_type TEXT,
  result_title TEXT,
  result_description TEXT,
  session_id TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. 환경 변수 설정:
   - 프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

   - Supabase 대시보드 > Settings > API에서 anon key를 확인할 수 있습니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

## 분석 대시보드

관리자용 분석 대시보드는 `/admin` 경로에서 접근할 수 있습니다:

- 총 방문자 수
- 고유 방문자 수
- 테스트 완료 수
- 전환율 분석
- 결과별 분포 통계

## 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 프로젝트를 연결합니다.
2. 환경 변수 `NEXT_PUBLIC_SUPABASE_ANON_KEY`를 설정합니다.
3. 자동 배포가 완료됩니다.

## 라이센스

MIT License

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
