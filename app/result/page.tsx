import { Suspense } from "react";
import { Metadata } from "next";
import ResultClient from "./ResultClient";

export const dynamic = 'force-dynamic'
export const revalidate = 0

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = searchParams || {};
  const code = (params.code as string) || "ONVB";
  const nickname = (params.nickname as string) || "온빛";
  const summary = (params.summary as string) || "항상 준비된 밝은 개그러!";

  return {
    title: `개그유형 테스트 결과 - ${code} ${nickname}`,
    description: summary,
    openGraph: {
      title: `개그유형 테스트 결과 - ${code} ${nickname}`,
      description: summary,
      type: "website",
      locale: "ko_KR",
      siteName: "개그유형 테스트",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `개그유형 테스트 결과 - ${code} ${nickname}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `개그유형 테스트 결과 - ${code} ${nickname}`,
      description: summary,
      images: ["/og-image.png"],
    },
  };
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>결과를 불러오는 중...</div>}>
      <ResultClient />
    </Suspense>
  );
}
