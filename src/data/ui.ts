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
  loadingSub: { ko: "개그코드 결과를 준비하고 있어요 ⏳", en: "Preparing your Humor Type result ⏳" },

  // Result
  gagCode: { ko: "개그코드", en: "Humor Type" },
  gagCodeOf: { ko: "의 개그코드", en: "'s Humor Type" },
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
  theoryLink: { ko: "분류 이론 보기", en: "Theory" },
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
  chartTitle: { ko: "개그코드 분석", en: "Humor Type Analysis" },

  // Guide
  guideTitle: { ko: "개그 코드 설명", en: "Humor Type Guide" },
  guideSub: { ko: "아래의 네 가지 기준으로 본인의 유머 코드를 이해해보세요.", en: "Understand your Humor Type through these four dimensions." },
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
    en: "Similar to MBTI, it analyzes your Humor Type based on four dimensions: Organized/Improvised, Intuitive/Abstract, Verbal/Physical, and Bright/Dark."
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

  // Theory page - Header
  theoryBadge: { ko: "Deep Dive", en: "Deep Dive" },
  theoryTitle: { ko: "개그코드 이론의 깊은 이해", en: "Deep Understanding of Humor Type Theory" },
  theorySubtitle1: { ko: "왜 16가지 유형을 4개의 대분류로 나누었을까요?", en: "Why did we divide 16 types into 4 categories?" },
  theorySubtitle2: { ko: "MBTI의 분류 철학에서 영감을 받아 개그코드만의 체계를 만든 이야기입니다.", en: "This is the story of how Humor Type created its own system inspired by MBTI's classification philosophy." },

  // Theory - Table of Contents
  theoryTocTitle: { ko: "목차", en: "Table of Contents" },
  theoryTocItem1: { ko: "1. 왜 4개의 대분류인가?", en: "1. Why 4 Major Categories?" },
  theoryTocItem2: { ko: "2. MBTI는 어떻게 분류했나?", en: "2. How Does MBTI Classify?" },
  theoryTocItem3: { ko: "3. MBTI 분류의 숨겨진 논리", en: "3. Hidden Logic of MBTI Classification" },
  theoryTocItem4: { ko: "4. 개그코드는 어떻게 분류했나?", en: "4. How Does Humor Type Classify?" },
  theoryTocItem5: { ko: "5. 두 체계의 비교", en: "5. Comparison of Two Systems" },
  theoryTocItem6: { ko: "6. 개그코드 4대 분류 상세", en: "6. Detailed Humor Type 4 Major Categories" },

  // Theory - Section 1
  theoryS1Title: { ko: "왜 4개의 대분류인가?", en: "Why 4 Major Categories?" },
  theoryS1Intro: { ko: "16가지 유형을 개별적으로 이해하는 것은 어렵습니다. 사람들은 복잡한 정보를 더 큰 범주로 묶어서 이해하는 것을 선호합니다. 이것이 바로 \"대분류\"가 필요한 이유입니다.", en: "It's difficult to understand 16 types individually. People prefer to understand complex information by grouping it into larger categories. This is why we need \"major categories.\"" },
  theoryS1CoreQ: { ko: "핵심 질문", en: "Core Question" },
  theoryS1KeyInsight: { ko: "4개의 축이 있으면 이론적으로 2⁴ = 16가지 조합이 나옵니다. 그런데 이 16가지를 4개 그룹으로 나누려면, 4개 축 중 2개를 선택해서 조합해야 합니다. 어떤 2개 축을 선택하느냐에 따라 완전히 다른 분류 체계가 만들어집니다.", en: "With 4 axes, theoretically we get 2⁴ = 16 combinations. To divide these 16 into 4 groups, we must select and combine 2 of the 4 axes. Depending on which 2 axes you choose, completely different classification systems emerge." },
  theoryS1Example: { ko: "예를 들어, 축이 A/B, C/D, E/F, G/H 4개가 있다면:", en: "For example, if there are 4 axes A/B, C/D, E/F, G/H:" },
  theoryS1ExAC: { ko: "A와 C로 묶으면: AC, AD, BC, BD 4그룹", en: "Grouping A and C: 4 groups AC, AD, BC, BD" },
  theoryS1ExAE: { ko: "A와 E로 묶으면: AE, AF, BE, BF 4그룹", en: "Grouping A and E: 4 groups AE, AF, BE, BF" },
  theoryS1ExCG: { ko: "C와 G로 묶으면: CG, CH, DG, DH 4그룹", en: "Grouping C and G: 4 groups CG, CH, DG, DH" },
  theoryS1Conclusion: { ko: "어떤 축의 조합이 가장 의미 있는 그룹을 만들어내는가? 이것이 분류 체계 설계의 핵심입니다. MBTI와 개그코드 모두 이 질문에 대한 답을 찾아야 했습니다.", en: "Which combination of axes creates the most meaningful groups? This is the core of classification system design. Both MBTI and Humor Type had to find answers to this question." },

  // Theory - Section 2
  theoryS2Title: { ko: "MBTI는 어떻게 분류했나?", en: "How Does MBTI Classify?" },
  theoryS2Intro: { ko: "MBTI에는 4개의 축이 있습니다:", en: "MBTI has 4 axes:" },
  theoryS2EI: { ko: "E/I (에너지 방향)", en: "E/I (Energy Direction)" },
  theoryS2EISub: { ko: "외향(Extraversion) vs 내향(Introversion)", en: "Extraversion vs Introversion" },
  theoryS2EIDesc: { ko: "에너지를 외부에서 얻는가, 내부에서 얻는가", en: "Do you gain energy externally or internally?" },
  theoryS2NS: { ko: "N/S (인식 방식) ⭐", en: "N/S (Perception Method) ⭐" },
  theoryS2NSSub: { ko: "직관(iNtuition) vs 감각(Sensing)", en: "Intuition vs Sensing" },
  theoryS2NSDesc: { ko: "가능성과 패턴을 보는가, 구체적 사실을 보는가", en: "Do you see possibilities and patterns, or concrete facts?" },
  theoryS2TF: { ko: "T/F (판단 방식)", en: "T/F (Judgment Method)" },
  theoryS2TFSub: { ko: "사고(Thinking) vs 감정(Feeling)", en: "Thinking vs Feeling" },
  theoryS2TFDesc: { ko: "논리로 판단하는가, 가치로 판단하는가", en: "Do you judge by logic or by values?" },
  theoryS2JP: { ko: "J/P (생활 양식)", en: "J/P (Lifestyle)" },
  theoryS2JPSub: { ko: "판단(Judging) vs 인식(Perceiving)", en: "Judging vs Perceiving" },
  theoryS2JPDesc: { ko: "계획적인가, 유연한가", en: "Are you planned or flexible?" },
  theoryS2Keirsey: { ko: "MBTI의 4대 분류(분석가, 외교관, 관리자, 탐험가)는 David Keirsey의 기질 이론에서 왔습니다. Keirsey는 이렇게 분류했습니다:", en: "MBTI's 4 major categories (Analysts, Diplomats, Sentinels, Explorers) come from David Keirsey's temperament theory. Keirsey classified them as follows:" },
  theoryTableCategory: { ko: "대분류", en: "Category" },
  theoryTableCombo: { ko: "조합", en: "Combination" },
  theoryTableTypes: { ko: "유형들", en: "Types" },
  theoryAnalyst: { ko: "분석가형", en: "Analyst" },
  theoryDiplomat: { ko: "외교관형", en: "Diplomat" },
  theorySentinel: { ko: "관리자형", en: "Sentinel" },
  theoryExplorer: { ko: "탐험가형", en: "Explorer" },
  theoryS2Interesting: { ko: "흥미로운 점", en: "Interesting Point" },
  theoryS2InterestingDetail: { ko: "N 그룹은 T/F로 나누고, S 그룹은 J/P로 나눴습니다. 왜 N-T/F, S-J/P 조합일까요? N-J/P, S-T/F로 나눌 수도 있었는데 말이죠.", en: "The N group is divided by T/F, and the S group is divided by J/P. Why the N-T/F and S-J/P combination? We could have divided it as N-J/P and S-T/F instead." },

  // Theory - Section 3: Hidden Logic of MBTI
  theoryS3Title: { ko: "MBTI 분류의 숨겨진 논리", en: "Hidden Logic of MBTI Classification" },
  theoryS3Insight: { ko: "핵심 통찰", en: "Key Insight" },
  theoryS3InsightDetail: { ko: "N/S(인식 방식)가 가장 근본적인 분류 기준입니다. 세상을 \"어떻게 인식하느냐\"가 그 사람의 기질을 가장 크게 결정하기 때문입니다.", en: "N/S (Perception Method) is the most fundamental classification criterion. How you perceive the world most greatly determines a person's temperament." },
  theoryS3NWorld: { ko: "N(직관형)의 세계", en: "World of N (Intuitive)" },
  theoryS3NIntro: { ko: "직관형(N)은 \"가능성, 미래, 추상적 패턴\"에 집중합니다. 이들은 현실 그 자체보다 \"현실이 될 수 있는 것\"에 관심이 많습니다.", en: "Intuitives (N) focus on \"possibilities, future, abstract patterns.\" They are more interested in \"what reality could become\" than reality itself." },
  theoryS3NDiff: { ko: "이런 N들에게 가장 중요한 차이는 무엇일까요? 바로 \"그 가능성을 어떻게 판단하느냐\"입니다.", en: "What is the most important difference for these N's? It's \"how you judge those possibilities.\"" },
  theoryS3NT: { ko: "NT (분석가형)", en: "NT (Analyst)" },
  theoryS3NTDesc: { ko: "\"논리와 시스템으로 세상을 이해하고 바꾸겠다\"", en: "\"I will understand and change the world with logic and systems\"" },
  theoryS3NTTrait1: { ko: "효율성과 역량을 중시", en: "Value efficiency and competence" },
  theoryS3NTTrait2: { ko: "전략적 사고", en: "Strategic thinking" },
  theoryS3NTTrait3: { ko: "지적 호기심이 강함", en: "Strong intellectual curiosity" },
  theoryS3NTTrait4: { ko: "감정보다 논리를 우선", en: "Prioritize logic over emotion" },
  theoryS3NF: { ko: "NF (외교관형)", en: "NF (Diplomat)" },
  theoryS3NFDesc: { ko: "\"공감과 가치로 세상을 연결하고 바꾸겠다\"", en: "\"I will connect and change the world with empathy and values\"" },
  theoryS3NFTrait1: { ko: "진정성과 의미를 중시", en: "Value authenticity and meaning" },
  theoryS3NFTrait2: { ko: "이상주의적 비전", en: "Idealistic vision" },
  theoryS3NFTrait3: { ko: "타인의 감정에 민감", en: "Sensitive to others' emotions" },
  theoryS3NFTrait4: { ko: "조화와 성장을 추구", en: "Pursue harmony and growth" },
  theoryS3NKeyDiff: { ko: "추상적 세계에서는 T/F(판단 방식)가 핵심 차이입니다. 같은 \"미래를 상상\"하더라도, 논리로 설계하느냐(NT) 가치로 그리느냐(NF)가 완전히 다른 사람을 만듭니다.", en: "In the abstract world, T/F (Judgment Method) is the key difference. Even imagining the same \"future,\" whether you design it with logic (NT) or paint it with values (NF) creates completely different people." },
  theoryS3SWorld: { ko: "S(감각형)의 세계", en: "World of S (Sensing)" },
  theoryS3SIntro: { ko: "감각형(S)은 \"현실, 현재, 구체적 사실\"에 집중합니다. 이들은 추상적 가능성보다 \"지금 눈앞에 있는 것\"에 관심이 많습니다.", en: "Sensors (S) focus on \"reality, present, concrete facts.\" They are more interested in \"what's right in front of you now\" than abstract possibilities." },
  theoryS3SDiff: { ko: "이런 S들에게 가장 중요한 차이는 무엇일까요? 바로 \"그 현실에 어떻게 대응하느냐\"입니다.", en: "What is the most important difference for these S's? It's \"how you respond to that reality.\"" },
  theoryS3SJ: { ko: "SJ (관리자형)", en: "SJ (Sentinel)" },
  theoryS3SJDesc: { ko: "\"질서와 체계로 현실을 안정시키겠다\"", en: "\"I will stabilize reality with order and systems\"" },
  theoryS3SJTrait1: { ko: "책임감과 의무를 중시", en: "Value responsibility and duty" },
  theoryS3SJTrait2: { ko: "전통과 규칙을 존중", en: "Respect tradition and rules" },
  theoryS3SJTrait3: { ko: "계획적이고 체계적", en: "Planned and systematic" },
  theoryS3SJTrait4: { ko: "안정성을 추구", en: "Pursue stability" },
  theoryS3SP: { ko: "SP (탐험가형)", en: "SP (Explorer)" },
  theoryS3SPDesc: { ko: "\"자유롭게 현실을 경험하고 즐기겠다\"", en: "\"I will freely experience and enjoy reality\"" },
  theoryS3SPTrait1: { ko: "즉흥성과 유연성을 중시", en: "Value spontaneity and flexibility" },
  theoryS3SPTrait2: { ko: "새로운 경험을 추구", en: "Pursue new experiences" },
  theoryS3SPTrait3: { ko: "현재 순간에 집중", en: "Focus on the present moment" },
  theoryS3SPTrait4: { ko: "자유를 추구", en: "Pursue freedom" },
  theoryS3SKeyDiff: { ko: "현실 세계에서는 J/P(생활 양식)가 핵심 차이입니다. 같은 \"현실을 살아가더라도\", 계획적으로 관리하느냐(SJ) 유연하게 즐기느냐(SP)가 완전히 다른 사람을 만듭니다.", en: "In the real world, J/P (Lifestyle) is the key difference. Even living the same \"reality,\" whether you manage it planned (SJ) or enjoy it flexibly (SP) creates completely different people." },
  theoryS3WhyEI: { ko: "왜 E/I는 분류 기준에서 빠졌나?", en: "Why was E/I excluded from classification criteria?" },
  theoryS3WhyEIDetail: { ko: "E/I(에너지 방향)는 \"기질의 본질\"과 덜 관련됩니다. 외향적 분석가(ENTJ)나 내향적 분석가(INTJ)나 둘 다 논리적 전략가입니다. 에너지를 어디서 얻느냐만 다를 뿐, 세상을 인식하고 판단하는 방식은 같습니다. 그래서 E/I는 대분류가 아닌, 각 유형 내의 변형으로 처리됩니다.", en: "E/I (Energy Direction) is less related to \"the essence of temperament.\" Both extroverted analysts (ENTJ) and introverted analysts (INTJ) are logical strategists. Only where you get energy differs; how you perceive and judge the world is the same. So E/I is treated as a variation within each type, not as a major category." },

  // Theory - Section 4: How Humor Type Classifies
  theoryS4Title: { ko: "개그코드는 어떻게 분류했나?", en: "How Does Humor Type Classify?" },
  theoryS4Intro: { ko: "개그코드도 4개의 축이 있습니다:", en: "Humor Type also has 4 axes:" },
  theoryS4OI: { ko: "O/I (준비 방식)", en: "O/I (Preparation Method)" },
  theoryS4OISub: { ko: "Organized vs Improvised", en: "Organized vs Improvised" },
  theoryS4OIDesc: { ko: "짜여진 개그 vs 즉흥적 개그", en: "Structured comedy vs Improvised comedy" },
  theoryS4NB: { ko: "N/B (맥락 방식) ⭐", en: "N/B (Context Method) ⭐" },
  theoryS4NBSub: { ko: "iNtuitive vs aBstract", en: "iNtuitive vs aBstract" },
  theoryS4NBDesc: { ko: "직관적(현실 공감) vs 추상적(병맛/엉뚱)", en: "Intuitive (reality empathy) vs Abstract (absurd/ridiculous)" },
  theoryS4VP: { ko: "V/P (전달 방식)", en: "V/P (Delivery Method)" },
  theoryS4VPSub: { ko: "Verbal vs Physical", en: "Verbal vs Physical" },
  theoryS4VPDesc: { ko: "언어적 vs 비언어적(몸/표정)", en: "Verbal vs Non-verbal (body/expression)" },
  theoryS4BD: { ko: "B/D (주제 톤)", en: "B/D (Tone)" },
  theoryS4BDSub: { ko: "Bright vs Dark", en: "Bright vs Dark" },
  theoryS4BDDesc: { ko: "밝고 유쾌함 vs 어둡고 풍자적", en: "Bright and cheerful vs Dark and satirical" },
  theoryS4FundamentalAxis: { ko: "MBTI의 논리를 개그코드에 적용하면, 가장 근본적인 축은 N/B(맥락 방식)입니다.", en: "Applying MBTI's logic to Humor Type, the most fundamental axis is N/B (Context Method)." },
  theoryS4Insight: { ko: "핵심 통찰", en: "Key Insight" },
  theoryS4InsightDetail: { ko: "유머를 \"어떤 맥락에서 찾느냐\"가 그 사람의 개그 기질을 가장 크게 결정합니다. 현실에서 공감 포인트를 찾는가(N), 현실을 비틀어 병맛을 만드는가(B)?", en: "What context you find humor in most greatly determines a person's comedy temperament. Do you find empathy points in reality (N), or twist reality to create absurdity (B)?" },
  theoryAtmosphere: { ko: "분위기메이커형", en: "Atmosphere Maker" },
  theoryFactBomb: { ko: "팩폭형", en: "Fact Bomb" },
  theoryConcept: { ko: "컨셉형", en: "Concept" },
  theoryUnpredictable: { ko: "예측불가형", en: "Unpredictable" },
  theoryS4NWorld: { ko: "N(직관적/현실공감형)의 세계", en: "World of N (Intuitive/Reality Empathy)" },
  theoryS4NIntro: { ko: "직관적(N) 유머는 \"아, 맞아! 나도 저래!\" 하는 공감에서 웃음이 나옵니다. 현실의 상황, 관계, 감정을 정확히 포착해서 \"그거 완전 공감\"하게 만드는 유머입니다.", en: "Intuitive (N) humor comes from empathy that makes you laugh with \"Oh yeah! I'm like that too!\" It captures real situations, relationships, and emotions accurately to create completely relatable humor." },
  theoryS4NDiff: { ko: "이런 N들에게 가장 중요한 차이는 무엇일까요? 바로 \"그 공감을 어떤 톤으로 전달하느냐\"입니다.", en: "What is the most important difference for these N's? It's \"what tone you deliver that empathy in.\"" },
  theoryS4NBTitle: { ko: "NB (분위기메이커형)", en: "NB (Atmosphere Maker)" },
  theoryS4NBTypeDesc: { ko: "\"모두가 편하게 웃을 수 있는 유쾌한 공감\"", en: "\"Pleasant empathy where everyone can comfortably laugh\"" },
  theoryS4NBTrait1: { ko: "밝고 따뜻한 분위기", en: "Bright and warm atmosphere" },
  theoryS4NBTrait2: { ko: "일상 에피소드 중심", en: "Everyday episode focused" },
  theoryS4NBTrait3: { ko: "자기비하, 귀여운 실수", en: "Self-deprecation, cute mistakes" },
  theoryS4NBTrait4: { ko: "누구도 불편하지 않은 웃음", en: "Laughter that doesn't make anyone uncomfortable" },
  theoryS4NDTitle: { ko: "ND (팩폭형)", en: "ND (Fact Bomb)" },
  theoryS4NDTypeDesc: { ko: "\"찔리지만 인정할 수밖에 없는 날카로운 공감\"", en: "\"Sharp empathy that stings but you have to admit\"" },
  theoryS4NDTrait1: { ko: "직설적이고 날카로움", en: "Direct and sharp" },
  theoryS4NDTrait2: { ko: "사회/권력 비판", en: "Social/power criticism" },
  theoryS4NDTrait3: { ko: "풍자, 블랙코미디", en: "Satire, black comedy" },
  theoryS4NDTrait4: { ko: "불편하지만 통쾌한 웃음", en: "Uncomfortable but satisfying laughter" },
  theoryS4NKeyDiff: { ko: "현실 공감 세계에서는 B/D(주제 톤)가 핵심 차이입니다. 같은 \"공감\"이라도, 밝게 풀어내느냐(NB) 날카롭게 찌르느냐(ND)가 완전히 다른 개그맨을 만듭니다.", en: "In the empathy world, B/D (Tone) is the key difference. Even with the same \"empathy,\" whether you express it brightly (NB) or sharply (ND) creates completely different comedians." },
  theoryS4BWorld: { ko: "B(추상적/병맛형)의 세계", en: "World of B (Abstract/Absurd)" },
  theoryS4BIntro: { ko: "추상적(B) 유머는 \"이게 뭐야?... 근데 왜 웃기지?\" 하는 당황에서 웃음이 나옵니다. 현실의 맥락을 깨고, 비논리적이고 엉뚱한 연결에서 웃음을 찾습니다.", en: "Abstract (B) humor comes from confusion asking \"What is this?... But why is it funny?\" It breaks reality's context and finds laughter in illogical and ridiculous connections." },
  theoryS4BDiff: { ko: "이런 B들에게 가장 중요한 차이는 무엇일까요? 바로 \"그 병맛을 어떻게 준비하느냐\"입니다.", en: "What is the most important difference for these B's? It's \"how you prepare that absurdity.\"" },
  theoryS4OBTitle: { ko: "OB (컨셉형)", en: "OB (Concept)" },
  theoryS4OBDesc: { ko: "\"치밀하게 설계된 세계관의 병맛\"", en: "\"Absurdity of a carefully designed worldview\"" },
  theoryS4OBTrait1: { ko: "기획된 콩트, 스케치", en: "Planned skits, sketches" },
  theoryS4OBTrait2: { ko: "캐릭터와 설정이 탄탄", en: "Strong characters and settings" },
  theoryS4OBTrait3: { ko: "복선과 콜백", en: "Foreshadowing and callbacks" },
  theoryS4OBTrait4: { ko: "SNL, 개콘 스타일", en: "SNL, Gag Concert style" },
  theoryS4IBTitle: { ko: "IB (예측불가형)", en: "IB (Unpredictable)" },
  theoryS4IBDesc: { ko: "\"즉흥적으로 터지는 혼돈의 병맛\"", en: "\"Absurdity of chaos bursting spontaneously\"" },
  theoryS4IBTrait1: { ko: "예측 불가능한 전개", en: "Unpredictable progression" },
  theoryS4IBTrait2: { ko: "갑자기 튀어나오는 한마디", en: "Sudden outburst of a line" },
  theoryS4IBTrait3: { ko: "맥락 파괴의 쾌감", en: "Pleasure of context destruction" },
  theoryS4IBTrait4: { ko: "무한도전, 신서유기 스타일", en: "Infinite Challenge, New Journey to the West style" },
  theoryS4BKeyDiff: { ko: "병맛 세계에서는 O/I(준비 방식)가 핵심 차이입니다. 같은 \"병맛\"이라도, 기획해서 만드느냐(OB) 즉흥으로 터뜨리느냐(IB)가 완전히 다른 개그맨을 만듭니다.", en: "In the absurdity world, O/I (Preparation Method) is the key difference. Even with the same \"absurdity,\" whether you create it planned (OB) or burst it spontaneously (IB) creates completely different comedians." },
  theoryS4WhyVP: { ko: "왜 V/P는 분류 기준에서 빠졌나?", en: "Why was V/P excluded from classification criteria?" },
  theoryS4WhyVPDetail: { ko: "V/P(전달 방식)는 \"개그 기질의 본질\"과 덜 관련됩니다. 말로 웃기는 분위기메이커나 몸으로 웃기는 분위기메이커나 둘 다 밝은 공감형입니다. 전달 수단만 다를 뿐, 유머의 본질은 같습니다. 그래서 V/P는 대분류가 아닌, 각 유형 내의 변형으로 처리됩니다.", en: "V/P (Delivery Method) is less related to \"the essence of comedy temperament.\" Both comedians who make people laugh with words and those who use their bodies are bright empathy types. Only the delivery method differs; the essence of humor is the same. So V/P is treated as a variation within each type, not as a major category." },

  // Theory - Section 5: Comparison
  theoryS5Title: { ko: "두 체계의 비교", en: "Comparison of Two Systems" },
  theoryS5CompareItem: { ko: "비교 항목", en: "Comparison Item" },
  theoryS5CoreAxis: { ko: "핵심 분류 축", en: "Core Classification Axis" },
  theoryS5NClassification: { ko: "직관형(N) 내 분류", en: "Classification within N (Intuitive)" },
  theoryS5SAbstractClass: { ko: "감각/추상형 내 분류", en: "Classification within S/Abstract" },
  theoryS5ExcludedAxis: { ko: "대분류에서 제외된 축", en: "Excluded Axis from Major Categories" },
  theoryS5Correspondence: { ko: "대응 관계", en: "Correspondence" },
  theoryS5AnalystFact: { ko: "분석가형 ↔ 팩폭형", en: "Analyst ↔ Fact Bomb" },
  theoryS5AnalystFactDesc: { ko: "둘 다 날카로운 논리와 분석이 핵심. 하나는 시스템을, 하나는 사회를 분석합니다.", en: "Both have sharp logic and analysis as core. One analyzes systems, the other analyzes society." },
  theoryS5DiplomatAtmo: { ko: "외교관형 ↔ 분위기메이커형", en: "Diplomat ↔ Atmosphere Maker" },
  theoryS5DiplomatAtmoDesc: { ko: "둘 다 따뜻한 공감과 연결이 핵심. 하나는 사람을, 하나는 분위기를 연결합니다.", en: "Both have warm empathy and connection as core. One connects people, the other connects atmosphere." },
  theoryS5SentinelConcept: { ko: "관리자형 ↔ 컨셉형", en: "Sentinel ↔ Concept" },
  theoryS5SentinelConceptDesc: { ko: "둘 다 체계와 구조가 핵심. 하나는 현실을, 하나는 세계관을 설계합니다.", en: "Both have systems and structure as core. One designs reality, the other designs worldview." },
  theoryS5ExplorerUnpred: { ko: "탐험가형 ↔ 예측불가형", en: "Explorer ↔ Unpredictable" },
  theoryS5ExplorerUnpredDesc: { ko: "둘 다 즉흥성과 유연함이 핵심. 하나는 경험을, 하나는 웃음을 즉흥으로 만듭니다.", en: "Both have spontaneity and flexibility as core. One creates experience spontaneously, the other creates laughter." },

  // Theory - Section 6: Humor Type 4 Categories Detail
  theoryS6Title: { ko: "개그코드 4대 분류 상세", en: "Detailed Humor Type 4 Major Categories" },
  theoryS6AtmoDetails: { ko: "N + B(밝음) | ONVB, ONPB, INVB, INPB", en: "N + B(Bright) | ONVB, ONPB, INVB, INPB" },
  theoryS6AtmoTagline: { ko: "\"모두가 함께 웃을 수 있는 유쾌한 공감의 달인\"", en: "\"Master of pleasant empathy where everyone can laugh together\"" },
  theoryS6Characteristics: { ko: "특징", en: "Characteristics" },
  theoryS6AtmoTrait1: { ko: "일상에서 공감 포인트를 찾아냄", en: "Finds empathy points from everyday life" },
  theoryS6AtmoTrait2: { ko: "밝고 따뜻한 분위기 조성", en: "Creates a bright and warm atmosphere" },
  theoryS6AtmoTrait3: { ko: "자연스러운 대화 속 웃음", en: "Laughter within natural conversation" },
  theoryS6AtmoTrait4: { ko: "누구도 불편하지 않은 유머", en: "Humor that doesn't make anyone uncomfortable" },
  theoryS6RepStyle: { ko: "대표 스타일", en: "Representative Style" },
  theoryS6AtmoStyle1: { ko: "유재석의 상황 정리 능력", en: "Yoo Jae-seok's situation organizing ability" },
  theoryS6AtmoStyle2: { ko: "신동엽의 자연스러운 진행", en: "Shin Dong-yup's natural hosting" },
  theoryS6AtmoStyle3: { ko: "일상 공감 토크쇼", en: "Daily empathy talk show" },
  theoryS6FactDetails: { ko: "N + D(어두움) | ONVD, ONPD, INVD, INPD", en: "N + D(Dark) | ONVD, ONPD, INVD, INPD" },
  theoryS6FactTagline: { ko: "\"불편하지만 인정할 수밖에 없는 날카로운 통찰의 달인\"", en: "\"Master of sharp insight that's uncomfortable but impossible to deny\"" },
  theoryS6FactTrait1: { ko: "현실의 모순을 정확히 짚어냄", en: "Precisely points out contradictions in reality" },
  theoryS6FactTrait2: { ko: "직설적이고 날카로운 표현", en: "Direct and sharp expression" },
  theoryS6FactTrait3: { ko: "풍자와 비판의 유머", en: "Satire and critical humor" },
  theoryS6FactTrait4: { ko: "찔리지만 통쾌한 웃음", en: "Laughter that stings but feels satisfying" },
  theoryS6FactStyle1: { ko: "김구라의 직설 화법", en: "Kim Gura's direct speech" },
  theoryS6FactStyle2: { ko: "이경규의 날카로운 관찰", en: "Lee Kyung-gyu's sharp observation" },
  theoryS6FactStyle3: { ko: "시사 풍자 코미디", en: "Current affairs satire comedy" },
  theoryS6ConceptDetails: { ko: "O + B(추상) | OBVB, OBVD, OBPB, OBPD", en: "O + B(Abstract) | OBVB, OBVD, OBPB, OBPD" },
  theoryS6ConceptTagline: { ko: "\"치밀하게 설계된 세계관으로 웃음을 만드는 기획의 달인\"", en: "\"Master of planning who creates laughter with a carefully designed worldview\"" },
  theoryS6ConceptTrait1: { ko: "캐릭터와 설정이 탄탄함", en: "Strong characters and settings" },
  theoryS6ConceptTrait2: { ko: "복선과 콜백을 활용", en: "Uses foreshadowing and callbacks" },
  theoryS6ConceptTrait3: { ko: "준비된 콩트, 스케치", en: "Prepared skits, sketches" },
  theoryS6ConceptTrait4: { ko: "완성도 높은 병맛 세계관", en: "High-quality absurd worldview" },
  theoryS6ConceptStyle1: { ko: "개그콘서트 콩트", en: "Gag Concert skits" },
  theoryS6ConceptStyle2: { ko: "SNL 코리아 스케치", en: "SNL Korea sketches" },
  theoryS6ConceptStyle3: { ko: "유튜브 기획 콘텐츠", en: "YouTube planned content" },
  theoryS6UnpredDetails: { ko: "I + B(추상) | IBVB, IBVD, IBPB, IBPD", en: "I + B(Abstract) | IBVB, IBVD, IBPB, IBPD" },
  theoryS6UnpredTagline: { ko: "\"예측 불가능한 순간에 터지는 혼돈의 달인\"", en: "\"Master of chaos bursting at unpredictable moments\"" },
  theoryS6UnpredTrait1: { ko: "갑자기 튀어나오는 한마디", en: "Sudden outburst of a line" },
  theoryS6UnpredTrait2: { ko: "맥락을 완전히 파괴", en: "Completely destroys context" },
  theoryS6UnpredTrait3: { ko: "즉흥적인 병맛 전개", en: "Spontaneous absurd progression" },
  theoryS6UnpredTrait4: { ko: "예상 못한 곳에서 웃음 폭발", en: "Laughter explosion from unexpected places" },
  theoryS6UnpredStyle1: { ko: "무한도전 즉흥 상황", en: "Infinite Challenge spontaneous situations" },
  theoryS6UnpredStyle2: { ko: "신서유기 돌발 개그", en: "New Journey to the West sudden gags" },
  theoryS6UnpredStyle3: { ko: "노홍철의 예측불가 행동", en: "Noh Hong-chul's unpredictable behavior" },

  // Theory - Navigation
  theoryNavBack: { ko: "뒤로가기", en: "Go Back" },
  theoryNavTest: { ko: "테스트 하러가기", en: "Take the Test" },
  theoryNavGuide: { ko: "4가지 축 설명", en: "4 Axes Guide" },
  theoryNavTypes: { ko: "16가지 유형 보기", en: "View 16 Types" },
} as const;

export function t(key: keyof typeof ui, lang: Lang): string {
  return ui[key][lang];
}

export default ui;
