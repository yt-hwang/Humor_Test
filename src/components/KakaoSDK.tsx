"use client";

import { useEffect } from 'react';

export default function KakaoSDK() {
  useEffect(() => {
    const initKakao = () => {
      if (typeof window !== 'undefined' && window.Kakao && !window.Kakao.isInitialized()) {
        try {
          // 실제 카카오 JavaScript 키
          const kakaoAppKey = '51a9046120b3714724ff85e477070a0d';
          
          window.Kakao.init(kakaoAppKey);
          console.log('카카오 SDK 초기화 완료');
          
          // 카카오톡 공유 기능 테스트
          if (window.Kakao.Share) {
            console.log('카카오톡 공유 기능 사용 가능');
          } else {
            console.warn('카카오톡 공유 기능을 사용할 수 없습니다.');
          }
        } catch (error) {
          console.error('카카오 SDK 초기화 실패:', error);
        }
      }
    };

    // SDK 로드 확인
    const checkKakaoSDK = () => {
      if (typeof window !== 'undefined' && window.Kakao) {
        initKakao();
      } else {
        // SDK가 아직 로드되지 않았다면 잠시 후 다시 시도
        setTimeout(checkKakaoSDK, 100);
      }
    };

    // 카카오 SDK 스크립트 로드
    const loadKakaoSDK = () => {
      if (typeof window !== 'undefined' && !window.Kakao) {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;
        script.onload = () => {
          console.log('카카오 SDK 로드 완료');
          // SDK 로드 후 잠시 대기 후 초기화
          setTimeout(checkKakaoSDK, 500);
        };
        script.onerror = () => {
          console.error('카카오 SDK 로드 실패');
        };
        document.head.appendChild(script);
      } else {
        checkKakaoSDK();
      }
    };

    // 페이지 로드 완료 후 SDK 로드 시작
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadKakaoSDK);
    } else {
      loadKakaoSDK();
    }

    return () => {
      // 클린업: 이벤트 리스너 제거
      document.removeEventListener('DOMContentLoaded', loadKakaoSDK);
    };
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
} 