import React from 'react';
import type { Lang } from '../context/LangContext';
import { t } from '../data/ui';

interface AxisScores {
  OI: number;
  NB: number;
  VP: number;
  BD: number;
}

interface AxisBarChartProps {
  scores: AxisScores;
  lang?: Lang;
}

interface AxisConfig {
  leftLabel: string;
  rightLabel: string;
  leftKorean: string;
  rightKorean: string;
  leftEn: string;
  rightEn: string;
  color: string;
}

const axisConfigs: Record<keyof AxisScores, AxisConfig> = {
  OI: {
    leftLabel: "Organized",
    rightLabel: "Improvised",
    leftKorean: "짜여진",
    rightKorean: "즉흥적",
    leftEn: "Organized",
    rightEn: "Improvised",
    color: "from-blue-400 to-indigo-400"
  },
  NB: {
    leftLabel: "Intuitive",
    rightLabel: "Abstract",
    leftKorean: "직관적",
    rightKorean: "추상적",
    leftEn: "Intuitive",
    rightEn: "Abstract",
    color: "from-purple-400 to-violet-400"
  },
  VP: {
    leftLabel: "Verbal",
    rightLabel: "Physical",
    leftKorean: "언어적",
    rightKorean: "비언어적",
    leftEn: "Verbal",
    rightEn: "Physical",
    color: "from-yellow-400 to-orange-400"
  },
  BD: {
    leftLabel: "Bright",
    rightLabel: "Dark",
    leftKorean: "밝은",
    rightKorean: "어두운",
    leftEn: "Bright",
    rightEn: "Dark",
    color: "from-red-400 to-pink-400"
  }
};

const AxisBarChart: React.FC<AxisBarChartProps> = ({ scores, lang = "ko" }) => {
  const getLeft = (axis: keyof AxisScores) => lang === "en" ? axisConfigs[axis].leftEn : axisConfigs[axis].leftKorean;
  const getRight = (axis: keyof AxisScores) => lang === "en" ? axisConfigs[axis].rightEn : axisConfigs[axis].rightKorean;

  const calculateBarData = (value: number, axis: keyof AxisScores) => {
    const distance = Math.abs(value - 4) / 3;
    const percent = 50 + Math.round(distance * 50);
    const side = value >= 4 ? 'left' : 'right';

    return {
      percent,
      side,
      label: side === 'left' ? getLeft(axis) : getRight(axis),
      value
    };
  };

  const axes: (keyof AxisScores)[] = ['OI', 'NB', 'VP', 'BD'];

  const isNeutralAll =
    scores.OI === 4 && scores.NB === 4 && scores.VP === 4 && scores.BD === 4;

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
        <span>📊</span>
        {t('chartTitle', lang)}
      </h3>

      <div className="space-y-6">
        {axes.map((axis) => {
          const barData = calculateBarData(scores[axis], axis);
          const neutralLabelForAxis =
            axis === 'OI' || axis === 'VP' ? getRight(axis) : getLeft(axis);
          const displayLabel = (barData.value === 4 && isNeutralAll)
            ? neutralLabelForAxis
            : barData.label;
          const positionLeft = barData.value === 4
            ? '50%'
            : (barData.side === 'left' ? `${50 - (barData.percent - 50)}%` : `${50 + (barData.percent - 50)}%`);
          const labelText = barData.value === 4 ? `51% ${displayLabel}` : `${barData.percent}% ${displayLabel}`;
          const config = axisConfigs[axis];

          return (
            <div key={axis} className="space-y-2">
              {/* Axis labels */}
              <div className="flex justify-between text-sm text-gray-600 font-medium mb-1">
                <span>{lang === "en" ? config.leftLabel : `${config.leftKorean} (${config.leftLabel})`}</span>
                <span>{lang === "en" ? config.rightLabel : `${config.rightKorean} (${config.rightLabel})`}</span>
              </div>

              {/* Bar */}
              <div className="relative h-4 bg-gray-200 rounded-full shadow-inner mb-6">
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${config.color} rounded-full opacity-100`}></div>

              <>
                <div
                  className="absolute top-1/2 z-20 transition-all duration-1500 ease-out"
                  style={{
                    left: positionLeft,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-5 h-5 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className={`w-3 h-3 bg-gradient-to-r ${config.color} rounded-full`}></div>
                  </div>
                </div>
                <div
                  className={`absolute z-10 px-2 py-0.5 rounded-md text-xs font-bold text-white bg-gradient-to-r ${config.color} shadow transition-all duration-1500 ease-out`}
                  style={{
                    top: 'calc(100% + 4px)',
                    left: positionLeft,
                    transform: 'translateX(-50%)'
                  }}
                >
                  {labelText}
                </div>
              </>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AxisBarChart;
