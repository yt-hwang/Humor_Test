'use client'

import Link from 'next/link'
import Footer from '../../src/components/Footer'
import { useLang } from '../../src/context/LangContext'
import { t } from '../../src/data/ui'

export default function AdsPage() {
  const { lang } = useLang()

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              {t('adsTitle', lang)}
            </h1>
            <p className="text-gray-400 text-xs mt-2">{t('lastUpdated', lang)}</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 광고 게재 안내 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">1.</span> {t('adsSection1Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>
                  {t('adsSection1Content', lang)}
                </p>
              </div>
            </section>

            {/* 광고 유형 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">2.</span> {t('adsSection2Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">{t('adsSection2Intro', lang)}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>{t('adsSection2Item1', lang)}</li>
                  <li>{t('adsSection2Item2', lang)}</li>
                  <li>{t('adsSection2Item3', lang)}</li>
                </ul>
              </div>
            </section>

            {/* 광고 콘텐츠 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">3.</span> {t('adsSection3Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>
                  {t('adsSection3Content', lang)}
                </p>
              </div>
            </section>

            {/* 맞춤 광고 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">4.</span> {t('adsSection4Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p>
                  {t('adsSection4Content', lang).split(lang === 'ko' ? 'Google 광고 설정' : 'Google Ad Settings')[0]}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{t('adsSection4GoogleSettings', lang)}</a>
                  {t('adsSection4Content', lang).split(lang === 'ko' ? 'Google 광고 설정' : 'Google Ad Settings')[1]}
                </p>
              </div>
            </section>

            {/* 광고 문의 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">5.</span> {t('adsSection5Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">{t('adsSection5Content', lang)}</p>
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
