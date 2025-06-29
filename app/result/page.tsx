import { Suspense } from "react";
import { Metadata } from "next";
import ResultClient from "./ResultClient";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const code = (searchParams.code as string) || "ONVB";
  const nickname = (searchParams.nickname as string) || "온빛";
  const summary = (searchParams.summary as string) || "항상 준비된 밝은 개그러!";
  const description = (searchParams.description as string) || "체계적으로 준비하고, 상황에 맞는 센스 있는 개그를 구사합니다.";

  return {
    title: `개그유형 테스트 결과 - ${code} ${nickname}`,
    description: `${summary} ${description}`,
    openGraph: {
      title: `개그유형 테스트 결과 - ${code} ${nickname}`,
      description: `${summary} ${description}`,
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
      description: `${summary} ${description}`,
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
