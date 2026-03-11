'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { recordVisit } from "../src/utils/analytics";
import { useLang } from "../src/context/LangContext";
import { t } from "../src/data/ui";
import LangToggle from "../src/components/LangToggle";
import Footer from "../src/components/Footer";

// MBTI 옵션을 알파벳 순으로 정렬하여 제공
const MBTI_TYPES = [
  'INTJ','INTP','ENTJ','ENTP',
  'INFJ','INFP','ENFJ','ENFP',
  'ISTJ','ISFJ','ESTJ','ESFJ',
  'ISTP','ISFP','ESTP','ESFP'
].sort();

export default function Home() {
  const router = useRouter();
  const { lang } = useLang();
  const [userName, setUserName] = useState('');
  const [userMbti, setUserMbti] = useState('');
  useEffect(() => {
    recordVisit('/')
    setUserName('')
    setUserMbti('')
  }, [])

  const handleStart = () => {
    if (typeof window !== 'undefined') {
      try {
        if (userName) localStorage.setItem('humor_test_user_name', userName.trim())
        if (userMbti) localStorage.setItem('humor_test_user_mbti', userMbti.toUpperCase())
      } catch {}
    }
    const params = new URLSearchParams()
    if (userName.trim()) params.set('user', userName.trim())
    if (userMbti.trim()) params.set('mbti', userMbti.toUpperCase())
    const query = params.toString()
    router.push(query ? `/quiz?${query}` : '/quiz')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-15 blur-lg animate-bounce"></div>

      <div className="relative z-10 w-full max-w-lg p-8">
        {/* 언어 선택 */}
        <div className="flex justify-end mb-3">
          <LangToggle />
        </div>

        {/* 메인 카드 */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 transition-all duration-300">
          {/* 로고/아이콘 */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center select-none">
              <span className="text-3xl select-none" draggable={false}>🎤</span>
            </div>
          </div>

          {/* 제목 */}
          <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t('title', lang)}
          </h1>

          {/* 설명 */}
          <p className="mb-8 text-center text-gray-600 leading-relaxed text-lg">
            {t('subtitle1', lang)}<br/>
            <span className="font-medium text-gray-700">{t('subtitle2', lang)}</span>
          </p>

          {/* 사용자 입력 */}
          <div className="space-y-4 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">{t('nameLabel', lang)}</label>
              <input
                type="text"
                placeholder={t('namePlaceholder', lang)}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">{t('mbtiLabel', lang)}</label>
              <select
                value={userMbti}
                onChange={(e) => setUserMbti(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
              >
                <option value="">{t('mbtiNone', lang)}</option>
                {MBTI_TYPES.map((tp) => (
                  <option key={tp} value={tp}>{tp}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 시작 버튼 */}
          <div className="flex justify-center">
            <button onClick={handleStart} className="group bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-8 py-3.5 text-base font-semibold shadow-sm transition-all duration-200">
              <span className="flex items-center gap-2">
                {t('start', lang)}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* 하단 정보 카드 */}
        <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>{t('free', lang)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">⏱️</span>
              <span>{t('duration', lang)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">🎯</span>
              <span>{t('detailed', lang)}</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
