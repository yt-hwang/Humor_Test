"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { recordVisit } from "../../src/utils/analytics";
import { useLang } from "../../src/context/LangContext";
import Footer from "../../src/components/Footer";

interface FAQItem {
  questionKo: string;
  questionEn: string;
  answerKo: string;
  answerEn: string;
}

const faqs: FAQItem[] = [
  {
    questionKo: "이 테스트는 어떻게 만들어졌나요?",
    questionEn: "How was this test created?",
    answerKo: "유머 타입 테스트는 유머와 코미디에 대한 광범위한 연구를 바탕으로 개발되었습니다. MBTI의 분류 철학에서 영감을 받아, 유머 선호도를 4가지 축으로 분석합니다: 준비/즉흥, 직관/추상, 언어/표현, 밝음/다크. 이 4가지 축의 조합으로 16가지 고유한 유머 유형이 만들어집니다.",
    answerEn: "The Humor Type Test was developed based on extensive research into humor and comedy preferences. Inspired by MBTI's classification philosophy, it analyzes humor preferences across 4 axes: Organized/Improvised, Intuitive/Abstract, Verbal/Physical, and Bright/Dark. These 4 axes combine to create 16 unique humor types.",
  },
  {
    questionKo: "MBTI와 뭐가 다른가요?",
    questionEn: "How is this different from MBTI?",
    answerKo: "MBTI는 전반적인 성격 유형을 측정하지만, 유머 타입 테스트는 오직 유머 선호도에만 집중합니다. MBTI 유형이 같아도 유머 취향은 완전히 다를 수 있어요. 예를 들어, 같은 INTJ라도 한 사람은 언어적 위트를 좋아하고, 다른 사람은 물리적 코미디를 좋아할 수 있습니다. 이 테스트는 그런 유머 스타일의 차이를 포착합니다.",
    answerEn: "While MBTI measures overall personality types, the Humor Type Test focuses exclusively on humor preferences. Two people with the same MBTI type can have completely different humor tastes. For example, two INTJs might differ — one loves verbal wit while another prefers physical comedy. This test captures those humor style differences.",
  },
  {
    questionKo: "결과가 안 맞는 것 같아요. 왜 그럴까요?",
    questionEn: "My result doesn't feel accurate. Why?",
    answerKo: "몇 가지 이유가 있을 수 있어요:\n\n1. 기분에 따른 응답: 현재 기분이 평소와 다르면 결과가 달라질 수 있어요.\n\n2. 사회적 기대: 무의식적으로 '바람직한' 답을 선택했을 수 있어요.\n\n3. 상황적 유머: 특정 상황(친구들, 직장 등)에서의 유머와 일반적인 유머 취향이 다를 수 있어요.\n\n다시 테스트해보시거나, 16가지 유형을 둘러보며 더 맞는 유형을 찾아보세요!",
    answerEn: "There could be several reasons:\n\n1. Mood-based responses: Your current mood might differ from your usual state.\n\n2. Social expectations: You might have unconsciously selected 'desirable' answers.\n\n3. Situational humor: Your humor with friends vs. at work might differ from your general preferences.\n\nTry retaking the test, or browse all 16 types to find one that fits better!",
  },
  {
    questionKo: "유형 궁합은 어떻게 계산되나요?",
    questionEn: "How is type compatibility calculated?",
    answerKo: "유형 궁합은 두 유형 간의 축 일치도를 기반으로 계산됩니다. 4개 축이 모두 같으면 '동류형', 3개가 같으면 '찰떡궁합', 2개가 같으면 '무난한 케미', 1개가 같으면 '신선한 조합', 0개가 같으면 '정반대 매력'입니다. 하지만 궁합이 낮다고 해서 안 맞는 건 아니에요 — 다양성이 오히려 재미를 줄 수 있거든요!",
    answerEn: "Type compatibility is calculated based on how many axes two types share. 4 matching axes = 'Kindred Spirit', 3 = 'Perfect Match', 2 = 'Decent Chemistry', 1 = 'Fresh Perspective', 0 = 'Opposite Attraction'. But low compatibility doesn't mean you won't get along — diversity can actually make things more fun!",
  },
  {
    questionKo: "테스트 결과를 공유할 수 있나요?",
    questionEn: "Can I share my test results?",
    answerKo: "네! 결과 페이지에서 여러 방법으로 공유할 수 있어요:\n\n• 링크 복사: 텍스트와 링크를 클립보드에 복사\n• 카카오톡: 카카오톡으로 바로 공유\n• 이미지 저장: 결과 카드를 이미지로 저장해서 SNS에 업로드\n\n친구들과 함께 테스트하고 결과를 비교해보세요!",
    answerEn: "Yes! You can share your results from the result page in several ways:\n\n• Copy Link: Copy text and link to clipboard\n• KakaoTalk: Share directly to KakaoTalk\n• Save Image: Save your result card as an image for social media\n\nTake the test with friends and compare your results!",
  },
  {
    questionKo: "테스트는 얼마나 자주 다시 해볼 수 있나요?",
    questionEn: "How often can I retake the test?",
    answerKo: "원하는 만큼 자주 테스트할 수 있어요! 시간이 지나면서 유머 취향이 변할 수 있고, 다른 기분이나 상황에서 다른 결과가 나올 수도 있어요. 정기적으로 다시 테스트해서 유머 스타일이 어떻게 발전하는지 확인해보세요.",
    answerEn: "You can retake the test as often as you like! Your humor preferences might evolve over time, and you might get different results in different moods or situations. Feel free to retake it periodically to see how your humor style develops.",
  },
  {
    questionKo: "왜 16가지 유형인가요?",
    questionEn: "Why are there 16 types?",
    answerKo: "4가지 축(각각 2가지 선택지)의 조합으로 2⁴ = 16가지 유형이 만들어집니다. 이 숫자는 충분히 다양하면서도 각 유형이 의미 있게 구별될 수 있는 균형점이에요. 너무 적으면 뭉뚱그려지고, 너무 많으면 구분이 희미해지거든요.",
    answerEn: "With 4 axes (each having 2 options), we get 2⁴ = 16 possible combinations. This number strikes a balance — enough variety to be meaningful, but not so many that distinctions become blurry. Too few types would oversimplify, while too many would make each type less distinct.",
  },
  {
    questionKo: "이 테스트는 과학적으로 검증되었나요?",
    questionEn: "Is this test scientifically validated?",
    answerKo: "이 테스트는 재미와 자기 성찰을 위해 설계되었으며, 임상 심리 도구가 아닙니다. 유머 연구와 성격 유형 이론에서 영감을 받았지만, 엄격한 과학적 검증을 거친 것은 아니에요. 가볍게 즐기면서 자신의 유머 선호도를 탐색하는 용도로 사용해주세요!",
    answerEn: "This test is designed for fun and self-reflection, not as a clinical psychological tool. While inspired by humor research and personality type theory, it hasn't undergone rigorous scientific validation. Use it as a light-hearted way to explore your humor preferences!",
  },
  {
    questionKo: "친구들과 유형이 다르면 어떻게 해야 하나요?",
    questionEn: "What if my friends have different types?",
    answerKo: "다양성은 좋은 거예요! 서로 다른 유형은 새로운 관점을 제공하고, 그룹에 다양한 에너지를 더해줍니다. 서로의 유형을 이해하면 왜 특정 농담에 다르게 반응하는지 알 수 있고, 더 나은 소통이 가능해져요. 차이를 즐기세요!",
    answerEn: "Diversity is a good thing! Different types bring new perspectives and add varied energy to your group. Understanding each other's types can help you see why you react differently to certain jokes, leading to better communication. Embrace the differences!",
  },
  {
    questionKo: "결과를 저장하거나 나중에 볼 수 있나요?",
    questionEn: "Can I save my results for later?",
    answerKo: "결과 페이지의 URL에 당신의 유형 코드가 포함되어 있어서, 북마크하면 나중에 다시 볼 수 있어요. 또한 이미지 저장 기능으로 결과 카드를 저장해두면 언제든 확인할 수 있습니다!",
    answerEn: "Your result page URL contains your type code, so you can bookmark it to revisit later. You can also use the image save feature to download your result card and keep it for future reference!",
  },
];

