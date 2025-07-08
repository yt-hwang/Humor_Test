"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import ShareButtons from "../../src/components/ShareButtons";
import CaptureButton from "../../src/components/CaptureButton";
import { recordVisit } from "../../src/utils/analytics";

export default function ResultClient() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code") || "ONVB";
  const nickname = searchParams.get("nickname") || "온빛";
  const summary = searchParams.get("summary") || "항상 준비된 밝은 개그러!";
  const description =
    searchParams.get("description") || "체계적으로 준비하고, 상황에 맞는 센스 있는 개그를 구사합니다.";
  const examples = searchParams.get("examples")?.split(",") || ["유재석", "무한도전", "런닝맨"];

  useEffect(() => {
    // 결과 페이지 방문 기록
    recordVisit('/result');
    
    // 결과 페이지 공유 통계
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        content_type: 'test_result',
        item_id: code,
        item_name: nickname,
        value: 1
      });
    }
  }, [code, nickname]);

  const shareData = {
    code,
    nickname,
    summary,
    description,
    examples
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-yellow-100 p-4">
      <div id="result-container" className="w-full max-w-md bg-white rounded-2xl shadow-lg flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">나의 개그유형 결과</h1>

        <div className="text-2xl font-mono font-bold mb-2 text-blue-600">{code}</div>
        <div className="text-lg font-semibold mb-4 text-gray-800">{nickname}</div>
        <p className="mb-4 text-center text-gray-700 leading-relaxed">{summary}</p>
        <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed bg-gray-50 p-4 rounded-lg">
          {description}
        </div>

        <div className="mb-6 text-center">
          <div className="text-xs text-gray-500 mb-2">이런 스타일의 예시</div>
          <div className="flex flex-wrap justify-center gap-2">
            {examples.map((example, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {example}
              </span>
            ))}
          </div>
        </div>

        {/* 공유 섹션 */}
        <div className="w-full space-y-4">
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-700 mb-2">🎉 결과를 공유해보세요!</h3>
            <p className="text-xs text-gray-500 mb-3">친구들과 함께 재미있는 개그유형 테스트를 해보세요</p>
          </div>
          
          <div className="flex gap-3 justify-center">
            <a
              href="/quiz"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors text-center"
            >
              테스트 다시하기
            </a>
            <ShareButtons data={shareData} />
          </div>
          
          <div className="flex justify-center">
            <CaptureButton 
              code={code} 
              nickname={nickname} 
              summary={summary}
              description={description}
              examples={examples}
            />
          </div>
        </div>

        {/* 공유 팁 */}
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
          <h4 className="text-sm font-medium text-purple-800 mb-2">💡 공유 팁</h4>
          <div className="text-xs text-purple-700 space-y-1">
            <div>• <strong>카카오톡:</strong> 자동으로 공유 창이 열립니다</div>
            <div>• <strong>인스타그램:</strong> 결과 이미지가 자동으로 공유됩니다</div>
            <div>• <strong>트위터/틱톡:</strong> 이미지 다운로드 후 업로드하세요</div>
            <div>• <strong>이미지:</strong> 결과를 이미지로 저장해서 공유</div>
          </div>
        </div>

        {/* 하단 링크 */}
        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← 메인으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
