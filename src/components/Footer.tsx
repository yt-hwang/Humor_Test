'use client'

import Link from 'next/link'
import { useLang } from '../context/LangContext'
import { t } from '../data/ui'

export default function Footer() {
  const { lang } = useLang()

  const links = [
    { href: '/about', key: 'footerAbout' as const },
    { href: '/theory', key: 'footerTheory' as const },
    { href: '/ads', key: 'footerAds' as const },
    { href: '/terms', key: 'footerTerms' as const },
    { href: '/privacy', key: 'footerPrivacy' as const },
    { href: '/youth', key: 'footerYouth' as const },
  ]

  return (
    <footer className="mt-8 py-6 text-center">
      <div className="flex flex-wrap items-center justify-center gap-y-1 text-xs text-gray-400">
        {links.map((link, index) => (
          <span key={link.key} className="whitespace-nowrap">
            <Link
              href={`${link.href}?lang=${lang}`}
              className="hover:text-gray-600 transition-colors"
            >
              {t(link.key, lang)}
            </Link>
            {index < links.length - 1 && <span className="mx-2">|</span>}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-gray-300">{t('footerCopyright', lang)}</p>
    </footer>
  )
}
