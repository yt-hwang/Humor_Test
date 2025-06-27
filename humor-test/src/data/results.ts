import { questions } from "./questions";

export interface GagResult {
  code: string;
  nickname: string;
  summary: string;
  description: string;
  examples: string[];
}

export interface AxisScores {
  OI: number; // Organized vs Improvised
  NB: number; // Natural vs Abstract  
  VP: number; // Verbal vs Physical
  BD: number; // Bright vs Dark
}

// 16가지 개그유형 결과 데이터
export const gagResults: Record<string, GagResult> = {
  // 💛 분위기메이커형
  ONVB: {
    code: "ONVB",
    nickname: "토크마스터 (온빕)",
    summary: "상황에 맞춘 계획된 개그를 말로 풀어내는 '대본형 입담꾼'",
    description: `현실 기반 디테일+말장난+타이밍으로 몰입을 유발하는 스타일.\n볼 때: "이거 내 얘긴데ㅋㅋ", 몰입 유발\n할 때: 스토리 짜두고 정확한 말투와 포인트로 웃김` ,
    examples: ["유재석식 토크", "썰 푸는 회식 천재", "SNL식 리얼상황 콩트"]
  },
  ONPB: {
    code: "ONPB",
    nickname: "짤 제조기 (온핍)",
    summary: "표정·몸짓을 정교하게 계산해 상황에 맞는 웃음을 유도",
    description: `타이밍+눈빛+억양+제스처로 얼굴만 봐도 웃김.\n볼 때: '공감짤' 느낌\n할 때: 디테일하게 표정 연습해오는 타입` ,
    examples: ["피지컬 코미디", "얼굴 표정으로 '누구냐 넌' 느낌"]
  },
  INVB: {
    code: "INVB",
    nickname: "국민MC (인빕)",
    summary: "상황에 딱 맞는 멘트로 타이밍 맞춰 웃기는 실전형 말개그 마스터",
    description: `뼈 때리는 농담, 재치있는 받아치기, 대화 중 갑툭튀.\n볼 때: "이건 진짜 타이밍 미쳤다ㅋㅋ"\n할 때: 촉이 빠름, 회식이나 대화 속에서 빛남` ,
    examples: ["재치있는 멘트", "센스 폭발형", "회식 천재"]
  },
  INPB: {
    code: "INPB",
    nickname: "리액션 장인 (인핍)",
    summary: "즉석에서 표정과 몸짓으로 상황에 맞는 리액션 개그를 터뜨림",
    description: `현실상황 몰입+표정/움직임 포착, 이모지 같은 존재.\n볼 때: "와 저 표정 뭐냐ㅋㅋ 리얼 감정 묘사"\n할 때: 분위기+사람+공간 감각 뛰어남` ,
    examples: ["김신영 스타일", "짤처럼 웃기는 현실 반응꾼"]
  },

  // ❤️ 팩폭형
  ONVD: {
    code: "ONVD",
    nickname: "개그 비평가 (온비디)",
    summary: "현실 공감 개그에 날카로운 비판과 블랙유머를 섞는 설계자",
    description: `사회 현실+말빨+풍자, 논리로 조곤조곤 비꼼.\n볼 때: "씁쓸한데 웃겨..."\n할 때: 논리로 조곤조곤 비꼼, 타격감 있음` ,
    examples: ["김경진 블랙풍자식 콩트", "면접에서 이런 질문 나옴"]
  },
  ONPD: {
    code: "ONPD",
    nickname: "패러디 장인 (온피디)",
    summary: "계획된 리액션과 몸짓으로 감정+풍자를 동시에 던짐",
    description: `상황 몰입 중 갑자기 엇나감, 철저한 시뮬 후 감정과 몸짓 폭발.\n볼 때: "어떻게 저렇게까지 준비했지..."` ,
    examples: ["감동적인 장면인데 왜 웃기냐 시리즈"]
  },
  INVD: {
    code: "INVD",
    nickname: "디스장인 (인비디)",
    summary: "즉석에서 상황을 날카롭게 꼬집으며 풍자하는 블랙센스형",
    description: `돌직구+현실비판, 웃기고 무섭고 속시원함.\n볼 때: "이걸 이 타이밍에 저렇게 말하네..."\n할 때: 약간 삐딱하지만 핵심 찌름, 불편한 진실 개그러` ,
    examples: ["사회 풍자형 예능 리액터", "신랄한 시사 밈 코멘터리"]
  },
  INPD: {
    code: "INPD",
    nickname: "감정공감꾼 (인피디)",
    summary: "즉흥적인 감정 리액션과 풍자 섞인 감성개그로 터뜨림",
    description: `공감+아이러니, 웃프고 촉촉한 리액션.\n볼 때: "울컥하다 웃김... 근데 뭔가 이해돼"\n할 때: 감정선에 민감, 분위기를 타고 감정을 섞어 터뜨림` ,
    examples: ["연기하는 척하다 갑자기 웃기는 리얼 감성파"]
  },

  // 💙 컨셉형
  OBVB: {
    code: "OBVB",
    nickname: "상황극 장인 (옵빕)",
    summary: "논리적이지 않지만 정교하게 기획된 병맛 세계관을 말로 구축함",
    description: `이상한 전개인데 설득력 있음, 몰입하다 웃음 터짐.\n볼 때: "이걸 이렇게 진지하게 말하네ㅋㅋㅋ"\n할 때: 논리 있는 병맛 추구, 세계관·설명 개그 능함` ,
    examples: ["밈 설명 컨텐츠", "어몽어스에서 잡히는 루틴이요 같은 설명"]
  },
  OBVD: {
    code: "OBVD",
    nickname: "블랙 판타지스트 (옵비디)",
    summary: "병맛적이고 비현실적인 장면 속에 사회풍자를 정교하게 설계",
    description: `웃긴데 진지하고, 웃으면서도 날카롭게 찔림.\n볼 때: "웃긴데 뭔가 찝찝해... 너무 현실 같아"\n할 때: 고급풍자+기획+블랙코미디 믹스` ,
    examples: ["SNL 풍자극", "다크 유토피아류 블랙컨텐츠"]
  },
  OBPB: {
    code: "OBPB",
    nickname: "컨셉광대 (옵핍)",
    summary: "기획된 설정과 컨셉으로 비현실적인 행동을 표현으로 터뜨림",
    description: `옷, 액션, 효과음 → 세계관 개그.\n볼 때: "뭐야ㅋㅋㅋㅋ 설정 뭐야ㅋㅋ"\n할 때: 설정부터 분장까지 다 준비, 몰입도 강함` ,
    examples: ["패러디 유튜버", "B급 개그 콩트 크리에이터"]
  },
  OBPD: {
    code: "OBPD",
    nickname: "병맛광대 (옵피디)",
    summary: "병맛적 행동이나 표현 속에 묘한 감정을 스며들게 함",
    description: `엉뚱한데 왠지 짠하다, 예상 밖 감성.\n볼 때: "울어야 할지 웃어야 할지 모르겠음"\n할 때: 기획형 감성+병맛 혼합, 이상하지만 공감됨` ,
    examples: ["슬픈 사연 낭독하다 이상하게 웃기는 형식"]
  },

  // 💜 예측불가형
  IBVB: {
    code: "IBVB",
    nickname: "병맛리액션 장인 (입빕)",
    summary: "즉석에서 뭔가 이상한 말을 진지하게 던져 병맛을 유발하는 유형",
    description: `말도 안 되는데 왠지 그럴 듯한 이상한 말.\n볼 때: "그걸 왜 지금 말해ㅋㅋㅋ"\n할 때: 생각 안 하고 말해도 웃김, 본인은 진지` ,
    examples: ["노홍철 초기 스타일", "아 이건 말이 안 되잖아요~ 근데 됨ㅋㅋ"]
  },
  IBVD: {
    code: "IBVD",
    nickname: "도른자 (입비디)",
    summary: "즉흥적으로 병맛과 풍자를 동시에 날리는 혼돈의 혼종",
    description: `갑자기 무논리+비판, 이상한데 뭔가 찔림.\n볼 때: "아 웃긴데... 어딘가 위험해ㅋㅋ"\n할 때: 머리에 떠오른 걸 바로 던짐, 정곡을 찌를 때가 있음` ,
    examples: ["유병재 풍 블랙개그", "갑자기 제정신인가 싶은 웃음"]
  },
  IBPB: {
    code: "IBPB",
    nickname: "몸개그괴짜 (입핍)",
    summary: "즉흥적으로 몸짓, 표정, 효과음 등으로 병맛을 표현하는 물리개그꾼",
    description: `아무 데서나 행동으로 터뜨리는 갑분슬랩스틱.\n볼 때: "어 저 사람 또 뭘 해ㅋㅋㅋㅋ"\n할 때: 소리+움직임으로 맥락 없이 웃기는 천재` ,
    examples: ["몸으로 말하는 유튜버", "반응형 밈 제조기"]
  },
  IBPD: {
    code: "IBPD",
    nickname: "혼돈광대 (입피디)",
    summary: "감정, 상황, 병맛, 풍자가 즉흥적으로 뒤섞인 개그의 카오스",
    description: `웃긴데 감정도 섞이고 병맛도 터짐, 정신없는데 빠져듦.\n볼 때: "뭔지 모르겠는데 개웃겨... 좀 이상해"\n할 때: 본인도 자기가 왜 웃긴지 모름, 리액션+기행 혼합` ,
    examples: ["홍진경", "장도연식 급발진 감성개그"]
  },
};

