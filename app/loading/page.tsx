"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    // 800ms 후 결과 페이지로 이동 (살짝 기대감 주는 연출)
    const t = setTimeout(() => {
      router.replace(`/result?${params.toString()}`);
    }, 800);
    return () => clearTimeout(t);
  }, [router, params]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 px-8 py-10 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full border-4 border-purple-300 border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">결과 조합 중...</h2>
        <p className="text-sm text-gray-600">당신의 개그코드를 맛있게 요리하고 있어요 🍳</p>
      </div>
    </main>
  );
}


