'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { recordVisit } from '../../src/utils/analytics'
import Footer from '../../src/components/Footer'
import { useLang } from '../../src/context/LangContext'
import { t } from '../../src/data/ui'

export default function TheoryPage() {
  const { lang } = useLang()
  const router = useRouter()

  useEffect(() => {
    recordVisit('/theory')
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>🔬</span>
            <span>{t('theoryBadge', lang)}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
            {t('theoryTitle', lang)}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('theorySubtitle1', lang)}<br/>
            {t('theorySubtitle2', lang)}
          </p>
        </div>

        {/* 목차 */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/30">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span>📑</span> {t('theoryTocTitle', lang)}
          </h2>
          <ol className="space-y-2 text-gray-600">
            <li><a href="#why-4" className="hover:text-purple-600 transition-colors">{t('theoryTocItem1', lang)}</a></li>
            <li><a href="#mbti-philosophy" className="hover:text-purple-600 transition-colors">{t('theoryTocItem2', lang)}</a></li>
            <li><a href="#mbti-deep" className="hover:text-purple-600 transition-colors">{t('theoryTocItem3', lang)}</a></li>
            <li><a href="#gagcode-philosophy" className="hover:text-purple-600 transition-colors">{t('theoryTocItem4', lang)}</a></li>
            <li><a href="#comparison" className="hover:text-purple-600 transition-colors">{t('theoryTocItem5', lang)}</a></li>
            <li><a href="#4types-detail" className="hover:text-purple-600 transition-colors">{t('theoryTocItem6', lang)}</a></li>
          </ol>
        </div>

        {/* 섹션 1: 왜 4개의 대분류인가? */}
        <section id="why-4" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-lg">1</span>
            {t('theoryS1Title', lang)}
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {t('theoryS1Intro', lang)}
            </p>

            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <p className="font-medium text-purple-800 mb-2">🤔 {t('theoryS1CoreQ', lang)}</p>
              <p className="text-purple-700">
                {t('theoryS1KeyInsight', lang)}
              </p>
            </div>

            <p>
              {t('theoryS1Example', lang)}
            </p>

            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>{t('theoryS1ExAC', lang)}</li>
              <li>{t('theoryS1ExAE', lang)}</li>
              <li>{t('theoryS1ExCG', lang)}</li>
            </ul>

            <p>
              {t('theoryS1Conclusion', lang)}
            </p>
          </div>
        </section>

        {/* 섹션 2: MBTI는 어떻게 분류했나? */}
        <section id="mbti-philosophy" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-lg">2</span>
            {t('theoryS2Title', lang)}
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {t('theoryS2Intro', lang)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-bold text-gray-800 mb-2">{t('theoryS2EI', lang)}</div>
                <p className="text-sm text-gray-600">{t('theoryS2EISub', lang)}</p>
                <p className="text-xs text-gray-500 mt-1">{t('theoryS2EIDesc', lang)}</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="font-bold text-blue-800 mb-2">{t('theoryS2NS', lang)}</div>
                <p className="text-sm text-blue-600">{t('theoryS2NSSub', lang)}</p>
                <p className="text-xs text-blue-500 mt-1">{t('theoryS2NSDesc', lang)}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="font-bold text-green-800 mb-2">{t('theoryS2TF', lang)}</div>
                <p className="text-sm text-green-600">{t('theoryS2TFSub', lang)}</p>
                <p className="text-xs text-green-500 mt-1">{t('theoryS2TFDesc', lang)}</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <div className="font-bold text-orange-800 mb-2">{t('theoryS2JP', lang)}</div>
                <p className="text-sm text-orange-600">{t('theoryS2JPSub', lang)}</p>
                <p className="text-xs text-orange-500 mt-1">{t('theoryS2JPDesc', lang)}</p>
              </div>
            </div>

            <p>
              {t('theoryS2Keirsey', lang)}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">{t('theoryTableCategory', lang)}</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">{t('theoryTableCombo', lang)}</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">{t('theoryTableTypes', lang)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">{t('theoryAnalyst', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>N + T</strong></td>
                    <td className="border border-gray-300 px-4 py-2">INTJ, INTP, ENTJ, ENTP</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">{t('theoryDiplomat', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>N + F</strong></td>
                    <td className="border border-gray-300 px-4 py-2">INFJ, INFP, ENFJ, ENFP</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">{t('theorySentinel', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>S + J</strong></td>
                    <td className="border border-gray-300 px-4 py-2">ISTJ, ISFJ, ESTJ, ESFJ</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">{t('theoryExplorer', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>S + P</strong></td>
                    <td className="border border-gray-300 px-4 py-2">ISTP, ISFP, ESTP, ESFP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
              <p className="font-medium text-yellow-800 mb-2">💡 {t('theoryS2Interesting', lang)}</p>
              <p className="text-yellow-700">
                {t('theoryS2InterestingDetail', lang)}
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 3: MBTI 분류의 숨겨진 논리 */}
        <section id="mbti-deep" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-lg">3</span>
            {t('theoryS3Title', lang)}
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-2">🎯 {t('theoryS3Insight', lang)}</p>
              <p className="text-indigo-700">
                {t('theoryS3InsightDetail', lang)}
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{t('theoryS3NWorld', lang)}</h3>

            <p>
              {t('theoryS3NIntro', lang)}
            </p>

            <p>
              {t('theoryS3NDiff', lang)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-purple-100 rounded-xl p-5 border border-purple-300">
                <div className="text-2xl mb-2">🧠</div>
                <div className="font-bold text-purple-800 mb-2">{t('theoryS3NT', lang)}</div>
                <p className="text-purple-700 text-sm mb-3">
                  {t('theoryS3NTDesc', lang)}
                </p>
                <ul className="text-xs text-purple-600 space-y-1">
                  <li>• {t('theoryS3NTTrait1', lang)}</li>
                  <li>• {t('theoryS3NTTrait2', lang)}</li>
                  <li>• {t('theoryS3NTTrait3', lang)}</li>
                  <li>• {t('theoryS3NTTrait4', lang)}</li>
                </ul>
              </div>
              <div className="bg-green-100 rounded-xl p-5 border border-green-300">
                <div className="text-2xl mb-2">💚</div>
                <div className="font-bold text-green-800 mb-2">{t('theoryS3NF', lang)}</div>
                <p className="text-green-700 text-sm mb-3">
                  {t('theoryS3NFDesc', lang)}
                </p>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• {t('theoryS3NFTrait1', lang)}</li>
                  <li>• {t('theoryS3NFTrait2', lang)}</li>
                  <li>• {t('theoryS3NFTrait3', lang)}</li>
                  <li>• {t('theoryS3NFTrait4', lang)}</li>
                </ul>
              </div>
            </div>

            <p>
              {t('theoryS3NKeyDiff', lang)}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{t('theoryS3SWorld', lang)}</h3>

            <p>
              {t('theoryS3SIntro', lang)}
            </p>

            <p>
              {t('theoryS3SDiff', lang)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-100 rounded-xl p-5 border border-blue-300">
                <div className="text-2xl mb-2">🏛️</div>
                <div className="font-bold text-blue-800 mb-2">{t('theoryS3SJ', lang)}</div>
                <p className="text-blue-700 text-sm mb-3">
                  {t('theoryS3SJDesc', lang)}
                </p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• {t('theoryS3SJTrait1', lang)}</li>
                  <li>• {t('theoryS3SJTrait2', lang)}</li>
                  <li>• {t('theoryS3SJTrait3', lang)}</li>
                  <li>• {t('theoryS3SJTrait4', lang)}</li>
                </ul>
              </div>
              <div className="bg-orange-100 rounded-xl p-5 border border-orange-300">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-bold text-orange-800 mb-2">{t('theoryS3SP', lang)}</div>
                <p className="text-orange-700 text-sm mb-3">
                  {t('theoryS3SPDesc', lang)}
                </p>
                <ul className="text-xs text-orange-600 space-y-1">
                  <li>• {t('theoryS3SPTrait1', lang)}</li>
                  <li>• {t('theoryS3SPTrait2', lang)}</li>
                  <li>• {t('theoryS3SPTrait3', lang)}</li>
                  <li>• {t('theoryS3SPTrait4', lang)}</li>
                </ul>
              </div>
            </div>

            <p>
              {t('theoryS3SKeyDiff', lang)}
            </p>

            <div className="bg-gray-100 rounded-xl p-5 border border-gray-300 mt-6">
              <p className="font-bold text-gray-800 mb-3">🔑 {t('theoryS3WhyEI', lang)}</p>
              <p className="text-gray-700">
                {t('theoryS3WhyEIDetail', lang)}
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 4: 개그코드는 어떻게 분류했나? */}
        <section id="gagcode-philosophy" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-lg">4</span>
            {t('theoryS4Title', lang)}
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              {t('theoryS4Intro', lang)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="font-bold text-blue-800 mb-2">{t('theoryS4OI', lang)}</div>
                <p className="text-sm text-blue-600">{t('theoryS4OISub', lang)}</p>
                <p className="text-xs text-blue-500 mt-1">{t('theoryS4OIDesc', lang)}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="font-bold text-purple-800 mb-2">{t('theoryS4NB', lang)}</div>
                <p className="text-sm text-purple-600">{t('theoryS4NBSub', lang)}</p>
                <p className="text-xs text-purple-500 mt-1">{t('theoryS4NBDesc', lang)}</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <div className="font-bold text-yellow-800 mb-2">{t('theoryS4VP', lang)}</div>
                <p className="text-sm text-yellow-600">{t('theoryS4VPSub', lang)}</p>
                <p className="text-xs text-yellow-500 mt-1">{t('theoryS4VPDesc', lang)}</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <div className="font-bold text-red-800 mb-2">{t('theoryS4BD', lang)}</div>
                <p className="text-sm text-red-600">{t('theoryS4BDSub', lang)}</p>
                <p className="text-xs text-red-500 mt-1">{t('theoryS4BDDesc', lang)}</p>
              </div>
            </div>

            <p>
              {t('theoryS4FundamentalAxis', lang)}
            </p>

            <div className="bg-pink-50 rounded-xl p-5 border border-pink-200">
              <p className="font-bold text-pink-800 mb-2">🎭 {t('theoryS4Insight', lang)}</p>
              <p className="text-pink-700">
                {t('theoryS4InsightDetail', lang)}
              </p>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">{t('theoryTableCategory', lang)}</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">{t('theoryTableCombo', lang)}</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">{t('theoryTableTypes', lang)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">💛 {t('theoryAtmosphere', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>N + B({t('bright', lang)})</strong></td>
                    <td className="border border-gray-300 px-4 py-2">ONVB, ONPB, INVB, INPB</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">❤️ {t('theoryFactBomb', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>N + D({t('dark', lang)})</strong></td>
                    <td className="border border-gray-300 px-4 py-2">ONVD, ONPD, INVD, INPD</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">💙 {t('theoryConcept', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>O + B({t('abstract', lang)})</strong></td>
                    <td className="border border-gray-300 px-4 py-2">OBVB, OBVD, OBPB, OBPD</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">💜 {t('theoryUnpredictable', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>I + B({t('abstract', lang)})</strong></td>
                    <td className="border border-gray-300 px-4 py-2">IBVB, IBVD, IBPB, IBPD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{t('theoryS4NWorld', lang)}</h3>

            <p>
              {t('theoryS4NIntro', lang)}
            </p>

            <p>
              {t('theoryS4NDiff', lang)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-yellow-100 rounded-xl p-5 border border-yellow-300">
                <div className="text-2xl mb-2">☀️</div>
                <div className="font-bold text-yellow-800 mb-2">{t('theoryS4NBTitle', lang)}</div>
                <p className="text-yellow-700 text-sm mb-3">
                  {t('theoryS4NBTypeDesc', lang)}
                </p>
                <ul className="text-xs text-yellow-600 space-y-1">
                  <li>• {t('theoryS4NBTrait1', lang)}</li>
                  <li>• {t('theoryS4NBTrait2', lang)}</li>
                  <li>• {t('theoryS4NBTrait3', lang)}</li>
                  <li>• {t('theoryS4NBTrait4', lang)}</li>
                </ul>
              </div>
              <div className="bg-red-100 rounded-xl p-5 border border-red-300">
                <div className="text-2xl mb-2">🔥</div>
                <div className="font-bold text-red-800 mb-2">{t('theoryS4NDTitle', lang)}</div>
                <p className="text-red-700 text-sm mb-3">
                  {t('theoryS4NDTypeDesc', lang)}
                </p>
                <ul className="text-xs text-red-600 space-y-1">
                  <li>• {t('theoryS4NDTrait1', lang)}</li>
                  <li>• {t('theoryS4NDTrait2', lang)}</li>
                  <li>• {t('theoryS4NDTrait3', lang)}</li>
                  <li>• {t('theoryS4NDTrait4', lang)}</li>
                </ul>
              </div>
            </div>

            <p>
              {t('theoryS4NKeyDiff', lang)}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{t('theoryS4BWorld', lang)}</h3>

            <p>
              {t('theoryS4BIntro', lang)}
            </p>

            <p>
              {t('theoryS4BDiff', lang)}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-100 rounded-xl p-5 border border-blue-300">
                <div className="text-2xl mb-2">🎬</div>
                <div className="font-bold text-blue-800 mb-2">{t('theoryS4OBTitle', lang)}</div>
                <p className="text-blue-700 text-sm mb-3">
                  {t('theoryS4OBDesc', lang)}
                </p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• {t('theoryS4OBTrait1', lang)}</li>
                  <li>• {t('theoryS4OBTrait2', lang)}</li>
                  <li>• {t('theoryS4OBTrait3', lang)}</li>
                  <li>• {t('theoryS4OBTrait4', lang)}</li>
                </ul>
              </div>
              <div className="bg-purple-100 rounded-xl p-5 border border-purple-300">
                <div className="text-2xl mb-2">🎲</div>
                <div className="font-bold text-purple-800 mb-2">{t('theoryS4IBTitle', lang)}</div>
                <p className="text-purple-700 text-sm mb-3">
                  {t('theoryS4IBDesc', lang)}
                </p>
                <ul className="text-xs text-purple-600 space-y-1">
                  <li>• {t('theoryS4IBTrait1', lang)}</li>
                  <li>• {t('theoryS4IBTrait2', lang)}</li>
                  <li>• {t('theoryS4IBTrait3', lang)}</li>
                  <li>• {t('theoryS4IBTrait4', lang)}</li>
                </ul>
              </div>
            </div>

            <p>
              {t('theoryS4BKeyDiff', lang)}
            </p>

            <div className="bg-gray-100 rounded-xl p-5 border border-gray-300 mt-6">
              <p className="font-bold text-gray-800 mb-3">🔑 {t('theoryS4WhyVP', lang)}</p>
              <p className="text-gray-700">
                {t('theoryS4WhyVPDetail', lang)}
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 5: 두 체계의 비교 */}
        <section id="comparison" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-lg">5</span>
            {t('theoryS5Title', lang)}
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">{t('theoryS5CompareItem', lang)}</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">MBTI</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">{t('gagCode', lang)}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">{t('theoryS5CoreAxis', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2">N/S ({lang === 'ko' ? '인식 방식' : 'Perception'})</td>
                    <td className="border border-gray-300 px-4 py-2">N/B ({lang === 'ko' ? '맥락 방식' : 'Context'})</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">{t('theoryS5NClassification', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2">T/F ({lang === 'ko' ? '판단 방식' : 'Judgment'})</td>
                    <td className="border border-gray-300 px-4 py-2">B/D ({lang === 'ko' ? '주제 톤' : 'Tone'})</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">{t('theoryS5SAbstractClass', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2">J/P ({lang === 'ko' ? '생활 양식' : 'Lifestyle'})</td>
                    <td className="border border-gray-300 px-4 py-2">O/I ({lang === 'ko' ? '준비 방식' : 'Preparation'})</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">{t('theoryS5ExcludedAxis', lang)}</td>
                    <td className="border border-gray-300 px-4 py-2">E/I ({lang === 'ko' ? '에너지 방향' : 'Energy'})</td>
                    <td className="border border-gray-300 px-4 py-2">V/P ({lang === 'ko' ? '전달 방식' : 'Delivery'})</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">{t('theoryS5Correspondence', lang)}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🧠</span>
                  <span className="text-xl">↔️</span>
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="font-bold text-purple-800 mb-2">{t('theoryS5AnalystFact', lang)}</div>
                <p className="text-purple-700 text-sm">
                  {t('theoryS5AnalystFactDesc', lang)}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💚</span>
                  <span className="text-xl">↔️</span>
                  <span className="text-2xl">☀️</span>
                </div>
                <div className="font-bold text-green-800 mb-2">{t('theoryS5DiplomatAtmo', lang)}</div>
                <p className="text-green-700 text-sm">
                  {t('theoryS5DiplomatAtmoDesc', lang)}
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl">↔️</span>
                  <span className="text-2xl">🎬</span>
                </div>
                <div className="font-bold text-blue-800 mb-2">{t('theoryS5SentinelConcept', lang)}</div>
                <p className="text-blue-700 text-sm">
                  {t('theoryS5SentinelConceptDesc', lang)}
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-xl">↔️</span>
                  <span className="text-2xl">🎲</span>
                </div>
                <div className="font-bold text-orange-800 mb-2">{t('theoryS5ExplorerUnpred', lang)}</div>
                <p className="text-orange-700 text-sm">
                  {t('theoryS5ExplorerUnpredDesc', lang)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 섹션 6: 개그코드 4대 분류 상세 */}
        <section id="4types-detail" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-lg">6</span>
            {t('theoryS6Title', lang)}
          </h2>

          <div className="space-y-6">
            {/* 분위기메이커형 */}
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💛</span>
                <div>
                  <h3 className="text-xl font-bold text-yellow-800">{t('theoryAtmosphere', lang)}</h3>
                  <p className="text-yellow-600 text-sm">{t('theoryS6AtmoDetails', lang)}</p>
                </div>
              </div>
              <p className="text-yellow-700 mb-4">
                <strong>{t('theoryS6AtmoTagline', lang)}</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-yellow-800 mb-2">{t('theoryS6Characteristics', lang)}</p>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• {t('theoryS6AtmoTrait1', lang)}</li>
                    <li>• {t('theoryS6AtmoTrait2', lang)}</li>
                    <li>• {t('theoryS6AtmoTrait3', lang)}</li>
                    <li>• {t('theoryS6AtmoTrait4', lang)}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-yellow-800 mb-2">{t('theoryS6RepStyle', lang)}</p>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• {t('theoryS6AtmoStyle1', lang)}</li>
                    <li>• {t('theoryS6AtmoStyle2', lang)}</li>
                    <li>• {t('theoryS6AtmoStyle3', lang)}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 팩폭형 */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">❤️</span>
                <div>
                  <h3 className="text-xl font-bold text-red-800">{t('theoryFactBomb', lang)}</h3>
                  <p className="text-red-600 text-sm">{t('theoryS6FactDetails', lang)}</p>
                </div>
              </div>
              <p className="text-red-700 mb-4">
                <strong>{t('theoryS6FactTagline', lang)}</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-red-800 mb-2">{t('theoryS6Characteristics', lang)}</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• {t('theoryS6FactTrait1', lang)}</li>
                    <li>• {t('theoryS6FactTrait2', lang)}</li>
                    <li>• {t('theoryS6FactTrait3', lang)}</li>
                    <li>• {t('theoryS6FactTrait4', lang)}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-800 mb-2">{t('theoryS6RepStyle', lang)}</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• {t('theoryS6FactStyle1', lang)}</li>
                    <li>• {t('theoryS6FactStyle2', lang)}</li>
                    <li>• {t('theoryS6FactStyle3', lang)}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 컨셉형 */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💙</span>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">{t('theoryConcept', lang)}</h3>
                  <p className="text-blue-600 text-sm">{t('theoryS6ConceptDetails', lang)}</p>
                </div>
              </div>
              <p className="text-blue-700 mb-4">
                <strong>{t('theoryS6ConceptTagline', lang)}</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-blue-800 mb-2">{t('theoryS6Characteristics', lang)}</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• {t('theoryS6ConceptTrait1', lang)}</li>
                    <li>• {t('theoryS6ConceptTrait2', lang)}</li>
                    <li>• {t('theoryS6ConceptTrait3', lang)}</li>
                    <li>• {t('theoryS6ConceptTrait4', lang)}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-blue-800 mb-2">{t('theoryS6RepStyle', lang)}</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• {t('theoryS6ConceptStyle1', lang)}</li>
                    <li>• {t('theoryS6ConceptStyle2', lang)}</li>
                    <li>• {t('theoryS6ConceptStyle3', lang)}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 예측불가형 */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💜</span>
                <div>
                  <h3 className="text-xl font-bold text-purple-800">{t('theoryUnpredictable', lang)}</h3>
                  <p className="text-purple-600 text-sm">{t('theoryS6UnpredDetails', lang)}</p>
                </div>
              </div>
              <p className="text-purple-700 mb-4">
                <strong>{t('theoryS6UnpredTagline', lang)}</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-purple-800 mb-2">{t('theoryS6Characteristics', lang)}</p>
                  <ul className="text-purple-700 space-y-1">
                    <li>• {t('theoryS6UnpredTrait1', lang)}</li>
                    <li>• {t('theoryS6UnpredTrait2', lang)}</li>
                    <li>• {t('theoryS6UnpredTrait3', lang)}</li>
                    <li>• {t('theoryS6UnpredTrait4', lang)}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-purple-800 mb-2">{t('theoryS6RepStyle', lang)}</p>
                  <ul className="text-purple-700 space-y-1">
                    <li>• {t('theoryS6UnpredStyle1', lang)}</li>
                    <li>• {t('theoryS6UnpredStyle2', lang)}</li>
                    <li>• {t('theoryS6UnpredStyle3', lang)}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 하단 네비게이션 */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('theoryNavBack', lang)}
          </button>
          <Link
            href={`/?lang=${lang}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-xl px-6 py-3 font-medium shadow-lg transition-all duration-300"
          >
            <span>🎯</span>
            {t('theoryNavTest', lang)}
          </Link>
          <Link
            href={`/guide?lang=${lang}`}
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <span>📊</span>
            {t('theoryNavGuide', lang)}
          </Link>
          <Link
            href={`/types?lang=${lang}`}
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <span>🎭</span>
            {t('theoryNavTypes', lang)}
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  )
}
