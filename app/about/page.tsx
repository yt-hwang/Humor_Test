'use client'

import Link from 'next/link'
import Footer from '../../src/components/Footer'
import { useLang } from '../../src/context/LangContext'
import { t } from '../../src/data/ui'

export default function AboutPage() {
  const { lang } = useLang()

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
              {t('aboutTitle', lang)}
            </h1>
            <p className="text-gray-500 text-sm">{t('aboutSubtitle', lang)}</p>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 서비스 소개 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">🎭</span> {t('aboutSection1Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  <strong>{t('title', lang)}</strong> {t('aboutSection1Text1', lang)}
                </p>
                <p className="mb-3">
                  {t('aboutSection1Text2', lang)}
                </p>
              </div>
            </section>

            {/* 왜 만들었나 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-500">💡</span> {t('aboutSection2Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-3">
                  {t('aboutSection2Text1', lang)}
                </p>
                <p className="mb-3">
                  {t('aboutSection2Text2', lang)}
                </p>
                <p>
                  {t('aboutSection2Text3', lang)}
                </p>
              </div>
            </section>

            {/* 특징 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-green-500">✨</span> {t('aboutSection3Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>{t('aboutFeatureFree', lang)}</strong> - {t('aboutFeatureFreeDesc', lang)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>{t('aboutFeatureFast', lang)}</strong> - {t('aboutFeatureFastDesc', lang)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>{t('aboutFeatureDetailed', lang)}</strong> - {t('aboutFeatureDetailedDesc', lang)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>{t('aboutFeatureShare', lang)}</strong> - {t('aboutFeatureShareDesc', lang)}</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 면책 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-orange-500">⚠️</span> {t('aboutSection4Title', lang)}
              </h2>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <p className="text-sm text-gray-600">
                  {t('aboutSection4Text', lang)}
                </p>
              </div>
            </section>

            {/* 문의 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-blue-500">📧</span> {t('aboutSection5Title', lang)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="mb-2">{t('aboutSection5Text', lang)}</p>
                <p className="text-gray-600">{t('aboutSection5Email', lang)}</p>
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
              {t('aboutCTA', lang)}
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
