'use client'

import Link from 'next/link'
import Footer from '../../src/components/Footer'

export default function AdsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              광고 안내
            </h1>
            <p className="text-gray-500 text-sm">Advertising Policy</p>
            <p className="text-gray-400 text-xs mt-2">최종 수정일: 2026년 1월 1일 | Last Updated: January 1, 2026</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 광고 게재 안내 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">1.</span> 광고 게재 안내
              </h2>
              <p className="text-sm text-gray-500 mb-2">About Advertisements</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  본 서비스는 무료로 제공되며, 서비스 운영 및 유지를 위해 광고를 게재하고 있습니다.
                </p>
                <p className="text-sm text-gray-500">
                  This service is free and displays advertisements to support operation and maintenance.
                </p>
              </div>
            </section>

            {/* 광고 유형 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">2.</span> 광고 유형
              </h2>
              <p className="text-sm text-gray-500 mb-2">Types of Advertisements</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">본 서비스에서는 다음과 같은 광고가 게재될 수 있습니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                  <li>Google AdSense를 통한 디스플레이 광고</li>
                  <li>배너 광고</li>
                  <li>콘텐츠 내 광고</li>
                </ul>
                <p className="text-sm text-gray-500">
                  Advertisements may include: Google AdSense display ads, banner ads, and in-content ads.
                </p>
              </div>
            </section>

            {/* 광고 콘텐츠 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">3.</span> 광고 콘텐츠 책임
              </h2>
              <p className="text-sm text-gray-500 mb-2">Advertisement Content Responsibility</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  광고 콘텐츠는 제3자 광고주에 의해 제공됩니다. 본 서비스는 광고의 정확성, 신뢰성, 품질에 대해 보증하지 않으며,
                  광고를 통해 발생하는 거래나 문제에 대해 책임지지 않습니다.
                </p>
                <p className="text-sm text-gray-500">
                  Advertisement content is provided by third-party advertisers. We do not guarantee accuracy, reliability, or quality of ads.
                </p>
              </div>
            </section>

            {/* 맞춤 광고 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">4.</span> 맞춤 광고
              </h2>
              <p className="text-sm text-gray-500 mb-2">Personalized Advertisements</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  Google AdSense는 쿠키를 사용하여 사용자의 관심사에 기반한 맞춤 광고를 표시할 수 있습니다.
                  맞춤 광고를 원하지 않으시면 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google 광고 설정</a>에서 비활성화할 수 있습니다.
                </p>
                <p className="text-sm text-gray-500">
                  Google AdSense may use cookies to display personalized ads. You can opt out at Google Ad Settings.
                </p>
              </div>
            </section>

            {/* 광고 문의 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">5.</span> 광고 문의
              </h2>
              <p className="text-sm text-gray-500 mb-2">Advertising Inquiries</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">광고 관련 문의사항이 있으시면 아래로 연락해 주세요.</p>
                <p className="text-gray-600">이메일: humor.test.app@gmail.com</p>
                <p className="mt-3 text-sm text-gray-500">
                  For advertising inquiries, please contact: humor.test.app@gmail.com
                </p>
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
              홈으로 돌아가기
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
