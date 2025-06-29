'use client'

import Link from "next/link";
import { useEffect } from "react";
import { recordVisit } from "../src/utils/analytics";

export default function Home() {
  useEffect(() => {
    // 페이지 방문 기록
    recordVisit('/')
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-pink-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center">
        {/* 로고/브랜딩 자리 */}
        <div className="mb-6 text-5xl">🎤</div>
        <h1 className="text-4xl font-bold mb-2 text-center">개그유형 테스트</h1>
        <p className="mb-8 text-center text-gray-600">나만의 개그코드를 찾아보세요!<br/>16가지 유형, 재미있는 설명과 연예인 예시까지!</p>
        <Link href="/quiz">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 text-lg font-semibold shadow">시작하기</button>
        </Link>
      </div>
    </main>
  );
}
