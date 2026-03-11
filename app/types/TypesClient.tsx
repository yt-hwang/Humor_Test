"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { gagResults } from "../../src/data/results";
import { gagResultsEn } from "../../src/data/results.en";
import { recordVisit } from "../../src/utils/analytics";
import TypeDetailModal from "../../src/components/TypeDetailModal";
import { useLang } from "../../src/context/LangContext";
import { t } from "../../src/data/ui";
import Footer from "../../src/components/Footer";

const categories = [
  { nameKey: "cat1" as const, descKey: "cat1desc" as const, types: ["ONVB", "ONPB", "INVB", "INPB"], color: "from-yellow-400 to-orange-400" },
  { nameKey: "cat2" as const, descKey: "cat2desc" as const, types: ["ONVD", "ONPD", "INVD", "INPD"], color: "from-red-400 to-pink-400" },
  { nameKey: "cat3" as const, descKey: "cat3desc" as const, types: ["OBVB", "OBVD", "OBPB", "OBPD"], color: "from-blue-400 to-indigo-400" },
  { nameKey: "cat4" as const, descKey: "cat4desc" as const, types: ["IBVB", "IBVD", "IBPB", "IBPD"], color: "from-purple-400 to-violet-400" },
];

export default function TypesClient() {
  const router = useRouter();
  const { lang } = useLang();
  const results = lang === "en" ? gagResultsEn : gagResults;

  useEffect(() => {
    recordVisit('/types');
  }, []);

  const [openCode, setOpenCode] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden p-4">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 blur-lg animate-bounce"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>🎭</span>
            <span>{t('typesHeader', lang)}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('typesTitle', lang)}</h1>
          <p className="text-gray-600">{t('typesSub', lang)}</p>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6">
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
                    <div key={typeCode} className="group cursor-pointer" onClick={() => setOpenCode(typeCode)}>
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                        {/* Type code */}
                        <div className="text-center mb-3">
                          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} text-white rounded-xl font-mono font-bold text-lg mb-2 group-hover:scale-110 transition-transform duration-300`}>
                            {typeCode}
                          </div>
                        </div>

                        {/* Nickname */}
                        <h3 className="text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-blue-600 transition-colors">
                          {typeData.nickname}
                        </h3>

                        {/* Summary */}
                        <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                          {typeData.summary}
                        </p>

                        {/* Click hint */}
                        <div className="mt-3 text-center">
                          <span className="text-xs text-blue-500 font-medium group-hover:underline">
                            {t('preview', lang)}
                          </span>
                        </div>
                      </div>
                    </div>
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl px-4 py-2.5 shadow-sm hover:opacity-95 transition"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('backToResults', lang)}
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/30"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('homeLink', lang)}
          </Link>
        </div>

        <Footer />
      </div>

      {/* Modal */}
      <TypeDetailModal open={!!openCode} onClose={() => setOpenCode(null)} typeCode={openCode || ''} />
    </main>
  );
}
