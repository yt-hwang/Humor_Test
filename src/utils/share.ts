import type { Lang } from '../context/LangContext';

export interface ShareData {
  code: string;
  nickname: string;
  summary: string;
  examples: string[];
  encodedAnswers?: string; // 인코딩된 답변 데이터
  lang?: Lang; // 언어 설정
}

// 플랫폼별 해시태그 전략 (보고서 기반 최적화)
const getHashtags = (platform: string, data: ShareData) => {
  const baseTags = ['#개그유형테스트', `#${data.code}`, `#${data.nickname}`];
  
  switch (platform) {
    case 'instagram':
      return [
        ...baseTags,
        '#MBTI', '#성격테스트', '#개그맨', '#유재석', '#무한도전',
        '#런닝맨', '#개그', '#유머', '#테스트', '#재미', '#챌린지',
        '#인스타그램', '#스토리', '#트렌드'
      ].slice(0, 10); // 인스타그램은 10개 정도가 적당
    case 'twitter':
      return [
        ...baseTags.slice(0, 2), // 트위터는 2개 이하
        '#심리테스트'
      ];
    case 'tiktok':
      return [
        ...baseTags,
        '#심리테스트', '#성격테스트', '#MBTI', '#ForYou', '#fyp',
        '#개그', '#유머', '#테스트', '#재미', '#챌린지', '#친구랑_테스트'
      ].slice(0, 8);
    case 'kakao':
      return baseTags; // 카카오톡은 해시태그 없음
    default:
      return baseTags;
  }
};

// 플랫폼별 공유 텍스트 최적화 (보고서 기반)
const getShareText = (platform: string, data: ShareData) => {
  const hashtags = getHashtags(platform, data).join(' ');
  
  switch (platform) {
    case 'instagram':
      return `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n예시: ${data.examples.join(', ')}\n\n${hashtags}\n\n🔗 링크는 프로필 참조`;
    
    case 'twitter':
      return `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n${hashtags}`;
    
    case 'tiktok':
      return `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n${hashtags}\n\n💡 사이트는 bio 참고!`;
    
    case 'kakao':
      return `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n예시: ${data.examples.join(', ')}`;
    
    default:
      return `나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n예시: ${data.examples.join(', ')}`;
  }
};

// 카카오톡 공유 - SDK를 사용한 자동 공유
export const shareToKakao = async (data: ShareData) => {
  // 결과 페이지 URL 생성 (answers, lang 포함)
  const langParam = data.lang ? `&lang=${data.lang}` : '';
  const answersParam = data.encodedAnswers ? `&answers=${data.encodedAnswers}` : '';
  const resultUrl = `${window.location.origin}/result?code=${data.code}${langParam}${answersParam}`;
  const homeUrl = data.lang ? `${window.location.origin}/?lang=${data.lang}` : `${window.location.origin}/`;

  // 카카오톡 SDK가 있는 경우 사용
  if (typeof window !== 'undefined' && window.Kakao && window.Kakao.isInitialized()) {
    try {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `🎭 나의 개그유형: ${data.code} - ${data.nickname}`,
          description: `${data.summary}`,
          imageUrl: `${window.location.origin}/images/result/${data.code}.png`,
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },
        buttons: [
          {
            title: '👀 결과 보기',
            link: {
              mobileWebUrl: resultUrl,
              webUrl: resultUrl,
            },
          },
          {
            title: '🎯 나도 테스트하기',
            link: {
              mobileWebUrl: homeUrl,
              webUrl: homeUrl,
            },
          },
        ],
      });
      return;
    } catch (error) {
      console.error('카카오톡 SDK 공유 실패:', error);
    }
  }

  // SDK가 없거나 실패한 경우 안내
  alert('카카오톡 앱이 설치되어 있지 않거나 SDK 초기화에 실패했습니다.\n\n다른 공유 방법을 이용해주세요.');
};

// 인스타그램 공유 - 이미지 캡처 후 네이티브 공유
export const shareToInstagram = async (data: ShareData) => {
  try {
    // 결과 이미지 캡처
    const { captureResult } = await import('./capture');
    const imageDataUrl = await captureResult();
    
    // Blob으로 변환
    const response = await fetch(imageDataUrl);
    const blob = await response.blob();
    
    // 파일 생성
    const file = new File([blob], '개그유형결과.png', { type: 'image/png' });
    
    // 네이티브 공유 API 사용
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `🎭 나의 개그유형: ${data.code} - ${data.nickname}`,
        text: `${data.summary}\n\n#개그유형테스트 #${data.code} #${data.nickname}`,
        files: [file],
        url: window.location.href,
      });
    } else {
      // 네이티브 공유가 지원되지 않으면 다운로드 안내
      const { downloadImage } = await import('./capture');
      downloadImage(imageDataUrl, '개그유형결과.png');
      alert('📸 인스타그램 공유 준비 완료!\n\n1. 다운로드된 이미지를 인스타그램에 업로드\n2. 캡션에 다음 텍스트 추가:\n\n' + 
            `${data.summary}\n\n#개그유형테스트 #${data.code} #${data.nickname}\n\n🔗 ${window.location.href}`);
    }
  } catch (error) {
    console.error('인스타그램 공유 실패:', error);
    alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
  }
};

