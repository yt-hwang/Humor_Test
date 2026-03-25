"use client";

import { useState } from "react";
import { useLang } from "../context/LangContext";
import { t } from "../data/ui";
import { mbtiMatrix, humorLetterInfo, getHighlightedLettersForCode, getCompatibilityColor, MatrixCell } from "../data/mbtiMatrix";
import { mbtiMatrixEn } from "../data/mbtiMatrix.en";

interface MBTIMatrixProps {
  typeCode: string;
  categoryColor: string;
}

const humorLetters = ['O', 'I', 'N', 'B', 'V', 'P', 'Br', 'Da'];
const mbtiLetters = ['E', 'I', 'N', 'S', 'T', 'F', 'J', 'P'];

export default function MBTIMatrix({ typeCode, categoryColor }: MBTIMatrixProps) {
  const { lang } = useLang();
  const [selectedCell, setSelectedCell] = useState<MatrixCell | null>(null);

  const matrix = lang === 'en' ? mbtiMatrixEn : mbtiMatrix;
  const highlightedLetters = getHighlightedLettersForCode(typeCode);

  const getCell = (humorLetter: string, mbtiLetter: string): MatrixCell | undefined => {
    return matrix.find(c => c.humorLetter === humorLetter && c.mbtiLetter === mbtiLetter);
  };

  const getCompatibilityBgColor = (compatibility: string): string => {
    switch (compatibility) {
      case 'high': return 'bg-green-400 hover:bg-green-500';
      case 'medium': return 'bg-yellow-400 hover:bg-yellow-500';
      case 'low': return 'bg-red-400 hover:bg-red-500';
      case 'neutral': return 'bg-gray-300 hover:bg-gray-400';
      default: return 'bg-gray-200 hover:bg-gray-300';
    }
  };

  const getCompatibilityLabel = (compatibility: string): string => {
    switch (compatibility) {
      case 'high': return lang === 'en' ? 'High Synergy' : '높은 시너지';
      case 'medium': return lang === 'en' ? 'Medium' : '보통';
      case 'low': return lang === 'en' ? 'Low Synergy' : '낮은 시너지';
      case 'neutral': return lang === 'en' ? 'Neutral' : '중립';
      default: return '';
    }
  };

  return (
    <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
        <span>📊</span>
        {t("typeDetailMBTIMatrix", lang)}
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        {t("typeDetailMatrixDesc", lang)}
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded bg-green-400"></span>
          <span>{lang === 'en' ? 'High' : '높음'}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded bg-yellow-400"></span>
          <span>{lang === 'en' ? 'Medium' : '보통'}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded bg-gray-300"></span>
          <span>{lang === 'en' ? 'Neutral' : '중립'}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded bg-red-400"></span>
          <span>{lang === 'en' ? 'Low' : '낮음'}</span>
        </div>
      </div>

      {/* Matrix Grid */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[480px]">
          {/* Header Row */}
          <div className="flex">
            <div className="w-12 h-10 flex-shrink-0"></div>
            {mbtiLetters.map((letter) => (
              <div
                key={letter}
                className="flex-1 h-10 flex items-center justify-center text-sm font-bold text-gray-700"
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {humorLetters.map((humorLetter) => {
            const isHighlighted = highlightedLetters.includes(humorLetter);
            const letterInfo = humorLetterInfo[humorLetter as keyof typeof humorLetterInfo];

            return (
              <div key={humorLetter} className="flex">
                {/* Row Header */}
                <div
                  className={`w-12 h-12 flex-shrink-0 flex items-center justify-center text-sm font-bold rounded-l-lg ${
                    isHighlighted
                      ? `bg-gradient-to-r ${categoryColor} text-white`
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  title={lang === 'en' ? letterInfo.en : letterInfo.ko}
                >
                  {humorLetter}
                </div>

                {/* Cells */}
                {mbtiLetters.map((mbtiLetter) => {
                  const cell = getCell(humorLetter, mbtiLetter);
                  if (!cell) return <div key={mbtiLetter} className="flex-1 h-12 bg-gray-50"></div>;

                  return (
                    <button
                      key={mbtiLetter}
                      onClick={() => setSelectedCell(cell)}
                      className={`flex-1 h-12 ${getCompatibilityBgColor(cell.compatibility)} transition-colors cursor-pointer ${
                        isHighlighted ? 'ring-2 ring-white/50' : ''
                      } ${selectedCell?.humorLetter === humorLetter && selectedCell?.mbtiLetter === mbtiLetter ? 'ring-2 ring-blue-600' : ''}`}
                      title={`${humorLetter} × ${mbtiLetter}`}
                    >
                      <span className="sr-only">{humorLetter} × {mbtiLetter}</span>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-2 text-center">
        {t("typeDetailClickForDetails", lang)}
      </p>

      {/* Selected Cell Detail */}
      {selectedCell && (
        <div className="mt-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${getCompatibilityColor(selectedCell.compatibility)}`}>
                {selectedCell.humorLetter} × {selectedCell.mbtiLetter}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${getCompatibilityColor(selectedCell.compatibility)}`}>
                {getCompatibilityLabel(selectedCell.compatibility)}
              </span>
            </div>
            <button
              onClick={() => setSelectedCell(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed break-keep">
            {selectedCell.relationship}
          </p>
        </div>
      )}
    </section>
  );
}
