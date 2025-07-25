"use client";

interface AxisBarGraphProps {
  percentages: Record<string, number>;
}

export default function AxisBarGraph({ percentages }: AxisBarGraphProps) {
  const axes = [
    {
      key: "OI",
      leftLabel: "즉흥적",
      rightLabel: "짜여진",
      color: "from-blue-400 to-blue-600",
      borderColor: "border-blue-500"
    },
    {
      key: "NB", 
      leftLabel: "직관적",
      rightLabel: "추상적",
      color: "from-orange-400 to-orange-600",
      borderColor: "border-orange-500"
    },
    {
      key: "VP",
      leftLabel: "언어적", 
      rightLabel: "비언어적",
      color: "from-green-400 to-green-600",
      borderColor: "border-green-500"
    },
    {
      key: "BD",
      leftLabel: "밝은",
      rightLabel: "어두운", 
      color: "from-purple-400 to-purple-600",
      borderColor: "border-purple-500"
    }
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
        <span>📊</span>
        개그 스타일 분석
      </h3>
      
      <div className="space-y-4">
        {axes.map((axis) => {
          const percentage = percentages[axis.key];
          const isLeftSide = percentage <= 50;
          const displayPercentage = percentage;
          // 퍼센트가 50% 이하면 왼쪽 라벨, 50% 초과면 오른쪽 라벨
          const dominantLabel = percentage <= 50 ? axis.leftLabel : axis.rightLabel;
          
          return (
            <div key={axis.key} className="space-y-2">
              {/* 퍼센트와 라벨 */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{axis.leftLabel}</span>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {displayPercentage}%
                    </div>
                    <div className="text-base font-semibold text-gray-700">{dominantLabel}</div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700">{axis.rightLabel}</span>
              </div>
              
              {/* 바 그래프 */}
              <div className="relative">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  {/* 배경 그라데이션 */}
                  <div className={`h-full bg-gradient-to-r ${axis.color} opacity-30`}></div>
                  
                  {/* 인디케이터 위치 */}
                  <div 
                    className="absolute top-0 h-3 w-6 flex items-center justify-center transform -translate-x-1/2 transition-all duration-500 ease-out"
                    style={{ left: `${percentage}%` }}
                  >
                    {/* 원형 인디케이터 */}
                    <div className={`w-5 h-5 bg-white rounded-full border-2 ${axis.borderColor} shadow-lg flex items-center justify-center`}>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${axis.color}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* 설명 */}
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
        <p className="text-xs text-gray-600 text-center leading-relaxed">
          각 축에서 어느 쪽에 더 가까운지 표시됩니다. 
          <br />
          높은 퍼센트일수록 해당 특성이 강하다는 의미예요!
        </p>
      </div>
    </div>
  );
} 