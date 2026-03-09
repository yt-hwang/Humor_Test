"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ShareButtons from "../../src/components/ShareButtons";
import SaveImageButton from "../../src/components/SaveImageButton";
import { recordVisit } from "../../src/utils/analytics";
import { gagResults, calculateAxisScores, getTopCompatibleTypes, getCompatibilityLabel } from "../../src/data/results";
import type { AxisScores, GagResult } from "../../src/data/results";
import { decodeAnswers } from "../../src/utils/encodeAnswers";
import AxisBarChart from "../../src/components/AxisBarChart";
import StrengthsWeaknesses from "../../src/components/StrengthsWeaknesses";
import React from "react";

export default function ResultClient() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code") || "ONVB";
  const user = searchParams.get("user") || "";
  const encodedAnswers = searchParams.get("answers");
  const displayUser = user.trim();
  const headlineSize = displayUser.length > 14 ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-3xl sm:text-4xl md:text-5xl';

  // 답변 데이터 디코딩 및 축별 점수 계산
  const answers = encodedAnswers ? decodeAnswers(encodedAnswers) : [];
  const axisScores = answers.length > 0 ? calculateAxisScores(answers) : null;

  // 결과 데이터에서 추가 정보 가져오기
  // 모든 축이 4점(=그래프 51% 표기)인 경우 INPB로 강제
  const isNeutralAll = axisScores && axisScores.OI === 4 && axisScores.NB === 4 && axisScores.VP === 4 && axisScores.BD === 4;
  const effectiveCode = isNeutralAll ? "INPB" : code;
  const resultData = gagResults[effectiveCode] || gagResults["ONVB"];
  const { nickname, summary, examples } = resultData;

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

  const captureRef = useRef<HTMLDivElement>(null);

  const shareData = {
    code: effectiveCode,
    nickname,
    summary,
    examples
  };

  // 코드만 있을 때도 그래프/강점 노출을 위해 코드→대략 점수 변환
  const codeToScores = (c: string): AxisScores => ({
    OI: c[0] === 'O' ? 5 : 3,
    NB: c[1] === 'N' ? 5 : 3,
    VP: c[2] === 'V' ? 5 : 3,
    BD: c[3] === 'B' ? 5 : 3,
  });

  const displayScores: AxisScores | null = axisScores ?? codeToScores(effectiveCode);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden p-4">
      {/* 배경 장식 요소들 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 blur-lg animate-bounce"></div>
      
      <div className="relative z-10 w-full max-w-lg">
        {/* 이미지 캡처 영역 시작 */}
        <div ref={captureRef}>
        {/* 메인 결과 카드 */}
        <div id="result-container" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 mb-6">
          {/* 결과 헤더 */}
          <div className="text-center mb-8">
            <h2
              className={`${headlineSize} font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent text-center leading-tight break-keep text-pretty mb-3 max-w-[90%] mx-auto drop-shadow-sm`}
            >
              {displayUser ? `${displayUser}의 개그코드` : '개그코드'}
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5" />

            {/* 코드와 닉네임 */}
            <div className="mb-4">
              <div className="flex items-center justify-center mb-2">
                <span className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-mono text-lg font-bold shadow-sm ring-1 ring-white/40">
                  {effectiveCode}
                </span>
              </div>
              {/* 코드 각 글자 의미 */}
              <div className="flex justify-center gap-5 mb-3">
                {[
                  effectiveCode[0] === 'O' ? '준비형' : '즉흥형',
                  effectiveCode[1] === 'N' ? '직관형' : '병맛형',
                  effectiveCode[2] === 'V' ? '말개그' : '몸개그',
                  effectiveCode[3] === 'B' ? '밝음' : '다크',
                ].map((label, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <span className="font-mono font-bold text-indigo-500 text-base">{effectiveCode[i]}</span>
                    <span className="text-[10px] text-gray-400 leading-none">{label}</span>
                  </div>
                ))}
              </div>
              <div className="text-2xl font-semibold text-gray-800">{nickname}</div>
            </div>
          </div>

          {/* 요약 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-100">
            <p className="text-center text-gray-800 leading-relaxed font-medium text-lg break-keep hyphens-auto whitespace-pre-line">
              {summary}
            </p>
          </div>
        </div>

        {/* 개그코드 분석(막대그래프) */}
        {displayScores && <AxisBarChart scores={displayScores} />}
        </div>
        {/* 이미지 캡처 영역 끝 */}

        {/* 탭: 강점/약점 | 개그 궁합 (막대 아래) */}
        {displayScores && <Tabs axisScores={displayScores} resultData={resultData} />}

        {/* 공유 섹션 */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 mb-5 border border-white/30">
          <p className="text-center text-sm font-medium text-gray-700 mb-3">
            결과를 공유해보세요!
          </p>

          {/* 이미지 저장 + 공유 버튼들 (한 줄) */}
          <div className="flex gap-2 justify-center items-center mb-4">
            <SaveImageButton targetRef={captureRef} fileName={`gag-code-${effectiveCode}`} />
            <ShareButtons data={shareData} />
          </div>

          {/* 액션 버튼들 (2x2 그리드) */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-medium transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              테스트 다시하기
            </Link>
            <Link
              href="/guide"
              className="flex items-center justify-center gap-1.5 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-medium transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              개그 코드 설명
            </Link>
            <Link
              href="/types"
              className="flex items-center justify-center gap-1.5 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-medium transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              전체 유형 보기
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-1.5 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-medium transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
              </svg>
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Tabs({ axisScores, resultData }: { axisScores: AxisScores | null; resultData: GagResult }) {
  const [active, setActive] = React.useState<'strengths' | 'compat'>('strengths');
  const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);

  const top3 = getTopCompatibleTypes(resultData.code);

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border shadow-sm transition ${
            active === 'strengths'
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent ring-2 ring-blue-200'
              : 'bg-white/90 text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => setActive('strengths')}
        >
          🔎 강점/약점
        </button>
        <button
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border shadow-sm transition ${
            active === 'compat'
              ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent ring-2 ring-pink-200'
              : 'bg-white/90 text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => setActive('compat')}
        >
          💞 개그 궁합
        </button>
      </div>

      {active === 'strengths' && axisScores && (
        <StrengthsWeaknesses
          scores={axisScores}
          customStrengths={resultData.strengths}
          customWeaknesses={resultData.weaknesses}
        />
      )}

      {active === 'compat' && (
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <span>💕</span>
            개그 궁합 분석
          </h3>

          {/* 핵심 짝궁 (기존) */}
          {resultData.bestMatch && resultData.worstMatch && (
            <>
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
              <div className="mb-5">
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
            </>
          )}

          {/* TOP 3 유형별 궁합 (계산 기반) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-1">
              <span>🎯</span>
              나와 잘 맞는 개그 유형 TOP 3
            </h4>
            <div className="flex flex-col gap-2">
              {top3.map(({ code, result, score }, i) => {
                const compat = getCompatibilityLabel(score);
                const isOpen = openAccordion === i;
                return (
                  <div key={code} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 bg-white/80 hover:bg-gray-50 transition text-left"
                      onClick={() => setOpenAccordion(isOpen ? null : i)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{compat.emoji}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-indigo-600 text-sm">{code}</span>
                            <span className="text-sm font-semibold text-gray-800">{result.nickname}</span>
                          </div>
                          <div className="text-xs text-gray-500">{compat.label} · {compat.desc}</div>
                        </div>
                      </div>
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border-t border-gray-100">
                        <p className="text-xs text-gray-700 leading-relaxed">{result.summary}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
