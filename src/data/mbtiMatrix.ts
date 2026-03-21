// MBTI-Humor Matrix Data (Korean)
// 8 Humor axes (O, I, N, B, V, P, Br, Da) x 8 MBTI letters (E, I, N, S, T, F, J, P)

export interface MatrixCell {
  humorLetter: string;  // O, I, N, B, V, P, Br, Da
  mbtiLetter: string;   // E, I, N, S, T, F, J, P
  relationship: string; // 관계 설명 (2-3문장)
  compatibility: 'high' | 'medium' | 'low' | 'neutral';
}

export interface MBTIAxisInfo {
  dimension: 'EI' | 'NS' | 'TF' | 'JP';
  letterA: string;
  letterB: string;
  nameKo: string;
  nameEn: string;
  descriptionKo: string;
  descriptionEn: string;
}

export const mbtiAxes: MBTIAxisInfo[] = [
  {
    dimension: 'EI',
    letterA: 'E',
    letterB: 'I',
    nameKo: '외향/내향',
    nameEn: 'Extraversion/Introversion',
    descriptionKo: '표현 스타일과 에너지 방향',
    descriptionEn: 'Expression style and energy direction'
  },
  {
    dimension: 'NS',
    letterA: 'N',
    letterB: 'S',
    nameKo: '직관/감각',
    nameEn: 'Intuition/Sensing',
    descriptionKo: '접근 방식과 정보 처리',
    descriptionEn: 'Approach and information processing'
  },
  {
    dimension: 'TF',
    letterA: 'T',
    letterB: 'F',
    nameKo: '사고/감정',
    nameEn: 'Thinking/Feeling',
    descriptionKo: '수용 및 회복 방식',
    descriptionEn: 'Reception and recovery style'
  },
  {
    dimension: 'JP',
    letterA: 'J',
    letterB: 'P',
    nameKo: '판단/인식',
    nameEn: 'Judging/Perceiving',
    descriptionKo: '상황 대처와 전달 방식',
    descriptionEn: 'Situation handling and delivery style'
  }
];

// Humor letter descriptions
export const humorLetterInfo = {
  O: { ko: '준비형', en: 'Organized', descKo: '사전에 설계된 유머', descEn: 'Pre-planned humor' },
  I: { ko: '즉흥형', en: 'Improvised', descKo: '현장에서 터지는 유머', descEn: 'Spontaneous humor' },
  N: { ko: '직관형', en: 'Intuitive', descKo: '현실 공감 기반', descEn: 'Reality-based empathy' },
  B: { ko: '추상형', en: 'Abstract', descKo: '맥락 비틀기', descEn: 'Context-breaking absurdity' },
  V: { ko: '언어형', en: 'Verbal', descKo: '말과 언어 중심', descEn: 'Word-based comedy' },
  P: { ko: '표현형', en: 'Physical', descKo: '표정, 몸짓 중심', descEn: 'Expression and gesture-based' },
  Br: { ko: '밝음', en: 'Bright', descKo: '유쾌하고 긍정적', descEn: 'Cheerful and positive' },
  Da: { ko: '다크', en: 'Dark', descKo: '풍자적이고 날카로움', descEn: 'Satirical and sharp' }
};

