import type { Lang } from "../context/LangContext";

const ui = {
  // Home
  title: { ko: "개그유형 테스트", en: "Humor Type Test" },
  subtitle1: { ko: "당신만의 개그 스타일을 발견해보세요!", en: "Discover your unique humor style!" },
  subtitle2: { ko: "16가지 유형으로 나누는 재미있는 개그 분석!", en: "A fun analysis of 16 humor personality types!" },
  nameLabel: { ko: "이름 또는 별명", en: "Name or Nickname" },
  namePlaceholder: { ko: "예: 홍길동, 별명 등", en: "e.g. John, a nickname, etc." },
  mbtiLabel: { ko: "MBTI (선택)", en: "MBTI (optional)" },
  mbtiNone: { ko: "선택 안함", en: "Skip" },
  start: { ko: "시작하기", en: "Start" },
  free: { ko: "무료 테스트", en: "Free test" },
  duration: { ko: "5분 소요", en: "5 min" },
  detailed: { ko: "상세한 분석", en: "Detailed analysis" },

  // Quiz
  disagreeStrongly: { ko: "전혀 그렇지 않다", en: "Strongly disagree" },
  agreeStrongly: { ko: "매우 그렇다", en: "Strongly agree" },
  prev: { ko: "이전", en: "Prev" },
  next: { ko: "다음", en: "Next" },
  answerAll: { ko: "모든 질문에 답해주세요!", en: "Please answer all questions!" },

  // Loading
  loading: { ko: "결과 조합 중...", en: "Calculating results..." },
  loadingSub: { ko: "개그코드 결과를 준비하고 있어요 ⏳", en: "Preparing your humor code ⏳" },

  // Result
  gagCode: { ko: "개그코드", en: "Humor Code" },
  gagCodeOf: { ko: "의 개그코드", en: "'s Humor Code" },
  organized: { ko: "준비형", en: "Organized" },
  improvised: { ko: "즉흥형", en: "Improvised" },
  intuitive: { ko: "직관형", en: "Intuitive" },
  abstract: { ko: "병맛형", en: "Abstract" },
  verbal: { ko: "말개그", en: "Verbal" },
  physical: { ko: "몸개그", en: "Physical" },
  bright: { ko: "밝음", en: "Bright" },
  dark: { ko: "다크", en: "Dark" },
  shareTitle: { ko: "결과를 공유해보세요!", en: "Share your results!" },
  shareSub: { ko: "친구들과 함께 재미있는 개그유형 테스트를 해보세요", en: "Take this fun humor type test with friends" },
  retake: { ko: "테스트 다시하기", en: "Retake Test" },
  guideLink: { ko: "개그 코드 설명", en: "Code Guide" },
  typesLink: { ko: "전체 유형 보기", en: "All Types" },
  homeLink: { ko: "메인으로 돌아가기", en: "Back to Home" },
  strengths: { ko: "강점", en: "Strengths" },
  weaknesses: { ko: "약점", en: "Weaknesses" },
  strengthsTab: { ko: "강점/약점", en: "Strengths" },
  compatTab: { ko: "개그 궁합", en: "Chemistry" },
  compatTitle: { ko: "개그 궁합 분석", en: "Humor Chemistry" },
  bestMatch: { ko: "최상의 짝궁", en: "Best Match" },
  worstMatch: { ko: "최악의 짝궁", en: "Worst Match" },
  top3Title: { ko: "나와 잘 맞는 개그 유형 TOP 3", en: "Top 3 Types That Match You" },

  // AxisBarChart
  chartTitle: { ko: "개그코드 분석", en: "Humor Code Analysis" },

  // Guide
  guideTitle: { ko: "개그 코드 설명", en: "Humor Code Guide" },
  guideSub: { ko: "아래의 네 가지 기준으로 본인의 유머 코드를 이해해보세요.", en: "Understand your humor code through these four dimensions." },
  backToResult: { ko: "결과 페이지로 돌아가기", en: "Back to Results" },

  // Types
  typesTitle: { ko: "16가지 개그유형", en: "16 Humor Types" },
  typesSub: { ko: "각 유형을 클릭하면 상세한 분석을 확인할 수 있어요!", en: "Click any type for a detailed breakdown!" },
  typesHeader: { ko: "개그유형 전체보기", en: "All Humor Types" },
  backToResults: { ko: "결과로 돌아가기", en: "Back to Results" },
  preview: { ko: "빠른 미리보기 →", en: "Quick preview →" },
  close: { ko: "닫기", en: "Close" },

  // Compatibility labels
  compatSame: { ko: "동류형", en: "Kindred Spirit" },
  compatGreat: { ko: "찰떡궁합", en: "Perfect Match" },
  compatOk: { ko: "무난한 케미", en: "Decent Chemistry" },
  compatFresh: { ko: "케미폭발형", en: "Explosive Chemistry" },
  compatOpposite: { ko: "정반대형", en: "Total Opposite" },
  compatSameDesc: { ko: "웃음 포인트가 똑같아서 항상 통함", en: "Same sense of humor — always on the same page" },
  compatGreatDesc: { ko: "대부분 맞고 가끔 새로운 자극", en: "Mostly aligned with occasional fresh sparks" },
  compatOkDesc: { ko: "절반은 통하고 절반은 다름", en: "Half in sync, half different" },
  compatFreshDesc: { ko: "다른 스타일이라 서로에게 신선함", en: "Different styles bring mutual freshness" },
  compatOppositeDesc: { ko: "완전히 다른 개그 세계관", en: "Completely different humor universes" },

  // Categories
  cat1: { ko: "💛 분위기메이커형", en: "💛 Mood Makers" },
  cat1desc: { ko: "말과 표정으로 분위기를 띄우는 유형", en: "Types that light up the room with words and expressions" },
  cat2: { ko: "❤️ 팩폭형", en: "❤️ Truth Bombers" },
  cat2desc: { ko: "현실을 꼬집고 비판하는 유형", en: "Types that roast reality with sharp wit" },
  cat3: { ko: "💙 컨셉형", en: "💙 Concept Creators" },
  cat3desc: { ko: "병맛 설정과 세계관을 만드는 유형", en: "Types that build absurd worlds and concepts" },
  cat4: { ko: "💜 예측불가형", en: "💜 Wildcards" },
  cat4desc: { ko: "즉흥적이고 예측할 수 없는 유형", en: "Unpredictable and spontaneous types" },
} as const;

export function t(key: keyof typeof ui, lang: Lang): string {
  return ui[key][lang];
}

export default ui;
