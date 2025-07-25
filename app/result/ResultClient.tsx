"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import ShareButtons from "../../src/components/ShareButtons";
import { recordVisit } from "../../src/utils/analytics";
import { gagResults, calculateAxisScores, convertScoresToPercentages } from "../../src/data/results";
import AxisBarGraph from "../../src/components/AxisBarGraph";

export default function ResultClient() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code") || "ONVB";
  const nickname = searchParams.get("nickname") || "온빛";
  const summary = searchParams.get("summary") || "항상 준비된 밝은 개그러!";
  const examples = searchParams.get("examples")?.split(",") || ["유재석", "무한도전", "런닝맨"];
  const answersParam = searchParams.get("answers");

  // 결과 데이터에서 추가 정보 가져오기
  const resultData = gagResults[code] || gagResults["ONVB"];

  // 답변 데이터가 있으면 축별 점수 계산
  let percentages: Record<string, number> | null = null;
  if (answersParam) {
    try {
      const answers = answersParam.split(",").map(a => a === "" ? null : parseInt(a));
      const scores = calculateAxisScores(answers);
      percentages = convertScoresToPercentages(scores);
    } catch (error) {
      console.error("답변 데이터 파싱 오류:", error);
    }
  }

  useEffect(() => {
    // 결과 페이지 방문 기록
    recordVisit('/result');
    
    // 결과 페이지 공유 통계
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        content_type: 'test_result',
        item_id: code,
        item_name: nickname,
        value: 1
      });
    }
  }, [code, nickname]);

  const shareData = {
    code,
    nickname,
    summary,
    examples
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden p-4">
      {/* 배경 장식 요소들 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 blur-lg animate-bounce"></div>
      
      <div className="relative z-10 w-full max-w-lg">
        {/* 메인 결과 카드 */}
        <div id="result-container" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 mb-6 transform hover:scale-105 transition-all duration-300">
          {/* 결과 헤더 */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>🎭</span>
              <span>개그유형 결과</span>
            </div>
            
            {/* 코드와 닉네임 */}
            <div className="mb-4">
              <div className="text-3xl font-mono font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {code}
              </div>
              <div className="text-xl font-semibold text-gray-800">{nickname}</div>
            </div>
          </div>

          {/* 요약 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-100">
            <p className="text-center text-gray-800 leading-relaxed font-medium text-lg break-keep hyphens-auto">
              {summary}
            </p>
          </div>

          {/* 예시 */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              이런 스타일의 예시
            </h3>
            <div className="flex flex-wrap gap-2">
              {examples.map((example, index) => (
                <span 
                  key={index} 
                  className="bg-gradient-to-r from-green-100 to-blue-100 text-gray-700 text-sm px-3 py-2 rounded-full border border-green-200 font-medium"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 축별 분석 바 그래프 */}
        {percentages && (
          <div className="mb-6">
            <AxisBarGraph percentages={percentages} />
          </div>
        )}

        {/* 궁합 정보 */}
        {resultData.bestMatch && resultData.worstMatch && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
              <span>💕</span>
              개그 궁합 분석
            </h3>
            
            {/* 최상의 짝궁 */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500 text-lg">✅</span>
                <span className="text-sm font-semibold text-gray-700">최상의 짝궁</span>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-green-600">
                    {gagResults[resultData.bestMatch]?.code} - {gagResults[resultData.bestMatch]?.nickname}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {resultData.bestMatchReason}
                </p>
              </div>
            </div>

            {/* 최악의 짝궁 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 text-lg">❌</span>
                <span className="text-sm font-semibold text-gray-700">최악의 짝궁</span>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-red-600">
                    {gagResults[resultData.worstMatch]?.code} - {gagResults[resultData.worstMatch]?.nickname}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {resultData.worstMatchReason}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 공유 섹션 */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
              <span>🎉</span>
              결과를 공유해보세요!
            </h3>
            <p className="text-sm text-gray-600">
              친구들과 함께 재미있는 개그유형 테스트를 해보세요
            </p>
          </div>
          
          <div className="flex gap-3 justify-center mb-4">
            <Link
              href="/quiz"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                테스트 다시하기
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
            </Link>
            <ShareButtons data={shareData} />
          </div>
        </div>



        {/* 하단 링크들 */}
        <div className="text-center space-y-3">
          <div className="flex justify-center gap-3">
            <Link 
              href="/types" 
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              전체 유형 보기
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
