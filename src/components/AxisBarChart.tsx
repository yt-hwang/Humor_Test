import React from 'react';

interface AxisScores {
  OI: number; // Organized vs Improvised
  NB: number; // Intuitive vs Abstract  
  VP: number; // Verbal vs Physical
  BD: number; // Bright vs Dark
}

interface AxisBarChartProps {
  scores: AxisScores;
}

interface AxisConfig {
  leftLabel: string;
  rightLabel: string;
  leftKorean: string;
  rightKorean: string;
  color: string;
}

const axisConfigs: Record<keyof AxisScores, AxisConfig> = {
  OI: {
    leftLabel: "Organized",
    rightLabel: "Improvised", 
    leftKorean: "짜여진",
    rightKorean: "즉흥적",
    color: "from-blue-400 to-indigo-400" // 컨셉형 색상
  },
  NB: {
    leftLabel: "Intuitive",
    rightLabel: "Abstract",
    leftKorean: "직관적", 
    rightKorean: "추상적",
    color: "from-purple-400 to-violet-400" // 예측불가형 색상
  },
  VP: {
    leftLabel: "Verbal",
    rightLabel: "Physical",
    leftKorean: "언어적",
    rightKorean: "비언어적",
    color: "from-yellow-400 to-orange-400" // 분위기메이커형 색상
  },
  BD: {
    leftLabel: "Bright",
    rightLabel: "Dark", 
    leftKorean: "밝은",
    rightKorean: "어두운",
    color: "from-red-400 to-pink-400" // 팩폭형 색상
  }
};

const AxisBarChart: React.FC<AxisBarChartProps> = ({ scores }) => {
  const calculateBarData = (value: number, axis: keyof AxisScores) => {
    const distance = Math.abs(value - 4) / 3; // 0~1
    const percent = 50 + Math.round(distance * 50); // 50~100
    const side = value >= 4 ? 'left' : 'right';
    
    return {
      percent,
      side,
      label: side === 'left' ? axisConfigs[axis].leftKorean : axisConfigs[axis].rightKorean,
      value
    };
  };

  const axes: (keyof AxisScores)[] = ['OI', 'NB', 'VP', 'BD'];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
        <span>📊</span>
        성향 분석
      </h3>
      
      <div className="space-y-6">
        {axes.map((axis) => {
          const barData = calculateBarData(scores[axis], axis);
          const config = axisConfigs[axis];
          
          return (
            <div key={axis} className="space-y-2">
                            {/* 축 레이블 */}
              <div className="flex justify-between text-sm text-gray-600 font-medium mb-1">
                <span>{config.leftKorean} ({config.leftLabel})</span>
                <span>{config.rightKorean} ({config.rightLabel})</span>
              </div>
              
              {/* 막대 그래프 */}
              <div className="relative h-4 bg-gray-200 rounded-full shadow-inner mb-6">
                {/* 전체 배경 막대 */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${config.color} rounded-full opacity-100`}></div>
                
                {/* 동그라미 슬라이더 */}
                {barData.value !== 4 && (
                  <div 
                    className="absolute top-1/2 z-20 transition-all duration-1500 ease-out"
                    style={{
                      left: barData.side === 'left' 
                        ? `${50 - (barData.percent - 50)}%` 
                        : `${50 + (barData.percent - 50)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* 흰색 외곽 동그라미 */}
                    <div className="w-5 h-5 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      {/* 색상 내부 동그라미 */}
                      <div className={`w-3 h-3 bg-gradient-to-r ${config.color} rounded-full`}></div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* 퍼센트와 성향 표시 */}
              {barData.value !== 4 && (
                <div className="text-center mb-2 -mt-8">
                  <div className={`inline-block px-3 py-1 rounded-lg text-sm font-bold text-white bg-gradient-to-r ${config.color} shadow-lg`}>
                    {barData.percent}% {barData.label}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AxisBarChart; 