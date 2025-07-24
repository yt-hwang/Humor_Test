import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KakaoSDK from "../src/components/KakaoSDK";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        <meta property="og:url" content="https://your-domain.com" />
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
