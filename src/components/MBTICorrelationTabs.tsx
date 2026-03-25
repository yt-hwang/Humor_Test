"use client";

import { useState } from "react";
import { useLang } from "../context/LangContext";
import { t } from "../data/ui";
import { MBTICorrelation } from "../data/results";

interface MBTICorrelationTabsProps {
  correlations: MBTICorrelation[];
  categoryColor: string;
}

const dimensionInfo = {
  EI: {
    nameKo: "외향(E) / 내향(I)",
    nameEn: "E/I",
    descKo: "표현 스타일",
    descEn: "Expression Style",
    color: "from-orange-400 to-amber-400"
  },
  NS: {
    nameKo: "직관(N) / 감각(S)",
    nameEn: "N/S",
    descKo: "접근 방식",
    descEn: "Approach",
    color: "from-green-400 to-emerald-400"
  },
  TF: {
    nameKo: "사고(T) / 감정(F)",
    nameEn: "T/F",
    descKo: "수용 및 회복",
    descEn: "Reception",
    color: "from-blue-400 to-indigo-400"
  },
  JP: {
    nameKo: "판단(J) / 인식(P)",
    nameEn: "J/P",
    descKo: "상황 대처",
    descEn: "Handling",
    color: "from-purple-400 to-violet-400"
  }
};

export default function MBTICorrelationTabs({ correlations, categoryColor }: MBTICorrelationTabsProps) {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState<'EI' | 'NS' | 'TF' | 'JP'>('EI');

  const activeCorrelation = correlations.find(c => c.dimension === activeTab);

  if (!correlations || correlations.length === 0) {
    return null;
  }

  return (
    <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>🧬</span>
        {t("typeDetailMBTICorrelations", lang)}
      </h2>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
        {(['EI', 'NS', 'TF', 'JP'] as const).map((dim) => {
          const info = dimensionInfo[dim];
          const isActive = activeTab === dim;
          return (
            <button
              key={dim}
              onClick={() => setActiveTab(dim)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? `bg-gradient-to-r ${info.color} text-white shadow-md`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="block">{lang === 'en' ? info.nameEn : info.nameKo}</span>
              <span className="text-xs opacity-80">{lang === 'en' ? info.descEn : info.descKo}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      {activeCorrelation && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Letter A */}
          <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-10 h-10 rounded-full bg-gradient-to-r ${dimensionInfo[activeTab].color} text-white flex items-center justify-center font-bold text-lg shadow`}>
                {activeCorrelation.letterA.letter}
              </span>
              <h3 className="font-bold text-gray-800 text-lg">
                {activeCorrelation.letterA.letter === 'E' && (lang === 'en' ? 'Extraversion' : '외향형')}
                {activeCorrelation.letterA.letter === 'N' && (lang === 'en' ? 'Intuition' : '직관형')}
                {activeCorrelation.letterA.letter === 'T' && (lang === 'en' ? 'Thinking' : '사고형')}
                {activeCorrelation.letterA.letter === 'J' && (lang === 'en' ? 'Judging' : '판단형')}
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-blue-600 mb-1 flex items-center gap-1">
                  <span>🎯</span> {t("typeDetailExpression", lang)}
                </div>
                <p className="text-sm text-gray-700 break-keep">{activeCorrelation.letterA.expression}</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-blue-600 mb-1 flex items-center gap-1">
                  <span>👂</span> {t("typeDetailReception", lang)}
                </div>
                <p className="text-sm text-gray-700 break-keep">{activeCorrelation.letterA.reception}</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-blue-600 mb-1 flex items-center gap-1">
                  <span>💫</span> {t("typeDetailWhenFails", lang)}
                </div>
                <p className="text-sm text-gray-700 break-keep">{activeCorrelation.letterA.whenJokesFail}</p>
              </div>
            </div>
          </div>

          {/* Letter B */}
          <div className={`bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 border border-purple-200`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-10 h-10 rounded-full bg-gradient-to-r ${dimensionInfo[activeTab].color} text-white flex items-center justify-center font-bold text-lg shadow`}>
                {activeCorrelation.letterB.letter}
              </span>
              <h3 className="font-bold text-gray-800 text-lg">
                {activeCorrelation.letterB.letter === 'I' && (lang === 'en' ? 'Introversion' : '내향형')}
                {activeCorrelation.letterB.letter === 'S' && (lang === 'en' ? 'Sensing' : '감각형')}
                {activeCorrelation.letterB.letter === 'F' && (lang === 'en' ? 'Feeling' : '감정형')}
                {activeCorrelation.letterB.letter === 'P' && (lang === 'en' ? 'Perceiving' : '인식형')}
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-purple-600 mb-1 flex items-center gap-1">
                  <span>🎯</span> {t("typeDetailExpression", lang)}
                </div>
                <p className="text-sm text-gray-700 break-keep">{activeCorrelation.letterB.expression}</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-purple-600 mb-1 flex items-center gap-1">
                  <span>👂</span> {t("typeDetailReception", lang)}
                </div>
                <p className="text-sm text-gray-700 break-keep">{activeCorrelation.letterB.reception}</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-purple-600 mb-1 flex items-center gap-1">
                  <span>💫</span> {t("typeDetailWhenFails", lang)}
                </div>
                <p className="text-sm text-gray-700 break-keep">{activeCorrelation.letterB.whenJokesFail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
