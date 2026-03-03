"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import ShareButtons from "../../src/components/ShareButtons";
import { recordVisit } from "../../src/utils/analytics";
import { gagResults, calculateAxisScores, getTopCompatibleTypes, getCompatibilityLabel } from "../../src/data/results";
import type { AxisScores, GagResult } from "../../src/data/results";
import { decodeAnswers } from "../../src/utils/encodeAnswers";
import AxisBarChart from "../../src/components/AxisBarChart";
import StrengthsWeaknesses from "../../src/components/StrengthsWeaknesses";
import React from "react";

// Color palette per code character
const codeColors: Record<string, string> = {
  O: '#60A5FA', I: '#A78BFA',
  N: '#34D399', B: '#FFD60A',
  V: '#FBBF24', P: '#F472B6',
};
const bdColors: Record<string, string> = { B: '#FBBF24', D: '#FF6B6B' };

export default function ResultClient() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code") || "ONVB";
  const user = searchParams.get("user") || "";
  const encodedAnswers = searchParams.get("answers");
  const displayUser = user.trim();

  const answers = encodedAnswers ? decodeAnswers(encodedAnswers) : [];
  const axisScores = answers.length > 0 ? calculateAxisScores(answers) : null;

  const isNeutralAll = axisScores && axisScores.OI === 4 && axisScores.NB === 4 && axisScores.VP === 4 && axisScores.BD === 4;
  const effectiveCode = isNeutralAll ? "INPB" : code;
  const resultData = gagResults[effectiveCode] || gagResults["ONVB"];
  const { nickname, summary, examples } = resultData;

  useEffect(() => {
    recordVisit('/result');
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', { content_type: 'test_result', item_id: code, item_name: nickname });
    }
  }, [code, nickname]);

  const shareData = { code: effectiveCode, nickname, summary, examples };

  const codeToScores = (c: string): AxisScores => ({
    OI: c[0] === 'O' ? 5 : 3,
    NB: c[1] === 'N' ? 5 : 3,
    VP: c[2] === 'V' ? 5 : 3,
    BD: c[3] === 'B' ? 5 : 3,
  });
  const displayScores: AxisScores = axisScores ?? codeToScores(effectiveCode);

  const axisLabels = [
    effectiveCode[0] === 'O' ? '준비형' : '즉흥형',
    effectiveCode[1] === 'N' ? '직관형' : '병맛형',
    effectiveCode[2] === 'V' ? '말개그' : '몸개그',
    effectiveCode[3] === 'B' ? '밝음' : '다크',
  ];

  return (
    <main className="spotlight-bg flex flex-col items-center p-4 pt-8 pb-16">
      <div className="w-full max-w-lg">

        {/* ── Result hero card ─────────────────────────────── */}
        <div id="result-container" className="s-card p-8 mb-4 fu">

          {/* User headline */}
          <p
            className="text-center font-bold mb-4"
            style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', letterSpacing: '0.06em' }}
          >
            {displayUser
              ? <><span style={{ color: 'var(--yellow)' }}>{displayUser}</span>의 개그코드</>
              : '나의 개그코드'}
          </p>

          {/* Code badge */}
          <div className="flex justify-center mb-3">
            <span className="code-badge">{effectiveCode}</span>
          </div>

          {/* Code letter labels */}
          <div className="flex justify-center gap-5 mb-5">
            {effectiveCode.split('').map((ch, i) => {
              const color = i === 3 ? bdColors[ch] ?? codeColors[ch] : codeColors[ch];
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color }}>{ch}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>{axisLabels[i]}</span>
                </div>
              );
            })}
          </div>

          {/* Nickname */}
          <div className="text-center mb-6">
            <span
              className="font-display"
              style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: 'var(--text)' }}
            >
              {nickname}
            </span>
          </div>

          {/* Divider */}
          <div className="divider mb-6" />

          {/* Summary */}
          <p
            className="text-center leading-relaxed break-keep whitespace-pre-line"
            style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.75 }}
          >
            {summary}
          </p>
        </div>

        {/* ── Axis bar chart ───────────────────────────────── */}
        <AxisBarChart scores={displayScores} />

        {/* ── Tabs: strengths / compat ─────────────────────── */}
        <Tabs axisScores={displayScores} resultData={resultData} />

        {/* ── Share / actions ─────────────────────────────── */}
        <div className="s-card p-6 mb-4 fu3">
          <p
            className="text-center text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: 'var(--text-muted)' }}
          >
            공유 · 다음
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            <ShareButtons data={shareData} />
            <Link href="/" className="btn-dim">
              다시 하기
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/guide" className="btn-dim">
              개그코드 설명
            </Link>
            <Link href="/types" className="btn-dim">
              전체 유형
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

