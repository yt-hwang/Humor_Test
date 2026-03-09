"use client";
import React, { useState, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { questions } from "../../src/data/questions";
import { questionsEn } from "../../src/data/questions.en";
import { calculateResult } from "../../src/data/results";
import { recordVisit, recordTestResult } from "../../src/utils/analytics";
import { encodeAnswers } from "../../src/utils/encodeAnswers";
import { useLang } from "../../src/context/LangContext";
import { t } from "../../src/data/ui";

const likertLabelsKo = [
  "전혀 그렇지 않다", "그렇지 않다", "조금 그렇지 않다",
  "보통이다", "조금 그렇다", "그렇다", "매우 그렇다",
];
const likertLabelsEn = [
  "Strongly disagree", "Disagree", "Slightly disagree",
  "Neutral", "Slightly agree", "Agree", "Strongly agree",
];

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { lang } = useLang();
  const userName = searchParams.get('user') || '';
  const mbti = searchParams.get('mbti') || '';
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const qs = lang === "en" ? questionsEn : questions;
  const likertLabels = lang === "en" ? likertLabelsEn : likertLabelsKo;

  useEffect(() => {
    recordVisit('/quiz')
  }, [])

  const goToResult = async (finalAnswers: (number | null)[]) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    const result = calculateResult(finalAnswers);

    await recordTestResult(
      result.code,
      result.nickname,
      result.summary,
      { userName, mbti }
    )

    const params = new URLSearchParams({
      code: result.code,
      answers: encodeAnswers(finalAnswers)
    });
    if (userName) params.set('user', userName);
    router.push(`/loading?${params.toString()}`);
  };

  const handleSelect = (value: number) => {
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      if (updated.every(ans => ans !== null)) {
        if (!isSubmitting) {
          void goToResult(updated);
        }
      } else {
        alert(t('answerAll', lang));
      }
    }
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNextIfAnswered = () => {
    if (answers[current] !== null) {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        if (answers.every(a => a !== null)) {
          if (!isSubmitting) {
            void goToResult(answers);
          }
        }
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-pink-100">
      <div className="w-full max-w-md p-4 sm:p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center mx-4">
        <div className="w-full flex justify-between mb-2 text-xs text-gray-400">
          <span>Q{current + 1} / {questions.length}</span>
          <span>{Math.round(((current + 1) / questions.length) * 100)}%</span>
        </div>
         <h2 className="text-sm sm:text-base md:text-lg font-bold mb-6 text-center min-h-[32px] sm:min-h-[40px] md:min-h-[48px] text-gray-900 leading-tight px-2 whitespace-pre-line break-keep text-pretty">{qs[current].text}</h2>
        <div className="flex flex-col gap-2 w-full mb-6">
          <div className="flex justify-between text-xs text-gray-500 px-1">
            <span>{likertLabels[0]}</span>
            <span>{likertLabels[6]}</span>
          </div>
          <div className="flex justify-between w-full gap-1">
            {Array.from({ length: 7 }).map((_, idx) => (
              <button
                key={idx}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center font-semibold transition text-sm sm:text-base
                  ${answers[current] === idx + 1 ? "bg-blue-500 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-700 hover:bg-blue-100"}
                `}
                onClick={() => handleSelect(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full mt-2">
          <button
            className="bg-gray-200 rounded px-3 py-2 text-gray-500 disabled:opacity-50 text-sm sm:text-base"
            onClick={handlePrev}
            disabled={current === 0}
          >{t('prev', lang)}</button>
          {answers[current] !== null ? (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 text-sm sm:text-base"
              onClick={handleNextIfAnswered}
              disabled={isSubmitting}
            >{t('next', lang)}</button>
          ) : (
            <span className="px-4 py-2 text-transparent">placeholder</span>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
