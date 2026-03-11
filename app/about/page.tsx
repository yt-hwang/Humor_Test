'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-3xl">🎤</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              서비스 소개
            </h1>
            <p className="text-gray-500 text-sm">About This Service</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 서비스 소개 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">🎭</span> 개그유형 테스트란?
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  <strong>개그유형 테스트</strong>는 당신만의 유머 스타일을 분석하여 16가지 개그 유형 중 하나로 분류해주는 재미있는 심리 테스트입니다.
                </p>
                <p className="mb-3">
                  MBTI처럼 4가지 축(짜여진/즉흥적, 직관적/추상적, 언어적/비언어적, 밝은/어두운)을 기반으로 당신의 유머 코드를 분석합니다.
                </p>
                <p className="text-sm text-gray-500">
                  This test analyzes your humor style and categorizes you into one of 16 comedy types, similar to MBTI personality types.
                </p>
              </div>
            </section>

            {/* 왜 만들었나 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">💡</span> 왜 만들었나요?
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  &quot;왜 어떤 개그는 나한테 웃기고, 어떤 개그는 안 웃기지?&quot;라는 단순한 질문에서 시작했습니다.
                </p>
                <p className="mb-3">
                  사람마다 웃음 포인트가 다르다는 것을 체계적으로 분석해보고 싶었고, 그 결과 16가지 개그 유형 분류 체계를 만들게 되었습니다.
                </p>
                <p>
                  친구들과 결과를 공유하면서 &quot;아 너는 이래서 그런 개그를 좋아하는구나!&quot; 하고 서로를 이해하는 계기가 되었으면 합니다.
                </p>
              </div>
            </section>

            {/* 특징 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">✨</span> 서비스 특징
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>무료</strong> - 회원가입 없이 바로 테스트</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>빠름</strong> - 약 5분 소요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>상세한 분석</strong> - 강점, 약점, 궁합까지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>공유 기능</strong> - 친구들과 결과 비교</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 면책 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-orange-500">⚠️</span> 참고사항
              </h2>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <p className="text-sm text-gray-600">
                  본 테스트는 <strong>오락 목적</strong>으로 제작되었습니다. 결과는 재미로 참고해주시고,
                  과학적으로 검증된 심리검사가 아님을 알려드립니다.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  This test is for entertainment purposes only and is not a scientifically validated psychological assessment.
                </p>
              </div>
            </section>

            {/* 문의 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">📧</span> 문의하기
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">서비스 관련 문의, 제안, 피드백은 언제든 환영합니다.</p>
                <p className="text-gray-600">이메일: humor.test.app@gmail.com</p>
              </div>
            </section>
          </div>

          {/* 홈으로 돌아가기 */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-xl px-6 py-3 font-medium shadow-lg transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              테스트 하러가기
            </Link>
          </div>
        </div>

        {/* 관련 링크 */}
        <div className="mt-6 flex justify-center gap-4 text-sm">
          <Link href="/privacy" className="text-gray-500 hover:text-gray-700 underline">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-gray-700 underline">
            이용약관
          </Link>
        </div>
      </div>
    </main>
  )
}
