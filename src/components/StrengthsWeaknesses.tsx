import React from "react";

export interface AxisScores {
  OI: number;
  NB: number;
  VP: number;
  BD: number;
}

type Suggestions = { strengths: string[]; weaknesses: string[] };

function getLean(value: number): "A" | "B" | "N" {
  const delta = value - 4;
  if (Math.abs(delta) < 0.25) return "N";
  return delta > 0 ? "A" : "B";
}

function buildSuggestions(scores: AxisScores): Suggestions {
  const result: Suggestions = { strengths: [], weaknesses: [] };
  const isNeutralAll = scores.OI === 4 && scores.NB === 4 && scores.VP === 4 && scores.BD === 4;

  if (isNeutralAll) {
    return {
      strengths: [
        "공감 리액션으로 분위기를 잘 살려요",
        "표정·제스처로 웃음을 크게 만들어줘요",
        "즉흥 상황에도 자연스럽게 대응해요",
        "남의 개그를 잘 받아서 더 재미있게 만들어요",
        "진정성 있는 반응으로 신뢰를 얻어요",
        "어떤 스타일과도 궁합이 좋아요",
      ],
      weaknesses: [
        "길게 설계하는 플롯·구조는 다소 약해요",
        "분석·메시지 중심의 무거운 톤은 힘들 수 있어요",
        "즉흥이 과해지면 산만해 보일 수 있어요",
        "비언어에 치우치면 설명이 부족하게 느껴질 때가 있어요",
        "혼자 주도하는 콘텐츠에선 소재 발굴이 고민될 수 있어요",
      ],
    };
  }

  const oiLean = getLean(scores.OI);
  if (oiLean === "A") {
    result.strengths.push("미리 준비를 잘해요. 흐름이 안정적이에요", "되풀이 포인트 같은 장치를 깔끔하게 써요");
    result.weaknesses.push("예상 밖 상황에 조금 굳을 수 있어요", "준비에 신경 쓰다 타이밍을 놓칠 때가 있어요");
  } else if (oiLean === "B") {
    result.strengths.push("순간 센스가 좋아요. 받아치기가 빨라요", "돌발 전환으로 분위기를 살려요");
    result.weaknesses.push("길게 쌓는 이야기엔 힘이 빠질 수 있어요", "막판에 몰아서 하다 퀄리티가 들쑥날쑥할 수 있어요");
  }

  const nbLean = getLean(scores.NB);
  if (nbLean === "A") {
    result.strengths.push("상황을 빨리 읽고 공감 포인트를 잘 잡아요", "현실적인 디테일로 몰입을 만들어요");
    result.weaknesses.push("아이디어가 평범해 보일 때가 있어요", "추상적인 비유는 덜 쓰는 편이에요");
  } else if (nbLean === "B") {
    result.strengths.push("독특한 발상과 비유가 많아요", "엉뚱한 연결로 새로움을 잘 만들어요");
    result.weaknesses.push("조금 어렵게 느껴질 수 있어요", "상황과 동떨어져 보일 때가 있어요");
  }

  const vpLean = getLean(scores.VP);
  if (vpLean === "A") {
    result.strengths.push("말투와 타이밍이 정확해요", "짧은 한마디로 분위기를 바꿔요");
    result.weaknesses.push("표정·몸짓 같은 신체 표현을 덜 쓰는 편이에요", "말이 길어지면 리듬이 느려질 수 있어요");
  } else if (vpLean === "B") {
    result.strengths.push("표정·몸짓·동선으로 장면을 살려요", "말 없이도 전달력이 좋아요");
    result.weaknesses.push("말맛으로 치는 한방이 약할 수 있어요", "설명이 부족하면 오해가 생길 수 있어요");
  }

  const bdLean = getLean(scores.BD);
  if (bdLean === "A") {
    result.strengths.push("밝은 톤으로 분위기를 금방 띄워요", "누구나 편하게 웃을 수 있어요");
    result.weaknesses.push("여운이 적어 가볍게 느껴질 수 있어요", "진지한 메시지와는 거리가 있어요");
  } else if (bdLean === "B") {
    result.strengths.push("블랙유머·풍자로 한 방의 힘이 커요", "웃음 뒤에 생각거리를 남겨요");
    result.weaknesses.push("톤이 묵직해 부담스럽게 느껴질 수 있어요", "강약 조절이 중요해요");
  }

  return {
    strengths: result.strengths.slice(0, 6),
    weaknesses: result.weaknesses.slice(0, 6),
  };
}

export default function StrengthsWeaknesses({
  scores,
  customStrengths,
  customWeaknesses,
}: {
  scores: AxisScores;
  customStrengths?: string[];
  customWeaknesses?: string[];
}) {
  const built = buildSuggestions(scores);
  const strengths = (customStrengths && customStrengths.length > 0) ? customStrengths : built.strengths;
  const weaknesses = (customWeaknesses && customWeaknesses.length > 0) ? customWeaknesses : built.weaknesses;

  return (
    <div className="s-card p-6 mb-4 fu">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Strengths */}
        <div>
          <h3
            className="text-xs font-bold mb-4 uppercase tracking-widest flex items-center gap-2"
            style={{ color: 'var(--green)' }}
          >
            <span>◆</span> 강점
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {strengths.map((s, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--green)', fontSize: '0.6rem', marginTop: '0.35rem', flexShrink: 0 }}>●</span>
                <span style={{ color: 'var(--text)', fontSize: '0.875rem', lineHeight: 1.55 }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div>
          <h3
            className="text-xs font-bold mb-4 uppercase tracking-widest flex items-center gap-2"
            style={{ color: 'var(--red)' }}
          >
            <span>◆</span> 약점
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {weaknesses.map((w, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: 'var(--red)', fontSize: '0.6rem', marginTop: '0.35rem', flexShrink: 0 }}>●</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.55 }}>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
