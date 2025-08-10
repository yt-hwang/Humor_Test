'use client'

import { useEffect, useState } from 'react'
import { getAnalytics } from '../../src/utils/analytics'

interface AnalyticsData {
  totalVisits: number
  uniqueVisitors: number
  totalTests: number
  resultCounts: Record<string, number>
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true)
        const data = await getAnalytics()
        if (data) {
          setAnalytics(data)
        } else {
          setError('데이터를 불러올 수 없습니다.')
        }
      } catch (err) {
        setError('오류가 발생했습니다.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">로딩 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    )
  }

  if (!analytics) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">데이터가 없습니다.</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">개그유형 테스트 분석 대시보드</h1>
        
        {/* 주요 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">총 방문자 수</h3>
            <p className="text-3xl font-bold text-blue-600">{analytics.totalVisits.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">고유 방문자 수</h3>
            <p className="text-3xl font-bold text-green-600">{analytics.uniqueVisitors.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">테스트 완료 수</h3>
            <p className="text-3xl font-bold text-purple-600">{analytics.totalTests.toLocaleString()}</p>
          </div>
        </div>

        {/* 전환율 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">전환율</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">방문 → 테스트 완료</p>
              <p className="text-2xl font-bold text-blue-600">
                {analytics.totalVisits > 0 
                  ? ((analytics.totalTests / analytics.totalVisits) * 100).toFixed(1)
                  : 0}%
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">고유 방문자 → 테스트 완료</p>
              <p className="text-2xl font-bold text-green-600">
                {analytics.uniqueVisitors > 0 
                  ? ((analytics.totalTests / analytics.uniqueVisitors) * 100).toFixed(1)
                  : 0}%
              </p>
            </div>
          </div>
        </div>

        {/* 결과별 통계 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">결과별 분포</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(analytics.resultCounts)
              .sort(([,a], [,b]) => b - a)
              .map(([resultType, count]) => (
                <div key={resultType} className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-lg font-bold text-gray-900">{resultType}</p>
                  <p className="text-2xl font-bold text-blue-600">{count}</p>
                  <p className="text-sm text-gray-600">
                    {analytics.totalTests > 0 
                      ? ((count / analytics.totalTests) * 100).toFixed(1)
                      : 0}%
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
} 