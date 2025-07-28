"use client";

import { AxisScores } from "../data/results";

interface AxisChartProps {
  scores: AxisScores;
}

const axisConfig = {
  OI: {
    leftLabel: "즉흥적",
    rightLabel: "짜여진",
    color: "from-blue-400 to-blue-600"
  },
  NB: {
    leftLabel: "직관적", 
    rightLabel: "추상적",
    color: "from-yellow-400 to-orange-500"
  },
  VP: {
    leftLabel: "언어적",
    rightLabel: "비언어적", 
    color: "from-green-400 to-green-600"
  },
  BD: {
    leftLabel: "밝은",
    rightLabel: "어두운",
    color: "from-purple-400 to-purple-600"
  }
};

export default function AxisChart({ scores }: AxisChartProps) {
  // 디버깅용 로그
  console.log('AxisChart scores:', scores);
  
  // 1-7점 척도를 중심 50% 기준으로 변환
  const getPercentage = (score: number) => {
    // 1점 = 0%, 4점 = 50%, 7점 = 100%
    return ((score - 1) / 6) * 100;
  };

  const getDominantTrait = (axis: keyof AxisScores, score: number) => {
    const config = axisConfig[axis];
    // 기존 로직과 일치: 점수가 4보다 크면 오른쪽 특성 선택
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
      
      <div className="space-y-8">
        {(Object.keys(scores) as Array<keyof AxisScores>).map((axis) => {
          const score = scores[axis];
          const config = axisConfig[axis];
          const percentage = getPercentage(score);
          const percentageText = getPercentageText(axis, score);
          
          return (
            <div key={axis} className="space-y-3">
              {/* 제목과 퍼센트 */}
              <div className="text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  {percentageText}
                </div>
              </div>
              
              {/* 막대 그래프 */}
              <div className="relative">
                <div className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                  <span className="text-left">{config.leftLabel}</span>
                  <span className="text-right">{config.rightLabel}</span>
                </div>
                
                <div className="relative h-10 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                  {/* 중앙 구분선 */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
                  
                  {/* 배경 그라데이션 */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${config.color} opacity-10`}></div>
                  
                  {/* 슬라이더 */}
                  <div 
                    className={`absolute top-2 bottom-2 w-1 bg-gradient-to-r ${config.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ left: `${percentage}%` }}
                  ></div>
                  
                  {/* 슬라이더 핸들 */}
                  <div 
                    className={`absolute top-1 bottom-1 w-6 h-8 bg-gradient-to-r ${config.color} rounded-full shadow-lg transform -translate-x-3 transition-all duration-1000 ease-out flex items-center justify-center border-2 border-white`}
                    style={{ left: `${percentage}%` }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                  </div>
                  
                  {/* 중심점 표시 */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                
                {/* 축 레이블 */}
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>0%</span>
                  <span className="font-medium">50%</span>
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