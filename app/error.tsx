'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('Route error boundary captured:', error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">문제가 발생했어요</h1>
        <p className="text-sm text-gray-600 mb-4">잠시 후 다시 시도해주세요. 아래 메시지를 공유해 주세요.</p>
        <pre className="text-xs bg-gray-100 rounded p-3 overflow-auto text-left">{error?.message || 'Unknown error'}</pre>
        {error?.digest && <p className="text-[10px] text-gray-400 mt-2">digest: {error.digest}</p>}
        <button onClick={() => reset()} className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium">
          다시 시도
        </button>
      </div>
    </main>
  )
}


