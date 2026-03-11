"use client";

import React, { useState } from 'react';
import { ShareData, shareToKakao, trackShare } from '../utils/share';

interface ShareButtonsProps {
  data: ShareData;
}

export default function ShareButtons({ data }: ShareButtonsProps) {
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleShare = async (platform: string) => {
    try {
      setIsLoading(platform);
      
      switch (platform) {
        case 'copy':
          await handleCopyLink();
          setCopiedPlatform('copy');
          break;
        case 'kakao':
          await handleKakaoShare();
          break;
        default:
          break;
      }
      
      // 공유 통계 추적
      trackShare(platform, data);
      
      // 3초 후 복사 상태 초기화
      if (platform === 'copy') {
        setTimeout(() => setCopiedPlatform(null), 3000);
      }
      
    } catch (error) {
      console.error('공유 실패:', error);
    } finally {
      setIsLoading(null);
    }
  };

  const handleCopyLink = async () => {
    try {
      // 결과 페이지 URL 생성 (answers가 있으면 포함)
      const answersParam = data.encodedAnswers ? `&answers=${data.encodedAnswers}` : '';
      const resultUrl = `${window.location.origin}/result?code=${data.code}${answersParam}`;
      const shareText = `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n👀 내 결과 보기: ${resultUrl}\n🎯 나도 테스트하기: ${window.location.origin}/`;

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        alert('✅ 링크와 결과가 클립보드에 복사되었습니다!');
      } else {
        // fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('✅ 링크와 결과가 클립보드에 복사되었습니다!');
      }
    } catch (error) {
      console.error('링크 복사 실패:', error);
      alert('링크 복사에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleKakaoShare = async () => {
    try {
      await shareToKakao(data);
    } catch (error) {
      console.error('카카오톡 공유 실패:', error);
      alert('카카오톡 공유에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const getButtonStyle = (platform: string) => {
    const baseStyle = "flex items-center justify-center w-14 h-14 rounded-2xl text-sm font-medium transition-all duration-300 transform hover:scale-105 aspect-square";
    
    if (isLoading === platform) {
      return `${baseStyle} bg-blue-100 text-blue-700 cursor-not-allowed`;
    }
    
    if (copiedPlatform === platform) {
      return `${baseStyle} bg-green-100 text-green-700`;
    }
    
    switch (platform) {
      case 'copy':
        return `${baseStyle} bg-gray-100 text-gray-700 hover:bg-gray-200`;
      case 'kakao':
        return `${baseStyle} bg-yellow-400 text-black hover:bg-yellow-500`;
      default:
        return `${baseStyle} bg-gray-100 text-gray-700 hover:bg-gray-200`;
    }
  };

  const getButtonIcon = (platform: string) => {
    switch (platform) {
      case 'copy':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'kakao':
        return (
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <span className="text-sm font-bold text-yellow-400">K</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      {/* 링크복사 버튼 */}
      <button
        onClick={() => handleShare('copy')}
        className={getButtonStyle('copy')}
        disabled={isLoading !== null}
        title="링크 복사"
      >
        {getButtonIcon('copy')}
      </button>

      {/* 카카오톡 공유 버튼 */}
      <button
        onClick={() => handleShare('kakao')}
        className={getButtonStyle('kakao')}
        disabled={isLoading !== null}
        title="카카오톡 공유"
      >
        {getButtonIcon('kakao')}
      </button>
    </div>
  );
} 