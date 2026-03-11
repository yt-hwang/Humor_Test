"use client";

import React, { useCallback, useState } from "react";
import type { Lang } from "../context/LangContext";

interface MatchInfo { code: string; nickname: string; reason: string }

interface SaveImageButtonProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
  fileName?: string;
  userName?: string;
  code: string;
  nickname: string;
  summary: string;
  bestMatch?: MatchInfo;
  worstMatch?: MatchInfo;
  lang?: Lang;
}


// Aligned with ui.ts official names (emoji included in getCat)
const i18n = {
  ko: {
    title: "개그유형 테스트",
    userSuffix: "님의 개그코드",
    defaultTitle: "나의 개그코드",
    best: "환상의 궁합",
    worst: "최악의 궁합",
    mood: "분위기메이커형",
    roast: "팩폭형",
    concept: "컨셉형",
    wild: "예측불가형",
  },
  en: {
    title: "Humor Type Test",
    userSuffix: "'s Humor Type",
    defaultTitle: "My Humor Type",
    best: "Best Match",
    worst: "Worst Match",
    mood: "Mood Makers",
    roast: "Truth Bombers",
    concept: "Concept Creators",
    wild: "Wildcards",
  },
};

function getCat(code: string, lang: Lang) {
  const t = i18n[lang];
  const f = code[0], s = code[1], d = code[3];
  if (s === "B" && f === "I") return { c: ["#4c1d95", "#6d28d9", "#a78bfa", "#ede9fe"], label: t.wild, emoji: "💜" };
  if (s === "B" && f === "O") return { c: ["#1e3a8a", "#2563eb", "#93c5fd", "#dbeafe"], label: t.concept, emoji: "💙" };
  if (s === "N" && d === "D") return { c: ["#7f1d1d", "#dc2626", "#fca5a5", "#fee2e2"], label: t.roast, emoji: "❤️" };
  return { c: ["#78350f", "#d97706", "#fcd34d", "#fef9c3"], label: t.mood, emoji: "💛" };
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.arcTo(x + w, y, x + w, y + h, r); // workaround: moveTo first
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const hasSpaces = text.includes(" ");
  if (!hasSpaces) {
    // Character-based wrapping (Korean, CJK)
    const result: string[] = [];
    let cur = "";
    for (const ch of text) {
      if (ctx.measureText(cur + ch).width > maxW) { result.push(cur); cur = ch; }
      else cur += ch;
    }
    if (cur) result.push(cur);
    return result;
  }
  // Word-boundary wrapping (English, mixed)
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const word of words) {
    const test = cur ? `${cur} ${word}` : word;
    if (ctx.measureText(test).width > maxW && cur) {
      lines.push(cur);
      cur = word;
    } else {
      cur = test;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function renderCard(
  ctx: CanvasRenderingContext2D, W: number,
  p: { code: string; nickname: string; summary: string; userName?: string;
    bestMatch?: MatchInfo; worstMatch?: MatchInfo; lang: Lang },
  dry: boolean
): number {
  const { code, nickname, summary, userName, bestMatch, worstMatch, lang } = p;
  const t = i18n[lang];
  const cat = getCat(code, lang);
  const [darkC, midC, accentC, paleC] = cat.c;

  const CARD_SIDE = 56;
  const CARD_W = W - CARD_SIDE * 2;
  const INNER = 56;
  const TEXT_W = CARD_W - INNER * 2;
  const cx = W / 2;

  ctx.textBaseline = "top";
  ctx.textAlign = "center";

  // Pre-measure
  ctx.font = "400 28px sans-serif";
  const sumLines = wrapLines(ctx, summary, TEXT_W);

  // Measure match reason lines
  ctx.font = "400 20px sans-serif";
  const halfBoxW = (CARD_W - INNER * 2 - 24) / 2; // 24px gap between boxes
  const reasonMaxW = halfBoxW - 40; // 20px padding each side
  const bestReasonLines = bestMatch ? wrapLines(ctx, bestMatch.reason, reasonMaxW) : [];
  const worstReasonLines = worstMatch ? wrapLines(ctx, worstMatch.reason, reasonMaxW) : [];
  const maxReasonLines = Math.max(bestReasonLines.length, worstReasonLines.length);

  // --- Layout pass ---
  let y = 0;
  const g = (n: number) => { y += n; };

  g(60); // card top padding

  const titleY = y; g(28); // title font
  g(28);

  const badgeY = y; g(42); // badge
  g(32);

  const headlineY = y; g(36); // headline
  g(40);

  const codeFontSz = 88;
  const pillPadV = 24;
  const pillH = codeFontSz + pillPadV * 2;
  const codePillY = y; g(pillH);
  g(28);

  const nicknameY = y; g(44); // nickname
  g(20);

  const divY = y; g(3);
  g(24);

  const sumY = y;
  const lineH = 40;
  g(sumLines.length * lineH);
  g(40);

  // Match section (side by side)
  const matchY = y;
  const matchLabelH = 30;
  const matchCodeH = 34;
  const matchNicknameH = 26;
  const matchReasonLineH = 26;
  const matchBoxInnerH = 24 + matchLabelH + 12 + matchCodeH + 4 + matchNicknameH + 16 + maxReasonLines * matchReasonLineH + 24;
  const matchBoxH = Math.max(matchBoxInnerH, 180);
  if (bestMatch || worstMatch) { g(matchBoxH); }

  g(60); // card bottom padding

  const cardH = y;
  const CARD_Y = 64;
  const H = CARD_Y + cardH + 64;

  if (dry) return H;

  // ==========================================
  // RENDER
  // ==========================================
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, darkC);
  bg.addColorStop(0.3, midC);
  bg.addColorStop(0.7, midC);
  bg.addColorStop(1, darkC);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Blobs
  ctx.globalAlpha = 0.06;
  ctx.fillStyle = "#fff";
  ctx.beginPath(); ctx.arc(-60, H * 0.25, 300, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(W + 60, H * 0.7, 340, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;

  // Card shadow
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.4)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 12;
  ctx.fillStyle = "rgba(0,0,0,0.01)";
  roundRect(ctx, CARD_SIDE, CARD_Y, CARD_W, cardH, 32);
  ctx.fill();
  ctx.restore();

  // Card glass
  ctx.fillStyle = "rgba(255,255,255,0.07)";
  roundRect(ctx, CARD_SIDE, CARD_Y, CARD_W, cardH, 32);
  ctx.fill();

  // Card top highlight
  ctx.save();
  roundRect(ctx, CARD_SIDE, CARD_Y, CARD_W, cardH, 32);
  ctx.clip();
  const hl = ctx.createLinearGradient(0, CARD_Y, 0, CARD_Y + 160);
  hl.addColorStop(0, "rgba(255,255,255,0.08)");
  hl.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = hl;
  ctx.fillRect(CARD_SIDE, CARD_Y, CARD_W, 160);
  ctx.restore();

  // Card border
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1.5;
  roundRect(ctx, CARD_SIDE, CARD_Y, CARD_W, cardH, 32);
  ctx.stroke();

  const o = CARD_Y; // offset

  // Title
  ctx.textAlign = "center"; ctx.textBaseline = "top";
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "500 26px sans-serif";
  ctx.fillText(t.title, cx, o + titleY);

  // Badge
  const badgeTxt = `${cat.emoji}  ${cat.label}`;
  ctx.font = "600 24px sans-serif";
  const bw = ctx.measureText(badgeTxt).width + 40;
  const bh = 42;
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  roundRect(ctx, cx - bw / 2, o + badgeY - 2, bw, bh, 21);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  roundRect(ctx, cx - bw / 2, o + badgeY - 2, bw, bh, 21);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.fillText(badgeTxt, cx, o + badgeY + 8);

  // Headline
  const headline = userName ? `${userName}${t.userSuffix}` : t.defaultTitle;
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.font = "600 34px sans-serif";
  ctx.fillText(headline, cx, o + headlineY);

  // Code pill
  ctx.font = `900 ${codeFontSz}px sans-serif`;
  const ctw = ctx.measureText(code).width;
  const pw = ctw + 64;
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  roundRect(ctx, cx - pw / 2, o + codePillY, pw, pillH, 22);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  roundRect(ctx, cx - pw / 2, o + codePillY, pw, pillH, 22);
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.fillText(code, cx, o + codePillY + pillH / 2);
  ctx.textBaseline = "top";

  // Nickname
  ctx.fillStyle = paleC;
  ctx.font = "700 42px sans-serif";
  ctx.fillText(nickname, cx, o + nicknameY);

  // Divider
  ctx.strokeStyle = accentC;
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(cx - 32, o + divY); ctx.lineTo(cx + 32, o + divY); ctx.stroke();
  ctx.globalAlpha = 1;

  // Summary
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.font = "400 28px sans-serif";
  sumLines.forEach((line, i) => ctx.fillText(line, cx, o + sumY + i * lineH));

  // === Match boxes (side by side) ===
  if (bestMatch || worstMatch) {
    const mLeft = CARD_SIDE + INNER;
    const mGap = 24;
    const mBoxW = halfBoxW;
    const mBoxY = o + matchY;

    const drawBox = (
      x: number, match: MatchInfo | undefined, label: string, icon: string,
      accentCol: string, reasonLines: string[]
    ) => {
      if (!match) return;
      // Background — white-opacity glass
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      roundRect(ctx, x, mBoxY, mBoxW, matchBoxH, 16);
      ctx.fill();
      // Subtle border
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 1;
      roundRect(ctx, x, mBoxY, mBoxW, matchBoxH, 16);
      ctx.stroke();
      // Left accent bar
      ctx.fillStyle = accentCol;
      roundRect(ctx, x, mBoxY, 5, matchBoxH, 3);
      ctx.fill();

      ctx.textAlign = "left"; ctx.textBaseline = "top";
      let ty = mBoxY + 24;
      // Label with icon
      ctx.fillStyle = accentCol;
      ctx.font = "700 22px sans-serif";
      ctx.fillText(`${icon}  ${label}`, x + 24, ty);
      ty += matchLabelH + 12;
      // Code (large, bold, separate line)
      ctx.fillStyle = "#ffffff";
      ctx.font = "800 28px sans-serif";
      ctx.fillText(match.code, x + 24, ty);
      ty += matchCodeH + 4;
      // Nickname (separate line, smaller)
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.font = "500 20px sans-serif";
      ctx.fillText(match.nickname, x + 24, ty);
      ty += matchNicknameH + 16;
      // Reason
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.font = "400 20px sans-serif";
      reasonLines.forEach((line) => {
        ctx.fillText(line, x + 24, ty);
        ty += matchReasonLineH;
      });

      ctx.textAlign = "center";
    };

    drawBox(mLeft, bestMatch, t.best, "✅", "rgba(134,239,172,0.9)", bestReasonLines);
    drawBox(mLeft + mBoxW + mGap, worstMatch, t.worst, "❌", "rgba(252,165,165,0.9)", worstReasonLines);
  }

  // Watermark
  ctx.textAlign = "center"; ctx.textBaseline = "top";
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.font = "400 22px sans-serif";
  ctx.fillText("humor-test.vercel.app", cx, H - 44);

  return H;
}

function showImageOverlay(dataUrl: string, lang: Lang) {
  const overlay = document.createElement("div");
  overlay.style.cssText = "position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.92);display:flex;flex-direction:column;align-items:center;overflow-y:auto;-webkit-overflow-scrolling:touch";
  const tip = document.createElement("div");
  tip.style.cssText = "position:sticky;top:0;width:100%;padding:14px 16px;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);display:flex;justify-content:space-between;align-items:center;font:500 15px sans-serif;color:#fff;z-index:1;flex-shrink:0";
  tip.innerHTML = `<span>${lang === "ko" ? "이미지를 꾹 눌러 사진에 저장" : "Long-press image to save to Photos"}</span>`;
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕";
  closeBtn.style.cssText = "background:rgba(255,255,255,0.15);border:none;color:#fff;font-size:18px;width:32px;height:32px;border-radius:50%;cursor:pointer;flex-shrink:0";
  closeBtn.onclick = () => document.body.removeChild(overlay);
  tip.appendChild(closeBtn);
  const img = document.createElement("img");
  img.src = dataUrl;
  img.style.cssText = "width:92%;max-width:540px;margin:16px auto;border-radius:12px";
  overlay.appendChild(tip);
  overlay.appendChild(img);
  document.body.appendChild(overlay);
}

export default function SaveImageButton({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  targetRef, fileName = "my-humor-type",
  userName, code, nickname, summary, bestMatch, worstMatch, lang = "ko",
}: SaveImageButtonProps) {
  const [saving, setSaving] = useState(false);

  const handleSave = useCallback(async () => {
    if (saving) return;
    setSaving(true);

    try {
      const W = 1080;
      const canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = 4000;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const props = { code, nickname, summary, userName, bestMatch, worstMatch, lang };
      const H = renderCard(ctx, W, props, true);
      canvas.height = H;
      ctx.clearRect(0, 0, W, H);
      renderCard(ctx, W, props, false);

      const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/png"));
      if (!blob) { alert("이미지 생성에 실패했습니다."); return; }

      const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
      const headline = userName ? `${userName}${i18n[lang].userSuffix}` : i18n[lang].defaultTitle;

      // Mobile: try Web Share API (HTTPS only), fallback to image overlay
      if (isMobile) {
        if (navigator.share) {
          try {
            const file = new File([blob], `${fileName}.png`, { type: "image/png" });
            await navigator.share({ files: [file], title: headline });
            return;
          } catch (e) {
            if (e instanceof DOMException && e.name === "AbortError") return;
          }
        }
        // Fallback: show image overlay for long-press save to Photos
        showImageOverlay(canvas.toDataURL("image/png"), lang);
        return;
      }

      // Desktop: direct download
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `${fileName}.png`; a.style.display = "none";
      document.body.appendChild(a); a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
    } catch (err) {
      console.error("Image save failed:", err);
      alert("이미지 저장 오류: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setSaving(false);
    }
  }, [saving, code, nickname, summary, bestMatch, worstMatch, userName, fileName, lang]);

  return (
    <button onClick={handleSave} disabled={saving}
      className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white text-sm font-medium transition-all duration-200 hover:scale-105 disabled:scale-100 aspect-square">
      {saving ? (
        <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )}
    </button>
  );
}
