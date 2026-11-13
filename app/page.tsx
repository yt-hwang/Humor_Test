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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-pink-50 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-end mb-3">
          <LangToggle />
        </div>

        <div className="w-full p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center">
          <div className="mb-6 text-5xl">🎤</div>
          <h1 className="text-4xl font-bold mb-2 text-center">{t('title', lang)}</h1>
          <p className="mb-8 text-center text-gray-600">
            {t('subtitle1', lang)}<br/>
            {t('subtitle2', lang)}
          </p>

          <div className="w-full space-y-4 mb-8">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">{t('nameLabel', lang)}</label>
              <input
                type="text"
                placeholder={t('namePlaceholder', lang)}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">{t('mbtiLabel', lang)}</label>
              <select
                value={userMbti}
                onChange={(e) => setUserMbti(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:border-blue-500 bg-white"
              >
                <option value="">{t('mbtiNone', lang)}</option>
                {MBTI_TYPES.map((tp) => (
                  <option key={tp} value={tp}>{tp}</option>
                ))}
              </select>
            </div>
          </div>

          <button onClick={handleStart} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 text-lg font-semibold shadow">
            {t('start', lang)}
          </button>
        </div>

        <Footer />
      </div>
    </main>
  );
}