// 답변을 기반으로 축별 점수 계산
export function calculateAxisScores(answers: (number | null)[]): AxisScores {
  const scores: AxisScores = { OI: 0, NB: 0, VP: 0, BD: 0 };
  const counts = { OI: 0, NB: 0, VP: 0, BD: 0 };
  
  // 각 축별로 점수 합산
  answers.forEach((answer, index) => {
    if (answer !== null) {
      const question = questions[index];
      const axis = question.axis as keyof AxisScores;
      // reverse가 true면 8-answer로 점수 계산
      const score = question.reverse ? 8 - answer : answer;
      scores[axis] += score;
      counts[axis]++;
    }
  });
  
  // 평균 계산 (1-7점 척도에서 4점을 기준으로)
  Object.keys(scores).forEach((axis) => {
    const axisKey = axis as keyof AxisScores;
    if (counts[axisKey] > 0) {
      scores[axisKey] = scores[axisKey] / counts[axisKey];
    }
  });
  
  return scores;
}

// 축별 점수를 기반으로 개그유형 코드 생성
export function getGagTypeCode(scores: AxisScores): string {
  const code = [
    scores.OI > 4 ? "O" : "I", // Organized vs Improvised
    scores.NB > 4 ? "B" : "N", // Natural vs Abstract
    scores.VP > 4 ? "V" : "P", // Verbal vs Physical
    scores.BD > 4 ? "B" : "D"  // Bright vs Dark
  ].join("");
  
  return code;
}

// 전체 결과 계산 함수
export function calculateResult(answers: (number | null)[]): GagResult {
  const scores = calculateAxisScores(answers);
  const code = getGagTypeCode(scores);
  return gagResults[code] || gagResults["ONVB"]; // 기본값
} 