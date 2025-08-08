import React from "react";

export interface AxisScores {
  OI: number;
  NB: number; // Intuitive vs Abstract
  VP: number;
  BD: number;
}

type Suggestions = {
  strengths: string[];
  weaknesses: string[];
};

function getLean(value: number): "A" | "B" | "N" {
  const delta = value - 4; // negative => B측, positive => A측 (축 해석에 주의)
  if (Math.abs(delta) < 0.25) return "N"; // 거의 중립이면 제외
  return delta > 0 ? "A" : "B";
}

function buildSuggestions(scores: AxisScores): Suggestions {
  const result: Suggestions = { strengths: [], weaknesses: [] };

  // OI: A=Organized(>4), B=Improvised(<4)
  const oiLean = getLean(scores.OI);
  if (oiLean === "A") {
    result.strengths.push(
      "구조 설계가 탄탄해 흐름을 주도합니다",
      "콜백·태그 등 구성 장치를 안정적으로 운용합니다"
    );
    result.weaknesses.push(
      "돌발 상황에서 유연성이 떨어질 수 있습니다",
      "과한 준비로 타이밍을 놓칠 위험이 있습니다"
    );
  } else if (oiLean === "B") {
    result.strengths.push(
      "순간 센스와 받아치기가 뛰어납니다",
      "예상 밖 전환으로 장면을 살립니다"
    );
    result.weaknesses.push(
      "장기 구조나 복선 회수에 약할 수 있습니다",
      "마감 직전 부담·즉흥 과다로 품질 편차가 생길 수 있습니다"
    );
  }

  // NB: A=Intuitive(>4), B=Abstract(<4)
  const nbLean = getLean(scores.NB);
  if (nbLean === "A") {
    result.strengths.push(
      "상황 맥락과 공감 포인트를 잘 포착합니다",
      "현실적 디테일로 몰입을 만듭니다"
    );
    result.weaknesses.push(
      "아이디어의 참신도가 낮아 보일 수 있습니다",
      "메타/추상 장치 활용이 제한될 수 있습니다"
    );
  } else if (nbLean === "B") {
    result.strengths.push(
      "독특한 콘셉트·비유·역설을 잘 씁니다",
      "메타 유머로 새로움을 만듭니다"
    );
    result.weaknesses.push(
      "난해하게 느껴질 수 있습니다",
      "상황 맥락과 동떨어져 보일 위험이 있습니다"
    );
  }

  // VP: A=Verbal(>4), B=Physical(<4)
  const vpLean = getLean(scores.VP);
  if (vpLean === "A") {
    result.strengths.push(
      "워딩·타이밍 등 언어적 정밀도가 높습니다",
      "짧은 한 줄로 공기를 전환합니다"
    );
    result.weaknesses.push(
      "표정·몸짓 등 신체 표현 활용이 적을 수 있습니다",
      "설명 과다로 템포가 떨어질 수 있습니다"
    );
  } else if (vpLean === "B") {
    result.strengths.push(
      "표정·몸짓·동선으로 장면을 장악합니다",
      "말 없이도 의미를 전달합니다"
    );
    result.weaknesses.push(
      "언어적 정밀 타격이 약할 수 있습니다",
      "설명이 부족해 오해가 생길 수 있습니다"
    );
  }

  // BD: A=Bright(>4), B=Dark(<4)
  const bdLean = getLean(scores.BD);
  if (bdLean === "A") {
    result.strengths.push(
      "밝은 톤으로 분위기를 띄우고 연결합니다",
      "편하게 웃을 수 있는 장면을 만듭니다"
    );
    result.weaknesses.push(
      "무게감·여운이 부족해 보일 수 있습니다",
      "진지한 메시지와는 거리감이 생길 수 있습니다"
    );
  } else if (bdLean === "B") {
    result.strengths.push(
      "블랙유머·풍자로 강한 인상을 남깁니다",
      "여운과 통찰을 만들어냅니다"
    );
    result.weaknesses.push(
      "분위기가 무겁게 느껴질 수 있습니다",
      "반발·피로감을 유발할 위험이 있습니다"
    );
  }

  // 상위 6개만 노출 (중복 많으면 앞쪽에서 슬라이스)
  return {
    strengths: result.strengths.slice(0, 6),
    weaknesses: result.weaknesses.slice(0, 6),
  };
}

export default function StrengthsWeaknesses({ scores }: { scores: AxisScores }) {
  const { strengths, weaknesses } = buildSuggestions(scores);

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 강점 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span>💪</span>
            강점
          </h3>
          <ul className="space-y-3">
            {strengths.map((s, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✔</span>
                <span className="text-sm text-gray-700 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 약점 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span>⚠️</span>
            약점
          </h3>
          <ul className="space-y-3">
            {weaknesses.map((w, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">!</span>
                <span className="text-sm text-gray-700 leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


