import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Type data for OG image generation (subset of results.ts)
const typeData: Record<string, { nickname: string; summary: string }> = {
  ONVB: { nickname: "토크마스터", summary: "흐름과 리듬을 설계해 장면을 이끄는 스타일" },
  ONPB: { nickname: "짤 제조기", summary: "표정·몸짓·소품으로 밈을 만드는 스타일" },
  INVB: { nickname: "국민MC", summary: "타이밍 좋게 한마디를 얹는 센스형 스타일" },
  INPB: { nickname: "리액션 장인", summary: "온몸으로 반응하는 즉흥형 스타일" },
  ONVD: { nickname: "개그 비평가", summary: "메시지와 논리가 있는 풍자 스타일" },
  ONPD: { nickname: "패러디 장인", summary: "현실을 캐릭터화해 풍자하는 스타일" },
  INVD: { nickname: "디스 장인", summary: "날카로운 관찰로 정곡을 찌르는 스타일" },
  INPD: { nickname: "불편한 익살꾼", summary: "웃음과 슬픔 사이를 넘나드는 스타일" },
  OBVB: { nickname: "꽁트 장인", summary: "치밀하게 기획된 설정형 유머 스타일" },
  OBVD: { nickname: "블랙 스탠드업 코미디언", summary: "설계된 현실 비판 블랙 유머 스타일" },
  OBPB: { nickname: "컨셉 광대", summary: "시각적 퍼포먼스와 연출의 기획형 스타일" },
  OBPD: { nickname: "병맛 광대", summary: "감동과 웃음이 충돌하는 연출형 스타일" },
  IBVB: { nickname: "천진난만 꽃밭", summary: "갑작스런 병맛 발언의 타이밍형 스타일" },
  IBVD: { nickname: "엉뚱한 맥커터", summary: "병맛·풍자·혼돈이 동시에 터지는 스타일" },
  IBPB: { nickname: "괴짜 몸개그 장인", summary: "몸으로 상황을 해체하는 퍼포먼스 스타일" },
  IBPD: { nickname: "무표정 광대", summary: "감정·병맛·풍자가 한꺼번에 터지는 스타일" },
};

// Category colors based on type groups
function getCategoryInfo(code: string): { gradient: string; label: string; emoji: string; accentColor: string } {
  // 분위기메이커형: ON** or IN**  (first two letters have N)
  // 팩폭형: ON*D or IN*D (N + D)
  // Actually, based on the data grouping:
  // 💛 분위기메이커형: ONVB, ONPB, INVB, INPB (N + B)
  // ❤️ 팩폭형: ONVD, ONPD, INVD, INPD (N + D)
  // 💙 컨셉형: OBVB, OBVD, OBPB, OBPD (OB)
  // 💜 예측불가형: IBVB, IBVD, IBPB, IBPD (IB)

  const secondChar = code[1]; // N or B
  const firstChar = code[0]; // O or I
  const fourthChar = code[3]; // B or D

  if (secondChar === "B" && firstChar === "I") {
    // 💜 예측불가형 (IB**)
    return {
      gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
      label: "예측불가형",
      emoji: "💜",
      accentColor: "#c084fc",
    };
  }
  if (secondChar === "B" && firstChar === "O") {
    // 💙 컨셉형 (OB**)
    return {
      gradient: "linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)",
      label: "컨셉형",
      emoji: "💙",
      accentColor: "#60a5fa",
    };
  }
  if (secondChar === "N" && fourthChar === "D") {
    // ❤️ 팩폭형 (*N*D)
    return {
      gradient: "linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%)",
      label: "팩폭형",
      emoji: "❤️",
      accentColor: "#f87171",
    };
  }
  // 💛 분위기메이커형 (*N*B)
  return {
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)",
    label: "분위기메이커형",
    emoji: "💛",
    accentColor: "#fbbf24",
  };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code") || "ONVB";

  const data = typeData[code] || typeData["ONVB"];
  const validCode = typeData[code] ? code : "ONVB";
  const category = getCategoryInfo(validCode);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: category.gradient,
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "100px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            display: "flex",
          }}
        />

        {/* Main content card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.25)",
            borderRadius: "32px",
            padding: "48px 64px",
            maxWidth: "1000px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {/* Top label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <span style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", letterSpacing: "2px" }}>
              개그유형 테스트
            </span>
          </div>

          {/* Category badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "20px",
              padding: "8px 24px",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "18px" }}>{category.emoji}</span>
            <span style={{ fontSize: "18px", color: "white", fontWeight: 600 }}>
              {category.label}
            </span>
          </div>

          {/* Type code */}
          <div
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "12px",
              lineHeight: 1,
              marginBottom: "16px",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              display: "flex",
            }}
          >
            {validCode}
          </div>

          {/* Divider line */}
          <div
            style={{
              width: "120px",
              height: "4px",
              background: category.accentColor,
              borderRadius: "2px",
              marginBottom: "20px",
              display: "flex",
            }}
          />

          {/* Nickname */}
          <div
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "white",
              marginBottom: "16px",
              display: "flex",
            }}
          >
            {data.nickname}
          </div>

          {/* Summary */}
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: "700px",
              display: "flex",
            }}
          >
            {data.summary}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)" }}>
            humor-test.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
