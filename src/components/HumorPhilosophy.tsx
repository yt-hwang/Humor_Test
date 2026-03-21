"use client";

import { useLang } from "../context/LangContext";
import { t } from "../data/ui";

interface HumorPhilosophyProps {
  philosophy: string;
  categoryColor: string;
}

export default function HumorPhilosophy({ philosophy, categoryColor }: HumorPhilosophyProps) {
  const { lang } = useLang();

  return (
    <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>💭</span>
        {t("typeDetailHumorPhilosophy", lang)}
      </h2>
      <div className={`relative bg-gradient-to-r ${categoryColor} rounded-2xl p-6`}>
        <div className="absolute top-3 left-4 text-white/30 text-5xl font-serif">"</div>
        <div className="absolute bottom-3 right-4 text-white/30 text-5xl font-serif">"</div>
        <p className="relative z-10 text-white text-lg font-medium text-center italic leading-relaxed break-keep px-6">
          {philosophy}
        </p>
      </div>
    </section>
  );
}
