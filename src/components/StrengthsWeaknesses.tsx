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
      "미리 준비를 잘해요. 흐름이 안정적이에요",
      "되풀이 포인트(콜백) 같은 장치를 깔끔하게 써요"
    );
    result.weaknesses.push(
      "예상 밖 상황에 조금 굳을 수 있어요",
      "준비에 신경 쓰다 타이밍을 놓칠 때가 있어요"
    );
  } else if (oiLean === "B") {
    result.strengths.push(
      "순간 센스가 좋아요. 받아치기가 빨라요",
      "돌발 전환으로 분위기를 살려요"
    );
    result.weaknesses.push(
      "길게 쌓는 이야기엔 힘이 빠질 수 있어요",
      "막판에 몰아서 하다 퀄리티가 들쑥날쑥할 수 있어요"
    );
  }

  // NB: A=Intuitive(>4), B=Abstract(<4)
  const nbLean = getLean(scores.NB);
  if (nbLean === "A") {
    result.strengths.push(
      "상황을 빨리 읽고 공감 포인트를 잘 잡아요",
      "현실적인 디테일로 몰입을 만들어요"
    );
    result.weaknesses.push(
      "아이디어가 평범해 보일 때가 있어요",
      "추상/메타 장치는 덜 쓰는 편이에요"
    );
  } else if (nbLean === "B") {
    result.strengths.push(
      "독특한 발상과 비유가 많아요",
      "메타 유머로 새로움을 잘 만들어요"
    );
    result.weaknesses.push(
      "조금 어렵게 느껴질 수 있어요. 설명 한 줄이 도움이 돼요",
      "상황과 동떨어져 보일 때가 있어요"
    );
  }

  // VP: A=Verbal(>4), B=Physical(<4)
  const vpLean = getLean(scores.VP);
  if (vpLean === "A") {
    result.strengths.push(
      "워딩·타이밍이 정확해요",
      "짧은 한마디로 분위기를 바꿔요"
    );
    result.weaknesses.push(
      "표정·몸짓 같은 신체 표현을 덜 쓰는 편이에요",
      "말이 길어지면 템포가 떨어질 수 있어요"
    );
  } else if (vpLean === "B") {
    result.strengths.push(
      "표정·몸짓·동선으로 장면을 살려요",
      "말 없이도 전달력이 좋아요"
    );
    result.weaknesses.push(
      "말맛으로 치는 한방이 약할 수 있어요",
      "설명이 부족하면 오해가 생길 수 있어요"
    );
  }

  // BD: A=Bright(>4), B=Dark(<4)
  const bdLean = getLean(scores.BD);
  if (bdLean === "A") {
    result.strengths.push(
      "밝은 톤으로 분위기를 금방 띄워요",
      "누구나 편하게 웃을 수 있어요"
    );
    result.weaknesses.push(
      "여운이 적어 가볍게 느껴질 수 있어요",
      "진지한 메시지와는 거리가 있어요"
    );
  } else if (bdLean === "B") {
    result.strengths.push(
      "블랙유머·풍자로 임팩트가 커요",
      "웃음 뒤에 생각거리를 남겨요"
    );
    result.weaknesses.push(
      "톤이 묵직해 부담스럽게 느껴질 수 있어요",
      "피로감을 줄 수 있으니 강약 조절이 필요해요"
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


