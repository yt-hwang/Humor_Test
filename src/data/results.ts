import { questions } from "./questions";

export interface GagResult {
  code: string;
  nickname: string;
  summary: string;
  description: string;
  examples: string[];
  bestMatch?: string;
  worstMatch?: string;
  bestMatchReason?: string;
  worstMatchReason?: string;
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
    summary: "구조적인 유머를 좋아하는 사람들 중에서도 말맛을 중요하게 여기는 유형이에요. 유머가 즉흥적으로 터지는 게 아니라, 흐름, 리듬, 맥락 속에서 자연스럽게 완성되길 원하죠.",
    description: "말솜씨 좋고, 진행감 있게 이야기를 끌어가는 개그를 선호하며, 웃음이 몰입에서 비롯될 때 가장 큰 쾌감을 느낍니다. 감정보다는 구성의 완성도를 더 중요하게 보는 경향이 있어요.",
    examples: ["유재석", "무한도전", "런닝맨"],
    bestMatch: "INPB",
    worstMatch: "IBPD",
    bestMatchReason: "토크마스터가 구성한 개그 흐름에 리액션 장인의 감정 반응이 더해지면 웃음의 리듬이 폭발적으로 증폭됩니다. 말하는 사람과 반응하는 사람의 궁합은 오래된 예능의 공식이죠.",
    worstMatchReason: "구조와 맥락을 중요시하는 토크마스터에게 예측불가능하고 방향성 없는 표현을 던지는 무표정 광대는 흐름을 방해하는 존재로 느껴질 수 있어요. 서로가 서로를 어리둥절하게 만들죠."
  },
  ONPB: {
    code: "ONPB",
    nickname: "짤 제조기",
    summary: "표정, 몸짓, 소품 등 시각적 요소를 완벽하게 계산해 준비된 개그를 좋아하는 타입입니다. 실제로 무대 위에서든 인터넷에서든 반복 소비되는 '짤' 같은 유머에 강하죠.",
    description: "중요한 건 자연스러움이 아니라, 효과적인 연출이에요. 유쾌하고 밝은 톤을 추구하며, 말보다 보이는 웃음을 중시합니다.",
    examples: ["피지컬 코미디", "얼굴 표정으로 '누구냐 넌' 느낌"],
    bestMatch: "IBPB",
    worstMatch: "INVD",
    bestMatchReason: "짤 제조기는 기획형, 괴짜 몸개그 장인은 즉흥형. 한쪽은 디자인하고, 다른 한쪽은 터뜨립니다. 두 사람의 '퍼포먼스 케미'는 무대를 장악하기에 충분해요.",
    worstMatchReason: "시각적으로 유쾌한 분위기를 좋아하는 짤 제조기에게 직설적이고 날카로운 말장난은 '분위기 깬다'는 느낌을 줄 수 있어요. 감정의 결이 다릅니다."
  },
  INVB: {
    code: "INVB",
    nickname: "국민MC",
    summary: "즉흥성과 언어 센스를 동시에 갖춘 밝은 무드의 사회자형입니다. 자신이 돋보이기보다는, 상대방의 말과 상황을 포착해서 적재적소에 개그를 넣는 센스가 핵심이에요.",
    description: "흐름을 읽는 능력이 탁월해서, 말 많지 않아도 존재감이 확실하죠. MC 성향이 강해 예능을 리드해가는 듯한 스타일을 선호합니다.",
    examples: ["재치있는 멘트", "센스 폭발형", "회식 천재"],
    bestMatch: "INPD",
    worstMatch: "OBPD",
    bestMatchReason: "국민MC는 분위기를 다듬고, 불편한 익살꾼은 그 안에 반전의 깊이를 넣습니다. 이 둘의 조합은 웃음 뒤에 여운을 남기죠. 감정과 이성의 리듬이 잘 맞는 타입이에요.",
    worstMatchReason: "국민MC는 흐름을 존중하지만 병맛 광대는 흐름을 깨트리며 감정을 뒤집는 유머를 선호해요. 하나는 '균형', 다른 하나는 '충돌'을 웃음 포인트로 보기에 부딪힐 여지가 많습니다."
  },
  INPB: {
    code: "INPB",
    nickname: "리액션 장인",
    summary: "웃긴 걸 잘 만드는 게 아니라, 웃긴 것에 잘 반응하는 사람. 공감력과 감정 민감성이 높고, 감정적으로 웃음을 증폭시켜주는 능력이 있습니다.",
    description: "누가 웃기면 진짜 배꼽 잡고 웃고, 그걸 보는 사람들이 더 웃게 되는 스타일. 무대보다는 함께 보는 관객일 때 진가를 발휘하죠.",
    examples: ["김신영 스타일", "짤처럼 웃기는 현실 반응꾼"],
    bestMatch: "ONVB",
    worstMatch: "ONVD",
    bestMatchReason: "토크마스터의 정교한 말 개그가 리액션 장인의 반응으로 완성돼요. 말하는 사람과 반응하는 사람의 조합은 어떤 개그도 살아 움직이게 만들죠.",
    worstMatchReason: "감정적 반응과 공감을 중요시하는 리액션 장인에게 비평적이고 논리 중심의 유머는 너무 건조하게 느껴질 수 있어요. 서로의 리듬이 안 맞습니다."
  },

  // ❤️ 팩폭형
  ONVD: {
    code: "ONVD",
    nickname: "개그 비평가",
    summary: "논리적이고 정제된 언어로 풍자와 비판을 날리는 스타일을 선호해요. 웃기지만 웃기기만 하면 안 되는 개그를 좋아하죠.",
    description: "세상을 통찰하고, 모순을 드러내며, 청중에게 생각할 거리를 던지는 유머를 추구합니다. 웃기면서도 마음이 찌릿해지는 걸 원한다면 바로 이 타입이에요.",
    examples: ["김경진 블랙풍자식 콩트", "면접에서 이런 질문 나옴"],
    bestMatch: "OBVD",
    worstMatch: "INPB",
    bestMatchReason: "둘 다 비판적 유머에 강점이 있어요. 하나는 언어적으로, 다른 하나는 설정적으로 사회를 비트니 깊이와 메시지가 탄탄해져요.",
    worstMatchReason: "논리와 메시지를 추구하는 개그 비평가는 감정적 리액션 중심의 개그와 어울리기 어렵습니다. 진지한 말을 하려는데 옆에서 '헉 진짜요?' 하는 느낌이죠."
  },
  ONPD: {
    code: "ONPD",
    nickname: "패러디 장인",
    summary: "연기를 통해 현실을 비트는 걸 좋아하는 사람. 특징적인 말투, 억양, 동작 등을 과장하거나 왜곡해 유머를 만들어요.",
    description: "풍자적이고 날카롭지만, 직접 말하기보단 연기와 캐릭터로 우회해서 말하죠. 현실을 비트는 능력자입니다.",
    examples: ["감동적인 장면인데 왜 웃기냐 시리즈"],
    bestMatch: "INVB",
    worstMatch: "IBPB",
    bestMatchReason: "패러디 장인이 만든 설정을 국민MC가 잘 리드하면서 설명해주면 관객은 더 쉽게 몰입하게 돼요. 해석자 + 창작자의 조합이에요.",
    worstMatchReason: "하나는 설정과 풍자에 기반한 연출형, 하나는 감정과 타이밍에 기반한 즉흥형. 코드가 완전히 다르기에 개그 타이밍도 충돌할 수 있어요."
  },
  INVD: {
    code: "INVD",
    nickname: "디스 장인",
    summary: "즉흥적으로 한마디 툭 던지는데, 그 한 마디에 모두가 숨을 멈췄다 웃게 되는 사람. 날카롭고 직설적이며, 웃음보다 관통력 있는 멘트를 선호해요.",
    description: "감정이나 흐름보다 관찰력, 분석력에 가까운 웃음을 추구하죠.",
    examples: ["사회 풍자형 예능 리액터", "신랄한 시사 밈 코멘터리"],
    bestMatch: "IBPD",
    worstMatch: "ONPB",
    bestMatchReason: "디스 장인의 한 마디와 무표정 광대의 퍼포먼스가 만나면 유머의 강도가 배가됩니다. 감정 절제형들의 연합은 파괴력도 있지만 품위도 지켜요.",
    worstMatchReason: "시각적이고 유쾌한 개그를 선호하는 짤 제조기에게 직설적 풍자는 다소 부담스럽거나 부조화스럽게 느껴질 수 있어요."
  },
  INPD: {
    code: "INPD",
    nickname: "불편한 익살꾼",
    summary: "감정을 담아 어두운 진실을 보여주는 즉흥 개그를 좋아하는 유형. 슬픈 듯 웃기고, 웃긴 듯 슬픈 정서적 충돌을 추구해요.",
    description: "감정 몰입력과 반전 구성이 강점이며, 단순한 웃음보다 여운을 남기는 유머에 끌립니다.",
    examples: ["연기하는 척하다 갑자기 웃기는 리얼 감성파"],
    bestMatch: "INVB",
    worstMatch: "IBVB",
    bestMatchReason: "감정 몰입형인 불편한 익살꾼과 흐름 조절형 국민MC가 만나면 균형 잡힌 서사가 생깁니다. 적절한 조율로 감정의 파동이 잘 전달돼요.",
    worstMatchReason: "밝고 순수한 웃음을 좋아하는 천진난만 꽃밭에게 불편한 감정 유머는 다소 무거울 수 있고, 반대로 감정 몰입형인 익살꾼에게는 유치하거나 산만하게 느껴질 수 있어요."
  },

  // 💙 컨셉형
  OBVB: {
    code: "OBVB",
    nickname: "꽁트 장인",
    summary: "병맛조차 짜임새 있게 만드는 드라마형 유머 애호가. 캐릭터, 배경, 흐름을 설계해 하나의 '에피소드'를 만들고, 그 안에서 웃음을 유도하는 걸 즐깁니다.",
    description: "설정과 구조가 명확할수록 몰입도가 높아지죠. 유머에서 스토리를 즐기는 사람들에게 매력적인 유형입니다.",
    examples: ["밈 설명 컨텐츠", "어몽어스에서 잡히는 루틴이요 같은 설명"],
    bestMatch: "IBVD",
    worstMatch: "INVD",
    bestMatchReason: "꽁트 장인이 만든 설정 안에 엉뚱한 맥커터가 예측불가한 요소를 던져주면 꽁트가 살아 움직여요. 질서와 혼돈의 조화죠.",
    worstMatchReason: "꽁트는 '만든 세계', 디스는 '있는 현실'에 기반합니다. 둘은 개그의 지향점이 정반대라 맞추기 어려워요."
  },
  OBVD: {
    code: "OBVD",
    nickname: "블랙 스탠드업 코미디언",
    summary: "병맛 설정 안에 사회 비판과 철학을 담는 진지한 개그코드 애호가. 겉보기엔 이상해도, 들여다보면 날카로운 메시지가 있는 유머를 좋아해요.",
    description: "의미와 혼란의 중첩을 즐기며, 코미디로 세상을 바꾸고 싶은 욕망도 내재돼 있죠.",
    examples: ["SNL 풍자극", "다크 유토피아류 블랙컨텐츠"],
    bestMatch: "ONVD",
    worstMatch: "IBVB",
    bestMatchReason: "서로 다른 포맷으로 동일한 메시지를 추구하는 조합입니다. 무대 위에서든 댓글창에서든 지적이고 날카로운 시너지를 만들어요.",
    worstMatchReason: "블랙 유머를 진지하게 받아들이는 OBVD에게 천진난만한 반응은 당혹스러울 수 있어요. 톤이 완전히 다릅니다."
  },
  OBPB: {
    code: "OBPB",
    nickname: "컨셉 광대",
    summary: "병맛 설정을 시각적으로 완벽하게 연출해내는 개그 스타일을 좋아해요. 소품, 옷, 음악 등 세세한 부분까지 병맛화하여 극대화된 퍼포먼스를 추구하죠.",
    description: "말보단 보여주는 재미, 감정보단 콘셉트 완성도가 중요합니다.",
    examples: ["패러디 유튜버", "B급 개그 콩트 크리에이터"],
    bestMatch: "IBPB",
    worstMatch: "ONVD",
    bestMatchReason: "퍼포먼스형 병맛과 즉흥형 병맛의 조합! 하나는 콘셉트를 짜고, 다른 하나는 터뜨립니다. 무대형 유머의 완벽한 파트너예요.",
    worstMatchReason: "병맛을 분석하려는 순간, 그건 병맛이 아니게 돼요. 진지함과 연출형 병맛은 좀처럼 어울리지 않죠."
  },
  OBPD: {
    code: "OBPD",
    nickname: "병맛 광대",
    summary: "병맛과 감정, 반전을 섞어 관객의 정서를 요리하는 사람. 감동과 웃음을 동시에 주거나, 정서적 흐름을 엉뚱하게 뒤틀어 반전을 유도하는 걸 선호합니다.",
    description: "웃다가 눈물 나고, 울다 웃게 되는 스타일을 좋아하죠.",
    examples: ["슬픈 사연 낭독하다 이상하게 웃기는 형식"],
    bestMatch: "INPD",
    worstMatch: "INVB",
    bestMatchReason: "감정의 결이 비슷합니다. 둘 다 감정선이 있는 유머를 좋아하고, 그 감정을 개그로 해체해요. 관객의 몰입도가 극대화됩니다.",
    worstMatchReason: "구조와 리듬을 중시하는 국민MC에겐 감정적 파동 중심의 병맛 광대가 다소 산만하게 느껴질 수 있어요."
  },

  // 💜 예측불가형
  IBVB: {
    code: "IBVB",
    nickname: "천진난만 꽃밭",
    summary: "순수한 리액션, 밝고 해맑은 표현, 때때로 터지는 병맛. 생각 없이 웃다가 보면 너무 사랑스러운 웃음을 유발하는 스타일이에요.",
    description: "타이밍과 분위기로 웃음을 터뜨리는 경우가 많고, 감정선이 맑고 투명합니다.",
    examples: ["노홍철 초기 스타일", "아 이건 말이 안 되잖아요~ 근데 됨ㅋㅋ"],
    bestMatch: "ONPB",
    worstMatch: "INPD",
    bestMatchReason: "짤 제조기의 정제된 퍼포먼스에 꽃밭의 해맑은 반응이 더해지면 인터넷에서 바이럴 날 수 있는 조합이죠. 보기만 해도 기분 좋아지는 듀오입니다.",
    worstMatchReason: "웃음에 감정의 무게가 실리는 게 부담스러운 꽃밭에게 불편한 익살꾼의 유머는 무거울 수 있어요. 서로 정서가 안 맞습니다."
  },
  IBVD: {
    code: "IBVD",
    nickname: "엉뚱한 맥커터",
    summary: "말장난, 풍자, 혼돈, 돌발. 말로 혼란을 일으키며 그 혼란 속에서 기묘한 진실을 던지는 개그코드를 좋아해요.",
    description: "구조 없는 것 같지만, 듣고 나면 뭔가 남는 게 있는 타입이죠. 무논리성과 직관, 그 사이에 존재합니다.",
    examples: ["유병재 풍 블랙개그", "갑자기 제정신인가 싶은 웃음"],
    bestMatch: "OBVB",
    worstMatch: "INPB",
    bestMatchReason: "꽁트 장인이 만든 세계에 맥커터가 돌발 반응을 넣으면 유머가 예측불가능해집니다. 흐름 있는 설정 + 흐름 깨는 반응 = 웃음폭발.",
    worstMatchReason: "엉뚱한 맥커터는 감정을 배제하고, 리액션 장인은 감정을 기반으로 하기에 웃음의 원천이 완전히 달라 충돌할 수 있어요."
  },
  IBPB: {
    code: "IBPB",
    nickname: "괴짜 몸개그 장인",
    summary: "몸을 휘둘러 웃기는 진짜 즉흥 퍼포머. 말은 없어도 몸이 모든 걸 말해요. 예측 불가능하고 과장된 몸짓으로 관객의 웃음을 뺏는 스타일을 좋아합니다.",
    description: "반복되는 개그보단 즉흥성, 타이밍, 신체 감각이 중요하죠.",
    examples: ["몸으로 말하는 유튜버", "반응형 밈 제조기"],
    bestMatch: "OBPB",
    worstMatch: "INVD",
    bestMatchReason: "병맛 무대 세팅 + 즉흥 몸개그는 '뭘 해도 웃긴' 조합입니다. 하나가 판을 깔고, 다른 하나가 뛰어다녀요.",
    worstMatchReason: "정제되고 날카로운 말유머와 무논리적인 몸개그는 서로의 리듬을 방해할 수 있어요. 호흡이 안 맞습니다."
  },
  IBPD: {
    code: "IBPD",
    nickname: "무표정 광대",
    summary: "감정 없는 듯 보이지만, 바로 그 무표정함이 웃음의 포인트가 되는 유형입니다. 즉흥적이고, 감정 몰입도 없고, 병맛과 풍자와 혼란을 모두 섞어놨지만 표정은 '무념무상'.",
    description: "예측불가능 + 과잉 표현의 종합체예요.",
    examples: ["홍진경", "장도연식 급발진 감성개그"],
    bestMatch: "INVD",
    worstMatch: "ONVB",
    bestMatchReason: "디스 장인의 날카로운 언어와 무표정 광대의 퍼포먼스는 감정 절제된 파괴력이라는 공통점을 갖고 있어요. 말과 표현이 하나처럼 움직입니다.",
    worstMatchReason: "유머를 서사와 흐름으로 쌓아가는 토크마스터에겐, 무표정 광대의 돌발성과 방향성 없음이 극단적으로 비효율적으로 느껴질 수 있어요."
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