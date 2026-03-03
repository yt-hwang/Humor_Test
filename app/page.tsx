'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { recordVisit } from "../src/utils/analytics";

const MBTI_TYPES = [
  'ENFJ','ENFP','ENTJ','ENTP',
  'ESFJ','ESFP','ESTJ','ESTP',
  'INFJ','INFP','INTJ','INTP',
  'ISFJ','ISFP','ISTJ','ISTP',
];

export default function Home() {
  const router = useRouter();
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
    <main className="spotlight-bg flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">

        {/* Microphone icon */}
        <div className="flex justify-center mb-7 fu">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--yellow-dim)', border: '1px solid var(--border-y)' }}
          >
            <span className="text-3xl select-none" draggable={false}>🎙️</span>
          </div>
        </div>

        {/* Title */}
        <h1
          className="font-display text-center mb-2 fu1"
          style={{ fontSize: 'clamp(2rem, 9vw, 2.75rem)', color: 'var(--text)', lineHeight: 1.15 }}
        >
          개그유형 테스트
        </h1>
        <p className="text-center mb-8 fu2" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>
          나만의 개그코드를 발견하세요<br />
          <span style={{ color: 'var(--yellow)' }}>16가지 유형</span>
          <span style={{ color: 'var(--text-dim)' }}> · 20문항 · 약 5분</span>
        </p>

        {/* Form card */}
        <div className="s-card p-6 mb-5 fu3">
          <div className="flex flex-col gap-4 mb-5">
            <div>
              <label
                className="block text-xs font-bold mb-2 uppercase tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                이름 · 별명
              </label>
              <input
                type="text"
                placeholder="홍길동"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                className="s-input"
              />
            </div>
            <div>
              <label
                className="block text-xs font-bold mb-2 uppercase tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                MBTI&nbsp;
                <span style={{ color: 'var(--text-dim)', textTransform: 'none', letterSpacing: 0 }}>선택</span>
              </label>
              <select
                value={userMbti}
                onChange={(e) => setUserMbti(e.target.value)}
                className="s-input"
                style={{ appearance: 'none', WebkitAppearance: 'none' }}
              >
                <option value="">선택 안함</option>
                {MBTI_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <button onClick={handleStart} className="btn-y w-full text-base">
            테스트 시작
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
        </div>

        {/* Tags */}
        <div className="flex justify-center gap-2 fu4">
          {['무료', '5분', '16유형', '공유 가능'].map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
