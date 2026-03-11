'use client'

import Link from 'next/link'
import Footer from '../../src/components/Footer'
import { useLang } from '../../src/context/LangContext'
import { t } from '../../src/data/ui'

export default function TermsPage() {
  const { lang } = useLang()

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              {t('termsTitle', lang)}
            </h1>
            <p className="text-gray-400 text-xs mt-2">{t('lastUpdated', lang)}</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 섹션 1 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">1.</span> {t('termsSection1Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>{t('termsSection1Content', lang)}</p>
              </div>
            </section>

            {/* 섹션 2 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">2.</span> {t('termsSection2Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">{t('termsSection2Intro', lang)}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>{t('termsSection2Item1', lang)}</li>
                  <li>{t('termsSection2Item2', lang)}</li>
                  <li>{t('termsSection2Item3', lang)}</li>
                  <li>{t('termsSection2Item4', lang)}</li>
                </ul>
              </div>
            </section>

            {/* 섹션 3 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">3.</span> {t('termsSection3Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>{t('termsSection3Content', lang)}</p>
              </div>
            </section>

            {/* 섹션 4 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">4.</span> {t('termsSection4Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>{t('termsSection4Content', lang)}</p>
              </div>
            </section>

            {/* 섹션 5 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">5.</span> {t('termsSection5Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>{t('termsSection5Content', lang)}</p>
              </div>
            </section>

            {/* 섹션 6 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">6.</span> {t('termsSection6Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>{t('termsSection6Content', lang)}</p>
              </div>
            </section>

            {/* 섹션 7 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">7.</span> {t('termsSection7Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>{t('termsSection7Content', lang)}</p>
              </div>
            </section>

            {/* 섹션 8 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">8.</span> {t('termsSection8Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>{t('termsSection8Content', lang)}</p>
              </div>
            </section>

            {/* 섹션 9 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">9.</span> {t('termsSection9Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>{t('termsSection9Content', lang)}</p>
              </div>
            </section>

            {/* 섹션 10 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">10.</span> {t('termsSection10Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">{t('termsSection10Content', lang)}</p>
                <p className="text-gray-600">{t('contactEmail', lang)}</p>
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