// 64 Matrix cells (8x8)
export const mbtiMatrix: MatrixCell[] = [
  // O (Organized) with MBTI letters
  { humorLetter: 'O', mbtiLetter: 'E', relationship: '외향적이고 준비된 유머를 가진 사람은 자연스러운 이벤트 MC가 됩니다. 사전에 준비한 재료와 사교적 에너지가 결합되어 세련되고 매력적인 퍼포먼스를 만들어냅니다.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'I', relationship: '내향적이면서 준비된 유머를 선호하면 글이나 영상 콘텐츠에서 빛납니다. 혼자 다듬은 완성도 높은 개그를 조용히 선보이는 스타일입니다.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'N', relationship: '직관적 사고와 준비된 구조가 만나면 복잡한 개념도 재미있게 풀어냅니다. 추상적 아이디어를 체계적으로 정리해 전달하는 능력이 뛰어납니다.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'S', relationship: '감각적 디테일과 준비된 유머가 만나면 현실감 있는 상황극이 탄생합니다. 구체적인 묘사로 청중의 공감을 이끌어냅니다.', compatibility: 'medium' },
  { humorLetter: 'O', mbtiLetter: 'T', relationship: '논리적 사고와 구조화된 유머의 조합입니다. 분석적으로 개그를 설계하고, 타이밍과 구성을 정밀하게 계산합니다.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'F', relationship: '감정적 공감과 준비된 유머의 만남입니다. 청중의 반응을 미리 고려해 따뜻하고 포용적인 개그를 준비합니다.', compatibility: 'medium' },
  { humorLetter: 'O', mbtiLetter: 'J', relationship: '계획적 성향과 준비형 유머의 완벽한 조화입니다. 체계적으로 개그를 설계하고 예측 가능한 흐름 안에서 안정감을 줍니다.', compatibility: 'high' },
  { humorLetter: 'O', mbtiLetter: 'P', relationship: '유연한 성격이지만 준비된 유머를 선호하면 기본 틀은 갖추되 상황에 맞게 조절합니다. 계획과 즉흥의 균형을 잡습니다.', compatibility: 'neutral' },

  // I (Improvised) with MBTI letters
  { humorLetter: 'I', mbtiLetter: 'E', relationship: '외향적이고 즉흥적인 유머는 파티의 중심이 됩니다. 에너지 넘치는 현장 반응으로 분위기를 순식간에 띄웁니다.', compatibility: 'high' },
  { humorLetter: 'I', mbtiLetter: 'I', relationship: '내향적이면서 즉흥 유머를 선호하면 가까운 사람들 사이에서 갑자기 한마디로 분위기를 터뜨립니다. 조용하다가 치명적입니다.', compatibility: 'medium' },
  { humorLetter: 'I', mbtiLetter: 'N', relationship: '직관과 즉흥의 만남입니다. 순간적으로 연결고리를 발견하고 예상치 못한 비유로 웃음을 이끌어냅니다.', compatibility: 'high' },
  { humorLetter: 'I', mbtiLetter: 'S', relationship: '감각적 관찰력과 즉흥 유머의 조합입니다. 현장에서 포착한 디테일을 바로 개그로 전환하는 순발력이 있습니다.', compatibility: 'medium' },
  { humorLetter: 'I', mbtiLetter: 'T', relationship: '논리적이지만 즉흥적인 유머입니다. 현장에서 빠르게 모순을 포착하고 논리적 역설로 웃음을 만듭니다.', compatibility: 'medium' },
  { humorLetter: 'I', mbtiLetter: 'F', relationship: '감정적 공감과 즉흥 유머의 조합입니다. 상대방의 감정을 읽고 그 순간에 맞는 따뜻한 농담을 던집니다.', compatibility: 'high' },
  { humorLetter: 'I', mbtiLetter: 'J', relationship: '계획적 성향이지만 즉흥 유머를 즐기면 내심 불안하면서도 현장의 스릴을 즐깁니다. 예상치 못한 자신을 발견합니다.', compatibility: 'low' },
  { humorLetter: 'I', mbtiLetter: 'P', relationship: '유연함과 즉흥성의 자연스러운 조합입니다. 어떤 상황에서든 흐름을 타고 자유롭게 유머를 풀어냅니다.', compatibility: 'high' },

  // N (Intuitive humor) with MBTI letters
  { humorLetter: 'N', mbtiLetter: 'E', relationship: '외향적이고 현실 공감형 유머입니다. 모두가 겪는 상황을 크게 표현하며 "맞아 맞아!"를 이끌어냅니다.', compatibility: 'high' },
  { humorLetter: 'N', mbtiLetter: 'I', relationship: '내향적이면서 현실 공감 유머를 선호합니다. 조용히 관찰한 일상의 포인트를 정확히 짚어 공감대를 형성합니다.', compatibility: 'medium' },
  { humorLetter: 'N', mbtiLetter: 'N', relationship: '직관형 MBTI와 직관형 유머의 만남입니다. 추상적 패턴에서 공감 포인트를 찾아 깊이 있는 유머를 만듭니다.', compatibility: 'high' },
  { humorLetter: 'N', mbtiLetter: 'S', relationship: '감각형 MBTI와 직관형 유머의 조합입니다. 구체적 경험을 바탕으로 보편적 공감을 이끌어내는 균형 잡힌 스타일입니다.', compatibility: 'medium' },
  { humorLetter: 'N', mbtiLetter: 'T', relationship: '논리적 분석과 현실 공감의 조합입니다. 일상의 불합리함을 논리적으로 짚어내며 "왜 그런지" 설명하는 유머입니다.', compatibility: 'medium' },
  { humorLetter: 'N', mbtiLetter: 'F', relationship: '감정적 공감과 현실 기반 유머의 완벽한 조화입니다. 모두의 마음을 어루만지는 따뜻한 일상 유머의 달인입니다.', compatibility: 'high' },
  { humorLetter: 'N', mbtiLetter: 'J', relationship: '체계적 접근과 현실 공감 유머입니다. 일상의 패턴을 구조화해서 "우리 다 그렇잖아" 하고 정리해줍니다.', compatibility: 'medium' },
  { humorLetter: 'N', mbtiLetter: 'P', relationship: '유연한 관찰과 현실 공감의 조합입니다. 다양한 상황에서 공감 포인트를 자유롭게 발견하고 공유합니다.', compatibility: 'high' },

  // B (Abstract/Absurd humor) with MBTI letters
  { humorLetter: 'B', mbtiLetter: 'E', relationship: '외향적이고 병맛 유머를 좋아하면 엉뚱한 에너지를 마구 발산합니다. 주변을 혼란에 빠뜨리며 즐거워합니다.', compatibility: 'high' },
  { humorLetter: 'B', mbtiLetter: 'I', relationship: '내향적이면서 병맛 유머를 선호하면 조용히 기발한 생각을 품고 있다가 폭발적으로 터뜨립니다.', compatibility: 'medium' },
  { humorLetter: 'B', mbtiLetter: 'N', relationship: '직관형과 추상 유머의 만남입니다. 기존 맥락을 완전히 새로운 방식으로 비틀어 신선한 충격을 줍니다.', compatibility: 'high' },
  { humorLetter: 'B', mbtiLetter: 'S', relationship: '감각형이면서 병맛 유머를 즐기면 현실적 디테일을 엉뚱하게 왜곡하는 재미를 추구합니다.', compatibility: 'low' },
  { humorLetter: 'B', mbtiLetter: 'T', relationship: '논리적 사고와 비논리적 유머의 의외의 조합입니다. 논리적으로 비논리를 설계해 "말은 되는데 뭔가 이상한" 유머를 만듭니다.', compatibility: 'medium' },
  { humorLetter: 'B', mbtiLetter: 'F', relationship: '감정적 공감과 추상 유머의 만남입니다. 엉뚱하면서도 어딘가 따뜻한, 순수한 병맛을 추구합니다.', compatibility: 'medium' },
  { humorLetter: 'B', mbtiLetter: 'J', relationship: '계획적 성향이 병맛 유머를 만나면 체계적으로 혼돈을 설계합니다. 정교하게 짜인 엉뚱함의 미학입니다.', compatibility: 'neutral' },
  { humorLetter: 'B', mbtiLetter: 'P', relationship: '유연함과 추상 유머의 자연스러운 조합입니다. 어디로 튈지 모르는 자유로운 병맛의 세계에서 마음껏 놉니다.', compatibility: 'high' },

  // V (Verbal) with MBTI letters
  { humorLetter: 'V', mbtiLetter: 'E', relationship: '외향적이고 말 유머를 좋아하면 대화의 중심이 됩니다. 끊임없이 재치 있는 말로 분위기를 주도합니다.', compatibility: 'high' },
  { humorLetter: 'V', mbtiLetter: 'I', relationship: '내향적이면서 말 유머를 선호하면 적은 말에 큰 힘을 담습니다. 한마디가 묵직하게 웃음을 터뜨립니다.', compatibility: 'medium' },
  { humorLetter: 'V', mbtiLetter: 'N', relationship: '직관과 언어 유머의 조합입니다. 복잡한 개념을 재치 있는 비유와 말장난으로 풀어냅니다.', compatibility: 'high' },
  { humorLetter: 'V', mbtiLetter: 'S', relationship: '감각적 디테일과 언어 유머의 만남입니다. 구체적 상황 묘사를 말로 생생하게 전달합니다.', compatibility: 'medium' },
  { humorLetter: 'V', mbtiLetter: 'T', relationship: '논리와 언어 유머의 완벽한 조합입니다. 정교한 논리 구조로 말 유머를 설계하고 펀치라인을 정확히 때립니다.', compatibility: 'high' },
  { humorLetter: 'V', mbtiLetter: 'F', relationship: '감정과 언어의 만남입니다. 따뜻한 말로 마음을 어루만지며 웃음과 감동을 동시에 전합니다.', compatibility: 'medium' },
  { humorLetter: 'V', mbtiLetter: 'J', relationship: '체계적인 말 유머입니다. 구조화된 스토리텔링으로 청중을 이끌고 계획된 클라이막스에서 터뜨립니다.', compatibility: 'high' },
  { humorLetter: 'V', mbtiLetter: 'P', relationship: '유연한 언어 유머입니다. 상황에 따라 자유롭게 말을 바꾸며 흐름을 타는 대화의 달인입니다.', compatibility: 'medium' },

  // P (Physical) with MBTI letters
  { humorLetter: 'P', mbtiLetter: 'E', relationship: '외향적이고 몸 유머를 좋아하면 무대 위에서 온몸으로 표현합니다. 에너지 넘치는 퍼포먼스로 시선을 사로잡습니다.', compatibility: 'high' },
  { humorLetter: 'P', mbtiLetter: 'I', relationship: '내향적이면서 몸 유머를 선호하면 표정과 작은 제스처에 모든 것을 담습니다. 미세한 움직임으로 큰 웃음을 만듭니다.', compatibility: 'medium' },
  { humorLetter: 'P', mbtiLetter: 'N', relationship: '직관과 신체 표현의 조합입니다. 추상적 개념을 몸으로 시각화해 독특한 방식으로 전달합니다.', compatibility: 'medium' },
  { humorLetter: 'P', mbtiLetter: 'S', relationship: '감각과 몸 유머의 자연스러운 조합입니다. 현실적인 신체 리액션으로 상황을 생생하게 재현합니다.', compatibility: 'high' },
  { humorLetter: 'P', mbtiLetter: 'T', relationship: '논리적이면서 몸 유머를 즐기면 정밀하게 계산된 동작으로 코미디를 구사합니다. 타이밍의 과학입니다.', compatibility: 'medium' },
  { humorLetter: 'P', mbtiLetter: 'F', relationship: '감정과 신체 표현의 만남입니다. 진심 어린 리액션으로 감정을 전달하고 공감을 이끌어냅니다.', compatibility: 'high' },
  { humorLetter: 'P', mbtiLetter: 'J', relationship: '계획적인 몸 유머입니다. 안무처럼 정교하게 설계된 움직임으로 완성도 높은 퍼포먼스를 선보입니다.', compatibility: 'medium' },
  { humorLetter: 'P', mbtiLetter: 'P', relationship: '유연함과 몸 유머의 완벽한 조화입니다. 자유롭게 즉흥적인 신체 표현으로 현장을 장악합니다.', compatibility: 'high' },

  // Br (Bright) with MBTI letters
  { humorLetter: 'Br', mbtiLetter: 'E', relationship: '외향적이고 밝은 유머의 조합은 파티의 꽃입니다. 긍정 에너지를 마구 발산하며 모두를 즐겁게 합니다.', compatibility: 'high' },
  { humorLetter: 'Br', mbtiLetter: 'I', relationship: '내향적이면서 밝은 유머를 선호하면 조용하지만 따뜻한 미소로 주변을 환하게 합니다.', compatibility: 'medium' },
  { humorLetter: 'Br', mbtiLetter: 'N', relationship: '직관과 밝은 유머의 만남입니다. 희망적인 관점에서 재미를 찾고 긍정적 메시지를 전달합니다.', compatibility: 'high' },
  { humorLetter: 'Br', mbtiLetter: 'S', relationship: '감각적 현실과 밝은 유머의 조합입니다. 일상의 소소한 행복을 발견하고 나누는 스타일입니다.', compatibility: 'high' },
  { humorLetter: 'Br', mbtiLetter: 'T', relationship: '논리적이면서 밝은 유머를 추구합니다. 분석적이지만 결론은 항상 긍정적이고 유쾌합니다.', compatibility: 'medium' },
  { humorLetter: 'Br', mbtiLetter: 'F', relationship: '감정과 밝은 유머의 완벽한 조화입니다. 따뜻한 마음으로 모두를 웃게 만드는 힐링 유머의 달인입니다.', compatibility: 'high' },
  { humorLetter: 'Br', mbtiLetter: 'J', relationship: '체계적이면서 밝은 유머입니다. 긍정적인 분위기를 계획적으로 조성하고 유지합니다.', compatibility: 'medium' },
  { humorLetter: 'Br', mbtiLetter: 'P', relationship: '유연하고 밝은 유머의 조합입니다. 어떤 상황에서든 긍정의 포인트를 찾아 분위기를 띄웁니다.', compatibility: 'high' },

  // Da (Dark) with MBTI letters
  { humorLetter: 'Da', mbtiLetter: 'E', relationship: '외향적이면서 다크 유머를 좋아하면 공개적으로 날카로운 풍자를 던집니다. 대담하게 진실을 말합니다.', compatibility: 'medium' },
  { humorLetter: 'Da', mbtiLetter: 'I', relationship: '내향적이고 다크 유머를 선호하면 조용히 관찰하다 한마디로 핵심을 찌릅니다. 말은 적지만 임팩트가 큽니다.', compatibility: 'high' },
  { humorLetter: 'Da', mbtiLetter: 'N', relationship: '직관과 다크 유머의 만남입니다. 숨겨진 모순과 아이러니를 꿰뚫어보고 날카롭게 드러냅니다.', compatibility: 'high' },
  { humorLetter: 'Da', mbtiLetter: 'S', relationship: '감각과 다크 유머의 조합입니다. 현실의 어두운 면을 구체적으로 포착해 냉정하게 보여줍니다.', compatibility: 'medium' },
  { humorLetter: 'Da', mbtiLetter: 'T', relationship: '논리와 다크 유머의 강력한 조합입니다. 냉철한 분석으로 사회의 모순을 풍자하는 비평가 스타일입니다.', compatibility: 'high' },
  { humorLetter: 'Da', mbtiLetter: 'F', relationship: '감정적이면서 다크 유머를 즐기면 비극을 유머로 승화시킵니다. 아픔을 웃음으로 치유하는 스타일입니다.', compatibility: 'medium' },
  { humorLetter: 'Da', mbtiLetter: 'J', relationship: '체계적인 다크 유머입니다. 정교하게 구성된 풍자로 메시지를 명확하게 전달합니다.', compatibility: 'high' },
  { humorLetter: 'Da', mbtiLetter: 'P', relationship: '유연한 다크 유머입니다. 상황에 따라 날카로움의 강도를 조절하며 자유롭게 풍자합니다.', compatibility: 'medium' }
];

// Helper function to get matrix cell
export function getMatrixCell(humorLetter: string, mbtiLetter: string): MatrixCell | undefined {
  return mbtiMatrix.find(
    cell => cell.humorLetter === humorLetter && cell.mbtiLetter === mbtiLetter
  );
}

// Helper function to get all cells for a humor letter
export function getMatrixRowByHumorLetter(humorLetter: string): MatrixCell[] {
  return mbtiMatrix.filter(cell => cell.humorLetter === humorLetter);
}

// Helper function to get all cells for an MBTI letter
export function getMatrixColumnByMBTILetter(mbtiLetter: string): MatrixCell[] {
  return mbtiMatrix.filter(cell => cell.mbtiLetter === mbtiLetter);
}

// Get compatibility color class
export function getCompatibilityColor(compatibility: string): string {
  switch (compatibility) {
    case 'high': return 'bg-green-100 text-green-800 border-green-200';
    case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low': return 'bg-red-100 text-red-800 border-red-200';
    case 'neutral': return 'bg-gray-100 text-gray-800 border-gray-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

// Get highlight cells for a specific humor type code
export function getHighlightedLettersForCode(code: string): string[] {
  const letters: string[] = [];
  if (code[0] === 'O') letters.push('O');
  else letters.push('I');
  if (code[1] === 'N') letters.push('N');
  else letters.push('B');
  if (code[2] === 'V') letters.push('V');
  else letters.push('P');
  if (code[3] === 'B') letters.push('Br');
  else letters.push('Da');
  return letters;
}
