# 개그유형 테스트

당신만의 개그 유형을 테스트해보세요! 유재석, 김준호, 박명수 등 유명 개그맨들과 비교해보는 재미있는 테스트입니다.

## 기능

- 16가지 개그 유형 테스트
- 실시간 사용자 분석 및 통계
- **플랫폼별 최적화된 공유 기능**
  - 인스타그램 스토리 공유 (링크 스티커 지원)
  - 트위터 공유 (미리보기 카드 최적화)
  - 틱톡 챌린지 공유 가이드
  - 카카오톡 공유 (SDK 연동)
  - 페이스북 공유
  - 네이티브 공유 API 지원
- **결과 이미지 생성 및 공유**
  - 일반 결과 이미지 캡처
  - 인스타그램 스토리 전용 이미지 (9:16 비율)
  - 네이티브 공유로 즉시 전송
  - 갤러리 다운로드 지원
- 반응형 디자인

## 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Analytics**: Supabase Analytics
- **Deployment**: Vercel
- **공유 기능**: 
  - 카카오톡 JavaScript SDK
  - Web Share API
  - HTML2Canvas (이미지 캡처)

## 설치 및 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```env
# 카카오톡 SDK 앱 키 (공유 기능용)
NEXT_PUBLIC_KAKAO_APP_KEY=your_kakao_app_key_here

# Supabase 설정 (선택사항)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Google Analytics (선택사항)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### 카카오톡 SDK 설정

1. [Kakao Developers](https://developers.kakao.com)에서 새 앱을 생성합니다.
2. JavaScript 키를 복사하여 `NEXT_PUBLIC_KAKAO_APP_KEY`에 설정합니다.
3. 앱 설정에서 도메인을 등록합니다 (예: `localhost:3000`, `your-domain.com`).

### 3. Supabase 설정 (선택사항)

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

### 4. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

## 공유 기능 상세

### 플랫폼별 최적화

#### 인스타그램
- **스토리 공유**: 링크 스티커를 통한 직접 연결
- **해시태그 최적화**: 10개 이하의 트렌디한 해시태그
- **이미지 공유**: 스토리 전용 9:16 비율 이미지 자동 생성

#### 트위터 (X)
- **미리보기 카드**: Open Graph 태그를 통한 최적화
- **해시태그**: 2개 이하로 간결하게
- **트윗 템플릿**: 자동으로 미리 작성된 텍스트 제공

#### 틱톡
- **챌린지 가이드**: 영상 제작 아이디어 제공
- **해시태그**: #ForYou, #fyp 등 알고리즘 최적화
- **프로필 링크**: bio를 통한 유입 유도

#### 카카오톡
- **SDK 연동**: 맞춤형 공유 카드 제공
- **미리보기**: Open Graph 태그 기반 자동 생성
- **버튼**: "테스트 하러가기" 바로가기 버튼

### 이미지 생성 기능

#### 일반 결과 이미지
- 현재 결과 페이지를 고해상도로 캡처
- 네이티브 공유 API로 즉시 전송
- 갤러리 다운로드 지원

#### 인스타그램 스토리 이미지
- 1080x1920 해상도 최적화
- 그라데이션 배경과 글래스모피즘 디자인
- 해시태그와 워터마크 포함

## 분석 대시보드

관리자용 분석 대시보드는 `/admin` 경로에서 접근할 수 있습니다:

- 총 방문자 수
- 고유 방문자 수
- 테스트 완료 수
- 전환율 분석
- 결과별 분포 통계
- **공유 통계**: 플랫폼별 공유 횟수 추적

## 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 프로젝트를 연결합니다.
2. 환경 변수를 설정합니다:
   - `NEXT_PUBLIC_KAKAO_APP_KEY`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (선택사항)
   - `NEXT_PUBLIC_GA_ID` (선택사항)
3. 자동 배포가 완료됩니다.

### 카카오톡 공유 설정

배포 후 카카오톡 공유가 제대로 작동하려면:

1. Kakao Developers 대시보드에서 앱 설정
2. 플랫폼 > Web > 사이트 도메인에 배포된 도메인 추가
3. 카카오 로그인 > Redirect URI 설정 (필요시)

## 라이센스

MIT License

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
