"use client";
import React, { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { questions } from "../../src/data/questions";
import { calculateResult } from "../../src/data/results";
import { recordVisit, recordTestResult } from "../../src/utils/analytics";
import { encodeAnswers } from "../../src/utils/encodeAnswers";

const likertLabels = [
  "전혀 아님", "아님", "조금 아님", "보통", "조금 그렇다", "그렇다", "매우 그렇다",
];

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userName = searchParams.get('user') || '';
  const mbti = searchParams.get('mbti') || '';
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { recordVisit('/quiz') }, []);

  const goToResult = async (finalAnswers: (number | null)[]) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const result = calculateResult(finalAnswers);
    await recordTestResult(result.code, result.nickname, result.summary, { userName, mbti });
    const params = new URLSearchParams({ code: result.code, answers: encodeAnswers(finalAnswers) });
    if (userName) params.set('user', userName);
    router.push(`/loading?${params.toString()}`);
  };

  const handleSelect = (value: number) => {
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);
    if (current < questions.length - 1) {
      setTimeout(() => setCurrent(current + 1), 160);
    } else {
      if (updated.every(ans => ans !== null) && !isSubmitting) {
        void goToResult(updated);
      }
    }
  };

  const handlePrev = () => { if (current > 0) setCurrent(current - 1); };

  const handleNext = () => {
    if (answers[current] === null) return;
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else if (answers.every(a => a !== null) && !isSubmitting) {
      void goToResult(answers);
    }
  };

  const progressPct = ((current + 1) / questions.length) * 100;

  return (
    <main className="spotlight-bg flex flex-col items-center p-4 pt-8 pb-12">

      {/* Progress */}
      <div className="w-full max-w-md mb-5 fu">
        <div className="flex justify-between items-center mb-2">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>
            Q{current + 1} / {questions.length}
          </span>
          <span style={{ color: 'var(--yellow)', fontSize: '0.75rem', fontWeight: 700 }}>
            {Math.round(progressPct)}%
          </span>
        </div>
        <div className="prog-track">
          <div className="prog-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className="s-card p-7 w-full max-w-md mb-5 fu1" key={current}>
        {/* Q number badge */}
        <div className="flex justify-center mb-5">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: 'var(--yellow-dim)', color: 'var(--yellow)', border: '1px solid var(--border-y)', letterSpacing: '0.08em' }}
          >
            Q{current + 1}
          </span>
        </div>

        {/* Question text */}
        <p
          className="text-center font-semibold leading-relaxed break-keep mb-8"
          style={{ color: 'var(--text)', fontSize: 'clamp(1rem, 3.5vw, 1.125rem)', minHeight: '3.5rem' }}
        >
          {questions[current].text}
        </p>

        {/* Likert scale */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between px-0.5">
            <span style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>{likertLabels[0]}</span>
            <span style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>{likertLabels[6]}</span>
          </div>
          <div className="flex justify-between gap-1">
            {Array.from({ length: 7 }).map((_, idx) => (
              <button
                key={idx}
                className={`lk-btn${answers[current] === idx + 1 ? ' sel' : ''}`}
                onClick={() => handleSelect(idx + 1)}
                aria-label={likertLabels[idx]}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between w-full max-w-md fu2">
        <button
          className="btn-dim"
          onClick={handlePrev}
          disabled={current === 0}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5 5-5M18 12H6" />
          </svg>
          이전
        </button>

        {answers[current] !== null ? (
          <button
            className="btn-dim sel"
            onClick={handleNext}
            disabled={isSubmitting}
          >
            {current === questions.length - 1 ? '결과 보기' : '다음'}
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <main className="spotlight-bg flex items-center justify-center">
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>불러오는 중...</div>
      </main>
    }>
      <QuizContent />
    </Suspense>
  );
}
