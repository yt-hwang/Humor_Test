"use client";

import React, { useState } from 'react';
import { ShareData, shareToKakao } from '../utils/share';
import { recordShare } from '../utils/analytics';
import { useLang } from '../context/LangContext';

interface ShareButtonsProps {
  data: ShareData;
}

export default function ShareButtons({ data }: ShareButtonsProps) {
  const { lang } = useLang();
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
        case 'sms':
          handleSmsShare();
          break;
        default:
          break;
      }
      
      // 공유 통계 추적 (Supabase)
      recordShare(platform, data.code, lang);
      
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
      // 결과 페이지 URL 생성 (lang, answers 포함)
      const langParam = `&lang=${lang}`;
      const answersParam = data.encodedAnswers ? `&answers=${data.encodedAnswers}` : '';
      const resultUrl = `${window.location.origin}/result?code=${data.code}${langParam}${answersParam}`;
      const homeUrl = `${window.location.origin}/?lang=${lang}`;
      const shareText = lang === 'en'
        ? `🎭 My Humor Type: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n👀 See my result: ${resultUrl}\n🎯 Take the test: ${homeUrl}`
        : `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n👀 내 결과 보기: ${resultUrl}\n🎯 나도 테스트하기: ${homeUrl}`;

      const successMsg = lang === 'en'
        ? '✅ Link and result copied to clipboard!'
        : '✅ 링크와 결과가 클립보드에 복사되었습니다!';

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        alert(successMsg);
      } else {
        // fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(successMsg);
      }
    } catch (error) {
      console.error('링크 복사 실패:', error);
      const errorMsg = lang === 'en'
        ? 'Failed to copy link. Please try again.'
        : '링크 복사에 실패했습니다. 다시 시도해주세요.';
      alert(errorMsg);
    }
  };

  const handleKakaoShare = async () => {
    try {
      await shareToKakao({ ...data, lang });
    } catch (error) {
      console.error('카카오톡 공유 실패:', error);
      const errorMsg = lang === 'en'
        ? 'KakaoTalk sharing failed. Please try again.'
        : '카카오톡 공유에 실패했습니다. 다시 시도해주세요.';
      alert(errorMsg);
    }
  };

  const handleSmsShare = () => {
    const langParam = `&lang=${lang}`;
    const answersParam = data.encodedAnswers ? `&answers=${data.encodedAnswers}` : '';
    const resultUrl = `${window.location.origin}/result?code=${data.code}${langParam}${answersParam}`;
    const homeUrl = `${window.location.origin}/?lang=${lang}`;
    const body = lang === 'en'
      ? `🎭 My Humor Type: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n👀 See my result: ${resultUrl}\n🎯 Take the test: ${homeUrl}`
      : `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n👀 내 결과 보기: ${resultUrl}\n🎯 나도 테스트하기: ${homeUrl}`;
    // iOS uses &body=, Android uses ?body= — sms:?&body= works on both
    window.location.href = `sms:?&body=${encodeURIComponent(body)}`;
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
      case 'sms':
        return `${baseStyle} bg-green-500 text-white hover:bg-green-600`;
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
      case 'sms':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
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
        title={lang === 'en' ? 'Copy Link' : '링크 복사'}
      >
        {getButtonIcon('copy')}
      </button>

      {/* 카카오톡 공유 버튼 */}
      <button
        onClick={() => handleShare('kakao')}
        className={getButtonStyle('kakao')}
        disabled={isLoading !== null}
        title={lang === 'en' ? 'Share to KakaoTalk' : '카카오톡 공유'}
      >
        {getButtonIcon('kakao')}
      </button>

      {/* 문자 메시지 공유 버튼 */}
      <button
        onClick={() => handleShare('sms')}
        className={getButtonStyle('sms')}
        disabled={isLoading !== null}
        title={lang === 'en' ? 'Share via Text' : '문자로 공유'}
      >
        {getButtonIcon('sms')}
      </button>
    </div>
  );
} 