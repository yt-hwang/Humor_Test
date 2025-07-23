"use client";

import React, { useState } from 'react';
import { ShareData, shareToKakao, trackShare } from '../utils/share';
import { captureResult, downloadImage } from '../utils/capture';

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
        case 'instagram':
          await handleInstagramShare();
          setCopiedPlatform('instagram');
          break;
        default:
          break;
      }
      
      // 공유 통계 추적
      trackShare(platform, data);
      
      // 3초 후 복사 상태 초기화
      if (['copy', 'instagram'].includes(platform)) {
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
      const shareText = `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n${data.description}\n\n🔗 개그유형 테스트 하러가기: ${window.location.origin}/quiz`;
      
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

  const handleInstagramShare = async () => {
    try {
      // 결과 이미지 캡처
      const imageDataUrl = await captureResult();
      
      // 네이티브 공유 시도 (이미지 + 링크)
      const response = await fetch(imageDataUrl);
      const blob = await response.blob();
      const file = new File([blob], '개그유형결과.png', { type: 'image/png' });
      
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `🎭 나의 개그유형: ${data.code} - ${data.nickname}`,
          text: `${data.summary}\n\n${data.description}\n\n#개그유형테스트 #${data.code} #${data.nickname}`,
          files: [file],
          url: window.location.origin + '/quiz',
        });
      } else {
        // 네이티브 공유가 지원되지 않으면 다운로드
        downloadImage(imageDataUrl, '개그유형결과.png');
        alert('📸 인스타그램 공유 준비 완료!\n\n1. 다운로드된 이미지를 인스타그램 스토리에 업로드\n2. 링크 스티커를 추가하고 다음 링크 입력:\n\n' + 
              `${window.location.origin}/quiz\n\n3. 캡션에 다음 텍스트 추가:\n\n${data.summary}\n\n${data.description}\n\n#개그유형테스트 #${data.code} #${data.nickname}`);
      }
    } catch (error) {
      console.error('인스타그램 공유 실패:', error);
      
      // fallback: 간단한 텍스트 공유
      const shareText = `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n${data.description}\n\n#개그유형테스트 #${data.code} #${data.nickname}\n\n🔗 ${window.location.origin}/quiz`;
      
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        alert('📸 인스타그램 공유 준비 완료!\n\n1. 복사된 텍스트를 인스타그램 스토리에 붙여넣기\n2. 링크 스티커를 추가하고 다음 링크 입력:\n\n' + 
              `${window.location.origin}/quiz\n\n3. 해시태그와 함께 공유하세요!`);
      } else {
        alert('📸 인스타그램 공유 준비 완료!\n\n1. 다음 텍스트를 복사해서 인스타그램 스토리에 붙여넣기:\n\n' + 
              `${shareText}\n\n2. 링크 스티커를 추가하고 다음 링크 입력:\n\n${window.location.origin}/quiz`);
      }
    }
  };

  const getButtonText = (platform: string) => {
    if (isLoading === platform) {
      return '처리중...';
    }
    
    if (copiedPlatform === platform) {
      return '완료!';
    }
    
    // 텍스트 제거하고 빈 문자열 반환
    return '';
  };

  const getButtonStyle = (platform: string) => {
    const baseStyle = "flex items-center justify-center w-12 h-12 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105";
    
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
      case 'instagram':
        return `${baseStyle} bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600`;
      default:
        return `${baseStyle} bg-gray-100 text-gray-700 hover:bg-gray-200`;
    }
  };

  const getButtonIcon = (platform: string) => {
    switch (platform) {
      case 'copy':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'kakao':
        return (
          <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
            <span className="text-xs font-bold text-yellow-400">K</span>
          </div>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-3 justify-center">
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

      {/* 인스타그램 공유 버튼 */}
      <button
        onClick={() => handleShare('instagram')}
        className={getButtonStyle('instagram')}
        disabled={isLoading !== null}
        title="인스타그램 공유"
      >
        {getButtonIcon('instagram')}
      </button>
    </div>
  );
} 