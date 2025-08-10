'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { recordVisit } from "../src/utils/analytics";

// 정적 프리렌더 시 URL 관련 에러를 피하기 위해 런타임 렌더링으로 강제
export const dynamic = 'force-dynamic'
export const revalidate = 0

// MBTI 옵션을 알파벳 순으로 정렬하여 제공
const MBTI_TYPES = [
  'INTJ','INTP','ENTJ','ENTP',
  'INFJ','INFP','ENFJ','ENFP',
  'ISTJ','ISFJ','ESTJ','ESFJ',
  'ISTP','ISFP','ESTP','ESFP'
].sort();

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [userMbti, setUserMbti] = useState('');
  useEffect(() => {
    // 페이지 방문 기록 및 기존 값 복원
    recordVisit('/')
    if (typeof window !== 'undefined') {
      try {
        const savedName = localStorage.getItem('humor_test_user_name') || ''
        const savedMbti = localStorage.getItem('humor_test_user_mbti') || ''
        setUserName(savedName)
        setUserMbti(savedMbti)
      } catch {}
    }
  }, [])

  const handleStart = () => {
    if (typeof window !== 'undefined') {
      try {
        if (userName) localStorage.setItem('humor_test_user_name', userName.trim())
        if (userMbti) localStorage.setItem('humor_test_user_mbti', userMbti.toUpperCase())
      } catch {}
    }
    router.push('/quiz')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 blur-lg animate-bounce"></div>
      
      <div className="relative z-10 w-full max-w-lg p-8">
        {/* 메인 카드 */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-105 transition-all duration-300">
          {/* 로고/아이콘 */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg select-none">
                <span className="text-4xl select-none" draggable={false}>🎤</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center select-none">
                <span className="text-xs text-white select-none" draggable={false}>✨</span>
              </div>
            </div>
          </div>
          
          {/* 제목 */}
          <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            개그유형 테스트
          </h1>
          
          {/* 설명 */}
          <p className="mb-8 text-center text-gray-600 leading-relaxed text-lg">
            당신만의 개그 스타일을 발견해보세요!<br/>
            <span className="font-medium text-gray-700">16가지 유형으로 나누는 재미있는 개그 분석!</span>
          </p>

          {/* 사용자 입력: 이름/별명 + MBTI */}
          <div className="space-y-4 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">이름 또는 별명</label>
              <input
                type="text"
                placeholder="예: 홍길동, 별명 등"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">MBTI (선택)</label>
              <select
                value={userMbti}
                onChange={(e) => setUserMbti(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
              >
                <option value="">선택 안함</option>
                {MBTI_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 시작 버튼 */}
          <div className="flex justify-center">
            <button onClick={handleStart} className="group relative bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-2xl px-10 py-4 text-lg font-semibold shadow-2xl ring-2 ring-purple-300/40 transform hover:scale-110 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                시작하기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
        
        {/* 하단 정보 카드 */}
        <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>무료 테스트</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">⏱️</span>
              <span>5분 소요</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">🎯</span>
              <span>상세한 분석</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
