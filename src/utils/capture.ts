import html2canvas from 'html2canvas';

// 결과 페이지 캡처
export const captureResult = async (): Promise<string> => {
  const element = document.getElementById('result-container');
  if (!element) {
    throw new Error('결과 컨테이너를 찾을 수 없습니다.');
  }

  const canvas = await html2canvas(element, {
    backgroundColor: '#ffffff',
    scale: 2, // 고해상도
    useCORS: true,
    allowTaint: true,
    logging: false,
  });

  return canvas.toDataURL('image/png');
};

// 인스타그램 스토리 전용 이미지 생성 (보고서 기반)
export const captureInstagramStory = async (data: {
  code: string;
  nickname: string;
  summary: string;
  examples: string[];
}): Promise<string> => {
  // 스토리용 임시 컨테이너 생성
  const storyContainer = document.createElement('div');
  storyContainer.style.cssText = `
    position: fixed;
    top: -9999px;
    left: -9999px;
    width: 1080px;
    height: 1920px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: white;
    text-align: center;
    z-index: -1;
  `;

  storyContainer.innerHTML = `
    <div style="
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 30px;
      padding: 60px 40px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      max-width: 800px;
    ">
      <div style="
        font-size: 120px;
        font-weight: bold;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      ">🎭</div>
      
      <div style="
        font-size: 80px;
        font-weight: bold;
        margin-bottom: 30px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        letter-spacing: 2px;
      ">${data.code}</div>
      
      <div style="
        font-size: 60px;
        font-weight: 600;
        margin-bottom: 40px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      ">${data.nickname}</div>
      
      <div style="
        font-size: 36px;
        line-height: 1.4;
        margin-bottom: 40px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
      ">${data.summary}</div>
      
      <div style="
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        margin-bottom: 40px;
      ">
        ${data.examples.map(example => `
          <span style="
            background: rgba(255, 255, 255, 0.2);
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 28px;
            font-weight: 500;
            border: 1px solid rgba(255, 255, 255, 0.3);
          ">${example}</span>
        `).join('')}
      </div>
      
      <div style="
        font-size: 24px;
        opacity: 0.8;
        margin-bottom: 30px;
      ">#개그유형테스트 #${data.code} #${data.nickname}</div>
      
      <div style="
        font-size: 20px;
        opacity: 0.6;
        margin-top: 20px;
      ">개그유형테스트.com</div>
    </div>
  `;

  document.body.appendChild(storyContainer);

  try {
    const canvas = await html2canvas(storyContainer, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      width: 1080,
      height: 1920,
    });

    const dataUrl = canvas.toDataURL('image/png');
    document.body.removeChild(storyContainer);
    return dataUrl;
  } catch (error) {
    document.body.removeChild(storyContainer);
    throw error;
  }
};

// 일반 결과 이미지 다운로드
export const downloadImage = (dataUrl: string, filename?: string) => {
  const link = document.createElement('a');
  link.download = filename || '개그유형결과.png';
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// 이미지 공유 (네이티브 공유 API 사용)
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

// 인스타그램 스토리 전용 이미지 공유
export const shareInstagramStoryImage = async (dataUrl: string) => {
  try {
    // Blob으로 변환
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    
    // 파일 생성
    const file = new File([blob], '개그유형스토리.png', { type: 'image/png' });
    
    // 네이티브 공유 API 사용
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: '개그유형 테스트 스토리',
        text: '인스타그램 스토리에 올릴 이미지입니다!',
        files: [file],
      });
    } else {
      // 네이티브 공유가 지원되지 않으면 다운로드
      downloadImage(dataUrl, '개그유형스토리.png');
    }
  } catch (error) {
    console.error('스토리 이미지 공유 실패:', error);
    // 실패시 다운로드로 fallback
    downloadImage(dataUrl, '개그유형스토리.png');
  }
}; 