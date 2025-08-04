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
    leftLabel: "Natural",
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
              <div className="flex justify-between text-xs text-gray-600 font-medium">
                <span>{config.leftKorean}</span>
                <span>{config.rightKorean}</span>
              </div>
              
              {/* 막대 그래프 */}
              <div className="relative h-10 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                {/* 중앙 기준선 */}
                <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-400 z-10 transform -translate-x-1/2"></div>
                
                {/* 막대 */}
                <div 
                  className={`absolute top-0 h-full transition-all duration-1500 ease-out bg-gradient-to-r ${config.color}`}
                  style={{
                    left: barData.side === 'left' ? `${50 - barData.percent}%` : '50%',
                    right: barData.side === 'right' ? `${50 - barData.percent}%` : '50%',
                  }}
                />
                
                                 {/* 퍼센트 표시 */}
                 {barData.value !== 4 && (
                   <div 
                     className={`absolute top-1/2 transform -translate-y-1/2 text-xs font-bold text-white z-20 px-2 py-1 rounded-full shadow-lg bg-gradient-to-r ${config.color}`}
                     style={{
                       left: barData.side === 'left' 
                         ? `${50 - (barData.percent - 50)}%` 
                         : `${50 + (barData.percent - 50)}%`,
                       transform: `translate(-50%, -50%) ${barData.side === 'left' ? 'translateX(-100%)' : ''}`
                     }}
                   >
                     {barData.label} {barData.percent}%
                   </div>
                 )}
              </div>
              
              {/* 영어 레이블 */}
              <div className="flex justify-between text-xs text-gray-500">
                <span>{config.leftLabel}</span>
                <span>{config.rightLabel}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AxisBarChart; 