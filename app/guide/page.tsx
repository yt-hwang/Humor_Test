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
      "웃음을 위해 상황·대사·타이밍을 미리 설계해 두는 스타일입니다.",
      "콜백과 복선, 반복 장치 같은 ‘구조적 기술’로 매번 비슷한 질감의 웃음을 재현합니다.",
      "콩트·드라마형 개그처럼 장면을 쌓아 올리는 포맷에 강하며, 팀플에서도 역할 분담이 분명합니다.",
      "완성도·디테일·리듬을 중시해 ‘준비의 힘’으로 안정적인 웃음을 만듭니다."
    ]},
    right: { code: "I", ko: "Improvised (즉흥적)", desc: [
      "현장에서 포착한 순간 감정과 센스로 웃음을 터트리는 스타일입니다.",
      "예상치 못한 반응·받아치기·타이밍으로 ‘지금 여기’의 공기를 뒤집습니다.",
      "리액션·상황극·패러디 같은 유연한 변주에 강하며, 돌발 변수조차 소재가 됩니다.",
      "양과 변주로 흐름을 이끌며, 준비보다 생동감과 반응성을 가치로 둡니다."
    ]},
    whatItJudges: "개그가 사전 설계 중심인지, 현장 즉흥 중심인지의 차이"
  },
  {
    key: "",
    titleKo: "개그의 주제/상황성",
    titleEn: "Contextuality",
    gradient: "from-purple-400 to-violet-400",
    left: { code: "N", ko: "Intuitive (직관적)", desc: [
      "많은 사람이 바로 공감할 수 있는 현실적 맥락 위에서 웃음을 만듭니다.",
      "상황·인물·관계의 디테일이 명확해, 보자마자 ‘아 저거!’ 하고 터지는 즉시성의 매력이 있습니다.",
      "현실 관찰과 생활 밀착형 포인트가 강점이며, 설명 없이도 이해되는 명료함이 돋보입니다."
    ]},
    right: { code: "B", ko: "Abstract (추상적/엉뚱)", desc: [
      "맥락을 비틀거나 파괴해 낯선 연결로 웃음을 만듭니다.",
      "비논리적 전환·병맛·아이러니를 활용해, 곱씹을수록 더 재미있는 ‘지연형 웃음’을 제공합니다.",
      "직관성은 낮을 수 있지만 세계관적 상상력과 은유·비유에서 오는 고유의 쾌감이 있습니다."
    ]},
    whatItJudges: "개그가 현실 맥락에 기대는지, 맥락을 깨고 추상으로 도약하는지"
  },
  {
    key: "",
    titleKo: "개그의 전달 방식",
    titleEn: "Delivery Mode",
    gradient: "from-yellow-400 to-orange-400",
    left: { code: "V", ko: "Verbal (언어적)", desc: [
      "단어 선택·말맛·리듬·한 줄 직설 같은 언어의 기술로 웃음을 설계합니다.",
      "비유·역설·논리적 비약·콜백 같은 장치를 통해 ‘말로 장면을 바꾸는 힘’을 보여줍니다.",
      "짧은 멘트 하나로 공기를 전환할 수 있는 임팩트가 특징입니다."
    ]},
    right: { code: "P", ko: "Physical/Expressive (비언어적)", desc: [
      "표정·몸짓·동선·소리·의상·효과음 등 비언어 요소로 웃음을 만듭니다.",
      "대사가 없어도 메시지가 전달되며, 이미지와 퍼포먼스의 직관성이 강점입니다.",
      "숏폼·무언극·상황 퍼포먼스에 특히 적합합니다."
    ]},
    whatItJudges: "주된 전달 수단이 말(언어)인지, 표정과 몸(비언어)인지"
  },
  {
    key: "",
    titleKo: "개그의 분위기",
    titleEn: "Mood",
    gradient: "from-red-400 to-pink-400",
    left: { code: "B", ko: "Bright (밝음)", desc: [
      "상대를 해치지 않는 유쾌함과 따뜻한 정서를 중심에 둡니다.",
      "자신을 낮추는 자학, 귀여운 과장, 감성적 포인트로 모두가 편안히 웃을 수 있게 합니다.",
      "밝은 에너지로 공간의 긴장을 풀고 분위기를 띄우는 데 강합니다."
    ]},
    right: { code: "D", ko: "Dark (어두움)", desc: [
      "풍자·아이러니·조롱·블랙유머처럼 현실을 날카롭게 비트는 정서를 선호합니다.",
      "웃음 뒤에 생각거리를 남기며, 불편함과 재미의 경계를 오갑니다.",
      "강도가 높아질수록 피로감이 생길 수 있어, 강약 조절과 맥락이 중요합니다."
    ]},
    whatItJudges: "정서적 톤이 밝고 친화적인지, 혹은 풍자적이고 비판적인지"
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


