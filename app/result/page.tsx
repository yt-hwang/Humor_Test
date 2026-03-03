import { Suspense } from "react";
import { Metadata } from "next";
import ResultClient from "./ResultClient";
import { gagResults } from "../../src/data/results";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const code = (params.code as string) || "ONVB";
  const result = gagResults[code] || gagResults["ONVB"];
  const { nickname, summary } = result;

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
