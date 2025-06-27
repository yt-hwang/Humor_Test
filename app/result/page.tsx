import { Suspense } from "react";
import ResultClient from "./ResultClient";

export default function ResultPage() {
  return (
    <Suspense fallback={<div>결과를 불러오는 중...</div>}>
      <ResultClient />
    </Suspense>
  );
}
