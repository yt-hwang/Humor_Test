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
    summary: "언어적이고 준비된 구조 위에 밝은 정서와 맥락 중심의 유머를 얹는 유형입니다. 이들은 개그를 구성하고 배치하는 능력, 특히 서사와 리듬을 설계하는 역량이 뛰어나며, 사람들을 자연스럽게 몰입시킵니다. 개그를 통해 진행을 이끄는 '구성자형'으로서의 역할이 강하며, 상황에 맞는 언어적 개입을 통해 공감을 유도합니다. 그들의 유머는 흐름을 만들고 안정감을 주되, 감정 몰입보다 구조 완성에 더 초점을 두는 경향이 있습니다.",
    examples: [
      "대화를 설계해 모두가 말하게 만드는 진행형 토크",
      "상황 브리핑→포인트 콜백→마무리 멘트의 3단 구성",
      "패널 간 타이밍 조율로 폭탄 발언 ‘살려주기’"
    ],
    bestMatch: "INPB",
    worstMatch: "IBPD",
    bestMatchReason: "토크마스터가 깔아둔 서사와 리듬 위에 리액션 장인의 즉각적 감정 반응이 붙으면 웃음의 공명(설계+증폭)이 극대화됩니다. 말하는 축과 반응하는 축의 황금 조합.",
    worstMatchReason: "무표정 광대는 돌발·무정형 퍼포먼스로 흐름을 깨며 방향을 전환합니다. 구조·맥락을 중시하는 토크마스터와는 ‘호흡의 기준’이 달라 충돌이 잦습니다."
  },
  ONPB: {
    code: "ONPB",
    nickname: "짤 제조기",
    summary: "비언어적 표현을 정교하게 준비하여 사용하는 이 유형은, 표정, 몸짓, 소품을 통해 웃음을 유도하는 시각 기반 퍼포머입니다. 현실 상황의 맥락 속에서 과장되거나 직관적인 이미지로 강한 공감대를 형성하고, '기획된 몸짓'으로 대중의 반응을 끌어냅니다. 밝고 유쾌한 감정 톤을 바탕으로, 커뮤니케이션보다는 표현 자체의 완성도가 유머의 핵심입니다. 반복 소비에 강하고, 대중적 접근성이 높습니다.",
    examples: [
      "반복 시그니처 표정·제스처로 밈 생산",
      "소품 한 방으로 콘셉트 설명 끝내기",
      "짧은 리액션 클립으로 숏폼 최적화"
    ],
    bestMatch: "IBPB",
    worstMatch: "INVD",
    bestMatchReason: "기획된 시각 콘셉트(ONPB)와 즉흥 퍼포먼스(IBPB)가 만나면 ‘완성도+변주’가 붙어 바이럴 파워가 커집니다. 판짜기와 돌발성이 맞물리는 케미.",
    worstMatchReason: "INVD의 건조하고 직설적인 풍자 멘트는 시각적 유쾌함을 이어가는 리듬을 끊기 쉽습니다. 정서 톤과 전달 방식이 상극."
  },
  INVB: {
    code: "INVB",
    nickname: "국민MC",
    summary: "언어 중심에 즉흥성과 밝은 정서를 결합한 유형으로, 빠른 센스와 재치로 상황에 개입하는 능력이 뛰어납니다. 이들은 계획된 흐름보다는 순간의 분위기와 대화 흐름을 감지하고, 거기에 적절한 타이밍으로 언어적 유머를 삽입합니다. 호스트나 MC 성향이 강하며, 자신이 중심이기보다 흐름을 읽고 반응하는 유연성이 특징입니다. 즉흥성과 리드 감각이 동시에 발휘되는 드문 조합입니다.",
    examples: [
      "돌발 상황에도 ‘정리 멘트’로 장면 수습",
      "게스트 포인트 캐치→즉석 별명·콜백 생성",
      "팀 전체 대화량 균형 맞추는 패싱·받아치기"
    ],
    bestMatch: "INPD",
    worstMatch: "OBPD",
    bestMatchReason: "감정선이 있는 퍼포먼스(INPD)를 국민MC가 ‘안전한 리듬’으로 조율하면 무거움과 유쾌함의 밸런스가 잡힙니다. 몰입과 환기의 교차.",
    worstMatchReason: "OBPD의 감정 반전 병맛은 장면 몰입을 급전개·전복하는 경향이 있어, 균형·연결을 중시하는 INVB의 진행 문법과 자주 어긋납니다."
  },
  INPB: {
    code: "INPB",
    nickname: "리액션 장인",
    summary: "비언어적이며 즉흥적인 감정 반응을 통해 공감을 유도하는 유형입니다. 이들은 웃긴 이야기를 만들어내기보다, 웃긴 이야기에 '진짜 웃는 법'을 압니다. 진심 어린 표정, 생생한 감정 리액션이 핵심 자산이며, 사람들은 그들의 반응을 보며 자신도 함께 웃거나 감정 이입하게 됩니다. 감정 민감성이 매우 높고, 타인의 개그를 증폭시키는 '공감 증폭기' 역할을 합니다.",
    examples: [
      "빙의형 웃음·놀람·당황 리액션 클립",
      "다른 사람의 드립을 ‘표정 서브타이틀’로 번역",
      "웃음·눈물 등 감정 동조 유도"
    ],
    bestMatch: "ONVB",
    worstMatch: "ONVD",
    bestMatchReason: "토크마스터(ONVB)의 정교한 말개그가 리액션 장인(INPB)의 진짜 반응으로 완성됩니다. ‘설명’과 ‘공감’의 시너지.",
    worstMatchReason: "ONVD는 논리·비판 메시지가 중심이라 정서 공명보다 사고 전환을 노립니다. 감정 기반 반응과 목적 축이 달라 호흡이 엇갈립니다."
  },

  // ❤️ 팩폭형
  ONVD: {
    code: "ONVD",
    nickname: "개그 비평가",
    summary: "언어적, 준비 중심, 어두운 정서와 논리적 구조를 갖춘 유형으로, 풍자와 비판을 통해 웃음을 만들어냅니다. 이들은 웃음을 웃음으로 끝내지 않고, 그 이면에 메시지를 담고자 합니다. 세상에 대한 인식과 논리적 사고력이 매우 뛰어나며, 현실의 부조리나 모순을 정제된 언어로 직시하게 만듭니다. 유머가 통찰의 통로로 작동하며, 때로는 청중의 불편함을 감수하면서도 의도된 파장을 일으킵니다.",
    examples: ["김경진 블랙풍자식 콩트", "면접에서 이런 질문 나옴"],
    bestMatch: "OBVD",
    worstMatch: "INPB",
    bestMatchReason: "둘 다 비판적 유머에 강점이 있어요. 하나는 언어적으로, 다른 하나는 설정적으로 사회를 비트니 깊이와 메시지가 탄탄해져요.",
    worstMatchReason: "논리와 메시지를 추구하는 개그 비평가는 감정적 리액션 중심의 개그와 어울리기 어렵습니다. 진지한 말을 하려는데 옆에서 '헉 진짜요?' 하는 느낌이죠."
  },
  ONPD: {
    code: "ONPD",
    nickname: "패러디 장인",
    summary: "비언어적이고 준비된 형태로, 현실의 말투, 억양, 상황을 연기하며 풍자하는 유형입니다. 이들은 관찰력과 표현력이 탁월하며, 잘 아는 사람·장면의 특징을 잡아 과장하거나 뒤틀어 유머를 만듭니다. 어두운 정서를 기반으로 하지만, 그 어둠은 캐릭터화된 연기를 통해 정제되어 전달됩니다. 연출된 현실의 과장이기 때문에 '낯익은 낯섦'을 유도하는 데 강합니다.",
    examples: ["감동적인 장면인데 왜 웃기냐 시리즈"],
    bestMatch: "INVB",
    worstMatch: "IBPB",
    bestMatchReason: "패러디 장인이 만든 설정을 국민MC가 잘 리드하면서 설명해주면 관객은 더 쉽게 몰입하게 돼요. 해석자 + 창작자의 조합이에요.",
    worstMatchReason: "하나는 설정과 풍자에 기반한 연출형, 하나는 감정과 타이밍에 기반한 즉흥형. 코드가 완전히 다르기에 개그 타이밍도 충돌할 수 있어요."
  },
  INVD: {
    code: "INVD",
    nickname: "디스 장인",
    summary: "즉흥적 언어와 날카로운 분석력을 바탕으로 어두운 현실을 찌르는 직설적 유머를 구사합니다. 말수는 적지만 순간적으로 정곡을 찌르는 한 마디로 분위기를 전환시키며, 유머의 강도보다 날카로움에 초점이 있습니다. 감정보다는 통찰과 관찰이 앞서는 유형이며, 미니멀한 표현 안에 높은 밀도의 풍자를 담아냅니다. 직설적이면서도 시니컬한 유머는 타인의 긴장과 웃음을 동시에 유발합니다.",
    examples: ["사회 풍자형 예능 리액터", "신랄한 시사 밈 코멘터리"],
    bestMatch: "IBPD",
    worstMatch: "ONPB",
    bestMatchReason: "디스 장인의 한 마디와 무표정 광대의 퍼포먼스가 만나면 유머의 강도가 배가됩니다. 감정 절제형들의 연합은 파괴력도 있지만 품위도 지켜요.",
    worstMatchReason: "시각적이고 유쾌한 개그를 선호하는 짤 제조기에게 직설적 풍자는 다소 부담스럽거나 부조화스럽게 느껴질 수 있어요."
  },
  INPD: {
    code: "INPD",
    nickname: "불편한 익살꾼",
    summary: "즉흥성과 감정 표현이 강한 비언어적 개그 스타일로, 웃음과 슬픔 사이의 경계를 넘나듭니다. 풍자와 감정이 동시에 작동하며, 청중은 웃으면서도 마음 한구석이 무거워지는 경험을 합니다. 감정 몰입력이 높고, 반전 구조에 강합니다. 유머를 통해 불편한 진실을 드러내되, 그것을 감성적 완급 조절로 감싸는 능력이 돋보입니다.",
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
    summary: "언어적이고 준비된 스타일을 바탕으로, 치밀하게 기획된 병맛 세계관을 설정하고 그 안에서 개그를 전개합니다. 이 유형은 구조, 흐름, 캐릭터 설정까지 '개그의 드라마화'를 꾀하며, 병맛조차 논리적으로 짜여 있습니다. 설정 자체가 유머이며, 시청자는 그 구조의 정교함과 설정 간의 대비 속에서 웃음을 느낍니다. 몰입 유도력이 뛰어나며, 상황극을 활용한 고급 병맛 유머의 대표 유형입니다.",
    examples: ["밈 설명 컨텐츠", "어몽어스에서 잡히는 루틴이요 같은 설명"],
    bestMatch: "IBVD",
    worstMatch: "INVD",
    bestMatchReason: "꽁트 장인이 만든 설정 안에 엉뚱한 맥커터가 예측불가한 요소를 던져주면 꽁트가 살아 움직여요. 질서와 혼돈의 조화죠.",
    worstMatchReason: "꽁트는 '만든 세계', 디스는 '있는 현실'에 기반합니다. 둘은 개그의 지향점이 정반대라 맞추기 어려워요."
  },
  OBVD: {
    code: "OBVD",
    nickname: "블랙 스탠드업 코미디언",
    summary: "언어적, 준비 중심, 어두운 정서를 가진 이 유형은 병맛적인 설정 안에 블랙 유머를 숨겨놓습니다. 그들의 개그는 단순히 황당하거나 기괴하지 않으며, 그 안에 치밀하게 설계된 현실 비판 코드가 존재합니다. 개연성이 없을 듯한 상황 속에 현실을 투영시키는 능력, 그로 인해 생기는 이중적 해석 가능성이 이들의 강점입니다. 병맛이 현실을 묘사하는 도구가 되는 경우입니다.",
    examples: ["SNL 풍자극", "다크 유토피아류 블랙컨텐츠"],
    bestMatch: "ONVD",
    worstMatch: "IBVB",
    bestMatchReason: "서로 다른 포맷으로 동일한 메시지를 추구하는 조합입니다. 무대 위에서든 댓글창에서든 지적이고 날카로운 시너지를 만들어요.",
    worstMatchReason: "블랙 유머를 진지하게 받아들이는 OBVD에게 천진난만한 반응은 당혹스러울 수 있어요. 톤이 완전히 다릅니다."
  },
  OBPB: {
    code: "OBPB",
    nickname: "컨셉 광대",
    summary: "비언어적이고 준비된 병맛 개그를 극대화하는 유형으로, 시각적 퍼포먼스와 연출력이 특징입니다. 이들은 옷, 소품, 효과음 등 모든 외형 요소를 병맛화해 관객의 몰입과 웃음을 유도합니다. 개그 자체보다는 '개그를 위한 세팅'을 통해 웃음을 발생시키며, 몸짓보다는 콘셉트와 외형의 설계에 집중합니다. 시청각 자극이 강하며, 기획형 병맛의 대표주자입니다.",
    examples: ["패러디 유튜버", "B급 개그 콩트 크리에이터"],
    bestMatch: "IBPB",
    worstMatch: "ONVD",
    bestMatchReason: "퍼포먼스형 병맛과 즉흥형 병맛의 조합! 하나는 콘셉트를 짜고, 다른 하나는 터뜨립니다. 무대형 유머의 완벽한 파트너예요.",
    worstMatchReason: "병맛을 분석하려는 순간, 그건 병맛이 아니게 돼요. 진지함과 연출형 병맛은 좀처럼 어울리지 않죠."
  },
  OBPD: {
    code: "OBPD",
    nickname: "병맛 광대",
    summary: "비언어적, 준비된 스타일 안에 감정적 반전을 삽입하는 유형입니다. 이들은 병맛 세계관 안에 감정선, 슬픔, 낭만성을 심어 '감동과 웃음의 충돌'을 연출합니다. 감성적인 흐름을 따라가다가 어느 순간 병맛으로 뒤틀며 예상 밖의 웃음을 유도하는 식입니다. 이들은 관객의 정서를 조율하며, 감정의 진폭을 개그 도구로 삼는 독특한 미학을 갖고 있습니다.",
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
    summary: "즉흥적, 언어적이며 밝은 감정 톤을 가진 이들은, 진지한 상황에 갑작스럽게 병맛적인 말을 던짐으로써 상황을 무너뜨리는 능력을 갖췄습니다. 타이밍 감각이 뛰어나며, 병맛이란 무엇인가에 대한 직관적 이해가 있습니다. 논리보다 충격, 구성보다 타이밍이 중요한 구조에서 유머가 생성됩니다. 병맛의 '불쑥 등장'을 무기로 삼는 무대형 언어 유머입니다.",
    examples: ["노홍철 초기 스타일", "아 이건 말이 안 되잖아요~ 근데 됨ㅋㅋ"],
    bestMatch: "ONPB",
    worstMatch: "INPD",
    bestMatchReason: "짤 제조기의 정제된 퍼포먼스에 꽃밭의 해맑은 반응이 더해지면 인터넷에서 바이럴 날 수 있는 조합이죠. 보기만 해도 기분 좋아지는 듀오입니다.",
    worstMatchReason: "웃음에 감정의 무게가 실리는 게 부담스러운 꽃밭에게 불편한 익살꾼의 유머는 무거울 수 있어요. 서로 정서가 안 맞습니다."
  },
  IBVD: {
    code: "IBVD",
    nickname: "엉뚱한 맥커터",
    summary: "언어적이며 즉흥적이고 어두운 정서를 띤 이 유형은, 병맛, 풍자, 혼돈이 동시에 터지는 파괴적 유머를 구사합니다. 구조 없는 말의 흐름 속에 강한 메시지를 은근히 삽입하거나, 갑작스런 직설로 충격을 유도합니다. 병맛이지만 그 안에 진실이 있고, 혼란스럽지만 어딘가 날카롭습니다. 무논리성과 통찰이 공존하는 독특한 긴장감이 특징입니다.",
    examples: ["유병재 풍 블랙개그", "갑자기 제정신인가 싶은 웃음"],
    bestMatch: "OBVB",
    worstMatch: "INPB",
    bestMatchReason: "꽁트 장인이 만든 세계에 맥커터가 돌발 반응을 넣으면 유머가 예측불가능해집니다. 흐름 있는 설정 + 흐름 깨는 반응 = 웃음폭발.",
    worstMatchReason: "엉뚱한 맥커터는 감정을 배제하고, 리액션 장인은 감정을 기반으로 하기에 웃음의 원천이 완전히 달라 충돌할 수 있어요."
  },
  IBPB: {
    code: "IBPB",
    nickname: "괴짜 몸개그 장인",
    summary: "비언어적, 즉흥적이며 밝은 에너지를 가진 유형으로, 몸짓과 퍼포먼스를 통해 예측불가능한 유머를 만듭니다. 이들은 말이 아닌 몸으로 상황을 해체하며, 물리적인 과장을 개그의 도구로 활용합니다. 대사 없이도 웃기며, 상황 자체를 장악하는 신체적 개그 감각이 뛰어납니다. 반복성 피로를 피하기 위해 신선한 자극과 반응성이 중요합니다.",
    examples: ["몸으로 말하는 유튜버", "반응형 밈 제조기"],
    bestMatch: "OBPB",
    worstMatch: "INVD",
    bestMatchReason: "병맛 무대 세팅 + 즉흥 몸개그는 '뭘 해도 웃긴' 조합입니다. 하나가 판을 깔고, 다른 하나가 뛰어다녀요.",
    worstMatchReason: "정제되고 날카로운 말유머와 무논리적인 몸개그는 서로의 리듬을 방해할 수 있어요. 호흡이 안 맞습니다."
  },
  IBPD: {
    code: "IBPD",
    nickname: "무표정 광대",
    summary: "모든 개그적 요소(감정, 병맛, 풍자, 퍼포먼스)를 한꺼번에 폭발시키는 복합형 퍼포머입니다. 즉흥성, 감정 몰입, 비논리적 흐름이 얽히며 관객에게 강한 인상을 남기지만, 때로는 방향성이 없어 보일 수 있습니다. '뭔가 정신없는데 웃긴' 상태가 지속되며, 감정의 진폭과 표현의 파괴력이 이 유형의 핵심입니다. 정제된 개그와는 정반대의 미학을 추구합니다.",
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