/* ── Tabs component ──────────────────────────────────────── */
function Tabs({ axisScores, resultData }: { axisScores: AxisScores; resultData: GagResult }) {
  const [active, setActive] = React.useState<'strengths' | 'compat'>('strengths');
  const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);
  const top3 = getTopCompatibleTypes(resultData.code);

  return (
    <div className="mb-4 fu2">
      {/* Tab buttons */}
      <div className="flex gap-2 mb-3">
        <button
          className={`btn-dim flex-1 justify-center${active === 'strengths' ? ' sel' : ''}`}
          onClick={() => setActive('strengths')}
        >
          강점 · 약점
        </button>
        <button
          className={`btn-dim flex-1 justify-center${active === 'compat' ? ' sel' : ''}`}
          onClick={() => setActive('compat')}
        >
          개그 궁합
        </button>
      </div>

      {/* Strengths / weaknesses */}
      {active === 'strengths' && (
        <StrengthsWeaknesses
          scores={axisScores}
          customStrengths={resultData.strengths}
          customWeaknesses={resultData.weaknesses}
        />
      )}

      {/* Compatibility */}
      {active === 'compat' && (
        <div className="s-card p-6 mb-4 fi">

          {/* Best / worst match */}
          {resultData.bestMatch && resultData.worstMatch && (
            <div className="mb-6">
              <div className="grid grid-cols-1 gap-3">
                {/* Best */}
                <div style={{ background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: '0.875rem', padding: '1rem' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ fontSize: '0.65rem', color: 'var(--green)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>최고 궁합</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span style={{ fontFamily: 'var(--font-display)', color: 'var(--green)', fontSize: '1.125rem' }}>
                      {resultData.bestMatch}
                    </span>
                    <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.9375rem' }}>
                      {gagResults[resultData.bestMatch]?.nickname}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                    {resultData.bestMatchReason}
                  </p>
                </div>

                {/* Worst */}
                <div style={{ background: 'rgba(255,107,107,0.07)', border: '1px solid rgba(255,107,107,0.2)', borderRadius: '0.875rem', padding: '1rem' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ fontSize: '0.65rem', color: 'var(--red)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>최악 궁합</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span style={{ fontFamily: 'var(--font-display)', color: 'var(--red)', fontSize: '1.125rem' }}>
                      {resultData.worstMatch}
                    </span>
                    <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.9375rem' }}>
                      {gagResults[resultData.worstMatch]?.nickname}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                    {resultData.worstMatchReason}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TOP 3 accordion */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: 'var(--text-muted)' }}
            >
              잘 맞는 유형 TOP 3
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {top3.map(({ code, result, score }, i) => {
                const compat = getCompatibilityLabel(score);
                const isOpen = openAccordion === i;
                return (
                  <div
                    key={code}
                    style={{ border: '1px solid var(--border)', borderRadius: '0.875rem', overflow: 'hidden' }}
                  >
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-left"
                      style={{ background: 'var(--bg-raised)' }}
                      onClick={() => setOpenAccordion(isOpen ? null : i)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.1rem' }}>{compat.emoji}</span>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontFamily: 'var(--font-display)', color: 'var(--yellow)', fontSize: '0.875rem' }}>{code}</span>
                            <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.875rem' }}>{result.nickname}</span>
                          </div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '0.1rem' }}>
                            {compat.label} · {compat.desc}
                          </div>
                        </div>
                      </div>
                      <svg
                        width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ color: 'var(--text-dim)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0.875rem 1rem', borderTop: '1px solid var(--border)', background: 'var(--bg-card)' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', lineHeight: 1.65 }}>
                          {result.summary}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
