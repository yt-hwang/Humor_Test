"use client";

import React, { useState } from 'react';
import { ShareData, shareToKakao, shareToTwitter, shareToTikTok, shareNative, copyLink, trackShare } from '../utils/share';
import { captureResult, downloadImage } from '../utils/capture';

interface ShareButtonsProps {
  data: ShareData;
}

export default function ShareButtons({ data }: ShareButtonsProps) {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleShare = async (platform: string) => {
    try {
      setIsLoading(platform);
      
      switch (platform) {
        case 'native':
          await shareNative(data);
          break;
        case 'kakao':
          await shareToKakao(data);
          break;
        case 'instagram':
          await handleInstagramShare();
          setCopiedPlatform('instagram');
          break;
        case 'twitter':
          await handleTwitterShare();
          setCopiedPlatform('twitter');
          break;
        case 'tiktok':
          await handleTikTokShare();
          setCopiedPlatform('tiktok');
          break;
        case 'copy':
          await copyLink(data);
          setCopiedPlatform('copy');
          break;
        case 'image':
          await handleImageDownload();
          setCopiedPlatform('image');
          break;
        default:
          break;
      }
      
      // 공유 통계 추적
      trackShare(platform, data);
      
      // 3초 후 복사 상태 초기화
      if (['instagram', 'tiktok', 'copy', 'twitter', 'image'].includes(platform)) {
        setTimeout(() => setCopiedPlatform(null), 3000);
      }
      
    } catch (error) {
      console.error('공유 실패:', error);
    } finally {
      setIsLoading(null);
    }
    
    setShowShareOptions(false);
  };

  const handleInstagramShare = async () => {
    try {
      // 결과 이미지 캡처
      const imageDataUrl = await captureResult();
      
      // 네이티브 공유 시도
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
        alert('📸 인스타그램 공유 준비 완료!\n\n1. 다운로드된 이미지를 인스타그램에 업로드\n2. 캡션에 다음 텍스트 추가:\n\n' + 
              `${data.summary}\n\n${data.description}\n\n#개그유형테스트 #${data.code} #${data.nickname}\n\n🔗 ${window.location.origin}/quiz`);
      }
    } catch (error) {
      console.error('인스타그램 공유 실패:', error);
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleTwitterShare = async () => {
    try {
      // 결과 이미지 캡처 및 다운로드
      const imageDataUrl = await captureResult();
      downloadImage(imageDataUrl, '개그유형결과.png');
      
      // 트위터 공유 URL 생성 (짧은 링크 사용)
      const text = `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n#개그유형테스트 #${data.code} #${data.nickname}`;
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin + '/quiz')}`;
      
      // 트위터 공유 창 열기
      window.open(shareUrl, '_blank', 'width=600,height=400');
      
      alert('🐦 트위터 공유 준비 완료!\n\n1. 다운로드된 이미지를 트위터에 업로드\n2. 새로 열린 창에서 트윗 내용 확인\n3. 이미지와 함께 게시하세요!');
    } catch (error) {
      console.error('트위터 공유 실패:', error);
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleTikTokShare = async () => {
    try {
      // 결과 이미지 캡처 및 다운로드
      const imageDataUrl = await captureResult();
      downloadImage(imageDataUrl, '개그유형결과.png');
      
      const text = `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n#개그유형테스트 #${data.code} #${data.nickname} #심리테스트 #성격테스트 #MBTI #ForYou #fyp #개그 #유머 #테스트 #재미 #챌린지 #친구랑_테스트\n\n💡 사이트는 bio 참고!`;
      
      alert('🎬 틱톡 공유 준비 완료!\n\n1. 다운로드된 이미지를 틱톡에 업로드\n2. 캡션에 다음 텍스트 추가:\n\n' + 
            `${text}\n\n💡 팁: "개그유형테스트 챌린지"로 친구들 태그해보세요!`);
    } catch (error) {
      console.error('틱톡 공유 실패:', error);
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleImageDownload = async () => {
    try {
      const imageDataUrl = await captureResult();
      downloadImage(imageDataUrl, `개그유형_${data.code}_${data.nickname}.png`);
      alert('✅ 이미지가 다운로드되었습니다!\n\n갤러리에서 확인하고 원하는 곳에 공유하세요!');
    } catch (error) {
      console.error('이미지 다운로드 실패:', error);
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const getButtonText = (platform: string) => {
    if (isLoading === platform) {
      return '처리중...';
    }
    
    if (copiedPlatform === platform) {
      return '완료!';
    }
    
    switch (platform) {
      case 'native': return '공유하기';
      case 'kakao': return '카카오톡';
      case 'instagram': return '인스타그램';
      case 'twitter': return '트위터';
      case 'tiktok': return '틱톡';
      case 'copy': return '링크 복사';
      case 'image': return '이미지 저장';
      default: return platform;
    }
  };

  const getButtonStyle = (platform: string) => {
    const baseStyle = "flex flex-col items-center gap-1 px-2 py-2 text-xs rounded transition-colors";
    
    if (isLoading === platform) {
      return `${baseStyle} bg-blue-100 text-blue-700`;
    }
    
    if (copiedPlatform === platform) {
      return `${baseStyle} bg-green-100 text-green-700`;
    }
    
    return `${baseStyle} text-gray-700 hover:bg-gray-100`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowShareOptions(!showShareOptions)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
        결과 공유하기
      </button>

      {showShareOptions && (
        <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border p-3 min-w-[280px] z-10">
          <div className="text-xs text-gray-500 mb-3 font-medium border-b pb-2">공유하기</div>
          
          <div className="grid grid-cols-3 gap-2">
            {/* 네이티브 공유 (모바일) */}
            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button
                onClick={() => handleShare('native')}
                className={getButtonStyle('native')}
                disabled={isLoading !== null}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span>{getButtonText('native')}</span>
              </button>
            )}

            {/* 카카오톡 */}
            <button
              onClick={() => handleShare('kakao')}
              className={getButtonStyle('kakao')}
              disabled={isLoading !== null}
            >
              <div className="w-5 h-5 bg-yellow-400 rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-black">K</span>
              </div>
              <span>{getButtonText('kakao')}</span>
            </button>

            {/* 인스타그램 */}
            <button
              onClick={() => handleShare('instagram')}
              className={getButtonStyle('instagram')}
              disabled={isLoading !== null}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>{getButtonText('instagram')}</span>
            </button>

            {/* 트위터 */}
            <button
              onClick={() => handleShare('twitter')}
              className={getButtonStyle('twitter')}
              disabled={isLoading !== null}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span>{getButtonText('twitter')}</span>
            </button>

            {/* 틱톡 */}
            <button
              onClick={() => handleShare('tiktok')}
              className={getButtonStyle('tiktok')}
              disabled={isLoading !== null}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span>{getButtonText('tiktok')}</span>
            </button>

            {/* 이미지 저장 */}
            <button
              onClick={() => handleShare('image')}
              className={getButtonStyle('image')}
              disabled={isLoading !== null}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{getButtonText('image')}</span>
            </button>

            {/* 링크 복사 */}
            <button
              onClick={() => handleShare('copy')}
              className={getButtonStyle('copy')}
              disabled={isLoading !== null}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{getButtonText('copy')}</span>
            </button>
          </div>
          
          {/* 플랫폼별 팁 */}
          <div className="mt-3 pt-3 border-t text-xs text-gray-500">
            <div className="font-medium mb-1">💡 공유 팁:</div>
            <div className="space-y-1">
              <div>• <strong>카카오톡:</strong> 자동으로 공유 창이 열립니다</div>
              <div>• <strong>인스타그램:</strong> 결과 이미지가 자동으로 공유됩니다</div>
              <div>• <strong>트위터/틱톡:</strong> 이미지 다운로드 후 업로드하세요</div>
              <div>• <strong>이미지 저장:</strong> 갤러리에 저장해서 공유하세요</div>
            </div>
          </div>
        </div>
      )}

      {/* 배경 클릭시 닫기 */}
      {showShareOptions && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowShareOptions(false)}
        />
      )}
    </div>
  );
} 