"use client";

import React, { useState } from 'react';
import { captureResult, captureInstagramStory, shareImage, shareInstagramStoryImage, downloadImage } from '../utils/capture';

interface CaptureButtonProps {
  code: string;
  nickname: string;
  summary: string;
  examples: string[];
}

export default function CaptureButton({ code, nickname, summary, examples }: CaptureButtonProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleCapture = async () => {
    setIsCapturing(true);
    
    try {
      // 잠시 대기 (UI 렌더링 완료를 위해)
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const imageDataUrl = await captureResult();
      
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
        examples
      });
      
      // 네이티브 공유 시도
      await shareInstagramStoryImage(imageDataUrl);
      
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
      
      downloadImage(imageDataUrl, `개그유형_${code}_${nickname}.png`);
      
    } catch (error) {
      console.error('다운로드 실패:', error);
      alert('이미지 다운로드에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsCapturing(false);
    }
  };

  const handleDownloadStory = async () => {
    setIsCapturing(true);
    
    try {
      const imageDataUrl = await captureInstagramStory({
        code,
        nickname,
        summary,
        examples
      });
      
      downloadImage(imageDataUrl, `개그유형스토리_${code}_${nickname}.png`);
      
    } catch (error) {
      console.error('스토리 다운로드 실패:', error);
      alert('스토리 이미지 다운로드에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        disabled={isCapturing}
        className="bg-purple-500 hover:bg-purple-600 disabled:bg-purple-300 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2"
      >
        {isCapturing ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            생성 중...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            이미지 생성
          </>
        )}
      </button>

      {showOptions && (
        <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border p-3 min-w-[200px] z-10">
          <div className="text-xs text-gray-500 mb-3 font-medium border-b pb-2">이미지 옵션</div>
          
          <div className="space-y-2">
            <button
              onClick={handleCapture}
              disabled={isCapturing}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              공유용 이미지 생성
            </button>
            
            <button
              onClick={handleInstagramStory}
              disabled={isCapturing}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              인스타그램 스토리용
            </button>
            
            <div className="border-t pt-2">
              <button
                onClick={handleDownload}
                disabled={isCapturing}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                일반 이미지 다운로드
              </button>
              
              <button
                onClick={handleDownloadStory}
                disabled={isCapturing}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                스토리 이미지 다운로드
              </button>
            </div>
          </div>
          
          {/* 팁 */}
          <div className="mt-3 pt-2 border-t text-xs text-gray-500">
            <div className="font-medium mb-1">💡 팁:</div>
            <div>• <strong>공유용:</strong> 네이티브 공유로 바로 전송</div>
            <div>• <strong>스토리용:</strong> 인스타그램 스토리 최적화</div>
            <div>• <strong>다운로드:</strong> 갤러리에 저장</div>
          </div>
        </div>
      )}

      {/* 배경 클릭시 닫기 */}
      {showOptions && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowOptions(false)}
        />
      )}
    </div>
  );
} 