export default function FAQPage() {
  const router = useRouter();
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    recordVisit("/faq");
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden p-4">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>❓</span>
            <span>FAQ</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 break-keep">
            {lang === "en" ? "Frequently Asked Questions" : "자주 묻는 질문"}
          </h1>
          <p className="text-gray-600 break-keep">
            {lang === "en"
              ? "Everything you need to know about the Humor Type Test"
              : "유머 타입 테스트에 대해 궁금한 모든 것"}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-white/90 transition-colors"
              >
                <span className="font-semibold text-gray-800 break-keep">
                  {lang === "en" ? faq.questionEn : faq.questionKo}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4 whitespace-pre-line break-keep">
                    {lang === "en" ? faq.answerEn : faq.answerKo}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 break-keep">
            {lang === "en" ? "Still have questions?" : "더 궁금한 게 있으신가요?"}
          </h2>
          <p className="text-gray-600 mb-4 break-keep">
            {lang === "en"
              ? "Check out our Theory page for a deep dive into how the test works."
              : "이론 페이지에서 테스트가 어떻게 작동하는지 자세히 알아보세요."}
          </p>
          <Link
            href={`/theory?lang=${lang}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-xl px-6 py-3 font-medium shadow-lg transition-all"
          >
            <span>📚</span>
            {lang === "en" ? "Read the Theory" : "이론 알아보기"}
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <span>←</span>
            {lang === "en" ? "Go Back" : "뒤로가기"}
          </button>
          <Link
            href={`/?lang=${lang}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-xl px-6 py-3 font-medium shadow-lg transition-all"
          >
            <span>🎯</span>
            {lang === "en" ? "Take the Test" : "테스트 하러가기"}
          </Link>
          <Link
            href={`/types?lang=${lang}`}
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <span>🎭</span>
            {lang === "en" ? "All Types" : "전체 유형 보기"}
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  );
}
