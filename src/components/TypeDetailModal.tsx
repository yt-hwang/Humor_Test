"use client";

import React from "react";
import { gagResults } from "../data/results";
import StrengthsWeaknesses, { AxisScores } from "./StrengthsWeaknesses";
import AxisBarChart from "./AxisBarChart";

function codeToScores(code: string): AxisScores {
  // 간단히 성향만 반영(>4 or <4)하기 위해 5/3으로 매핑
  const letter = (i: number) => code[i] || "";
  return {
    OI: letter(0) === "O" ? 5 : 3,
    NB: letter(1) === "N" ? 5 : 3,
    VP: letter(2) === "V" ? 5 : 3,
    BD: letter(3) === "B" ? 5 : 3,
  };
}

export default function TypeDetailModal({
  open,
  onClose,
  typeCode,
}: {
  open: boolean;
  onClose: () => void;
  typeCode: string;
}) {
  if (!open) return null;
  const data = gagResults[typeCode];
  if (!data) return null;

  const scores = codeToScores(typeCode);
  const [tab, setTab] = React.useState<'strengths' | 'compat'>('strengths');

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/40">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* 헤더 */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-lg bg-blue-600 text-white font-mono text-sm">{typeCode}</div>
            <div className="font-semibold">{data.nickname}</div>
          </div>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">✕</button>
        </div>

        <div className="p-4">
          {/* 탭 버튼 */}
          <div className="flex gap-2 mb-3">
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${tab==='strengths'?'bg-blue-600 text-white border-blue-600':'bg-white text-gray-700 border-gray-300'}`}
              onClick={()=>setTab('strengths')}
            >강점/약점</button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${tab==='compat'?'bg-purple-600 text-white border-purple-600':'bg-white text-gray-700 border-gray-300'}`}
              onClick={()=>setTab('compat')}
            >개그 궁합</button>
          </div>

          {/* 공통: 축 막대 */}
          <AxisBarChart scores={scores} />

          {tab==='strengths' && (
            <StrengthsWeaknesses scores={scores} />
          )}

          {tab==='compat' && data.bestMatch && data.worstMatch && (
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-2 border border-white/30">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
                <span>💕</span>
                개그 궁합 분석
              </h3>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="text-sm font-semibold text-gray-700">최상의 짝궁</span>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="text-green-700 font-bold mb-1">{gagResults[data.bestMatch]?.code} - {gagResults[data.bestMatch]?.nickname}</div>
                  <p className="text-xs text-gray-600">{data.bestMatchReason}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-sm font-semibold text-gray-700">최악의 짝궁</span>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <div className="text-red-700 font-bold mb-1">{gagResults[data.worstMatch || '']?.code} - {gagResults[data.worstMatch || '']?.nickname}</div>
                  <p className="text-xs text-gray-600">{data.worstMatchReason}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t flex justify-end gap-2">
          <a
            href={`/result?code=${typeCode}&nickname=${encodeURIComponent(data.nickname)}&summary=${encodeURIComponent(data.summary)}&examples=${encodeURIComponent(data.examples.join(','))}`}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold"
          >결과 페이지 열기</a>
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-semibold">닫기</button>
        </div>
      </div>
    </div>
  );
}


