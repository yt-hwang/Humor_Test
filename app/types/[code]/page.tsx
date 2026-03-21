"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { gagResults, getTopCompatibleTypes, getCompatibilityLabel } from "../../../src/data/results";
import { gagResultsEn } from "../../../src/data/results.en";
import { recordVisit } from "../../../src/utils/analytics";
import { useLang } from "../../../src/context/LangContext";
import { t } from "../../../src/data/ui";
import Footer from "../../../src/components/Footer";
import HumorPhilosophy from "../../../src/components/HumorPhilosophy";
import SocialDynamics from "../../../src/components/SocialDynamics";
import GrowthTips from "../../../src/components/GrowthTips";
import MBTITypeExpression from "../../../src/components/MBTITypeExpression";

// 카테고리 정보
const categories = {
  NB: { nameKo: "분위기메이커형", nameEn: "Mood Makers", color: "from-yellow-400 to-orange-400", emoji: "🌟" },
  ND: { nameKo: "팩폭형", nameEn: "Truth Bombers", color: "from-red-400 to-pink-400", emoji: "💣" },
  OB: { nameKo: "컨셉형", nameEn: "Concept Creators", color: "from-blue-400 to-indigo-400", emoji: "🎨" },
  IB: { nameKo: "예측불가형", nameEn: "Wildcards", color: "from-purple-400 to-violet-400", emoji: "🎲" },
};

function getCategory(code: string) {
  const n = code[1]; // N or B
  const b = code[3]; // B or D
  if (n === "N" && b === "B") return categories.NB;
  if (n === "N" && b === "D") return categories.ND;
  if (n === "B" && code[0] === "O") return categories.OB;
  return categories.IB;
}

// 축 설명
const axisInfo = {
  O: { ko: "준비형 (Organized)", en: "Organized", descKo: "사전에 설계된 유머를 선호", descEn: "Prefers pre-planned humor" },
  I: { ko: "즉흥형 (Improvised)", en: "Improvised", descKo: "현장에서 터지는 유머를 선호", descEn: "Prefers spontaneous humor" },
  N: { ko: "직관형 (Intuitive)", en: "Intuitive", descKo: "현실 공감 기반 유머", descEn: "Reality-based relatable humor" },
  B: { ko: "추상형 (Abstract)", en: "Abstract", descKo: "맥락을 비트는 엉뚱한 유머", descEn: "Context-breaking absurd humor" },
  V: { ko: "언어형 (Verbal)", en: "Verbal", descKo: "말과 언어 중심 유머", descEn: "Word and language-based humor" },
  P: { ko: "표현형 (Physical)", en: "Physical", descKo: "표정, 몸짓 중심 유머", descEn: "Expression and gesture-based humor" },
  // B/D for theme - using different keys to avoid confusion
  Bright: { ko: "밝음 (Bright)", en: "Bright", descKo: "유쾌하고 긍정적인 톤", descEn: "Cheerful and positive tone" },
  Dark: { ko: "다크 (Dark)", en: "Dark", descKo: "풍자적이고 날카로운 톤", descEn: "Satirical and sharp tone" },
};

