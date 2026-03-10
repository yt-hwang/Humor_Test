"use client";

import React, { useCallback, useState } from "react";
import html2canvas from "html2canvas";

interface SaveImageButtonProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
  fileName?: string;
}

export default function SaveImageButton({ targetRef, fileName = "my-gag-code" }: SaveImageButtonProps) {
  const [saving, setSaving] = useState(false);

  const handleSave = useCallback(() => {
    alert("준비중인 기능입니다!");
  }, []);

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
