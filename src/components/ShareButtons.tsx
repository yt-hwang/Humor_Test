"use client";

import React, { useState } from 'react';
import { ShareData, shareToKakao, shareToInstagram, shareToTwitter, shareToFacebook, shareToTikTok, shareNative, copyLink } from '../utils/share';

interface ShareButtonsProps {
  data: ShareData;
}

export default function ShareButtons({ data }: ShareButtonsProps) {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShare = (platform: string) => {
    switch (platform) {
      case 'native':
        shareNative(data);
        break;
      case 'kakao':
        shareToKakao(data);
        break;
      case 'instagram':
        shareToInstagram(data);
        break;
      case 'twitter':
        shareToTwitter(data);
        break;
      case 'facebook':
        shareToFacebook(data);
        break;
      case 'tiktok':
        shareToTikTok(data);
        break;
      case 'copy':
        copyLink(data);
        break;
      default:
        break;
    }
    setShowShareOptions(false);
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
        링크 공유
      </button>

      {showShareOptions && (
        <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border p-3 min-w-[240px] z-10">
          <div className="text-xs text-gray-500 mb-3 font-medium border-b pb-2">공유하기</div>
          
          <div className="grid grid-cols-3 gap-2">
            {/* 네이티브 공유 (모바일) */}
            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button
                onClick={() => handleShare('native')}
                className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span>공유하기</span>
              </button>
            )}

            {/* 카카오톡 */}
            <button
              onClick={() => handleShare('kakao')}
              className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              <div className="w-5 h-5 bg-yellow-400 rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-black">K</span>
              </div>
              <span>카카오톡</span>
            </button>

            {/* 인스타그램 */}
            <button
              onClick={() => handleShare('instagram')}
              className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>인스타그램</span>
            </button>

            {/* 트위터 */}
            <button
              onClick={() => handleShare('twitter')}
              className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span>트위터</span>
            </button>

            {/* 틱톡 */}
            <button
              onClick={() => handleShare('tiktok')}
              className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span>틱톡</span>
            </button>

            {/* 페이스북 */}
            <button
              onClick={() => handleShare('facebook')}
              className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>페이스북</span>
            </button>

            {/* 링크 복사 */}
            <button
              onClick={() => handleShare('copy')}
              className="flex flex-col items-center gap-1 px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>링크 복사</span>
            </button>
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