"use client";

import React, { useState } from 'react';
import { captureResult, captureInstagramStory, downloadImage, shareImage } from '../utils/capture';

interface CaptureButtonProps {
  code: string;
  nickname: string;
  summary: string;
  description: string;
  examples: string[];
}

export default function CaptureButton({ code, nickname, summary, description, examples }: CaptureButtonProps) {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleCapture = async () => {
    setIsCapturing(true);
    
    try {
      // 잠시 대기 (UI 렌더링 완료를 위해)
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const imageDataUrl = await captureResult();
      const filename = `개그유형_${code}_${nickname}.png`;
      
      // 네이티브 공유 시도
      await shareImage(imageDataUrl);
      
    } catch (error) {
      console.error('캡처 실패:', error);
      alert('이미지 캡처에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsCapturing(false);
    }
  };

  const handleInstagramStory = async () => {
    setIsCapturing(true);
    
    try {
      const imageDataUrl = await captureInstagramStory({
        code,
        nickname,
        summary,
        description,
        examples
      });
      
      const filename = `개그유형_스토리_${code}_${nickname}.png`;
      
      // 네이티브 공유 시도
      await shareImage(imageDataUrl);
      
    } catch (error) {
      console.error('스토리 이미지 생성 실패:', error);
      alert('스토리 이미지 생성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsCapturing(false);
    }
  };

  const handleDownload = async () => {
    setIsCapturing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const imageDataUrl = await captureResult();
      const filename = `개그유형_${code}_${nickname}.png`;
      
      downloadImage(imageDataUrl, filename);
      
    } catch (error) {
      console.error('다운로드 실패:', error);
      alert('이미지 다운로드에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2 justify-center">
        <button
          onClick={handleCapture}
          disabled={isCapturing}
          className="bg-purple-500 hover:bg-purple-600 disabled:bg-purple-300 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2"
        >
          {isCapturing ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              캡처 중...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              이미지로 공유
            </>
          )}
        </button>
        
        <button
          onClick={handleDownload}
          disabled={isCapturing}
          className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          다운로드
        </button>
      </div>

      <button
        onClick={handleInstagramStory}
        disabled={isCapturing}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-purple-300 disabled:to-pink-300 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2"
      >
        {isCapturing ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            스토리 생성 중...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            📸 인스타그램 스토리로 공유
          </>
        )}
      </button>
    </div>
  );
} 