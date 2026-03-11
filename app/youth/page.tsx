'use client'

import Link from 'next/link'

export default function YouthProtectionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              청소년보호정책
            </h1>
            <p className="text-gray-500 text-sm">Youth Protection Policy</p>
            <p className="text-gray-400 text-xs mt-2">최종 수정일: 2024년 1월 1일 | Last Updated: January 1, 2024</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 목적 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">1.</span> 목적
              </h2>
              <p className="text-sm text-gray-500 mb-2">Purpose</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  &quot;개그유형 테스트&quot;(이하 &quot;서비스&quot;)는 청소년이 건전한 인격체로 성장할 수 있도록
                  청소년보호법에 따라 청소년보호정책을 수립하고 시행합니다.
                </p>
                <p className="text-sm text-gray-500">
                  This service establishes and implements a Youth Protection Policy in accordance with the Youth Protection Act.
                </p>
              </div>
            </section>

            {/* 유해정보 차단 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">2.</span> 유해정보 차단
              </h2>
              <p className="text-sm text-gray-500 mb-2">Blocking Harmful Content</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">본 서비스는 청소년에게 유해한 콘텐츠를 제공하지 않습니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                  <li>음란물 및 성인 콘텐츠</li>
                  <li>폭력적이거나 잔인한 콘텐츠</li>
                  <li>도박 관련 콘텐츠</li>
                  <li>불법 약물 관련 콘텐츠</li>
                  <li>기타 청소년에게 유해하다고 판단되는 콘텐츠</li>
                </ul>
                <p className="text-sm text-gray-500">
                  This service does not provide content harmful to youth, including adult content, violence, gambling, or illegal substances.
                </p>
              </div>
            </section>

            {/* 광고 정책 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">3.</span> 청소년 보호를 위한 광고 정책
              </h2>
              <p className="text-sm text-gray-500 mb-2">Advertising Policy for Youth Protection</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  본 서비스에 게재되는 광고는 Google AdSense 정책을 준수하며, 청소년에게 유해한 광고는 게재되지 않도록 설정되어 있습니다.
                  부적절한 광고가 발견될 경우 즉시 조치합니다.
                </p>
                <p className="text-sm text-gray-500">
                  Advertisements comply with Google AdSense policies and are configured to exclude content harmful to youth.
                </p>
              </div>
            </section>

            {/* 개인정보 보호 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">4.</span> 청소년 개인정보 보호
              </h2>
              <p className="text-sm text-gray-500 mb-2">Youth Privacy Protection</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  본 서비스는 회원가입을 요구하지 않으며, 청소년의 개인정보를 별도로 수집하지 않습니다.
                  테스트 결과는 브라우저의 로컬 스토리지에만 저장되며, 언제든지 삭제할 수 있습니다.
                </p>
                <p className="text-sm text-gray-500">
                  This service does not require registration and does not collect personal information from youth.
                </p>
              </div>
            </section>

            {/* 신고 및 문의 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">5.</span> 신고 및 문의
              </h2>
              <p className="text-sm text-gray-500 mb-2">Reports and Inquiries</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  청소년에게 유해하다고 판단되는 콘텐츠나 광고를 발견하신 경우, 아래 연락처로 신고해 주시면
                  신속하게 조치하겠습니다.
                </p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-gray-600"><strong>청소년보호 책임자:</strong> 서비스 운영팀</p>
                  <p className="text-gray-600"><strong>이메일:</strong> humor.test.app@gmail.com</p>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  If you find any content or advertisement harmful to youth, please report it to: humor.test.app@gmail.com
                </p>
              </div>
            </section>

            {/* 관련 법령 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">6.</span> 관련 법령
              </h2>
              <p className="text-sm text-gray-500 mb-2">Related Laws</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 정책은 다음 법령을 준수합니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>청소년 보호법</li>
                  <li>정보통신망 이용촉진 및 정보보호 등에 관한 법률</li>
                  <li>개인정보 보호법</li>
                </ul>
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
      </div>
    </main>
  )
}
