"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 쿼리 파라미터에서 결과 데이터 읽기
  const code = searchParams.get("code") || "ONVB";
  const nickname = searchParams.get("nickname") || "온빛";
  const summary = searchParams.get("summary") || "항상 준비된 밝은 개그러!";
  const description = searchParams.get("description") || "체계적으로 준비하고, 상황에 맞는 센스 있는 개그를 구사합니다.";
  const examples = searchParams.get("examples")?.split(",") || ["유재석", "무한도전", "런닝맨"];

  const handleRestart = () => {
    router.push("/quiz");
  };

  const handleShare = () => {
    // SNS 공유 기능 (추후 구현)
    alert("공유 기능은 추후 구현 예정입니다!");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-yellow-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">나의 개그유형 결과</h1>
        
        {/* 결과 코드 및 닉네임 */}
        <div className="text-2xl font-mono font-bold mb-2 text-blue-600">{code}</div>
        <div className="text-lg font-semibold mb-4 text-gray-800">{nickname}</div>
        
        {/* 요약 설명 */}
        <p className="mb-4 text-center text-gray-700 leading-relaxed">{summary}</p>
        
        {/* 상세 설명 */}
        <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed bg-gray-50 p-4 rounded-lg">
          {description}
        </div>
        
        {/* 연예인/프로그램 예시 */}
        <div className="mb-6 text-center">
          <div className="text-xs text-gray-500 mb-2">이런 스타일의 예시</div>
          <div className="flex flex-wrap justify-center gap-2">
            {examples.map((example, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {example}
              </span>
            ))}
          </div>
        </div>
        
        {/* 버튼 영역 */}
        <div className="flex gap-3 w-full justify-center">
          <button 
            onClick={handleRestart}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          >
            테스트 다시하기
          </button>
          <button 
            onClick={handleShare}
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          >
            결과 공유하기
          </button>
        </div>
        
        {/* 홈으로 돌아가기 */}
        <Link href="/" className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>결과를 불러오는 중...</div>}>
      <ResultContent />
    </Suspense>
  );
} 