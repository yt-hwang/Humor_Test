"use client";

import { useEffect } from 'react';

export default function KakaoSDK() {
  useEffect(() => {
    const initKakao = () => {
      if (typeof window !== 'undefined' && window.Kakao && !window.Kakao.isInitialized()) {
        try {
          window.Kakao.init('YOUR_KAKAO_APP_KEY'); // 실제 앱 키로 교체 필요
          console.log('카카오 SDK 초기화 완료');
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

    checkKakaoSDK();
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
} 