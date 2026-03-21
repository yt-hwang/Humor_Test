"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLang } from "../context/LangContext";
import { t } from "../data/ui";
import {
  mbtiMatrix,
  getHighlightedLettersForCode,
  getCompatibilityColor,
  MatrixCell
} from "../data/mbtiMatrix";
import { mbtiMatrixEn } from "../data/mbtiMatrix.en";
import { getHumorMBTICoaching } from "../data/humorMBTICoachingIndex";

interface MBTITypeExpressionProps {
  humorCode: string;
  categoryColor: string;
}

// All 16 MBTI types
const MBTI_TYPES = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
] as const;

// MBTI type groups
const MBTI_GROUPS = {
  analysts: { types: ['INTJ', 'INTP', 'ENTJ', 'ENTP'], color: 'purple', labelKo: '분석가형', labelEn: 'Analysts' },
  diplomats: { types: ['INFJ', 'INFP', 'ENFJ', 'ENFP'], color: 'green', labelKo: '외교관형', labelEn: 'Diplomats' },
  sentinels: { types: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'], color: 'blue', labelKo: '관리자형', labelEn: 'Sentinels' },
  explorers: { types: ['ISTP', 'ISFP', 'ESTP', 'ESFP'], color: 'yellow', labelKo: '탐험가형', labelEn: 'Explorers' }
};

// Helper to get MBTI letters from a type
function getMBTILetters(mbtiType: string): string[] {
  return mbtiType.split('');
}

// Helper to get the matrix cell for a humor letter + MBTI letter
function getMatrixCell(humorLetter: string, mbtiLetter: string, lang: 'ko' | 'en'): MatrixCell | undefined {
  const matrix = lang === 'en' ? mbtiMatrixEn : mbtiMatrix;
  return matrix.find(
    cell => cell.humorLetter === humorLetter && cell.mbtiLetter === mbtiLetter
  );
}

// Get combined insights for a humor code + MBTI type
function getCombinedInsights(humorCode: string, mbtiType: string, lang: 'ko' | 'en') {
  const humorLetters = getHighlightedLettersForCode(humorCode);
  const mbtiLetters = getMBTILetters(mbtiType);

  const insights: Array<{
    humorLetter: string;
    mbtiLetter: string;
    relationship: string;
    compatibility: string;
  }> = [];

  // For each humor letter, find the matching MBTI letter cell
  // humorLetters: [O/I, N/B, V/P, Br/Da]
  // mbtiLetters: [E/I, N/S, T/F, J/P]

  humorLetters.forEach(humorLetter => {
    mbtiLetters.forEach(mbtiLetter => {
      const cell = getMatrixCell(humorLetter, mbtiLetter, lang);
      if (cell) {
        insights.push({
          humorLetter,
          mbtiLetter,
          relationship: cell.relationship,
          compatibility: cell.compatibility
        });
      }
    });
  });

  return insights;
}

// Calculate overall compatibility score
function calculateOverallCompatibility(insights: Array<{ compatibility: string }>) {
  const scores = { high: 3, medium: 2, low: 1, neutral: 2 };
  const total = insights.reduce((sum, i) => sum + (scores[i.compatibility as keyof typeof scores] || 2), 0);
  const avg = total / insights.length;

  if (avg >= 2.5) return 'high';
  if (avg >= 1.8) return 'medium';
  return 'low';
}

// Generate a combined description from all insights
// Humor letter descriptions for coaching context
const HUMOR_LETTER_CONTEXT: Record<string, { ko: string; en: string; style: string }> = {
  O: { ko: '준비형', en: 'Organized', style: '사전에 설계된 유머' },
  I: { ko: '즉흥형', en: 'Improvised', style: '현장 즉흥 유머' },
  N: { ko: '직관형', en: 'Intuitive', style: '현실 공감 유머' },
  B: { ko: '추상형', en: 'Abstract', style: '병맛/비틀기 유머' },
  V: { ko: '언어형', en: 'Verbal', style: '말 중심 유머' },
  P: { ko: '표현형', en: 'Physical', style: '몸/표정 유머' },
  Br: { ko: '밝음', en: 'Bright', style: '밝고 유쾌한 톤' },
  Da: { ko: '다크', en: 'Dark', style: '풍자적/날카로운 톤' }
};

// Generate customized coaching based on humor type + MBTI combination
function generateCustomCoaching(
  insights: Array<{ humorLetter: string; mbtiLetter: string; relationship: string; compatibility: string }>,
  mbtiType: string,
  humorCode: string,
  lang: 'ko' | 'en'
): { summary: string; strengths: string[]; watchOut: string[]; growth: string[] } {
  const strengths: string[] = [];
  const watchOut: string[] = [];
  const growth: string[] = [];

  // Categorize insights by compatibility
  const highCompat = insights.filter(i => i.compatibility === 'high');
  const lowCompat = insights.filter(i => i.compatibility === 'low');
  const mediumCompat = insights.filter(i => i.compatibility === 'medium' || i.compatibility === 'neutral');

  // Generate strengths from high compatibility insights
  highCompat.forEach(insight => {
    const humorContext = HUMOR_LETTER_CONTEXT[insight.humorLetter];
    const sentences = insight.relationship.split(/[.。]/).filter(s => s.trim());
    if (sentences[0]) {
      strengths.push(sentences[0].trim());
    }
  });

  // Generate watch-out points from low compatibility insights
  lowCompat.forEach(insight => {
    const humorContext = HUMOR_LETTER_CONTEXT[insight.humorLetter];
    const sentences = insight.relationship.split(/[.。]/).filter(s => s.trim());
    if (sentences.length > 1) {
      watchOut.push(sentences[1]?.trim() || sentences[0].trim());
    } else if (sentences[0]) {
      // Create a warning from the relationship description
      const warning = lang === 'ko'
        ? `${humorContext?.style || insight.humorLetter} 스타일과 ${insight.mbtiLetter} 성향이 충돌할 수 있어요. 의식적인 조율이 필요합니다.`
        : `Your ${humorContext?.en || insight.humorLetter} humor style may clash with your ${insight.mbtiLetter} tendency. Be mindful of this tension.`;
      watchOut.push(warning);
    }
  });

  // Generate growth areas from medium compatibility insights
  mediumCompat.forEach(insight => {
    const humorContext = HUMOR_LETTER_CONTEXT[insight.humorLetter];
    const sentences = insight.relationship.split(/[.。]/).filter(s => s.trim());
    if (sentences.length > 1) {
      growth.push(sentences[1]?.trim() || '');
    } else if (sentences[0]) {
      const tip = lang === 'ko'
        ? `${humorContext?.style || insight.humorLetter}과 ${insight.mbtiLetter} 성향의 균형을 찾아보세요. 새로운 가능성이 열립니다.`
        : `Find balance between your ${humorContext?.en || insight.humorLetter} humor and ${insight.mbtiLetter} tendency for new possibilities.`;
      growth.push(tip);
    }
  });

  // Ensure we have at least some content
  if (strengths.length === 0 && insights.length > 0) {
    const first = insights[0];
    strengths.push(first.relationship.split(/[.。]/)[0]?.trim() || '');
  }

  // Generate summary
  const humorLetters = getHighlightedLettersForCode(humorCode);
  const humorStyles = humorLetters.map(l => HUMOR_LETTER_CONTEXT[l]?.style || l).join(', ');

  const summary = lang === 'ko'
    ? `${mbtiType} 성격이 ${humorCode}(${humorStyles}) 유머를 구사할 때의 특징입니다.`
    : `Here's how ${mbtiType} personality expresses ${humorCode} (${humorStyles}) humor styles.`;

  return {
    summary,
    strengths: strengths.slice(0, 3),
    watchOut: watchOut.slice(0, 3),
    growth: growth.slice(0, 3)
  };
}

export default function MBTITypeExpression({ humorCode, categoryColor }: MBTITypeExpressionProps) {
  const { lang } = useLang();
  const [selectedMBTI, setSelectedMBTI] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const insights = selectedMBTI ? getCombinedInsights(humorCode, selectedMBTI, lang) : [];
  const overallCompat = selectedMBTI ? calculateOverallCompatibility(insights) : null;

  // Handle modal open
  const openModal = (mbtiType: string) => {
    setSelectedMBTI(mbtiType);
    setIsModalOpen(true);
    // Trigger animation after mount
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  };

  // Handle modal close
  const closeModal = () => {
    setIsAnimating(false);
    // Wait for animation to complete before unmounting
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedMBTI(null);
    }, 200);
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // UI strings
  const uiStrings = {
    title: { ko: 'MBTI별 유머 표현', en: 'Humor Expression by MBTI' },
    subtitle: { ko: '당신의 유머 타입이 각 MBTI에서 어떻게 나타나는지 확인하세요.', en: 'See how your humor type manifests with each MBTI personality.' },
    selectMBTI: { ko: 'MBTI 유형을 선택하세요.', en: 'Select an MBTI type.' },
    overallSynergy: { ko: '전체 시너지', en: 'Overall Synergy' },
    combinedInsights: { ko: '조합 분석', en: 'Combined Analysis' },
    humorAxis: { ko: '유머 축', en: 'Humor Axis' },
    mbtiAxis: { ko: 'MBTI 축', en: 'MBTI Axis' },
    high: { ko: '높음', en: 'High' },
    medium: { ko: '보통', en: 'Medium' },
    low: { ko: '낮음', en: 'Low' },
    neutral: { ko: '중립', en: 'Neutral' },
    close: { ko: '닫기', en: 'Close' },
    tryOtherTypes: { ko: '다른 유형 보기:', en: 'Try other types:' }
  };

  // Compatibility badge colors
  const compatBadgeColors = {
    high: 'bg-green-100 text-green-800 border-green-300',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    low: 'bg-red-100 text-red-800 border-red-300',
    neutral: 'bg-gray-100 text-gray-800 border-gray-300'
  };

  // Group gradient colors
  const groupGradients: Record<string, string> = {
    purple: 'from-purple-500 to-violet-500',
    green: 'from-green-500 to-emerald-500',
    blue: 'from-blue-500 to-cyan-500',
    yellow: 'from-yellow-500 to-orange-500'
  };

  return (
    <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
        <span>🎭</span>
        {uiStrings.title[lang]}
      </h2>
      <p className="text-sm text-gray-600 mb-6">{uiStrings.subtitle[lang]}</p>

      {/* MBTI Type Grid - Always visible */}
      <div className="space-y-4">
        <p className="text-sm text-gray-500 text-center mb-4">
          {uiStrings.selectMBTI[lang]}
        </p>

        {Object.entries(MBTI_GROUPS).map(([groupKey, group]) => (
          <div key={groupKey} className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${groupGradients[group.color]}`}></div>
              <span className="text-sm font-medium text-gray-700">
                {lang === 'en' ? group.labelEn : group.labelKo}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {group.types.map((mbtiType) => {
                const typeInsights = getCombinedInsights(humorCode, mbtiType, lang);
                const compat = calculateOverallCompatibility(typeInsights);

                return (
                  <button
                    key={mbtiType}
                    onClick={() => openModal(mbtiType)}
                    className={`
                      relative p-3 rounded-xl border-2 transition-all
                      hover:scale-105 hover:shadow-md
                      bg-gradient-to-br from-white to-gray-50
                      ${compat === 'high' ? 'border-green-300 hover:border-green-400' : ''}
                      ${compat === 'medium' ? 'border-yellow-300 hover:border-yellow-400' : ''}
                      ${compat === 'low' ? 'border-red-300 hover:border-red-400' : ''}
                    `}
                  >
                    <div className="text-center">
                      <span className="font-bold text-gray-800">{mbtiType}</span>
                      <div className="mt-1">
                        <span className={`
                          inline-block px-2 py-0.5 rounded-full text-xs
                          ${compatBadgeColors[compat]}
                        `}>
                          {compat === 'high' && (lang === 'en' ? 'High' : '높음')}
                          {compat === 'medium' && (lang === 'en' ? 'Medium' : '보통')}
                          {compat === 'low' && (lang === 'en' ? 'Low' : '낮음')}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup - Rendered via Portal to body */}
      {isModalOpen && selectedMBTI && typeof document !== 'undefined' && createPortal(
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-colors duration-200 ${
            isAnimating ? 'bg-black/60' : 'bg-black/0'
          }`}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mbti-modal-title"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div
            className={`w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-200 max-h-[90vh] ${
              isAnimating
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 translate-y-4'
            }`}
          >
            {/* Modal Header with gradient background */}
            <div className={`bg-gradient-to-r ${categoryColor} p-5 text-white relative`}>
              {/* Close button (X) in top right */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                aria-label={uiStrings.close[lang]}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header content */}
              <div className="text-center pr-8">
                <h3 id="mbti-modal-title" className="text-2xl font-bold mb-1">
                  {selectedMBTI} + {humorCode}
                </h3>
                <p className="text-white/90 text-sm">
                  {lang === 'ko'
                    ? `${selectedMBTI} 성격이 이 유머 스타일을 가지면?`
                    : `How ${selectedMBTI} personality expresses this humor style?`
                  }
                </p>
                {overallCompat && (
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur">
                    {uiStrings[overallCompat][lang]} {lang === 'ko' ? '시너지' : 'synergy'}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 max-h-[60vh] overflow-y-auto">
              {/* Coaching from pre-defined data */}
              {(() => {
                const coaching = getHumorMBTICoaching(humorCode, selectedMBTI);
                if (!coaching) {
                  // Fallback to dynamic generation if no pre-defined data
                  const fallback = generateCustomCoaching(insights, selectedMBTI, humorCode, lang);
                  return (
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 mb-4">
                      <p className="text-gray-700 leading-relaxed break-keep text-base">
                        {fallback.summary}
                      </p>
                    </div>
                  );
                }

                return (
                  <>
                    {/* Coaching Points Grid */}
                    <div className="space-y-3 mb-4">
                      {/* Strengths */}
                      {coaching.strengths.length > 0 && (
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2 text-sm">
                            <span>✨</span>
                            {lang === 'ko' ? '이 조합의 강점' : 'Strengths'}
                          </h4>
                          <ul className="space-y-1.5">
                            {coaching.strengths.map((s, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start gap-2 break-keep">
                                <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Watch Out */}
                      {coaching.watchOut.length > 0 && (
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
                          <h4 className="font-semibold text-amber-700 mb-2 flex items-center gap-2 text-sm">
                            <span>⚠️</span>
                            {lang === 'ko' ? '주의할 점' : 'Watch Out'}
                          </h4>
                          <ul className="space-y-1.5">
                            {coaching.watchOut.map((w, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start gap-2 break-keep">
                                <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                                {w}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Coaching Tips */}
                      {coaching.coachingTips.length > 0 && (
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2 text-sm">
                            <span>💡</span>
                            {lang === 'ko' ? '코칭 포인트' : 'Coaching Tips'}
                          </h4>
                          <ul className="space-y-1.5">
                            {coaching.coachingTips.map((tip, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start gap-2 break-keep">
                                <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </>
                );
              })()}

              {/* Quick navigation to other types */}
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">
                  {uiStrings.tryOtherTypes[lang]}
                </p>
                <div className="flex flex-wrap gap-1">
                  {MBTI_TYPES.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedMBTI(type)}
                      className={`
                        px-2 py-1 text-xs rounded-md transition-colors
                        ${type === selectedMBTI
                          ? `bg-gradient-to-r ${categoryColor} text-white`
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }
                      `}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold transition-colors"
              >
                {uiStrings.close[lang]}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
