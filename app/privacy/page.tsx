'use client'

import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              개인정보처리방침
            </h1>
            <p className="text-gray-500 text-sm">Privacy Policy</p>
            <p className="text-gray-400 text-xs mt-2">최종 수정일: 2026년 1월 1일 | Last Updated: January 1, 2026</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 섹션 1 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">1.</span> 개인정보 수집 항목
              </h2>
              <p className="text-sm text-gray-500 mb-2">Information We Collect</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 서비스는 다음과 같은 정보를 수집할 수 있습니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>사용자가 입력한 이름/별명 (선택사항)</li>
                  <li>MBTI 유형 (선택사항)</li>
                  <li>테스트 결과 데이터</li>
                  <li>쿠키 및 사용 로그 (방문 통계)</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">
                  We may collect: nickname (optional), MBTI type (optional), test results, and cookies/usage logs for analytics.
                </p>
              </div>
            </section>

            {/* 섹션 2 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">2.</span> 개인정보 수집 및 이용 목적
              </h2>
              <p className="text-sm text-gray-500 mb-2">Purpose of Data Collection</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>테스트 결과 제공 및 개인화된 경험 제공</li>
                  <li>서비스 개선 및 통계 분석</li>
                  <li>광고 서비스 제공 (Google AdSense)</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">
                  Data is used for: providing test results, service improvement, analytics, and advertising (Google AdSense).
                </p>
              </div>
            </section>

            {/* 섹션 3 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">3.</span> 쿠키 및 광고
              </h2>
              <p className="text-sm text-gray-500 mb-2">Cookies and Advertising</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 웹사이트는 Google AdSense를 통해 광고를 게재합니다. Google 및 제3자 광고 업체는 쿠키를 사용하여 사용자의 관심사에 기반한 광고를 표시할 수 있습니다.</p>
                <p className="mb-2">사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google 광고 설정</a>에서 맞춤 광고를 비활성화할 수 있습니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  This website uses Google AdSense for advertising. Google and third-party vendors use cookies to serve ads based on user interests. You can opt out at Google Ad Settings.
                </p>
              </div>
            </section>

            {/* 섹션 4 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">4.</span> 개인정보 보관 및 파기
              </h2>
              <p className="text-sm text-gray-500 mb-2">Data Retention and Deletion</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">수집된 데이터는 서비스 제공 목적으로만 사용되며, 브라우저의 로컬 스토리지에 저장됩니다. 사용자는 언제든지 브라우저 설정에서 데이터를 삭제할 수 있습니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  Collected data is stored in browser local storage and can be deleted anytime through browser settings.
                </p>
              </div>
            </section>

            {/* 섹션 5 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">5.</span> 제3자 제공
              </h2>
              <p className="text-sm text-gray-500 mb-2">Third-Party Sharing</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 서비스는 법률에 의한 요청이 있는 경우를 제외하고 사용자의 개인정보를 제3자에게 판매, 거래 또는 전송하지 않습니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  We do not sell, trade, or transfer personal information to third parties except as required by law.
                </p>
              </div>
            </section>

            {/* 섹션 6 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">6.</span> 사용자 권리
              </h2>
              <p className="text-sm text-gray-500 mb-2">User Rights</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">사용자는 언제든지 자신의 데이터에 대한 접근, 수정, 삭제를 요청할 수 있습니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  Users have the right to access, modify, or delete their data at any time.
                </p>
              </div>
            </section>

            {/* 섹션 7 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">7.</span> 문의처
              </h2>
              <p className="text-sm text-gray-500 mb-2">Contact Information</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">개인정보 관련 문의사항이 있으시면 아래로 연락해 주세요.</p>
                <p className="text-gray-600">이메일: humor.test.app@gmail.com</p>
                <p className="mt-3 text-sm text-gray-500">
                  For privacy-related inquiries, please contact: humor.test.app@gmail.com
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

        {/* 관련 링크 */}
        <div className="mt-6 text-center">
          <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm underline">
            이용약관 보기 (Terms of Service)
          </Link>
        </div>
      </div>
    </main>
  )
}
