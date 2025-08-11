"use client";

import { useEffect } from "react";
import Link from "next/link";
import { recordVisit } from "../../src/utils/analytics";

const AXIS = [
  {
    key: "OI",
    titleKo: "개그의 준비",
    titleEn: "Preparedness",
    gradient: "from-blue-400 to-indigo-400",
    left: { code: "O", ko: "Organized (짜여진)", desc: [
      "대본, 연출, 타이밍까지 계획된 개그",
      "반복적으로 같은 웃음을 유도할 수 있음",
      "콩트, 드라마형 개그 등",
      "질적인 개그에 더 중점을 두는 경향"
    ]},
    right: { code: "I", ko: "Improvised (즉흥적)", desc: [
      "현장 센스·상황 대처로 웃음을 유발",
      "리액션·돌발 상황에 강함",
      "무한도전/리얼 버라이어티/상황극/패러디",
      "양으로 승부를 보는 경향"
    ]},
    whatItJudges: "개그가 얼마나 사전에 준비되었는지, 대본 중심인지 또는 즉석에서 이루어지는지"
  },
  {
    key: "NB",
    titleKo: "개그의 주제/상황성",
    titleEn: "Contextuality",
    gradient: "from-purple-400 to-violet-400",
    left: { code: "N", ko: "Intuitive (직관적)", desc: [
      "현실에서 쉽게 겪을 수 있는 상황 중심",
      "공감되는 맥락 위에서 웃김",
      "딱 보는 순간 웃기고 명확함"
    ]},
    right: { code: "B", ko: "Abstract (추상적/엉뚱)", desc: [
      "맥락 파괴·비논리적 전환 등 병맛",
      "현실감 없는 전개로 비약적",
      "곱씹어야 웃기는 ‘고차원’ 성향"
    ]},
    whatItJudges: "개그가 상황에 맞는지, 아니면 상황과 상관없이 비논리적/비약적인지"
  },
  {
    key: "VP",
    titleKo: "개그의 전달 방식",
    titleEn: "Delivery Mode",
    gradient: "from-yellow-400 to-orange-400",
    left: { code: "V", ko: "Verbal (언어적)", desc: [
      "말장난·언어유희·논리적 비약으로 웃김",
      "대사·카피·한 줄 직설의 힘"
    ]},
    right: { code: "P", ko: "Physical/Expressive (비언어적)", desc: [
      "표정·몸짓·소리·의상·효과음 등",
      "말 없이도 전달되는 퍼포먼스 중심"
    ]},
    whatItJudges: "웃음을 유발하는 주요 수단이 언어 중심인지, 비언어적 표현 중심인지"
  },
  {
    key: "BD",
    titleKo: "개그의 분위기",
    titleEn: "Mood",
    gradient: "from-red-400 to-pink-400",
    left: { code: "B", ko: "Bright (밝음)", desc: [
      "긍정·겸손·친화·감성 중심",
      "남을 해치지 않는 유쾌함, 자학 개그",
      "누구나 편하게 웃는 분위기"
    ]},
    right: { code: "D", ko: "Dark (어두움)", desc: [
      "부정·비판·풍자·블랙코미디",
      "조롱/사회 비판 등 묵직한 톤",
      "웃음 뒤 생각거리를 남김"
    ]},
    whatItJudges: "개그의 정서적 분위기가 밝고 친화적인지, 풍자적이고 비판적인지"
  }
];

export default function GuidePage() {
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
            <span>축(axes) 설명</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">OI · NB · VP · BD는 무엇을 의미하나요?</h1>
          <p className="text-gray-600">각 알파벳은 축의 어느 쪽 성향이 강한지 나타내며, 색감도 사이트 전반에서 일관되게 사용됩니다.</p>
        </div>

        {/* 색상 가이드 */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6 mb-8">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">색상 가이드</h2>
            <p className="text-gray-600 text-sm">축 전반에 걸쳐 동일한 의미로 사용됩니다.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-white/40">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400" />
              <div>
                <div className="text-sm font-semibold text-gray-800">💙 컨셉형</div>
                <div className="text-xs text-gray-500">세계관·설정·구조 중심의 색</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-white/40">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-400 to-violet-400" />
              <div>
                <div className="text-sm font-semibold text-gray-800">💜 예측불가형</div>
                <div className="text-xs text-gray-500">즉흥·혼돈·비약의 색</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-white/40">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400" />
              <div>
                <div className="text-sm font-semibold text-gray-800">💛 분위기메이커형</div>
                <div className="text-xs text-gray-500">표정·몸짓·현장 에너지의 색</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-white/40">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-400 to-pink-400" />
              <div>
                <div className="text-sm font-semibold text-gray-800">❤️ 팩폭형</div>
                <div className="text-xs text-gray-500">풍자·비판·블랙유머의 색</div>
              </div>
            </div>
          </div>
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
                <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${axis.gradient} text-white font-mono text-sm shadow`}>{axis.key}</div>
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
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/30">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            메인으로
          </Link>
          <Link href="/types" className="inline-flex items-center gap-2 text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl px-5 py-3 shadow">
            유형 전체보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>
    </main>
  );
}


