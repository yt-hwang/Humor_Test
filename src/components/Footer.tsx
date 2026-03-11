'use client'

import Link from 'next/link'
import { useLang } from '../context/LangContext'
import { t } from '../data/ui'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer className="mt-8 py-6 text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-400">
        <Link href={`/about?lang=${lang}`} className="hover:text-gray-600 transition-colors">{t('footerAbout', lang)}</Link>
        <span>|</span>
        <Link href={`/theory?lang=${lang}`} className="hover:text-gray-600 transition-colors">{t('footerTheory', lang)}</Link>
        <span>|</span>
        <Link href={`/ads?lang=${lang}`} className="hover:text-gray-600 transition-colors">{t('footerAds', lang)}</Link>
        <span>|</span>
        <Link href={`/terms?lang=${lang}`} className="hover:text-gray-600 transition-colors">{t('footerTerms', lang)}</Link>
        <span>|</span>
        <Link href={`/privacy?lang=${lang}`} className="hover:text-gray-600 transition-colors">{t('footerPrivacy', lang)}</Link>
        <span>|</span>
        <Link href={`/youth?lang=${lang}`} className="hover:text-gray-600 transition-colors">{t('footerYouth', lang)}</Link>
      </div>
      <p className="mt-2 text-xs text-gray-300">{t('footerCopyright', lang)}</p>
    </footer>
  )
}
