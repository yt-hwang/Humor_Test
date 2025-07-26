"use client";

import { questions } from "../data/questions";
import { calculateAxisScores, convertScoresToPercentages } from "../data/results";

interface DebugSectionProps {
  answers: (number | null)[];
}

export default function DebugSection({ answers }: DebugSectionProps) {
  const scores = calculateAxisScores(answers);
  const percentages = convertScoresToPercentages(scores);

  const likertLabels = [
    "전혀 그렇지 않다",
    "그렇지 않다", 
    "조금 그렇지 않다",
    "보통이다",
    "조금 그렇다",
    "그렇다",
    "매우 그렇다"
  ];

  const axisInfo = [
    { key: "OI", name: "즉흥적 vs 짜여진", color: "text-blue-600" },
    { key: "NB", name: "직관적 vs 추상적", color: "text-orange-600" },
    { key: "VP", name: "언어적 vs 비언어적", color: "text-green-600" },
    { key: "BD", name: "밝은 vs 어두운", color: "text-purple-600" }
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
        <span>🔍</span>
        테스트용 디버깅 정보
      </h3>

      {/* 축별 점수 요약 */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">축별 점수 요약</h4>
        <div className="grid grid-cols-2 gap-3">
          {axisInfo.map((axis) => {
            const score = scores[axis.key as keyof typeof scores];
            const percentage = percentages[axis.key];
            const isRightDominant = score > 4; // 4점 기준
            const dominantSide = isRightDominant ? axis.name.split(" vs ")[1] : axis.name.split(" vs ")[0];
            const dominantPercentage = isRightDominant ? percentage : (100 - percentage);
            
            return (
              <div key={axis.key} className="bg-gray-50 rounded-lg p-3">
                <div className={`text-sm font-bold ${axis.color}`}>{axis.name}</div>
                <div className="text-xs text-gray-600">
                  점수: {score.toFixed(2)} / 7
                </div>
                <div className="text-xs text-gray-600">
                  퍼센트: {dominantPercentage}% ({dominantSide})
                </div>
                <div className="text-xs font-semibold text-green-600 mt-1">
                  → {dominantSide} 쪽으로 결정
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 질문별 답변 상세 */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">질문별 답변 상세</h4>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {questions.map((question, index) => {
            const answer = answers[index];
            const axis = axisInfo.find(a => a.key === question.axis);
            const isReverse = question.reverse;
            const calculatedScore = answer !== null ? (isReverse ? 8 - answer : answer) : null;
            
            return (
              <div key={question.id} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-500">Q{question.id}</div>
                  <div className="text-xs font-semibold text-gray-500">
                    {axis?.name} {isReverse ? "(역방향)" : "(정방향)"}
                  </div>
                </div>
                
                <div className="text-sm text-gray-800 mb-2 leading-relaxed">
                  {question.text}
                </div>
                
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">답변:</span>
                    <span className="font-semibold text-blue-600">
                      {answer !== null ? `${answer}점 (${likertLabels[answer - 1]})` : "미답변"}
                    </span>
                  </div>
                  
                  {calculatedScore !== null && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">계산점수:</span>
                      <span className="font-semibold text-green-600">
                        {calculatedScore}점 ({question.axis})
                      </span>
                      <span className="text-xs text-gray-500">
                        → {calculatedScore > 4 ? axis?.name.split(" vs ")[1] : axis?.name.split(" vs ")[0]} 쪽에 추가 (getGagTypeCode 기준)
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 계산 공식 설명 */}
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">계산 공식</h4>
        <div className="text-xs text-gray-600 space-y-1">
          <div>• 정방향: 답변 그대로 사용 (1점=1점, 7점=7점)</div>
          <div>• 역방향: 8-답변으로 변환 (1점=7점, 7점=1점)</div>
          <div>• 각 축별 평균 계산 후 1-7점을 0-100%로 변환</div>
          <div>• 4점 초과 시 오른쪽 특성, 4점 이하 시 왼쪽 특성</div>
        </div>
      </div>
    </div>
  );
} 