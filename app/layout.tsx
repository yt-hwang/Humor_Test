import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import KakaoSDK from "../src/components/KakaoSDK";
import { LangProvider } from "../src/context/LangContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://humor-test.vercel.app"),
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
        url: "/api/og",
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
    images: ["/api/og"],
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
        <Suspense fallback={null}>
          <LangProvider>
            {children}
          </LangProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
