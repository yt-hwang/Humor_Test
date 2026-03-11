'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-8 py-6 text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-400">
        <Link href="/about" className="hover:text-gray-600 transition-colors">서비스소개</Link>
        <span>|</span>
        <Link href="/theory" className="hover:text-gray-600 transition-colors">개그코드 이론</Link>
        <span>|</span>
        <Link href="/ads" className="hover:text-gray-600 transition-colors">광고안내</Link>
        <span>|</span>
        <Link href="/terms" className="hover:text-gray-600 transition-colors">이용약관</Link>
        <span>|</span>
        <Link href="/privacy" className="hover:text-gray-600 transition-colors">개인정보처리방침</Link>
        <span>|</span>
        <Link href="/youth" className="hover:text-gray-600 transition-colors">청소년보호정책</Link>
      </div>
      <p className="mt-2 text-xs text-gray-300">© 2026 개그유형 테스트. All rights reserved.</p>
    </footer>
  )
}
