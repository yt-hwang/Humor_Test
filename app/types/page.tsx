import { Metadata } from "next";
import TypesClient from "./TypesClient";

export const metadata: Metadata = {
  title: "개그유형 전체보기 - 16가지 유형 한눈에",
  description: "16가지 개그유형을 모두 확인해보세요. 분위기메이커형, 팩폭형, 컨셉형, 예측불가형으로 나누어진 재미있는 개그 분석입니다.",
  openGraph: {
    title: "개그유형 전체보기 - 16가지 유형 한눈에",
    description: "16가지 개그유형을 모두 확인해보세요. 분위기메이커형, 팩폭형, 컨셉형, 예측불가형으로 나누어진 재미있는 개그 분석입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "개그유형 테스트",
  },
};

export default function TypesPage() {
  return <TypesClient />;
} 