export default function TypeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { lang } = useLang();
  const code = (params.code as string)?.toUpperCase() || "";

  const results = lang === "en" ? gagResultsEn : gagResults;
  const typeData = results[code];
  const category = getCategory(code);

  useEffect(() => {
    recordVisit(`/types/${code}`);
  }, [code]);

  if (!typeData) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {lang === "en" ? "Type not found" : "유형을 찾을 수 없습니다"}
          </h1>
          <Link href="/types" className="text-blue-600 hover:underline">
            {lang === "en" ? "View all types" : "전체 유형 보기"}
          </Link>
        </div>
      </main>
    );
  }

  const top3 = getTopCompatibleTypes(code);
  const codeChars = code.split("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden p-4">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            <span>{category.emoji}</span>
            <span>{lang === "en" ? category.nameEn : category.nameKo}</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-3">
            <span className={`inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-mono text-2xl font-bold shadow-lg`}>
              {code}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 break-keep">
            {typeData.nickname}
          </h1>
        </div>

        {/* Code Breakdown */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>🔤</span>
            {lang === "en" ? "What Your Code Means" : "코드의 의미"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {codeChars.map((char, i) => {
              let info;
              if (i === 0) info = axisInfo[char as "O" | "I"];
              else if (i === 1) info = axisInfo[char as "N" | "B"];
              else if (i === 2) info = axisInfo[char as "V" | "P"];
              else info = char === "B" ? axisInfo.Bright : axisInfo.Dark;

              return (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-100 text-center">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${category.color} text-white font-mono font-bold text-lg mb-2`}>
                    {char}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 break-keep">
                    {lang === "en" ? info.en : info.ko}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 break-keep">
                    {lang === "en" ? info.descEn : info.descKo}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Summary */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📝</span>
            {lang === "en" ? "Overview" : "유형 요약"}
          </h2>
          <p className="text-gray-700 leading-relaxed break-keep whitespace-pre-line">
            {typeData.summary}
          </p>
        </section>

        {/* Examples */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>💡</span>
            {lang === "en" ? "Signature Moves" : "대표적인 스타일"}
          </h2>
          <ul className="space-y-3">
            {typeData.examples.map((example, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${category.color} text-white text-xs flex items-center justify-center font-bold`}>
                  {i + 1}
                </span>
                <span className="text-gray-700 break-keep">{example}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Strengths & Weaknesses */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>⚖️</span>
            {lang === "en" ? "Strengths & Weaknesses" : "강점과 약점"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Strengths */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span>✅</span>
                {lang === "en" ? "Strengths" : "강점"}
              </h3>
              <ul className="space-y-2">
                {typeData.strengths?.map((s, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2 break-keep">
                    <span className="text-green-500 mt-0.5">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {/* Weaknesses */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 border border-red-100">
              <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <span>⚠️</span>
                {lang === "en" ? "Weaknesses" : "약점"}
              </h3>
              <ul className="space-y-2">
                {typeData.weaknesses?.map((w, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2 break-keep">
                    <span className="text-red-400 mt-0.5">•</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Humor Philosophy */}
        {typeData.humorPhilosophy && (
          <HumorPhilosophy philosophy={typeData.humorPhilosophy} categoryColor={category.color} />
        )}

        {/* Social Dynamics */}
        {typeData.socialDynamics && (
          <SocialDynamics dynamics={typeData.socialDynamics} categoryColor={category.color} />
        )}

        {/* MBTI Type Expression */}
        <MBTITypeExpression humorCode={code} categoryColor={category.color} />

        {/* Growth Tips */}
        {typeData.growthTips && typeData.growthTips.length > 0 && (
          <GrowthTips tips={typeData.growthTips} categoryColor={category.color} />
        )}

        {/* Compatibility */}
        <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>💕</span>
            {lang === "en" ? "Compatibility" : "유형 궁합"}
          </h2>

          {/* Best & Worst Match */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {typeData.bestMatch && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-500 text-lg">✅</span>
                  <span className="font-semibold text-green-700">
                    {lang === "en" ? "Best Match" : "최상의 짝궁"}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono font-bold text-green-600">{typeData.bestMatch}</span>
                  <span className="text-gray-700">{results[typeData.bestMatch]?.nickname}</span>
                </div>
                <p className="text-sm text-gray-600 break-keep">{typeData.bestMatchReason}</p>
              </div>
            )}
            {typeData.worstMatch && (
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="font-semibold text-red-700">
                    {lang === "en" ? "Challenging Match" : "어려운 조합"}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono font-bold text-red-600">{typeData.worstMatch}</span>
                  <span className="text-gray-700">{results[typeData.worstMatch]?.nickname}</span>
                </div>
                <p className="text-sm text-gray-600 break-keep">{typeData.worstMatchReason}</p>
              </div>
            )}
          </div>

          {/* Top 3 */}
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span>🎯</span>
            {lang === "en" ? "Top 3 Compatible Types" : "잘 맞는 유형 TOP 3"}
          </h3>
          <div className="space-y-2">
            {top3.map(({ code: matchCode, score }, i) => {
              const compat = getCompatibilityLabel(score);
              const matchData = results[matchCode];
              return (
                <Link
                  key={matchCode}
                  href={`/types/${matchCode}?lang=${lang}`}
                  className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all"
                >
                  <span className="text-xl">{compat.emoji}</span>
                  <span className="font-mono font-bold text-indigo-600">{matchCode}</span>
                  <span className="text-gray-700 flex-1 break-keep">{matchData?.nickname}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {lang === "en" ? compat.label : compat.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <span>←</span>
            {lang === "en" ? "Go Back" : "뒤로가기"}
          </button>
          <Link
            href={`/?lang=${lang}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-xl px-6 py-3 font-medium shadow-lg transition-all"
          >
            <span>🎯</span>
            {lang === "en" ? "Take the Test" : "테스트 하러가기"}
          </Link>
          <Link
            href={`/types?lang=${lang}`}
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <span>🎭</span>
            {lang === "en" ? "All Types" : "전체 유형 보기"}
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  );
}
