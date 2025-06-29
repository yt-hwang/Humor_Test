export interface ShareData {
  code: string;
  nickname: string;
  summary: string;
  description: string;
  examples: string[];
}

// 플랫폼별 해시태그 전략
const getHashtags = (platform: string, data: ShareData) => {
  const baseTags = ['#개그유형테스트', `#${data.code}`, `#${data.nickname}`];
  
  switch (platform) {
    case 'instagram':
      return [
        ...baseTags,
        '#MBTI', '#성격테스트', '#개그맨', '#유재석', '#무한도전',
        '#런닝맨', '#개그', '#유머', '#테스트', '#재미'
      ].slice(0, 10); // 인스타그램은 10개 정도가 적당
    case 'twitter':
      return baseTags.slice(0, 2); // 트위터는 2개 이하
    case 'tiktok':
      return [
        ...baseTags,
        '#심리테스트', '#성격테스트', '#MBTI', '#ForYou', '#fyp',
        '#개그', '#유머', '#테스트', '#재미', '#챌린지'
      ].slice(0, 8);
    default:
      return baseTags;
  }
};

// 플랫폼별 공유 텍스트 최적화
const getShareText = (platform: string, data: ShareData) => {
  const hashtags = getHashtags(platform, data).join(' ');
  
  switch (platform) {
    case 'instagram':
      return `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n${data.description}\n\n예시: ${data.examples.join(', ')}\n\n${hashtags}`;
    
    case 'twitter':
      return `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n${hashtags}`;
    
    case 'tiktok':
      return `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n${hashtags}`;
    
    default:
      return `나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n${data.description}\n\n예시: ${data.examples.join(', ')}`;
  }
};

export const shareToKakao = (data: ShareData) => {
  // 카카오톡 SDK가 있는 경우 사용
  if (typeof window !== 'undefined' && window.Kakao && window.Kakao.isInitialized()) {
    try {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: `🎭 나의 개그유형: ${data.code} - ${data.nickname}`,
          description: `${data.summary}\n\n${data.description}`,
          imageUrl: `https://your-domain.com/images/result/${data.code}.png`, // 추후 이미지 추가
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '🎯 테스트 하러가기',
            link: {
              mobileWebUrl: window.location.origin,
              webUrl: window.location.origin,
            },
          },
          {
            title: '📸 결과 이미지로 공유',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
      return;
    } catch (error) {
      console.error('카카오톡 SDK 공유 실패:', error);
    }
  }
  
  // SDK가 없거나 실패한 경우 기존 방식 사용
  const text = getShareText('default', data);
  const shareUrl = `https://story.kakao.com/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
  window.open(shareUrl, '_blank', 'width=600,height=400');
};

export const shareToInstagram = (data: ShareData) => {
  const text = getShareText('instagram', data);
  
  // 인스타그램 스토리 공유 (클립보드에 텍스트 복사)
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('📸 인스타그램 공유 준비 완료!\n\n1. 인스타그램 스토리로 이동\n2. 텍스트를 붙여넣기\n3. 링크 스티커 추가: ' + window.location.href + '\n4. 해시태그도 함께 공유하세요!');
    }).catch(() => {
      fallbackCopyTextToClipboard(text);
    });
  } else {
    fallbackCopyTextToClipboard(text);
  }
};

export const shareToTwitter = (data: ShareData) => {
  const text = getShareText('twitter', data);
  
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
  
  window.open(shareUrl, '_blank', 'width=600,height=400');
};

export const shareToTikTok = (data: ShareData) => {
  const text = getShareText('tiktok', data);
  
  // 틱톡은 직접 링크 공유가 어려우므로 안내 메시지
  const tiktokGuide = `🎬 틱톡 공유 가이드\n\n1. 결과 화면을 스크린샷하거나 녹화\n2. 틱톡에서 15초 영상 제작\n3. 설명에 다음 텍스트 복사:\n\n${text}\n\n4. 해시태그 추가하여 업로드!\n\n💡 팁: "개그유형테스트 챌린지"로 친구들 태그해보세요!`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert(tiktokGuide);
    }).catch(() => {
      fallbackCopyTextToClipboard(text);
      alert(tiktokGuide);
    });
  } else {
    fallbackCopyTextToClipboard(text);
    alert(tiktokGuide);
  }
};

export const shareToFacebook = (data: ShareData) => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
  
  window.open(shareUrl, '_blank', 'width=600,height=400');
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
  } catch (err) {
    console.error('클립보드 복사 실패:', err);
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
        text: `${data.summary}\n\n${data.description}\n\n#개그유형테스트 #${data.code}`,
        url: window.location.href,
      });
    } catch (err) {
      console.error('네이티브 공유 실패:', err);
      // 네이티브 공유가 실패하면 카카오톡으로 fallback
      shareToKakao(data);
    }
  } else {
    // 네이티브 공유를 지원하지 않으면 카카오톡으로 fallback
    shareToKakao(data);
  }
};

// 링크 복사 기능
export const copyLink = async (data: ShareData) => {
  const text = `🎭 나의 개그유형: ${data.code} - ${data.nickname}\n\n${data.summary}\n\n테스트 하러가기: ${window.location.href}\n\n#개그유형테스트 #${data.code} #${data.nickname}`;
  
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      alert('✅ 링크가 클립보드에 복사되었습니다!\n\n어디든 붙여넣기해서 공유하세요!');
    } catch (err) {
      fallbackCopyTextToClipboard(text);
    }
  } else {
    fallbackCopyTextToClipboard(text);
  }
}; 