"use client";

import { useLang } from "../context/LangContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-1 bg-white/70 backdrop-blur-sm rounded-full p-0.5 border border-white/40 text-xs font-medium">
      <button
        onClick={() => setLang("ko")}
        className={`px-3 py-1 rounded-full transition-colors ${
          lang === "ko"
            ? "bg-indigo-500 text-white"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        한국어
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full transition-colors ${
          lang === "en"
            ? "bg-indigo-500 text-white"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        EN
      </button>
    </div>
  );
}
