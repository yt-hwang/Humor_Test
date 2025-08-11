"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { recordVisit } from "../../src/utils/analytics";

const AXIS = [
  {
    key: "",
    titleKo: "개그의 준비",
    titleEn: "Preparedness",
    gradient: "from-blue-400 to-indigo-400",
    left: { code: "O", ko: "Organized (짜여진)", desc: [
      "상황·대사·타이밍이 미리 설계된 개그를 선호해요.",
      "콜백·복선·반복 장치처럼 구조가 느껴지는 포인트에 만족감을 느껴요.",
      "콩트·드라마형 같이 이야기 흐름이 있는 포맷을 특히 좋아요.",
      "완성도·디테일·리듬이 살아있는 안정적인 웃음을 찾는 편이에요."
    ]},
    right: { code: "I", ko: "Improvised (즉흥적)", desc: [
      "현장에서 즉흥적으로 터지는 한마디·리액션에 크게 웃는 편이에요.",
      "예상 밖 받아치기와 타이밍 반전에서 쾌감을 느껴요.",
      "상황극·패러디처럼 유연하게 변주되는 흐름을 좋아해요.",
      "준비된 느낌보다 생동감과 반응성이 있는 웃음을 더 선호해요."
    ]},
    whatItJudges: "개그의 준비 여부에 대한 취향을 설명합니다. 사전에 설계된 개그와 현장에서 즉흥적으로 이루어지는 개그 중 어느 쪽을 더 선호하는지 알아봅니다."
  },
  {
    key: "",
    titleKo: "개그의 맥락",
    titleEn: "Context",
    gradient: "from-purple-400 to-violet-400",
    left: { code: "N", ko: "Intuitive (직관적)", desc: [
      "현실적인 맥락과 생활 디테일이 살아있는 개그를 좋아해요.",
      "설명 없이도 바로 이해되고 ‘아 저거!’ 하며 터지는 포인트에 끌려요.",
      "상황·인물·관계가 명확히 드러나는 장면에 쉽게 몰입해요."
    ]},
    right: { code: "B", ko: "Abstract (추상적/엉뚱)", desc: [
      "맥락을 비틀거나 파괴하는 엉뚱한 연결에서 오는 웃음을 좋아해요.",
      "비논리적 전환·병맛·아이러니를 곱씹을수록 더 재미있게 느껴요.",
      "직관성은 낮아도 세계관적 상상력과 은유·비유의 맛을 즐기는 편이에요."
    ]},
    whatItJudges: "개그의 맥락을을 설명합니다. 현실적 맥락에서 빠르게 공감을 얻는 개그와 맥락을 깨고 허를 찌르는는 개그 중 어느 쪽에 더 끌리는지 알아봅니다."
  },
  {
    key: "",
    titleKo: "개그의 전달 방식",
    titleEn: "Delivery Mode",
    gradient: "from-yellow-400 to-orange-400",
    left: { code: "V", ko: "Verbal (언어적)", desc: [
      "말맛·리듬·한 줄 직설 같은 언어의 기술에서 오는 웃음을 좋아해요.",
      "비유·역설·논리적 비약·콜백 같은 장치를 발견하는 재미가 커요.",
      "짧은 멘트 하나로 공기를 바꾸는 순간에 특히 쾌감을 느껴요."
    ]},
    right: { code: "P", ko: "Physical/Expressive (비언어적)", desc: [
      "표정·몸짓·동선과 소리(목소리 톤·박자)·의상·효과음 등 비언어 표현을 즐겨요.",
      "말이 없어도 장면이 전달되는 시각적 퍼포먼스가 취향이에요.",
      "숏폼·무언극·상황 퍼포먼스처럼 직관적인 장면에 쉽게 반응해요."
    ]},
    whatItJudges: "개그의 전달 방식 취향을 설명합니다. 말(언어) 중심과 표정·몸·소리 같은 비언어 중심 중 어느 쪽이 더 취향에 맞는지 알아봅니다."
  },
  {
    key: "",
    titleKo: "개그의 주제",
    titleEn: "Theme",
    gradient: "from-red-400 to-pink-400",
    left: { code: "B", ko: "Bright (밝음)", desc: [
      "일상·친화·자기비하·감정 공감 같은 편안하고 긍정적인 주제를 좋아해요.",
      "누구나 가볍게 즐길 수 있는 에피소드형 이야기에서 미소가 먼저 나와요.",
      "유쾌함과 온기 속에 작은 반전과 재치를 곁들인 톤을 선호해요."
    ]},
    right: { code: "D", ko: "Dark (어두움)", desc: [
      "풍자·비판·아이러니·블랙코미디처럼 날카로운 주제에 끌려요.",
      "사회·권력·관습을 비트는 질문에서 오는 긴장과 웃음을 즐겨요.",
      "메시지의 강도와 수위 조절이 살아있는 밀도 높은 이야기의 맛을 좋아해요."
    ]},
    whatItJudges: "개그의 주제 취향을 설명합니다. 밝고 친화적인 주제와 풍자적·비판적인 주제 중 어떤 톤의 이야기에 더 끌리는지 알아봅니다."
  }
];

export default function GuidePage() {
  const router = useRouter();
  useEffect(() => {
    recordVisit("/guide");
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden p-4">
      {/* 배경 장식 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 blur-lg animate-bounce" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium mb-4">
            <span>ℹ️</span>
            <span>개그 코드 설명</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">개그 코드 설명</h1>
          <p className="text-gray-600">아래의 네 가지 기준으로 본인의 유머 코드를 이해해보세요.</p>
        </div>

        {/* 축 설명 카드 */}
        <div className="space-y-6">
          {AXIS.map((axis) => (
            <section key={axis.key} className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{axis.titleKo} <span className="text-gray-400">/ {axis.titleEn}</span></h2>
                  <p className="text-sm text-gray-600 mt-1">{axis.whatItJudges}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left side */}
                <div className="rounded-2xl border border-white/40 bg-white/60 p-4">
                  <div className={`inline-flex items-center gap-2 text-white text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${axis.gradient} mb-3`}>
                    <span className="font-mono">{axis.left.code}</span>
                    <span>{axis.left.ko}</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {axis.left.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
                {/* Right side */}
                <div className="rounded-2xl border border-white/40 bg-white/60 p-4">
                  <div className={`inline-flex items-center gap-2 text-white text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${axis.gradient} mb-3`}>
                    <span className="font-mono">{axis.right.code}</span>
                    <span>{axis.right.ko}</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {axis.right.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* 하단 액션 */}
        <div className="text-center mt-10 flex items-center justify-center gap-3">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl px-5 py-3 shadow hover:opacity-95"
          >
            결과 페이지로 돌아가기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <Link href="/types" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/30">
            전체 유형 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>
    </main>
  );
}


