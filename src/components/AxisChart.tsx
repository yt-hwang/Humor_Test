"use client";

import { AxisScores } from "../data/results";

interface AxisChartProps {
  scores: AxisScores;
}

const axisConfig = {
  OI: {
    leftLabel: "외향형",
    rightLabel: "내향형",
    color: "from-blue-400 to-blue-600"
  },
  NB: {
    leftLabel: "직관형", 
    rightLabel: "관찰형",
    color: "from-yellow-400 to-orange-500"
  },
  VP: {
    leftLabel: "사고형",
    rightLabel: "감정형", 
    color: "from-green-400 to-green-600"
  },
  BD: {
    leftLabel: "계획형",
    rightLabel: "탐구형",
    color: "from-purple-400 to-purple-600"
  }
};

export default function AxisChart({ scores }: AxisChartProps) {
  // 1-7점 척도를 중심 50% 기준으로 변환
  const getPercentage = (score: number) => {
    // 1점 = 0%, 4점 = 50%, 7점 = 100%
    return ((score - 1) / 6) * 100;
  };

  const getDominantTrait = (axis: keyof AxisScores, score: number) => {
    const config = axisConfig[axis];
    return score > 4 ? config.rightLabel : config.leftLabel;
  };

  const getPercentageText = (axis: keyof AxisScores, score: number) => {
    const percentage = getPercentage(score);
    const dominantTrait = getDominantTrait(axis, score);
    return `${Math.round(percentage)}% ${dominantTrait}`;
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
        <span>📊</span>
        개그 성향 분석
      </h3>
      
      <div className="space-y-6">
        {(Object.keys(scores) as Array<keyof AxisScores>).map((axis) => {
          const score = scores[axis];
          const config = axisConfig[axis];
          const percentage = getPercentage(score);
          const percentageText = getPercentageText(axis, score);
          
          return (
            <div key={axis} className="space-y-2">
              {/* 제목과 퍼센트 */}
              <div className="text-center">
                <div className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  {percentageText}
                </div>
              </div>
              
              {/* 막대 그래프 */}
              <div className="relative">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span className="font-medium">{config.leftLabel}</span>
                  <span className="font-medium">{config.rightLabel}</span>
                </div>
                
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  {/* 배경 그라데이션 */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${config.color} opacity-20`}></div>
                  
                  {/* 슬라이더 */}
                  <div 
                    className={`absolute top-1 bottom-1 w-1 bg-gradient-to-r ${config.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ left: `${percentage}%` }}
                  ></div>
                  
                  {/* 슬라이더 핸들 */}
                  <div 
                    className={`absolute top-0 bottom-0 w-4 h-8 bg-gradient-to-r ${config.color} rounded-full shadow-lg transform -translate-x-2 transition-all duration-1000 ease-out flex items-center justify-center`}
                    style={{ left: `${percentage}%` }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* 축 레이블 */}
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 