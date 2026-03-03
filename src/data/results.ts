import { questions } from "./questions";

export interface GagResult {
  code: string;
  nickname: string;
  summary: string;
  examples: string[];
  bestMatch?: string;
  worstMatch?: string;
  bestMatchReason?: string;
  worstMatchReason?: string;
  strengths?: string[];
  weaknesses?: string[];
}

export interface AxisScores {
  OI: number; // Organized vs Improvised
  NB: number; // Intuitive vs Abstract  
  VP: number; // Verbal vs Physical
  BD: number; // Bright vs Dark
}

// 16가지 개그유형 결과 데이터
export const gagResults: Record<string, GagResult> = {
  // 💛 분위기메이커형
  ONVB: {
    code: "ONVB",
    nickname: "토크마스터",
    summary: "언어적이고 준비된 구조 위에 밝은 정서와 맥락 중심의 유머를 좋아합니다. 흐름과 리듬을 설계해 장면을 편하게 이끄는 스타일을 선호합니다.",
    examples: [
      "대화를 설계해 모두가 말하게 만드는 진행형 토크",
      "상황 브리핑→포인트 콜백→마무리 멘트의 3단 구성",
      "패널 간 타이밍 조율로 폭탄 발언 ‘살려주기’"
    ],
    bestMatch: "INPB",
    worstMatch: "IBPD",
    bestMatchReason: "토크마스터가 깔아둔 서사와 리듬 위에 리액션 장인의 즉각적 감정 반응이 붙으면 웃음의 공명(설계+증폭)이 극대화됩니다. 말하는 축과 반응하는 축의 황금 조합.",
    worstMatchReason: "무표정 광대는 돌발·무정형 퍼포먼스로 흐름을 깨며 방향을 전환합니다. 구조·맥락을 중시하는 토크마스터와는 ‘호흡의 기준’이 달라 충돌이 잦습니다.",
    strengths: [
      "대화 흐름을 안정적으로 잡아줘요",
      "사람들 말을 이끌어내고 정리해요",
      "콜백과 연결 포인트를 잘 살려요",
      "밝은 톤으로 분위기를 편하게 만들어요",
      "팀의 균형을 맞추는 데 능숙해요",
    ],
    weaknesses: [
      "돌발 전환이 많으면 힘이 빠질 수 있어요",
      "설명이 길어지면 재미가 줄 수 있어요",
      "감정의 세기가 약하게 느껴질 수 있어요",
      "과도한 안전 운전은 밋밋하게 보여요",
      "새로움보다 안정에 치우칠 때가 있어요",
    ]
  },
  ONPB: {
    code: "ONPB",
    nickname: "짤 제조기",
    summary: "표정·몸짓·소품 등 비언어 표현이 잘 준비된 유머를 좋아합니다. 직관적인 이미지와 리액션이 살아있는 장면을 선호합니다.",
    examples: [
      "반복 시그니처 표정·제스처로 밈 생산",
      "소품 한 방으로 콘셉트 설명 끝내기",
      "짧은 리액션 클립으로 숏폼 최적화"
    ],
    bestMatch: "IBPB",
    worstMatch: "INVD",
    bestMatchReason: "기획된 시각 콘셉트(ONPB)와 즉흥 퍼포먼스(IBPB)가 만나면 ‘완성도+변주’가 붙어 바이럴 파워가 커집니다. 판짜기와 돌발성이 맞물리는 케미.",
    worstMatchReason: "INVD의 건조하고 직설적인 풍자 멘트는 시각적 유쾌함을 이어가는 리듬을 끊기 쉽습니다. 정서 톤과 전달 방식이 상극.",
    strengths: [
      "한 컷으로 웃기게 설명하는 데 강해요",
      "표정·제스처 같은 시각 포인트가 살아있어요",
      "짧은 영상에 특히 잘 맞아요",
      "콘셉트를 일관되게 유지해요",
      "소품과 연출로 분위기를 빠르게 만듭니다",
    ],
    weaknesses: [
      "말로 푸는 유머와 어긋날 때가 있어요",
      "새로움이 줄면 금방 싱거워질 수 있어요",
      "반복되면 ‘양식화’ 피로가 생겨요",
      "메시지가 약하면 가벼워 보일 수 있어요",
      "긴 호흡의 이야기엔 힘이 약해요",
    ]
  },
  INVB: {
    code: "INVB",
    nickname: "국민MC",
    summary: "언어 중심의 즉흥적이고 밝은 톤을 좋아합니다. 대화 흐름을 읽고 타이밍 좋게 한마디를 얹는 식의 센스 있는 유머를 선호합니다.",
    examples: [
      "돌발 상황에도 ‘정리 멘트’로 장면 수습",
      "게스트 포인트 캐치→즉석 별명·콜백 생성",
      "팀 전체 대화량 균형 맞추는 패싱·받아치기"
    ],
    bestMatch: "INPD",
    worstMatch: "OBPD",
    bestMatchReason: "감정선이 있는 퍼포먼스(INPD)를 국민MC가 ‘안전한 리듬’으로 조율하면 무거움과 유쾌함의 밸런스가 잡힙니다. 몰입과 환기의 교차.",
    worstMatchReason: "OBPD의 감정 반전 병맛은 장면 몰입을 급전개·전복하는 경향이 있어, 균형·연결을 중시하는 INVB의 진행 문법과 자주 어긋납니다.",
    strengths: [
      "즉흥 말센스와 타이밍이 좋아요",
      "흐름·연결·완급 조절을 잘해요",
      "사람들이 골고루 말하게 도와줘요",
      "밝은 톤으로 부담을 덜어줘요",
      "돌발 상황에서도 정리 능력이 좋아요",
    ],
    weaknesses: [
      "감정의 깊이나 세계관 파괴력은 약할 수 있어요",
      "너무 안전하면 밋밋하게 느껴져요",
      "독자 캐릭터 각인이 약해질 수 있어요",
      "강한 메시지와의 결합이 어렵게 느껴질 수 있어요",
      "긴장감 있는 전환엔 소극적일 수 있어요",
    ]
  },
  INPB: {
    code: "INPB",
    nickname: "리액션 장인",
    summary: "직관적으로 분위기를 읽고 온몸으로 반응하는 즉흥형 유머를 선호합니다. 직접 드립을 치기보다 남의 개그에 ‘진짜로 웃는’ 장면에서 더 빛나며, 표정·몸짓·눈빛으로 감정을 생생하게 전달하는 반응형 유머에 크게 반응합니다.",
    examples: [
      "빙의형 웃음·놀람·당황 리액션 클립",
      "다른 사람의 드립을 ‘표정 서브타이틀’로 번역",
      "웃음·눈물 등 감정 동조 유도"
    ],
    bestMatch: "ONVB",
    worstMatch: "ONVD",
    bestMatchReason: "토크마스터(ONVB)의 정교한 말개그가 리액션 장인(INPB)의 진짜 반응으로 완성됩니다. ‘설명’과 ‘공감’의 시너지.",
    worstMatchReason: "ONVD는 논리·비판 메시지가 중심이라 정서 공명보다 사고 전환을 노립니다. 감정 기반 반응과 목적 축이 달라 호흡이 엇갈립니다.",
    strengths: [
      "진짜 반응으로 공감을 크게 만들어요",
      "감정 신호를 빨리 캐치해요",
      "다른 사람의 드립을 더 웃기게 보여줘요",
      "표정과 몸짓만으로도 충분히 전달돼요",
      "팀 플레이에서 존재감이 확실해요",
    ],
    weaknesses: [
      "직접 드립 생산은 약할 수 있어요",
      "논리·분석형 유머와 목표가 어긋날 수 있어요",
      "감정이 과하면 장면을 압도할 수 있어요",
      "긴 설명이 필요한 상황에선 답답할 수 있어요",
      "차분한 톤과의 결합이 어려울 수 있어요",
    ]
  },

  // ❤️ 팩폭형
  ONVD: {
    code: "ONVD",
    nickname: "개그 비평가",
    summary: "언어적이고 준비된 구조의 블랙 유머를 선호합니다. 메시지와 논리가 있는 풍자, 직설적인 한 줄로 전환되는 유머에 끌립니다.",
    examples: ["김경진 블랙풍자식 콩트", "면접에서 이런 질문 나옴"],
    bestMatch: "OBVD",
    worstMatch: "INPB",
    bestMatchReason: "둘 다 비판적 유머에 강점이 있어요. 하나는 언어적으로, 다른 하나는 설정적으로 사회를 비트니 깊이와 메시지가 탄탄해져요.",
    worstMatchReason: "논리와 메시지를 추구하는 개그 비평가는 감정적 리액션 중심의 개그와 어울리기 어렵습니다. 진지한 말을 하려는데 옆에서 '헉 진짜요?' 하는 느낌이죠.",
    strengths: [
      "메시지와 논리가 분명해요",
      "한 줄 직설·풍자에 강해요",
      "사회 이슈를 똑바로 짚어요",
      "구조가 탄탄해 이해가 쉬워요",
      "진지함과 재미를 함께 가져가요",
    ],
    weaknesses: [
      "냉소적으로 보일 수 있어요",
      "감정 반응 중심과 호흡이 안 맞을 수 있어요",
      "설명이 길면 재미가 떨어질 수 있어요",
      "톤이 무거워 피로가 올 수 있어요",
      "시각 중심 유머와 어울리기 어려워요",
    ]
  },
  ONPD: {
    code: "ONPD",
    nickname: "패러디 장인",
    summary: "현실의 말투·억양·상황을 연기해 풍자하는 스타일을 좋아합니다. 맥락을 정확히 짚은 캐릭터화된 모사와 연출된 현실의 과장에 매력을 느끼며, 레퍼런스가 살아있는 디테일한 풍자 퍼포먼스에 쉽게 몰입합니다.",
    examples: ["감동적인 장면인데 왜 웃기냐 시리즈", "실제 인물 말투를 과장 재연하는 풍자 코너", "억양과 표정만으로 상황 전체를 설명하는 캐릭터 개그"],
    bestMatch: "INVB",
    worstMatch: "IBPB",
    bestMatchReason: "패러디 장인이 만든 설정을 국민MC가 잘 리드하면서 설명해주면 관객은 더 쉽게 몰입하게 돼요. 해석자 + 창작자의 조합이에요.",
    worstMatchReason: "하나는 설정과 풍자에 기반한 연출형, 하나는 감정과 타이밍에 기반한 즉흥형. 코드가 완전히 다르기에 개그 타이밍도 충돌할 수 있어요.",
    strengths: [
      "현실 모사와 억양 재현이 뛰어나요",
      "캐릭터화와 과장 연출로 몰입을 만들어요",
      "레퍼런스 콜백을 잘 활용해요",
      "구성이 뚜렷해 따라가기 쉬워요",
      "디테일에서 웃음을 잘 뽑아요",
    ],
    weaknesses: [
      "레퍼런스 의존이 높으면 범용성이 줄어요",
      "과한 연출은 피로감을 줄 수 있어요",
      "돌발성은 다소 약할 수 있어요",
      "설명이 길면 템포가 느려져요",
      "새로움 갱신이 필요해요",
    ]
  },
  INVD: {
    code: "INVD",
    nickname: "디스 장인",
    summary: "즉흥적 언어와 날카로운 분석으로 어두운 현실을 직설적으로 찌르는 유머를 선호합니다. 말수가 적어도 정곡을 찌르는 한 마디에 매력을 느끼며, 유머의 강도보다 날카로움에 더 반응합니다. 감정보다는 통찰과 관찰이 앞서는 스타일을 좋아하고, 미니멀한 표현 속 높은 밀도의 풍자에서 쾌감을 느낍니다. 직설적이고 시니컬한 유머에서 긴장과 웃음을 동시에 경험합니다.",
    examples: ["사회 풍자형 예능 리액터", "신랄한 시사 밈 코멘터리"],
    bestMatch: "IBPD",
    worstMatch: "ONPB",
    bestMatchReason: "디스 장인의 한 마디와 무표정 광대의 퍼포먼스가 만나면 유머의 강도가 배가됩니다. 감정 절제형들의 연합은 파괴력도 있지만 품위도 지켜요.",
    worstMatchReason: "시각적이고 유쾌한 개그를 선호하는 짤 제조기에게 직설적 풍자는 다소 부담스럽거나 부조화스럽게 느껴질 수 있어요.",
    strengths: [
      "적은 말로 핵심을 정확히 찌릅니다",
      "관찰과 통찰이 날카로워요",
      "직설 한 마디로 장면을 바꿔요",
      "풍자 밀도가 높아요",
      "여운과 생각거리를 남겨요",
    ],
    weaknesses: [
      "톤이 차갑게 느껴질 수 있어요",
      "밝은 시각 중심 유머와 상극이에요",
      "반복되면 독설로 피로가 생겨요",
      "감정 공감을 만들기 어려울 수 있어요",
      "무거운 공기가 생길 수 있어요",
    ]
  },
  INPD: {
    code: "INPD",
    nickname: "불편한 익살꾼",
    summary: "즉흥적이고 비언어적인 감정 표현이 강한 유머를 선호합니다. 표정·침묵·제스처로 만들어내는 감정 낙차와, 웃음과 슬픔 사이의 경계를 넘나드는 몰입형 유머에 끌립니다. 감성적 완급 조절과 반전 구조, 풍자와 감정이 동시에 작동하는 다크한 퍼포먼스에 특히 매력을 느낍니다.",
    examples: ["연기하는 척하다 갑자기 웃기는 리얼 감성파", "먹먹한 사연인데 어딘가 웃긴 감성 리얼리티", "진지한 표정으로 황당한 상황을 버티는 리액션 클립"],
    bestMatch: "INVB",
    worstMatch: "IBVB",
    bestMatchReason: "감정 몰입형인 불편한 익살꾼과 흐름 조절형 국민MC가 만나면 균형 잡힌 서사가 생깁니다. 적절한 조율로 감정의 파동이 잘 전달돼요.",
    worstMatchReason: "밝고 순수한 웃음을 좋아하는 천진난만 꽃밭에게 불편한 감정 유머는 다소 무거울 수 있고, 반대로 감정 몰입형인 익살꾼에게는 유치하거나 산만하게 느껴질 수 있어요.",
    strengths: [
      "표정·침묵·제스처로 감정을 극대화해요",
      "웃음과 슬픔을 오가며 깊이를 만듭니다",
      "풍자와 감성을 동시에 가져가요",
      "감정의 완급 조절과 반전 구조에 강해요",
      "말 없이도 공기를 바꾸는 신체 표현이 있어요",
    ],
    weaknesses: [
      "정서 무게가 크면 피로가 올 수 있어요",
      "밝은·순수 유머와 어색할 수 있어요",
      "과몰입 시 분위기를 가라앉힐 수 있어요",
      "설명이 부족하면 오해가 생길 수 있어요",
      "반전이 예상되면 힘이 빠질 수 있어요",
    ]
  },

  // 💙 컨셉형
  OBVB: {
    code: "OBVB",
    nickname: "꽁트 장인",
    summary: "치밀하게 기획된 병맛 세계관과 탄탄한 구조·흐름·캐릭터가 있는 ‘설정형’ 유머를 선호합니다. 대사와 언어 설계가 논리적으로 짜여 있는 병맛 콩트에서 설정 간 대비와 정교함으로 웃음을 느끼며, 말의 흐름이 살아 있는 드라마형 병맛 상황극에 쉽게 몰입합니다.",
    examples: ["대사 설계가 탄탄한 병맛 상황극 유튜브", "복잡한 세계관의 말개그 중심 코미디 스케치", "캐릭터의 대화 흐름으로 웃음을 쌓아가는 콩트"],
    bestMatch: "IBVD",
    worstMatch: "INVD",
    bestMatchReason: "꽁트 장인이 만든 설정 안에 엉뚱한 맥커터가 예측불가한 요소를 던져주면 꽁트가 살아 움직여요. 질서와 혼돈의 조화죠.",
    worstMatchReason: "꽁트는 '만든 세계', 디스는 '있는 현실'에 기반합니다. 둘은 개그의 지향점이 정반대라 맞추기 어려워요.",
    strengths: [
      "세계관·구조·캐릭터가 정교해요",
      "설정 대비에서 서사형 웃음이 나와요",
      "대사 설계와 말 흐름으로 설정을 완성해요",
      "복선과 콜백을 잘 살려요",
      "완성도가 높아 몰입이 쉬워요",
    ],
    weaknesses: [
      "즉흥·돌발에 약할 수 있어요",
      "진입 설명이 길면 무거워져요",
      "현실감이 떨어지면 몰입이 깨져요",
      "세팅 비용/시간이 들 수 있어요",
      "패턴화되면 새로움이 줄어요",
    ]
  },
  OBVD: {
    code: "OBVD",
    nickname: "블랙 스탠드업 코미디언",
    summary: "언어적·준비 중심의 어두운 정서를 띤, 병맛적 설정 안에 블랙 유머가 숨겨진 콘텐츠를 선호합니다. 단순 황당함이 아니라 치밀하게 설계된 현실 비판 코드가 녹아 있는 유머에서 이중적 해석과 현실 투영의 재미를 느낍니다.",
    examples: ["SNL 풍자극", "다크 유토피아류 블랙컨텐츠"],
    bestMatch: "ONVD",
    worstMatch: "IBVB",
    bestMatchReason: "서로 다른 포맷으로 동일한 메시지를 추구하는 조합입니다. 무대 위에서든 댓글창에서든 지적이고 날카로운 시너지를 만들어요.",
    worstMatchReason: "블랙 유머를 진지하게 받아들이는 OBVD에게 천진난만한 반응은 당혹스러울 수 있어요. 톤이 완전히 다릅니다.",
    strengths: [
      "병맛 안에 현실 비판 코드를 숨겨요",
      "이중 해석과 아이러니를 잘 설계해요",
      "구조가 탄탄해 메시지가 분명해요",
      "어두운 톤에서도 완성도가 높아요",
      "웃음 뒤에 생각을 남겨요",
    ],
    weaknesses: [
      "무거운 톤이 오래 가면 피로해요",
      "순수 반응형과 톤이 어긋나요",
      "설명이 많아지면 장난기가 줄어요",
      "밝은 시각 유머와 리듬이 달라요",
      "분위기가 과도하게 진지해질 수 있어요",
    ]
  },
  OBPB: {
    code: "OBPB",
    nickname: "컨셉 광대",
    summary: "비언어적이고 준비된 병맛 유머를 선호하며, 옷·소품·효과음 등 시각적 퍼포먼스와 연출력이 살아 있는 콘텐츠에 크게 반응합니다. ‘개그를 위한 세팅’이 잘 갖춰진 장면에서 더 잘 웃으며, 몸짓보다 콘셉트와 외형 설계에 집중한 기획형 병맛을 좋아합니다.",
    examples: ["패러디 유튜버", "B급 개그 콩트 크리에이터"],
    bestMatch: "IBPB",
    worstMatch: "ONVD",
    bestMatchReason: "퍼포먼스형 병맛과 즉흥형 병맛의 조합! 하나는 콘셉트를 짜고, 다른 하나는 터뜨립니다. 무대형 유머의 완벽한 파트너예요.",
    worstMatchReason: "병맛을 분석하려는 순간, 그건 병맛이 아니게 돼요. 진지함과 연출형 병맛은 좀처럼 어울리지 않죠.",
    strengths: [
      "소품·의상·효과음 등 시각 연출이 강해요",
      "콘셉트 일관성과 완성도가 높아요",
      "무대형 퍼포먼스로 확장하기 쉬워요",
      "그림만으로도 웃음을 만들어요",
      "준비가 잘 된 병맛을 좋아해요",
    ],
    weaknesses: [
      "말유머·분석유머와 리듬이 어긋날 수 있어요",
      "세팅이 과하면 준비 티가 나요",
      "새로움이 줄면 피로가 쌓여요",
      "긴 호흡에선 늘어질 수 있어요",
      "간결한 메시지 전달은 약할 수 있어요",
    ]
  },
  OBPD: {
    code: "OBPD",
    nickname: "병맛 광대",
    summary: "비언어적·준비형 스타일 안에 감정적 반전이 들어간 유머를 선호합니다. 병맛 세계관 속 감정선·슬픔·낭만성이 스며든 ‘감동과 웃음의 충돌’에서 쾌감을 느끼며, 감정의 진폭을 개그 도구로 쓰는 연출을 좋아합니다.",
    examples: ["슬픈 사연 낭독하다 이상하게 웃기는 형식"],
    bestMatch: "INPD",
    worstMatch: "INVB",
    bestMatchReason: "감정의 결이 비슷합니다. 둘 다 감정선이 있는 유머를 좋아하고, 그 감정을 개그로 해체해요. 관객의 몰입도가 극대화됩니다.",
    worstMatchReason: "구조와 리듬을 중시하는 국민MC에겐 감정적 파동 중심의 병맛 광대가 다소 산만하게 느껴질 수 있어요.",
    strengths: [
      "감정선과 병맛의 충돌로 낯선 쾌감을 줘요",
      "연출된 반전으로 여운과 웃음을 함께 줘요",
      "감정 진폭을 섬세하게 조율해요",
      "시청각 연출과 감정을 잘 섞어요",
      "준비된 무대에서 힘을 발휘해요",
    ],
    weaknesses: [
      "감정 연출이 과하면 억지로 느껴질 수 있어요",
      "호흡이 길면 늘어질 수 있어요",
      "균형·연결 중심 파트너와 리듬이 어긋나요",
      "밝은 톤을 기대하는 관객에겐 무거울 수 있어요",
      "반전이 예상되면 힘이 줄어요",
    ]
  },

  // 💜 예측불가형
  IBVB: {
    code: "IBVB",
    nickname: "천진난만 꽃밭",
    summary: "즉흥적·언어적이며 밝은 톤의, 갑작스런 병맛 발언으로 분위기를 무너뜨리는 타이밍형 유머를 좋아합니다. 논리보다 충격, 구성보다 타이밍이 중요한 순간에 크게 웃으며, 무대형 언어 유머의 ‘불쑥 등장’에 약한 편입니다.",
    examples: ["노홍철 초기 스타일", "아 이건 말이 안 되잖아요~ 근데 됨ㅋㅋ"],
    bestMatch: "ONPB",
    worstMatch: "INPD",
    bestMatchReason: "짤 제조기의 정제된 퍼포먼스에 꽃밭의 해맑은 반응이 더해지면 인터넷에서 바이럴 날 수 있는 조합이죠. 보기만 해도 기분 좋아지는 듀오입니다.",
    worstMatchReason: "웃음에 감정의 무게가 실리는 게 부담스러운 꽃밭에게 불편한 익살꾼의 유머는 무거울 수 있어요. 서로 정서가 안 맞습니다.",
    strengths: [
      "타이밍 감각이 뛰어나요",
      "밝은 돌발 멘트로 긴장을 풀어요",
      "즉흥적으로 참신함을 만들어요",
      "짧은 반응으로도 분위기를 바꿔요",
      "주변 분위기를 빠르게 띄워요",
    ],
    weaknesses: [
      "메시지나 구조의 깊이는 약할 수 있어요",
      "반복되면 가벼움이 누적돼요",
      "무거운 정서와는 잘 안 맞아요",
      "긴 호흡에서는 힘이 빠질 수 있어요",
      "설명이 필요한 상황에선 답답해질 수 있어요",
    ]
  },
  IBVD: {
    code: "IBVD",
    nickname: "엉뚱한 맥커터",
    summary: "언어적·즉흥적이며 어두운 정서의, 병맛·풍자·혼돈이 동시에 터지는 파괴적 유머를 선호합니다. 구조 없는 말의 흐름 속에 숨은 강한 메시지나 갑작스런 직설에서 오는 충격을 즐기며, 무논리성과 통찰이 공존하는 긴장감을 매력적으로 느낍니다.",
    examples: ["유병재 풍 블랙개그", "갑자기 제정신인가 싶은 웃음"],
    bestMatch: "OBVB",
    worstMatch: "INPB",
    bestMatchReason: "꽁트 장인이 만든 세계에 맥커터가 돌발 반응을 넣으면 유머가 예측불가능해집니다. 흐름 있는 설정 + 흐름 깨는 반응 = 웃음폭발.",
    worstMatchReason: "엉뚱한 맥커터는 감정을 배제하고, 리액션 장인은 감정을 기반으로 하기에 웃음의 원천이 완전히 달라 충돌할 수 있어요.",
    strengths: [
      "병맛·풍자·혼돈이 동시에 터져요",
      "무논리와 통찰의 긴장감이 있어요",
      "예측 불가한 전환이 빠릅니다",
      "짧은 직설로 충격을 만들어요",
      "짧은 클립에서도 존재감이 커요",
    ],
    weaknesses: [
      "과하면 피로가 빨리 와요",
      "방향성이 모호해 보일 수 있어요",
      "감정 기반 리액션과 충돌해요",
      "메시지가 오독될 위험이 있어요",
      "긴 흐름 유지가 어려울 수 있어요",
    ]
  },
  IBPB: {
    code: "IBPB",
    nickname: "괴짜 몸개그 장인",
    summary: "비언어적·즉흥적이며 밝은 에너지의 몸짓 퍼포먼스형 유머를 좋아합니다. 말보다 몸으로 상황을 해체하는 물리적 과장, 대사 없이도 웃기는 신체적 개그에 잘 반응하며, 반복성 피로를 줄여 주는 신선한 자극과 반응성을 선호합니다.",
    examples: ["몸으로 말하는 유튜버", "반응형 밈 제조기"],
    bestMatch: "OBPB",
    worstMatch: "INVD",
    bestMatchReason: "병맛 무대 세팅 + 즉흥 몸개그는 '뭘 해도 웃긴' 조합입니다. 하나가 판을 깔고, 다른 하나가 뛰어다녀요.",
    worstMatchReason: "정제되고 날카로운 말유머와 무논리적인 몸개그는 서로의 리듬을 방해할 수 있어요. 호흡이 안 맞습니다.",
    strengths: [
      "말 없이도 웃기는 신체 코미디에 강해요",
      "물리적 과장으로 장면을 장악해요",
      "반응성과 신선한 자극이 좋아요",
      "공간을 활용해 상황을 해체해요",
      "짧은 퍼포먼스에서 힘이 커요",
    ],
    weaknesses: [
      "반복되면 금방 피로해져요",
      "아이디어 소모가 빨라요",
      "말유머와 리듬이 어긋날 수 있어요",
      "정제감이 낮으면 산만해 보여요",
      "메시지 전달은 약할 수 있어요",
    ]
  },
  IBPD: {
    code: "IBPD",
    nickname: "무표정 광대",
    summary: "감정·병맛·풍자·퍼포먼스가 한꺼번에 터지는 복합형 퍼포먼스를 좋아합니다. 즉흥성과 감정 몰입, 비논리적 흐름이 얽히는 ‘정신없는데 웃긴’ 순간에서 쾌감을 느끼며, 정제된 개그보다 파괴적 표현의 진폭을 선호합니다.",
    examples: ["장도연식 급발진 감성개그", "무표정으로 시작해 폭발하는 즉흥 퍼포먼스", "아무렇지 않은 척하다 갑자기 터지는 개그"],
    bestMatch: "INVD",
    worstMatch: "ONVB",
    bestMatchReason: "디스 장인의 날카로운 언어와 무표정 광대의 퍼포먼스는 감정 절제된 파괴력이라는 공통점을 갖고 있어요. 말과 표현이 하나처럼 움직입니다.",
    worstMatchReason: "유머를 서사와 흐름으로 쌓아가는 토크마스터에겐, 무표정 광대의 돌발성과 방향성 없음이 극단적으로 비효율적으로 느껴질 수 있어요.",
    strengths: [
      "감정·병맛·풍자·퍼포먼스를 동시에 터뜨려요",
      "무표정과 파괴력의 대비가 강해요",
      "장면 전환의 임팩트가 큽니다",
      "짧은 시간에 강한 인상을 남겨요",
      "규칙을 깨는 유머에 강해요",
    ],
    weaknesses: [
      "방향성이 느슨하면 정신없어 보여요",
      "서사·맥락 중시 파트너와 충돌해요",
      "자극이 과하면 금방 피로해져요",
      "과유불급이 잦으면 매력이 줄어요",
      "긴 흐름 유지는 어려울 수 있어요",
    ]
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
  // 모든 축이 정확히 4점이면 INPB로 고정 (탐구/리액션형 기본값)
  if (scores.OI === 4 && scores.NB === 4 && scores.VP === 4 && scores.BD === 4) {
    return "INPB";
  }

  const code = [
    scores.OI > 4 ? "O" : "I", // Organized vs Improvised (4보다 크면 Organized)
    scores.NB > 4 ? "N" : "B", // Intuitive vs Abstract (4보다 크면 Intuitive)
    scores.VP > 4 ? "V" : "P", // Verbal vs Physical (4보다 크면 Verbal)
    scores.BD > 4 ? "B" : "D"  // Bright vs Dark (4보다 크면 Bright)
  ].join("");
  
  return code;
}

// 전체 결과 계산 함수
export function calculateResult(answers: (number | null)[]): GagResult {
  const scores = calculateAxisScores(answers);
  const code = getGagTypeCode(scores);
  return gagResults[code] || gagResults["ONVB"]; // 기본값
}

// 두 코드간 궁합 (같은 축 개수: 0~4)
export function calculateCompatibility(codeA: string, codeB: string): number {
  let matches = 0;
  for (let i = 0; i < 4; i++) {
    if (codeA[i] === codeB[i]) matches++;
  }
  return matches;
}

export function getCompatibilityLabel(score: number) {
  switch (score) {
    case 4: return { label: "동류형", emoji: "🪞", desc: "웃음 포인트가 똑같아서 항상 통함" };
    case 3: return { label: "찰떡궁합", emoji: "🎯", desc: "대부분 맞고 가끔 새로운 자극" };
    case 2: return { label: "무난한 케미", emoji: "🤝", desc: "절반은 통하고 절반은 다름" };
    case 1: return { label: "케미폭발형", emoji: "⚡", desc: "다른 스타일이라 서로에게 신선함" };
    case 0: return { label: "정반대형", emoji: "🔄", desc: "완전히 다른 개그 세계관" };
    default: return { label: "알 수 없음", emoji: "❓", desc: "" };
  }
}

// 궁합 좋은 TOP N 타입
export function getTopCompatibleTypes(myCode: string, top: number = 3) {
  return Object.entries(gagResults)
    .filter(([code]) => code !== myCode)
    .map(([code, result]) => ({
      code,
      result,
      score: calculateCompatibility(myCode, code)
    }))
    .sort((a, b) => b.score - a.score || a.code.localeCompare(b.code))
    .slice(0, top);
}