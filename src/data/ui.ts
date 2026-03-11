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

  // Footer
  footerAbout: { ko: "서비스소개", en: "About" },
  footerTheory: { ko: "개그코드 이론", en: "Theory" },
  footerAds: { ko: "광고안내", en: "Ads" },
  footerTerms: { ko: "이용약관", en: "Terms" },
  footerPrivacy: { ko: "개인정보처리방침", en: "Privacy" },
  footerYouth: { ko: "청소년보호정책", en: "Youth Policy" },
  footerCopyright: { ko: "© 2026 개그유형 테스트. All rights reserved.", en: "© 2026 Humor Type Test. All rights reserved." },

  // Policy pages common
  lastUpdated: { ko: "최종 수정일: 2026년 1월 1일", en: "Last Updated: January 1, 2026" },
  backToHome: { ko: "홈으로 돌아가기", en: "Back to Home" },
  contactEmail: { ko: "이메일: humor.test.app@gmail.com", en: "Email: humor.test.app@gmail.com" },

  // About page
  aboutTitle: { ko: "서비스 소개", en: "About This Service" },
  aboutSubtitle: { ko: "About This Service", en: "About This Service" },

  // About - Section 1: What is Humor Type Test
  aboutSection1Title: { ko: "개그유형 테스트란?", en: "What is the Humor Type Test?" },
  aboutSection1Text1: {
    ko: "개그유형 테스트는 당신만의 유머 스타일을 분석하여 16가지 개그 유형 중 하나로 분류해주는 재미있는 심리 테스트입니다.",
    en: "The Humor Type Test is a fun personality quiz that analyzes your unique sense of humor and categorizes you into one of 16 comedy types."
  },
  aboutSection1Text2: {
    ko: "MBTI처럼 4가지 축(짜여진/즉흥적, 직관적/추상적, 언어적/비언어적, 밝은/어두운)을 기반으로 당신의 유머 코드를 분석합니다.",
    en: "Similar to MBTI, it analyzes your humor code based on four dimensions: Organized/Improvised, Intuitive/Abstract, Verbal/Physical, and Bright/Dark."
  },
  aboutSection1Sub: {
    ko: "This test analyzes your humor style and categorizes you into one of 16 comedy types, similar to MBTI personality types.",
    en: "This test analyzes your humor style and categorizes you into one of 16 comedy types, similar to MBTI personality types."
  },

  // About - Section 2: Why we created this
  aboutSection2Title: { ko: "왜 만들었나요?", en: "Why Did We Create This?" },
  aboutSection2Text1: {
    ko: "\"왜 어떤 개그는 나한테 웃기고, 어떤 개그는 안 웃기지?\"라는 단순한 질문에서 시작했습니다.",
    en: "It all started with a simple question: \"Why do some jokes make me laugh while others fall flat?\""
  },
  aboutSection2Text2: {
    ko: "사람마다 웃음 포인트가 다르다는 것을 체계적으로 분석해보고 싶었고, 그 결과 16가지 개그 유형 분류 체계를 만들게 되었습니다.",
    en: "We wanted to systematically analyze why everyone has different humor triggers, which led us to develop this 16-type humor classification system."
  },
  aboutSection2Text3: {
    ko: "친구들과 결과를 공유하면서 \"아 너는 이래서 그런 개그를 좋아하는구나!\" 하고 서로를 이해하는 계기가 되었으면 합니다.",
    en: "We hope sharing results with friends leads to moments of understanding like \"Oh, that's why you enjoy that kind of humor!\""
  },

  // About - Section 3: Features
  aboutSection3Title: { ko: "서비스 특징", en: "Key Features" },
  aboutFeatureFree: { ko: "무료", en: "Free" },
  aboutFeatureFreeDesc: { ko: "회원가입 없이 바로 테스트", en: "No sign-up required" },
  aboutFeatureFast: { ko: "빠름", en: "Quick" },
  aboutFeatureFastDesc: { ko: "약 5분 소요", en: "Takes about 5 minutes" },
  aboutFeatureDetailed: { ko: "상세한 분석", en: "Detailed Analysis" },
  aboutFeatureDetailedDesc: { ko: "강점, 약점, 궁합까지", en: "Strengths, weaknesses, and compatibility" },
  aboutFeatureShare: { ko: "공유 기능", en: "Share Feature" },
  aboutFeatureShareDesc: { ko: "친구들과 결과 비교", en: "Compare results with friends" },

  // About - Section 4: Disclaimer
  aboutSection4Title: { ko: "참고사항", en: "Please Note" },
  aboutSection4Text: {
    ko: "본 테스트는 오락 목적으로 제작되었습니다. 결과는 재미로 참고해주시고, 과학적으로 검증된 심리검사가 아님을 알려드립니다.",
    en: "This test is created for entertainment purposes only. Please take the results with a grain of humor — this is not a scientifically validated psychological assessment."
  },
  aboutSection4Sub: {
    ko: "This test is for entertainment purposes only and is not a scientifically validated psychological assessment.",
    en: "This test is for entertainment purposes only and is not a scientifically validated psychological assessment."
  },

  // About - Section 5: Contact
  aboutSection5Title: { ko: "문의하기", en: "Contact Us" },
  aboutSection5Text: {
    ko: "서비스 관련 문의, 제안, 피드백은 언제든 환영합니다.",
    en: "We welcome any inquiries, suggestions, or feedback about our service."
  },
  aboutSection5Email: { ko: "이메일: humor.test.app@gmail.com", en: "Email: humor.test.app@gmail.com" },

  // About - CTA
  aboutCTA: { ko: "테스트 하러가기", en: "Take the Test" },

  // Privacy Policy page
  privacyTitle: { ko: "개인정보처리방침", en: "Privacy Policy" },
  privacySubtitle: { ko: "Privacy Policy", en: "Privacy Policy" },

  // Section 1: Information We Collect
  privacySection1Title: { ko: "개인정보 수집 항목", en: "Information We Collect" },
  privacySection1Subtitle: { ko: "Information We Collect", en: "Information We Collect" },
  privacySection1Intro: { ko: "본 서비스는 다음과 같은 정보를 수집할 수 있습니다:", en: "This service may collect the following information:" },
  privacySection1Item1: { ko: "사용자가 입력한 이름/별명 (선택사항)", en: "User-provided name/nickname (optional)" },
  privacySection1Item2: { ko: "MBTI 유형 (선택사항)", en: "MBTI type (optional)" },
  privacySection1Item3: { ko: "테스트 결과 데이터", en: "Test result data" },
  privacySection1Item4: { ko: "쿠키 및 사용 로그 (방문 통계)", en: "Cookies and usage logs (visitor analytics)" },
  privacySection1Summary: {
    ko: "We may collect: nickname (optional), MBTI type (optional), test results, and cookies/usage logs for analytics.",
    en: "We may collect: nickname (optional), MBTI type (optional), test results, and cookies/usage logs for analytics."
  },

  // Section 2: Purpose of Data Collection
  privacySection2Title: { ko: "개인정보 수집 및 이용 목적", en: "Purpose of Data Collection" },
  privacySection2Subtitle: { ko: "Purpose of Data Collection", en: "Purpose of Data Collection" },
  privacySection2Item1: { ko: "테스트 결과 제공 및 개인화된 경험 제공", en: "Providing test results and personalized experiences" },
  privacySection2Item2: { ko: "서비스 개선 및 통계 분석", en: "Service improvement and statistical analysis" },
  privacySection2Item3: { ko: "광고 서비스 제공 (Google AdSense)", en: "Advertising services (Google AdSense)" },
  privacySection2Summary: {
    ko: "Data is used for: providing test results, service improvement, analytics, and advertising (Google AdSense).",
    en: "Data is used for: providing test results, service improvement, analytics, and advertising (Google AdSense)."
  },

  // Section 3: Cookies and Advertising
  privacySection3Title: { ko: "쿠키 및 광고", en: "Cookies and Advertising" },
  privacySection3Subtitle: { ko: "Cookies and Advertising", en: "Cookies and Advertising" },
  privacySection3Content1: {
    ko: "본 웹사이트는 Google AdSense를 통해 광고를 게재합니다. Google 및 제3자 광고 업체는 쿠키를 사용하여 사용자의 관심사에 기반한 광고를 표시할 수 있습니다.",
    en: "This website displays advertisements through Google AdSense. Google and third-party advertising vendors may use cookies to serve ads based on your interests."
  },
  privacySection3Content2: {
    ko: "사용자는 Google 광고 설정에서 맞춤 광고를 비활성화할 수 있습니다.",
    en: "You may opt out of personalized advertising through Google Ad Settings."
  },
  privacySection3GoogleAdSettings: { ko: "Google 광고 설정", en: "Google Ad Settings" },
  privacySection3Summary: {
    ko: "This website uses Google AdSense for advertising. Google and third-party vendors use cookies to serve ads based on user interests. You can opt out at Google Ad Settings.",
    en: "This website uses Google AdSense for advertising. Google and third-party vendors use cookies to serve ads based on user interests. You can opt out at Google Ad Settings."
  },

  // Section 4: Data Retention and Deletion
  privacySection4Title: { ko: "개인정보 보관 및 파기", en: "Data Retention and Deletion" },
  privacySection4Subtitle: { ko: "Data Retention and Deletion", en: "Data Retention and Deletion" },
  privacySection4Content: {
    ko: "수집된 데이터는 서비스 제공 목적으로만 사용되며, 브라우저의 로컬 스토리지에 저장됩니다. 사용자는 언제든지 브라우저 설정에서 데이터를 삭제할 수 있습니다.",
    en: "Collected data is used solely for service provision purposes and is stored in your browser's local storage. You may delete this data at any time through your browser settings."
  },
  privacySection4Summary: {
    ko: "Collected data is stored in browser local storage and can be deleted anytime through browser settings.",
    en: "Collected data is stored in browser local storage and can be deleted anytime through browser settings."
  },

  // Section 5: Third-Party Sharing
  privacySection5Title: { ko: "제3자 제공", en: "Third-Party Sharing" },
  privacySection5Subtitle: { ko: "Third-Party Sharing", en: "Third-Party Sharing" },
  privacySection5Content: {
    ko: "본 서비스는 법률에 의한 요청이 있는 경우를 제외하고 사용자의 개인정보를 제3자에게 판매, 거래 또는 전송하지 않습니다.",
    en: "This service does not sell, trade, or transfer your personal information to third parties, except as required by law."
  },
  privacySection5Summary: {
    ko: "We do not sell, trade, or transfer personal information to third parties except as required by law.",
    en: "We do not sell, trade, or transfer personal information to third parties except as required by law."
  },

  // Section 6: User Rights
  privacySection6Title: { ko: "사용자 권리", en: "User Rights" },
  privacySection6Subtitle: { ko: "User Rights", en: "User Rights" },
  privacySection6Content: {
    ko: "사용자는 언제든지 자신의 데이터에 대한 접근, 수정, 삭제를 요청할 수 있습니다.",
    en: "You have the right to access, modify, or request deletion of your data at any time."
  },
  privacySection6Summary: {
    ko: "Users have the right to access, modify, or delete their data at any time.",
    en: "Users have the right to access, modify, or delete their data at any time."
  },

  // Section 7: Contact Information
  privacySection7Title: { ko: "문의처", en: "Contact Information" },
  privacySection7Subtitle: { ko: "Contact Information", en: "Contact Information" },
  privacySection7Content: {
    ko: "개인정보 관련 문의사항이 있으시면 아래로 연락해 주세요.",
    en: "For privacy-related inquiries, please contact us at the email address below."
  },
  privacySection7Summary: {
    ko: "For privacy-related inquiries, please contact: humor.test.app@gmail.com",
    en: "For privacy-related inquiries, please contact: humor.test.app@gmail.com"
  },

  // Terms of Service page
  termsTitle: { ko: "이용약관", en: "Terms of Service" },
  termsSubtitle: { ko: "Terms of Service", en: "Terms of Service" },

  // Terms Section 1: Service Overview
  termsSection1Title: { ko: "서비스 개요", en: "Service Overview" },
  termsSection1Subtitle: { ko: "Service Overview", en: "Service Overview" },
  termsSection1Content: {
    ko: "\"개그유형 테스트\"(이하 \"서비스\")는 사용자에게 재미있는 개그 유형 분석 테스트를 제공하는 무료 온라인 서비스입니다. 본 서비스는 오락 목적으로만 제공됩니다.",
    en: "\"Humor Type Test\" (hereinafter referred to as the \"Service\") is a free online service that provides users with an entertaining humor personality analysis test. This Service is provided solely for entertainment purposes."
  },

  // Terms Section 2: Terms of Use
  termsSection2Title: { ko: "이용 조건", en: "Terms of Use" },
  termsSection2Subtitle: { ko: "Terms of Use", en: "Terms of Use" },
  termsSection2Intro: { ko: "본 서비스를 이용함으로써 귀하는 다음 사항에 동의합니다:", en: "By accessing and using this Service, you agree to comply with and be bound by the following terms and conditions:" },
  termsSection2Item1: { ko: "서비스를 합법적인 목적으로만 사용", en: "Use the Service only for lawful purposes" },
  termsSection2Item2: { ko: "타인의 권리를 침해하지 않음", en: "Refrain from infringing upon the rights of others" },
  termsSection2Item3: { ko: "서비스의 정상적인 운영을 방해하지 않음", en: "Not interfere with the normal operation of the Service" },
  termsSection2Item4: { ko: "자동화된 방식으로 서비스에 접근하지 않음", en: "Not access the Service through automated means or bots" },

  // Terms Section 3: Intellectual Property
  termsSection3Title: { ko: "지적재산권", en: "Intellectual Property Rights" },
  termsSection3Subtitle: { ko: "Intellectual Property", en: "Intellectual Property" },
  termsSection3Content: {
    ko: "본 서비스의 모든 콘텐츠(텍스트, 그래픽, 로고, 이미지 등)는 저작권법에 의해 보호됩니다. 무단 복제, 배포, 수정은 금지됩니다.",
    en: "All content within this Service, including but not limited to text, graphics, logos, and images, is protected under applicable copyright laws. Unauthorized reproduction, distribution, or modification of any content is strictly prohibited."
  },

  // Terms Section 4: Disclaimer
  termsSection4Title: { ko: "면책 조항", en: "Disclaimer of Warranties" },
  termsSection4Subtitle: { ko: "Disclaimer", en: "Disclaimer" },
  termsSection4Content: {
    ko: "본 서비스는 \"있는 그대로\" 제공되며, 테스트 결과의 정확성이나 완전성에 대해 어떠한 보증도 하지 않습니다. 테스트 결과는 오락 목적으로만 사용되어야 하며, 전문적인 조언으로 간주되어서는 안 됩니다.",
    en: "This Service is provided on an \"as is\" and \"as available\" basis without any warranties of any kind, either express or implied. We make no representations or warranties regarding the accuracy, completeness, or reliability of test results. Test results are intended solely for entertainment purposes and shall not be construed as professional advice of any kind."
  },

  // Terms Section 5: Advertising
  termsSection5Title: { ko: "광고", en: "Advertising" },
  termsSection5Subtitle: { ko: "Advertising", en: "Advertising" },
  termsSection5Content: {
    ko: "본 서비스는 Google AdSense를 통해 광고를 표시할 수 있습니다. 광고 콘텐츠는 제3자에 의해 제공되며, 해당 광고에 대한 책임은 광고주에게 있습니다.",
    en: "This Service may display advertisements through Google AdSense and other third-party advertising networks. Advertising content is provided by third-party advertisers, and such advertisers bear sole responsibility for the content and accuracy of their advertisements."
  },

  // Terms Section 6: Service Modifications
  termsSection6Title: { ko: "서비스 변경 및 중단", en: "Service Modifications and Termination" },
  termsSection6Subtitle: { ko: "Service Modifications", en: "Service Modifications" },
  termsSection6Content: {
    ko: "운영자는 사전 통지 없이 서비스의 일부 또는 전체를 수정, 중단, 종료할 권리를 보유합니다.",
    en: "We reserve the right, at our sole discretion, to modify, suspend, or terminate all or any portion of the Service at any time, with or without prior notice, and without liability to you."
  },

  // Terms Section 7: Limitation of Liability
  termsSection7Title: { ko: "책임 제한", en: "Limitation of Liability" },
  termsSection7Subtitle: { ko: "Limitation of Liability", en: "Limitation of Liability" },
  termsSection7Content: {
    ko: "법이 허용하는 최대 범위 내에서, 운영자는 서비스 이용으로 인해 발생하는 직접적, 간접적, 우발적, 결과적 손해에 대해 책임을 지지 않습니다.",
    en: "To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your access to or use of, or inability to access or use, the Service."
  },

  // Terms Section 8: Governing Law
  termsSection8Title: { ko: "준거법", en: "Governing Law" },
  termsSection8Subtitle: { ko: "Governing Law", en: "Governing Law" },
  termsSection8Content: {
    ko: "본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.",
    en: "These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Korea, without regard to its conflict of law provisions."
  },

  // Terms Section 9: Changes to Terms
  termsSection9Title: { ko: "약관 변경", en: "Amendments to Terms" },
  termsSection9Subtitle: { ko: "Changes to Terms", en: "Changes to Terms" },
  termsSection9Content: {
    ko: "운영자는 필요에 따라 본 약관을 수정할 수 있으며, 변경된 약관은 서비스에 게시된 시점부터 효력이 발생합니다.",
    en: "We reserve the right to amend these Terms at any time at our sole discretion. Any amended Terms shall become effective immediately upon posting to the Service. Your continued use of the Service following such posting constitutes your acceptance of the amended Terms."
  },

  // Terms Section 10: Contact Information
  termsSection10Title: { ko: "문의처", en: "Contact Information" },
  termsSection10Subtitle: { ko: "Contact Information", en: "Contact Information" },
  termsSection10Content: {
    ko: "이용약관에 관한 문의사항이 있으시면 아래로 연락해 주세요.",
    en: "If you have any questions or concerns regarding these Terms of Service, please contact us at the email address below."
  },

  // Youth Protection Policy page
  youthTitle: { ko: "청소년보호정책", en: "Youth Protection Policy" },
  youthSubtitle: { ko: "Youth Protection Policy", en: "Youth Protection Policy" },

  // Youth Section 1: Purpose
  youthSection1Title: { ko: "목적", en: "Purpose" },
  youthSection1Subtitle: { ko: "Purpose", en: "Purpose" },
  youthSection1Content: {
    ko: "\"개그유형 테스트\"(이하 \"서비스\")는 청소년이 건전한 인격체로 성장할 수 있도록 청소년보호법에 따라 청소년보호정책을 수립하고 시행합니다.",
    en: "\"Humor Type Test\" (the \"Service\") establishes and implements this Youth Protection Policy in accordance with the Youth Protection Act to help young people grow into healthy individuals."
  },

  // Youth Section 2: Blocking Harmful Content
  youthSection2Title: { ko: "유해정보 차단", en: "Blocking Harmful Content" },
  youthSection2Subtitle: { ko: "Blocking Harmful Content", en: "Blocking Harmful Content" },
  youthSection2Intro: { ko: "본 서비스는 청소년에게 유해한 콘텐츠를 제공하지 않습니다:", en: "This service does not provide content harmful to youth:" },
  youthSection2Item1: { ko: "음란물 및 성인 콘텐츠", en: "Adult or sexually explicit content" },
  youthSection2Item2: { ko: "폭력적이거나 잔인한 콘텐츠", en: "Violent or graphic content" },
  youthSection2Item3: { ko: "도박 관련 콘텐츠", en: "Gambling-related content" },
  youthSection2Item4: { ko: "불법 약물 관련 콘텐츠", en: "Illegal drug-related content" },
  youthSection2Item5: { ko: "기타 청소년에게 유해하다고 판단되는 콘텐츠", en: "Any other content deemed harmful to youth" },

  // Youth Section 3: Advertising Policy
  youthSection3Title: { ko: "청소년 보호를 위한 광고 정책", en: "Advertising Policy for Youth Protection" },
  youthSection3Subtitle: { ko: "Advertising Policy for Youth Protection", en: "Advertising Policy for Youth Protection" },
  youthSection3Content: {
    ko: "본 서비스에 게재되는 광고는 Google AdSense 정책을 준수하며, 청소년에게 유해한 광고는 게재되지 않도록 설정되어 있습니다. 부적절한 광고가 발견될 경우 즉시 조치합니다.",
    en: "Advertisements displayed on this service comply with Google AdSense policies and are configured to exclude content harmful to youth. We will take immediate action if any inappropriate advertisements are discovered."
  },

  // Youth Section 4: Youth Privacy Protection
  youthSection4Title: { ko: "청소년 개인정보 보호", en: "Youth Privacy Protection" },
  youthSection4Subtitle: { ko: "Youth Privacy Protection", en: "Youth Privacy Protection" },
  youthSection4Content: {
    ko: "본 서비스는 회원가입을 요구하지 않으며, 청소년의 개인정보를 별도로 수집하지 않습니다. 테스트 결과는 브라우저의 로컬 스토리지에만 저장되며, 언제든지 삭제할 수 있습니다.",
    en: "This service does not require registration and does not separately collect personal information from youth. Test results are stored only in the browser's local storage and can be deleted at any time."
  },

  // Youth Section 5: Reports and Inquiries
  youthSection5Title: { ko: "신고 및 문의", en: "Reports and Inquiries" },
  youthSection5Subtitle: { ko: "Reports and Inquiries", en: "Reports and Inquiries" },
  youthSection5Content: {
    ko: "청소년에게 유해하다고 판단되는 콘텐츠나 광고를 발견하신 경우, 아래 연락처로 신고해 주시면 신속하게 조치하겠습니다.",
    en: "If you discover any content or advertisement that you believe is harmful to youth, please report it to us using the contact information below and we will take prompt action."
  },
  youthSection5Manager: { ko: "청소년보호 책임자:", en: "Youth Protection Officer:" },
  youthSection5Team: { ko: "서비스 운영팀", en: "Service Operations Team" },

  // Youth Section 6: Related Laws
  youthSection6Title: { ko: "관련 법령", en: "Related Laws" },
  youthSection6Subtitle: { ko: "Related Laws", en: "Related Laws" },
  youthSection6Intro: { ko: "본 정책은 다음 법령을 준수합니다:", en: "This policy complies with the following laws:" },
  youthSection6Item1: { ko: "청소년 보호법", en: "Youth Protection Act" },
  youthSection6Item2: { ko: "정보통신망 이용촉진 및 정보보호 등에 관한 법률", en: "Act on Promotion of Information and Communications Network Utilization and Information Protection" },
  youthSection6Item3: { ko: "개인정보 보호법", en: "Personal Information Protection Act" },

  // Advertising Policy page
  adsTitle: { ko: "광고 안내", en: "Advertising Policy" },
  adsSubtitle: { ko: "Advertising Policy", en: "Advertising Policy" },

  // Ads Section 1: About Advertisements
  adsSection1Title: { ko: "광고 게재 안내", en: "About Advertisements" },
  adsSection1Subtitle: { ko: "About Advertisements", en: "About Advertisements" },
  adsSection1Content: {
    ko: "본 서비스는 무료로 제공되며, 서비스 운영 및 유지를 위해 광고를 게재하고 있습니다.",
    en: "This service is provided free of charge, and we display advertisements to support the operation and maintenance of the service."
  },

  // Ads Section 2: Types of Advertisements
  adsSection2Title: { ko: "광고 유형", en: "Types of Advertisements" },
  adsSection2Subtitle: { ko: "Types of Advertisements", en: "Types of Advertisements" },
  adsSection2Intro: { ko: "본 서비스에서는 다음과 같은 광고가 게재될 수 있습니다:", en: "The following types of advertisements may be displayed on this service:" },
  adsSection2Item1: { ko: "Google AdSense를 통한 디스플레이 광고", en: "Display advertisements through Google AdSense" },
  adsSection2Item2: { ko: "배너 광고", en: "Banner advertisements" },
  adsSection2Item3: { ko: "콘텐츠 내 광고", en: "In-content advertisements" },

  // Ads Section 3: Advertisement Content Responsibility
  adsSection3Title: { ko: "광고 콘텐츠 책임", en: "Advertisement Content Responsibility" },
  adsSection3Subtitle: { ko: "Advertisement Content Responsibility", en: "Advertisement Content Responsibility" },
  adsSection3Content: {
    ko: "광고 콘텐츠는 제3자 광고주에 의해 제공됩니다. 본 서비스는 광고의 정확성, 신뢰성, 품질에 대해 보증하지 않으며, 광고를 통해 발생하는 거래나 문제에 대해 책임지지 않습니다.",
    en: "Advertisement content is provided by third-party advertisers. This service does not guarantee the accuracy, reliability, or quality of advertisements, and is not responsible for any transactions or issues arising from advertisements."
  },

  // Ads Section 4: Personalized Advertisements
  adsSection4Title: { ko: "맞춤 광고", en: "Personalized Advertisements" },
  adsSection4Subtitle: { ko: "Personalized Advertisements", en: "Personalized Advertisements" },
  adsSection4Content: {
    ko: "Google AdSense는 쿠키를 사용하여 사용자의 관심사에 기반한 맞춤 광고를 표시할 수 있습니다. 맞춤 광고를 원하지 않으시면 Google 광고 설정에서 비활성화할 수 있습니다.",
    en: "Google AdSense may use cookies to display personalized advertisements based on your interests. If you do not wish to receive personalized ads, you can opt out through Google Ad Settings."
  },
  adsSection4GoogleSettings: { ko: "Google 광고 설정", en: "Google Ad Settings" },

  // Ads Section 5: Advertising Inquiries
  adsSection5Title: { ko: "광고 문의", en: "Advertising Inquiries" },
  adsSection5Subtitle: { ko: "Advertising Inquiries", en: "Advertising Inquiries" },
  adsSection5Content: {
    ko: "광고 관련 문의사항이 있으시면 아래로 연락해 주세요.",
    en: "For advertising inquiries, please contact us at the email address below."
  },
} as const;

export function t(key: keyof typeof ui, lang: Lang): string {
  return ui[key][lang];
}

export default ui;
