"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "../../src/context/LangContext";
import { t } from "../../src/data/ui";

export default function LoadingPage() {
  const router = useRouter();
  const { lang } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => {
      const search = typeof window !== 'undefined' ? window.location.search : '';
      router.replace(`/result${search}`);
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 px-8 py-10 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full border-4 border-purple-300 border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">{t('loading', lang)}</h2>
        <p className="text-sm text-gray-600">{t('loadingSub', lang)}</p>
      </div>
    </main>
  );
}
