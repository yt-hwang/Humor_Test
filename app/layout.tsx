import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KakaoSDK from "../src/components/KakaoSDK";

// 전역적으로 정적 프리렌더를 비활성화하여 빌드 시 URL 관련 오류를 방지
export const dynamic = 'force-dynamic'
export const revalidate = 0

// 절대 URL이 필요한 메타데이터용 기본 URL
function ensureAbsoluteUrl(input?: string | null): string | null {
  if (!input) return null
  const trimmed = input.trim()
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed
  // 프로토콜이 없으면 https로 보정
  return `https://${trimmed}`
}

const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null
const configuredUrl = ensureAbsoluteUrl(process.env.NEXT_PUBLIC_SITE_URL) || vercelUrl
const siteUrl = configuredUrl || 'http://localhost:3000'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // build 시 환경변수 오설정으로 인한 Invalid URL을 방지
  metadataBase: (() => {
    try {
      return new URL(siteUrl)
    } catch {
      return new URL('http://localhost:3000')
    }
  })(),
  title: "개그유형 테스트 - 나의 개그코드를 알아보자!",
  description: "당신만의 개그 유형을 테스트해보세요! 유재석, 김준호, 박명수 등 유명 개그맨들과 비교해보는 재미있는 테스트입니다.",
  keywords: ["개그유형", "개그테스트", "유재석", "김준호", "박명수", "개그맨", "유머테스트"],
  authors: [{ name: "개그유형 테스트" }],
  openGraph: {
    title: "개그유형 테스트 - 나의 개그코드를 알아보자!",
    description: "당신만의 개그 유형을 테스트해보세요! 유재석, 김준호, 박명수 등 유명 개그맨들과 비교해보는 재미있는 테스트입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "개그유형 테스트",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png", // 추후 이미지 추가 예정
        width: 1200,
        height: 630,
        alt: "개그유형 테스트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "개그유형 테스트 - 나의 개그코드를 알아보자!",
    description: "당신만의 개그 유형을 테스트해보세요!",
    images: ["/og-image.png"], // 추후 이미지 추가 예정
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 카카오톡 공유를 위한 메타태그 */}
        <meta property="og:title" content="개그유형 테스트 - 나의 개그코드를 알아보자!" />
        <meta property="og:description" content="당신만의 개그 유형을 테스트해보세요! 유재석, 김준호, 박명수 등 유명 개그맨들과 비교해보는 재미있는 테스트입니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="개그유형 테스트" />
        <meta property="og:locale" content="ko_KR" />
        
        {/* 트위터 카드 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="개그유형 테스트 - 나의 개그코드를 알아보자!" />
        <meta name="twitter:description" content="당신만의 개그 유형을 테스트해보세요!" />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* 카카오톡 SDK */}
        <script
          async
          src="https://developers.kakao.com/sdk/js/kakao.js"
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2072767383270245"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <KakaoSDK />
        {children}
      </body>
    </html>
  );
}
