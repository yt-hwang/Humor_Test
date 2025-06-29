import html2canvas from 'html2canvas';

export const captureResult = async (elementId: string = 'result-container'): Promise<string> => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    throw new Error('결과 컨테이너를 찾을 수 없습니다.');
  }

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#fefefe',
      scale: 2, // 고해상도
      useCORS: true,
      allowTaint: true,
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    return canvas.toDataURL('image/png', 0.9);
  } catch (error) {
    console.error('이미지 캡처 실패:', error);
    throw new Error('이미지 캡처에 실패했습니다.');
  }
};

// 인스타그램 스토리 전용 이미지 생성 (9:16 비율)
export const captureInstagramStory = async (data: {
  code: string;
  nickname: string;
  summary: string;
  description: string;
  examples: string[];
}): Promise<string> => {
  // 스토리 전용 컨테이너 생성
  const storyContainer = document.createElement('div');
  storyContainer.style.cssText = `
    position: fixed;
    top: -9999px;
    left: -9999px;
    width: 1080px;
    height: 1920px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 80px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: -1;
  `;

  storyContainer.innerHTML = `
    <div style="font-size: 48px; font-weight: bold; margin-bottom: 20px;">🎭</div>
    <div style="font-size: 72px; font-weight: bold; margin-bottom: 40px; color: #FFD700;">${data.code}</div>
    <div style="font-size: 48px; font-weight: bold; margin-bottom: 60px;">${data.nickname}</div>
    <div style="font-size: 36px; line-height: 1.4; margin-bottom: 60px; max-width: 800px;">${data.summary}</div>
    <div style="font-size: 28px; line-height: 1.5; margin-bottom: 80px; max-width: 900px; opacity: 0.9;">${data.description}</div>
    <div style="font-size: 32px; margin-bottom: 40px;">이런 스타일의 예시</div>
    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-bottom: 80px;">
      ${data.examples.map(example => `
        <div style="background: rgba(255,255,255,0.2); padding: 12px 24px; border-radius: 25px; font-size: 28px; backdrop-filter: blur(10px);">
          ${example}
        </div>
      `).join('')}
    </div>
    <div style="font-size: 24px; opacity: 0.7; margin-bottom: 40px;">개그유형 테스트</div>
    <div style="font-size: 20px; opacity: 0.5;">humor-test.vercel.app</div>
  `;

  document.body.appendChild(storyContainer);

  try {
    const canvas = await html2canvas(storyContainer, {
      backgroundColor: 'transparent',
      scale: 1,
      useCORS: true,
      allowTaint: true,
      width: 1080,
      height: 1920,
    });

    const imageDataUrl = canvas.toDataURL('image/png', 0.9);
    document.body.removeChild(storyContainer);
    
    return imageDataUrl;
  } catch (error) {
    document.body.removeChild(storyContainer);
    console.error('스토리 이미지 생성 실패:', error);
    throw new Error('스토리 이미지 생성에 실패했습니다.');
  }
};

export const downloadImage = (dataUrl: string, filename: string = '개그유형결과.png') => {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const shareImage = async (dataUrl: string) => {
  try {
    // Blob으로 변환
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    
    // 파일 생성
    const file = new File([blob], '개그유형결과.png', { type: 'image/png' });
    
    // 네이티브 공유 API 사용
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: '나의 개그유형 결과',
        text: '개그유형 테스트 결과를 확인해보세요!',
        files: [file],
      });
    } else {
      // 네이티브 공유가 지원되지 않으면 다운로드
      downloadImage(dataUrl);
    }
  } catch (error) {
    console.error('이미지 공유 실패:', error);
    // 실패시 다운로드로 fallback
    downloadImage(dataUrl);
  }
}; 