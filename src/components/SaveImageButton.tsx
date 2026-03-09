"use client";

import React, { useCallback, useState } from "react";
import html2canvas from "html2canvas";

interface SaveImageButtonProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
  fileName?: string;
}

export default function SaveImageButton({ targetRef, fileName = "my-gag-code" }: SaveImageButtonProps) {
  const [saving, setSaving] = useState(false);

  const handleSave = useCallback(async () => {
    if (!targetRef.current || saving) return;
    setSaving(true);

    try {
      const el = targetRef.current;

      // html2canvas 옵션: 고해상도 + 배경 포함
      const canvas = await html2canvas(el, {
        scale: 2, // 레티나 대응 고해상도
        useCORS: true,
        backgroundColor: null, // 투명 배경 (그라디언트 유지)
        logging: false,
        // 캡처 영역 패딩 추가
        x: -16,
        y: -16,
        width: el.offsetWidth + 32,
        height: el.offsetHeight + 32,
      });

      // 배경 그라디언트를 캔버스에 그리기
      const finalCanvas = document.createElement("canvas");
      finalCanvas.width = canvas.width;
      finalCanvas.height = canvas.height;
      const ctx = finalCanvas.getContext("2d");
      if (!ctx) return;

      // 배경 그라디언트 (from-indigo-100 via-purple-50 to-pink-100)
      const gradient = ctx.createLinearGradient(0, 0, finalCanvas.width, finalCanvas.height);
      gradient.addColorStop(0, "#e0e7ff"); // indigo-100
      gradient.addColorStop(0.5, "#faf5ff"); // purple-50
      gradient.addColorStop(1, "#fce7f3"); // pink-100
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

      // 캡처된 콘텐츠 그리기
      ctx.drawImage(canvas, 0, 0);

      // 워터마크 추가
      const fontSize = Math.round(finalCanvas.width * 0.028);
      ctx.font = `${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.fillStyle = "rgba(107, 114, 128, 0.6)";
      ctx.textAlign = "center";
      ctx.fillText("humor-test.vercel.app", finalCanvas.width / 2, finalCanvas.height - fontSize);

      const blob = await new Promise<Blob | null>((resolve) =>
        finalCanvas.toBlob(resolve, "image/png")
      );
      if (!blob) return;

      // 모바일: Web Share API로 공유 (사진첩 저장 가능)
      if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
        const file = new File([blob], `${fileName}.png`, { type: "image/png" });
        try {
          await navigator.share({
            files: [file],
            title: "나의 개그코드 결과",
          });
          return;
        } catch {
          // 공유 취소 또는 미지원 시 다운로드로 fallback
        }
      }

      // 데스크탑 또는 fallback: 다운로드
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Image save failed:", err);
    } finally {
      setSaving(false);
    }
  }, [targetRef, fileName, saving]);

  return (
    <button
      onClick={handleSave}
      disabled={saving}
      className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white text-sm font-medium transition-all duration-200 hover:scale-105 disabled:scale-100 aspect-square"
    >
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
