'use client'

import Link from 'next/link'
import Footer from '../../src/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              이용약관
            </h1>
            <p className="text-gray-500 text-sm">Terms of Service</p>
            <p className="text-gray-400 text-xs mt-2">최종 수정일: 2026년 1월 1일 | Last Updated: January 1, 2026</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 섹션 1 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">1.</span> 서비스 개요
              </h2>
              <p className="text-sm text-gray-500 mb-2">Service Overview</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">&quot;개그유형 테스트&quot;(이하 &quot;서비스&quot;)는 사용자에게 재미있는 개그 유형 분석 테스트를 제공하는 무료 온라인 서비스입니다. 본 서비스는 오락 목적으로만 제공됩니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  &quot;Humor Type Test&quot; (the &quot;Service&quot;) provides a fun humor personality test for entertainment purposes only.
                </p>
              </div>
            </section>

            {/* 섹션 2 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">2.</span> 이용 조건
              </h2>
              <p className="text-sm text-gray-500 mb-2">Terms of Use</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 서비스를 이용함으로써 귀하는 다음 사항에 동의합니다:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>서비스를 합법적인 목적으로만 사용</li>
                  <li>타인의 권리를 침해하지 않음</li>
                  <li>서비스의 정상적인 운영을 방해하지 않음</li>
                  <li>자동화된 방식으로 서비스에 접근하지 않음</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">
                  By using this Service, you agree to: use the service lawfully, respect others&apos; rights, not interfere with service operation, and not use automated access methods.
                </p>
              </div>
            </section>

            {/* 섹션 3 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">3.</span> 지적재산권
              </h2>
              <p className="text-sm text-gray-500 mb-2">Intellectual Property</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 서비스의 모든 콘텐츠(텍스트, 그래픽, 로고, 이미지 등)는 저작권법에 의해 보호됩니다. 무단 복제, 배포, 수정은 금지됩니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  All content (text, graphics, logos, images) is protected by copyright. Unauthorized reproduction, distribution, or modification is prohibited.
                </p>
              </div>
            </section>

            {/* 섹션 4 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">4.</span> 면책 조항
              </h2>
              <p className="text-sm text-gray-500 mb-2">Disclaimer</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 서비스는 &quot;있는 그대로&quot; 제공되며, 테스트 결과의 정확성이나 완전성에 대해 어떠한 보증도 하지 않습니다. 테스트 결과는 오락 목적으로만 사용되어야 하며, 전문적인 조언으로 간주되어서는 안 됩니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  The Service is provided &quot;as is&quot; without warranties. Test results are for entertainment only and should not be considered professional advice.
                </p>
              </div>
            </section>

            {/* 섹션 5 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">5.</span> 광고
              </h2>
              <p className="text-sm text-gray-500 mb-2">Advertising</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 서비스는 Google AdSense를 통해 광고를 표시할 수 있습니다. 광고 콘텐츠는 제3자에 의해 제공되며, 해당 광고에 대한 책임은 광고주에게 있습니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  This Service may display ads through Google AdSense. Ad content is provided by third parties, and advertisers are responsible for their content.
                </p>
              </div>
            </section>

            {/* 섹션 6 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">6.</span> 서비스 변경 및 중단
              </h2>
              <p className="text-sm text-gray-500 mb-2">Service Modifications</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">운영자는 사전 통지 없이 서비스의 일부 또는 전체를 수정, 중단, 종료할 권리를 보유합니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  We reserve the right to modify, suspend, or terminate the Service without prior notice.
                </p>
              </div>
            </section>

            {/* 섹션 7 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">7.</span> 책임 제한
              </h2>
              <p className="text-sm text-gray-500 mb-2">Limitation of Liability</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">법이 허용하는 최대 범위 내에서, 운영자는 서비스 이용으로 인해 발생하는 직접적, 간접적, 우발적, 결과적 손해에 대해 책임을 지지 않습니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from use of the Service.
                </p>
              </div>
            </section>

            {/* 섹션 8 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">8.</span> 준거법
              </h2>
              <p className="text-sm text-gray-500 mb-2">Governing Law</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of Korea.
                </p>
              </div>
            </section>

            {/* 섹션 9 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">9.</span> 약관 변경
              </h2>
              <p className="text-sm text-gray-500 mb-2">Changes to Terms</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">운영자는 필요에 따라 본 약관을 수정할 수 있으며, 변경된 약관은 서비스에 게시된 시점부터 효력이 발생합니다.</p>
                <p className="mt-3 text-sm text-gray-500">
                  We may modify these Terms as needed. Updated Terms become effective upon posting.
                </p>
              </div>
            </section>

            {/* 섹션 10 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">10.</span> 문의처
              </h2>
              <p className="text-sm text-gray-500 mb-2">Contact Information</p>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">이용약관에 관한 문의사항이 있으시면 아래로 연락해 주세요.</p>
                <p className="text-gray-600">이메일: humor.test.app@gmail.com</p>
                <p className="mt-3 text-sm text-gray-500">
                  For inquiries about these Terms, please contact: humor.test.app@gmail.com
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