// 트위터 공유 - 이미지 캡처 후 다운로드 안내
export const shareToTwitter = async (data: ShareData) => {
  try {
    // 결과 이미지 캡처
    const { captureResult } = await import('./capture');
    const imageDataUrl = await captureResult();
    
    // 이미지 다운로드
    const { downloadImage } = await import('./capture');
    downloadImage(imageDataUrl, '개그유형결과.png');
    
    // 트위터 공유 URL 생성
    const text = getShareText('twitter', data);
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    
    // 트위터 공유 창 열기
    window.open(shareUrl, '_blank', 'width=600,height=400');
    
    alert('🐦 트위터 공유 준비 완료!\n\n1. 다운로드된 이미지를 트위터에 업로드\n2. 새로 열린 창에서 트윗 내용 확인\n3. 이미지와 함께 게시하세요!');
  } catch (error) {
    console.error('트위터 공유 실패:', error);
    alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
  }
};

// 틱톡 공유 - 이미지 캡처 후 다운로드 안내
export const shareToTikTok = async (data: ShareData) => {
  try {
    // 결과 이미지 캡처
    const { captureResult } = await import('./capture');
    const imageDataUrl = await captureResult();
    
    // 이미지 다운로드
    const { downloadImage } = await import('./capture');
    downloadImage(imageDataUrl, '개그유형결과.png');
    
    const text = getShareText('tiktok', data);
    
    alert('🎬 틱톡 공유 준비 완료!\n\n1. 다운로드된 이미지를 틱톡에 업로드\n2. 캡션에 다음 텍스트 추가:\n\n' + 
          `${text}\n\n💡 팁: "개그유형테스트 챌린지"로 친구들 태그해보세요!`);
  } catch (error) {
    console.error('틱톡 공유 실패:', error);
    alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
  }
};

// 클립보드 복사 fallback 함수
const fallbackCopyTextToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    alert('텍스트가 클립보드에 복사되었습니다!\n인스타그램에서 붙여넣기 하세요.');
  } catch {
    console.error('클립보드 복사 실패');
    alert('클립보드 복사에 실패했습니다. 수동으로 복사해주세요.');
  }
  
  document.body.removeChild(textArea);
};

// 네이티브 공유 API 사용 (모바일에서 지원하는 경우)
export const shareNative = async (data: ShareData) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `🎭 나의 개그유형: ${data.code} - ${data.nickname}`,
        text: `${data.summary}\n\n#개그유형테스트 #${data.code}`,
        url: window.location.origin + '/',
      });
    } catch (error) {
      console.error('네이티브 공유 실패:', error);
      // 네이티브 공유가 실패하면 카카오톡으로 fallback
      shareToKakao(data);
    }
  } else {
    // 네이티브 공유를 지원하지 않으면 카카오톡으로 fallback
    shareToKakao(data);
  }
};

// 링크 복사 기능 개선
export const copyLink = async (data: ShareData) => {
  const text = `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n테스트 하러가기: ${window.location.origin}/\n\n#개그유형테스트 #${data.code} #${data.nickname}`;
  
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      alert('✅ 링크가 클립보드에 복사되었습니다!\n\n어디든 붙여넣기해서 공유하세요!');
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
      fallbackCopyTextToClipboard(text);
    }
  } else {
    fallbackCopyTextToClipboard(text);
  }
};

// 인스타그램 스토리 전용 텍스트 생성
export const getInstagramStoryText = (data: ShareData) => {
  const hashtags = getHashtags('instagram', data).slice(0, 5).join(' '); // 스토리는 5개 정도
  return `🎭 ${data.code}\n${data.nickname}\n\n${data.summary}\n\n${hashtags}`;
};

// 플랫폼별 공유 통계 추적
export const trackShare = (platform: string, data: ShareData) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      method: platform,
      content_type: 'test_result',
      item_id: data.code
    });
  }
}; 