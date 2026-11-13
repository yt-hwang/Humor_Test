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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg px-6 py-10 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{t('loading', lang)}</h2>
        <p className="text-sm text-gray-600">{t('loadingSub', lang)}</p>
      </div>
    </main>
  );
}
