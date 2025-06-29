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
    nickname: "토크마스터",
    summary: "계획한 대본과 말센스로 분위기를 띄워 크게 몰입을 유도하는 토크쇼형 개그왕",
    description: `섬세한 말장난 + 결정적 타이밍으로 웃음을 유발.\n볼 때: "이거 내 얘기야ㅋㅋ"\n할 때: 대본 캡슐처럼 완벽한 말 흐름 연출` ,
    examples: ["유재석식 토크", "썰 푸는 회식 천재", "SNL식 리얼상황 콩트"]
  },
  ONPB: {
    code: "ONPB",
    nickname: "짤 제조기",
    summary: "정교하게 계산된 표정·제스처로 '짤'만으로도 웃기는 퍼포머",
    description: `눈빛·몸짓으로 순발력 있는 공감 자극.\n볼 때: "표정 하나로 웃기네ㅋㅋ"\n할 때: 리허설 통해 표정 스터디` ,
    examples: ["피지컬 코미디", "얼굴 표정으로 '누구냐 넌' 느낌"]
  },
  INVB: {
    code: "INVB",
    nickname: "국민MC",
    summary: "즉석 상황에서 기막힌 말타이밍으로 대화 분위기를 주도하는 센스형 리액터",
    description: `돌발 멘트로 순풍처럼 웃음 몰아침.\n볼 때: "타이밍 진짜 천재다ㅋㅋ"\n할 때: 상황 감지 즉시 한방` ,
    examples: ["재치있는 멘트", "센스 폭발형", "회식 천재"]
  },
  INPB: {
    code: "INPB",
    nickname: "리액션 장인",
    summary: "즉흥 표정과 액션으로 리얼 반응을 짤처럼 남기는 감성형 순간포착 개그인",
    description: `리얼 타이밍의 표정 압권.\n볼 때: "짤로 남겠네ㅋㅋ"\n할 때: 카메라가 있든 없든 리액션 터뜨림` ,
    examples: ["김신영 스타일", "짤처럼 웃기는 현실 반응꾼"]
  },

  // ❤️ 팩폭형
  ONVD: {
    code: "ONVD",
    nickname: "개그 비평가",
    summary: "날카로운 논리와 정제된 말로 현실을 꼬집는 비판형 풍자가",
    description: `"씁쓸하지만 인정" 순간 직격.\n볼 때: "공감은 안 하고 싶지만…" 느낌\n할 때: 꼼꼼한 논리+리듬감 있는 지적` ,
    examples: ["김경진 블랙풍자식 콩트", "면접에서 이런 질문 나옴"]
  },
  ONPD: {
    code: "ONPD",
    nickname: "패러디 장인",
    summary: "대본과 감정·제스처를 활용해 주변인을 패러디하며 풍자하는 말 연기 전문가",
    description: `"아이 목소리 저렇게…?" 현실 감정 패러디.\n볼 때: "이 연기 빡세게 준비했네ㅋㅋ"\n할 때: 감정+제스처+톤 모두 연출` ,
    examples: ["감동적인 장면인데 왜 웃기냐 시리즈"]
  },
  INVD: {
    code: "INVD",
    nickname: "디스장인",
    summary: "즉흥적 팩폭으로 인상적인 비판을 터뜨리는 시니컬 장인",
    description: `돌직구+웃음+진한 찔림.\n볼 때: "이 타이밍 진짜 기가 막히네"\n할 때: 예의 갖추면서도 날 선 비판` ,
    examples: ["사회 풍자형 예능 리액터", "신랄한 시사 밈 코멘터리"]
  },
  INPD: {
    code: "INPD",
    nickname: "눈물개그러",
    summary: "공감과 풍자를 함께 던지며 순간 감정선을 찌르는 '웃펑' 터뜨림형",
    description: `눈물 직전 → 감정 눌렀다 터뜨림.\n볼 때: "슬프긴 한데… 웃기네"\n할 때: 감정 리듬 놓치지 않고 한방` ,
    examples: ["연기하는 척하다 갑자기 웃기는 리얼 감성파"]
  },

  // 💙 컨셉형
  OBVB: {
    code: "OBVB",
    nickname: "상황극 장인",
    summary: "논리적 맥락 안에서 병맛 세계관을 치밀하게 설명하는 쇼맨",
    description: `"진짜 같은데 웃기네" 느낌.\n볼 때: "이 설정 대단하다ㅋㅋ"\n할 때: 상황극 스크립트 완성형 진행` ,
    examples: ["밈 설명 컨텐츠", "어몽어스에서 잡히는 루틴이요 같은 설명"]
  },
  OBVD: {
    code: "OBVD",
    nickname: "부조리 설계자",
    summary: "병맛적 설정 안에서 블랙 풍자로 날카롭게 현실을 꼬집는 현실+비현실 장인",
    description: `"이상해 보이지만 현실 같다" 느낌.\n볼 때: "병맛인데, 이걸 몰입하게 하는 매력…"\n할 때: 병맛 세계관 정교구축 + 풍자 단서 심기` ,
    examples: ["SNL 풍자극", "다크 유토피아류 블랙컨텐츠"]
  },
  OBPB: {
    code: "OBPB",
    nickname: "컨셉광대",
    summary: "분장·소품·소리까지 완벽한 세계관 퍼포먼스로 병맛을 완성",
    description: `"옷에서 뭔가 이상함" 느낌.\n볼 때: "컨셉 끝내준다ㅋㅋ"\n할 때: 전체 콘셉트 대본·소품까지 준비` ,
    examples: ["패러디 유튜버", "B급 개그 콩트 크리에이터"]
  },
  OBPD: {
    code: "OBPD",
    nickname: "병맛광대",
    summary: "병맛 설정 안에 묘한 감정을 심어서 슬펐는데…. 웃겨지는 감성 개그인",
    description: `슬픔 + 병맛의 묘한 공감.\n볼 때: "울어야 하나, 웃어야 하나…"\n할 때: 감성 루트 심고 반전 병맛으로 터뜨림` ,
    examples: ["슬픈 사연 낭독하다 이상하게 웃기는 형식"]
  },

  // 💜 예측불가형
  IBVB: {
    code: "IBVB",
    nickname: "병맛리액션 장인",
    summary: "즉석에서 어이없는 발언을 던져 병맛을 만들어내는 무대형 리액터",
    description: `"갑자기 이게 왜 나와ㅋㅋ" 느낌.\n볼 때: "진지한데 너무 웃겨…"\n할 때: 순간 떠오른 말을 진지하게 던짐` ,
    examples: ["노홍철 초기 스타일", "아 이건 말이 안 되잖아요~ 근데 됨ㅋㅋ"]
  },
  IBVD: {
    code: "IBVD",
    nickname: "도른자",
    summary: "즉흥 병맛+풍자+혼돈을 동시에 터뜨리는 충격 콤비",
    description: `"폭발인데 찔려…" 느낌.\n볼 때: "무논리인데 기가 막힌 진실이 섞였다"\n할 때: 병맛+비판 둘 다 순간 터지면 웃김` ,
    examples: ["유병재 풍 블랙개그", "갑자기 제정신인가 싶은 웃음"]
  },
  IBPB: {
    code: "IBPB",
    nickname: "몸개그괴짜",
    summary: "즉흥 슬랩스틱+제스처+효과음으로 물리 개그 폭발",
    description: `"이게 개그야… 아니야… 어쩌라고ㅋㅋ" 느낌.\n볼 때: "말 안 해도 웃기네"\n할 때: 몸으로 상황을 단번에 무너뜨림` ,
    examples: ["몸으로 말하는 유튜버", "반응형 밈 제조기"]
  },
  IBPD: {
    code: "IBPD",
    nickname: "혼돈광대",
    summary: "감정, 언어, 병맛, 풍자가 폭발적으로 섞인 화려한 개그 아트피스",
    description: `"뭔지 모르겠는데 미친듯 웃기네" 느낌.\n볼 때: "이런 혼돈이 성지급 재미네"\n할 때: 무계획이라고 체감한 즉흥+감정 마구 폭발` ,
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