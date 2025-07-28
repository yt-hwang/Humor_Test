// 답변 데이터를 URL에 안전하게 전달하기 위한 인코딩/디코딩 유틸리티

export function encodeAnswers(answers: (number | null)[]): string {
  // 답변 배열을 문자열로 변환 (null은 0으로 처리)
  const answersString = answers.map(answer => answer || 0).join('');
  // Base64로 인코딩
  return btoa(answersString);
}

export function decodeAnswers(encoded: string): (number | null)[] {
  try {
    // Base64 디코딩
    const decoded = atob(encoded);
    // 문자열을 배열로 변환 (0은 null로 처리)
    return decoded.split('').map(char => {
      const num = parseInt(char);
      return num === 0 ? null : num;
    });
  } catch (error) {
    console.error('Failed to decode answers:', error);
    return [];
  }
} 