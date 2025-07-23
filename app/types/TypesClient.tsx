"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gagResults } from "../../src/data/results";
import { recordVisit } from "../../src/utils/analytics";

// 유형별 카테고리 정보
const categories = [
  {
    name: "💛 분위기메이커형",
    description: "말과 표정으로 분위기를 띄우는 유형",
    types: ["ONVB", "ONPB", "INVB", "INPB"],
    color: "from-yellow-400 to-orange-400"
  },
  {
    name: "❤️ 팩폭형", 
    description: "현실을 꼬집고 비판하는 유형",
    types: ["ONVD", "ONPD", "INVD", "INPD"],
    color: "from-red-400 to-pink-400"
  },
  {
    name: "💙 컨셉형",
    description: "병맛 설정과 세계관을 만드는 유형", 
    types: ["OBVB", "OBVD", "OBPB", "OBPD"],
    color: "from-blue-400 to-indigo-400"
  },
  {
    name: "💜 예측불가형",
    description: "즉흥적이고 예측할 수 없는 유형",
    types: ["IBVB", "IBVD", "IBPB", "IBPD"],
    color: "from-purple-400 to-violet-400"
  }
];

export default function TypesClient() {
  useEffect(() => {
    recordVisit('/types');
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden p-4">
      {/* 배경 장식 요소들 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 blur-lg animate-bounce"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium mb-4">
            <span>🎭</span>
            <span>개그유형 전체보기</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">16가지 개그유형</h1>
          <p className="text-gray-600">각 유형을 클릭하면 상세한 분석을 확인할 수 있어요!</p>
        </div>

        {/* 카테고리별 유형들 */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6">
              {/* 카테고리 헤더 */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              {/* 유형 카드들 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.types.map((typeCode) => {
                  const typeData = gagResults[typeCode];
                  if (!typeData) return null;

                  return (
                    <Link 
                      key={typeCode} 
                      href={`/result?code=${typeCode}&nickname=${encodeURIComponent(typeData.nickname)}&summary=${encodeURIComponent(typeData.summary)}&examples=${encodeURIComponent(typeData.examples.join(','))}`}
                      className="group"
                    >
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                        {/* 유형 코드 */}
                        <div className="text-center mb-3">
                          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} text-white rounded-xl font-mono font-bold text-lg mb-2 group-hover:scale-110 transition-transform duration-300`}>
                            {typeCode}
                          </div>
                        </div>

                        {/* 닉네임 */}
                        <h3 className="text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-blue-600 transition-colors">
                          {typeData.nickname}
                        </h3>

                        {/* 요약 */}
                        <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                          {typeData.summary}
                        </p>

                        {/* 예시 */}
                        <div className="mt-3 flex flex-wrap gap-1 justify-center">
                          {typeData.examples.slice(0, 2).map((example, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              {example}
                            </span>
                          ))}
                          {typeData.examples.length > 2 && (
                            <span className="text-xs text-gray-400">+{typeData.examples.length - 2}</span>
                          )}
                        </div>

                        {/* 클릭 안내 */}
                        <div className="mt-3 text-center">
                          <span className="text-xs text-blue-500 font-medium group-hover:underline">
                            자세히 보기 →
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 액션 */}
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 