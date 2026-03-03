"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      const search = typeof window !== 'undefined' ? window.location.search : '';
      router.replace(`/result${search}`);
    }, 1500);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <main className="spotlight-bg flex items-center justify-center">
      <div className="s-card px-12 py-12 text-center fu" style={{ minWidth: '240px' }}>
        {/* Spinning ring */}
        <div className="flex justify-center mb-6">
          <div
            className="w-12 h-12 rounded-full border-2"
            style={{
              borderColor: 'var(--border-y)',
              borderTopColor: 'var(--yellow)',
              animation: 'spin 0.85s linear infinite',
            }}
          />
        </div>

        <p
          className="font-display mb-2"
          style={{ color: 'var(--yellow)', fontSize: '1.25rem', letterSpacing: '0.05em' }}
        >
          개그코드 분석 중
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
          잠시만 기다려주세요
        </p>
      </div>
    </main>
  );
}
