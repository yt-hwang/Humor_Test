"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { gagResults } from "../../src/data/results";
import { gagResultsEn } from "../../src/data/results.en";
import { recordVisit } from "../../src/utils/analytics";
import { useLang } from "../../src/context/LangContext";
import { t } from "../../src/data/ui";
import Footer from "../../src/components/Footer";

const categories = [
  { nameKey: "cat1" as const, descKey: "cat1desc" as const, types: ["ONVB", "ONPB", "INVB", "INPB"], color: "from-yellow-400 to-yellow-400" },
  { nameKey: "cat2" as const, descKey: "cat2desc" as const, types: ["ONVD", "ONPD", "INVD", "INPD"], color: "from-red-400 to-red-400" },
  { nameKey: "cat3" as const, descKey: "cat3desc" as const, types: ["OBVB", "OBVD", "OBPB", "OBPD"], color: "from-blue-400 to-blue-400" },
  { nameKey: "cat4" as const, descKey: "cat4desc" as const, types: ["IBVB", "IBVD", "IBPB", "IBPD"], color: "from-purple-400 to-purple-400" },
];

export default function TypesClient() {
  const router = useRouter();
  const { lang } = useLang();
  const results = lang === "en" ? gagResultsEn : gagResults;

  useEffect(() => {
    recordVisit('/types');
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 relative overflow-hidden p-4">
      {/* Background decorations */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>🎭</span>
            <span>{t('typesHeader', lang)}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('typesTitle', lang)}</h1>
          <p className="text-gray-600">{t('typesSub', lang)}</p>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              {/* Category header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{t(category.nameKey, lang)}</h2>
                <p className="text-gray-600">{t(category.descKey, lang)}</p>
              </div>

              {/* Type cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.types.map((typeCode) => {
                  const typeData = results[typeCode];
                  if (!typeData) return null;

                  return (
                    <Link key={typeCode} href={`/types/${typeCode}?lang=${lang}`} className="group cursor-pointer">
                      <div className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transform cursor-pointer h-full">
                        {/* Type code */}
                        <div className="text-center mb-3">
                          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} text-white rounded-xl font-mono font-bold text-lg mb-2`}>
                            {typeCode}
                          </div>
                        </div>

                        {/* Nickname */}
                        <h3 className="text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-blue-600 break-keep">
                          {typeData.nickname}
                        </h3>

                        {/* Summary */}
                        <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3 break-keep">
                          {typeData.summary}
                        </p>

                        {/* Click hint */}
                        <div className="mt-3 text-center">
                          <span className="text-xs text-blue-500 font-medium group-hover:underline">
                            {t('viewDetail', lang)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom actions */}
        <div className="text-center mt-8 flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-white bg-blue-500 rounded-xl px-4 py-2.5 shadow-sm hover:opacity-95"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('backToResults', lang)}
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-gray-700 bg-white rounded-xl px-4 py-2.5 border border-gray-100"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('homeLink', lang)}
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  );
}
