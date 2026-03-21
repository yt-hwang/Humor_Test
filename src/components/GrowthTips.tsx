"use client";

import { useLang } from "../context/LangContext";
import { t } from "../data/ui";

interface GrowthTipsProps {
  tips: string[];
  categoryColor: string;
}

export default function GrowthTips({ tips, categoryColor }: GrowthTipsProps) {
  const { lang } = useLang();

  return (
    <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>🌱</span>
        {t("typeDetailGrowthTips", lang)}
      </h2>
      <div className="space-y-3">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100"
          >
            <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${categoryColor} text-white text-sm flex items-center justify-center font-bold shadow-sm`}>
              {i + 1}
            </span>
            <p className="text-gray-700 leading-relaxed break-keep pt-1">
              {tip}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
