'use client'

import Link from 'next/link'
import Footer from '../../src/components/Footer'
import { useLang } from '../../src/context/LangContext'
import { t } from '../../src/data/ui'

export default function YouthProtectionPage() {
  const { lang } = useLang()

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              {t('youthTitle', lang)}
            </h1>
            <p className="text-gray-400 text-xs mt-2">{t('lastUpdated', lang)}</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 목적 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">1.</span> {t('youthSection1Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>
                  {t('youthSection1Content', lang)}
                </p>
              </div>
            </section>

            {/* 유해정보 차단 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">2.</span> {t('youthSection2Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">{t('youthSection2Intro', lang)}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>{t('youthSection2Item1', lang)}</li>
                  <li>{t('youthSection2Item2', lang)}</li>
                  <li>{t('youthSection2Item3', lang)}</li>
                  <li>{t('youthSection2Item4', lang)}</li>
                  <li>{t('youthSection2Item5', lang)}</li>
                </ul>
              </div>
            </section>

            {/* 광고 정책 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">3.</span> {t('youthSection3Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>
                  {t('youthSection3Content', lang)}
                </p>
              </div>
            </section>

            {/* 청소년 개인정보 보호 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">4.</span> {t('youthSection4Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>
                  {t('youthSection4Content', lang)}
                </p>
              </div>
            </section>

            {/* 신고 및 문의 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">5.</span> {t('youthSection5Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  {t('youthSection5Content', lang)}
                </p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-gray-600"><strong>{t('youthSection5Manager', lang)}</strong> {t('youthSection5Team', lang)}</p>
                  <p className="text-gray-600">{t('contactEmail', lang)}</p>
                </div>
              </div>
            </section>

            {/* 관련 법령 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">6.</span> {t('youthSection6Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">{t('youthSection6Intro', lang)}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>{t('youthSection6Item1', lang)}</li>
                  <li>{t('youthSection6Item2', lang)}</li>
                  <li>{t('youthSection6Item3', lang)}</li>
                </ul>
              </div>
            </section>
          </div>

          {/* 홈으로 돌아가기 */}
          <div className="mt-10 text-center">
            <Link
              href={`/?lang=${lang}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-xl px-6 py-3 font-medium shadow-lg transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('backToHome', lang)}
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
