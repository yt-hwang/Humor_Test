'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { recordVisit } from '../../src/utils/analytics'
import Footer from '../../src/components/Footer'

export default function TheoryPage() {
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
            <span>Deep Dive</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
            개그코드 이론의 깊은 이해
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            왜 16가지 유형을 4개의 대분류로 나누었을까요?<br/>
            MBTI의 분류 철학에서 영감을 받아 개그코드만의 체계를 만든 이야기입니다.
          </p>
        </div>

        {/* 목차 */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/30">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span>📑</span> 목차
          </h2>
          <ol className="space-y-2 text-gray-600">
            <li><a href="#why-4" className="hover:text-purple-600 transition-colors">1. 왜 4개의 대분류인가?</a></li>
            <li><a href="#mbti-philosophy" className="hover:text-purple-600 transition-colors">2. MBTI는 어떻게 분류했나?</a></li>
            <li><a href="#mbti-deep" className="hover:text-purple-600 transition-colors">3. MBTI 분류의 숨겨진 논리</a></li>
            <li><a href="#gagcode-philosophy" className="hover:text-purple-600 transition-colors">4. 개그코드는 어떻게 분류했나?</a></li>
            <li><a href="#comparison" className="hover:text-purple-600 transition-colors">5. 두 체계의 비교</a></li>
            <li><a href="#4types-detail" className="hover:text-purple-600 transition-colors">6. 개그코드 4대 분류 상세</a></li>
          </ol>
        </div>

        {/* 섹션 1: 왜 4개의 대분류인가? */}
        <section id="why-4" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-lg">1</span>
            왜 4개의 대분류인가?
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              16가지 유형을 개별적으로 이해하는 것은 어렵습니다. 사람들은 복잡한 정보를 <strong>더 큰 범주로 묶어서 이해</strong>하는 것을 선호합니다.
              이것이 바로 &quot;대분류&quot;가 필요한 이유입니다.
            </p>

            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <p className="font-medium text-purple-800 mb-2">🤔 핵심 질문</p>
              <p className="text-purple-700">
                4개의 축이 있으면 이론적으로 2⁴ = 16가지 조합이 나옵니다.<br/>
                그런데 이 16가지를 4개 그룹으로 나누려면, <strong>4개 축 중 2개를 선택</strong>해서 조합해야 합니다.<br/>
                어떤 2개 축을 선택하느냐에 따라 완전히 다른 분류 체계가 만들어집니다.
              </p>
            </div>

            <p>
              예를 들어, 축이 A/B, C/D, E/F, G/H 4개가 있다면:
            </p>

            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A와 C로 묶으면: AC, AD, BC, BD 4그룹</li>
              <li>A와 E로 묶으면: AE, AF, BE, BF 4그룹</li>
              <li>C와 G로 묶으면: CG, CH, DG, DH 4그룹</li>
            </ul>

            <p>
              <strong>어떤 축의 조합이 가장 의미 있는 그룹을 만들어내는가?</strong><br/>
              이것이 분류 체계 설계의 핵심입니다. MBTI와 개그코드 모두 이 질문에 대한 답을 찾아야 했습니다.
            </p>
          </div>
        </section>

        {/* 섹션 2: MBTI는 어떻게 분류했나? */}
        <section id="mbti-philosophy" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-lg">2</span>
            MBTI는 어떻게 분류했나?
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              MBTI에는 4개의 축이 있습니다:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="font-bold text-gray-800 mb-2">E/I (에너지 방향)</div>
                <p className="text-sm text-gray-600">외향(Extraversion) vs 내향(Introversion)</p>
                <p className="text-xs text-gray-500 mt-1">에너지를 외부에서 얻는가, 내부에서 얻는가</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="font-bold text-blue-800 mb-2">N/S (인식 방식) ⭐</div>
                <p className="text-sm text-blue-600">직관(iNtuition) vs 감각(Sensing)</p>
                <p className="text-xs text-blue-500 mt-1">가능성과 패턴을 보는가, 구체적 사실을 보는가</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="font-bold text-green-800 mb-2">T/F (판단 방식)</div>
                <p className="text-sm text-green-600">사고(Thinking) vs 감정(Feeling)</p>
                <p className="text-xs text-green-500 mt-1">논리로 판단하는가, 가치로 판단하는가</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <div className="font-bold text-orange-800 mb-2">J/P (생활 양식)</div>
                <p className="text-sm text-orange-600">판단(Judging) vs 인식(Perceiving)</p>
                <p className="text-xs text-orange-500 mt-1">계획적인가, 유연한가</p>
              </div>
            </div>

            <p>
              MBTI의 4대 분류(분석가, 외교관, 관리자, 탐험가)는 <strong>David Keirsey</strong>의 기질 이론에서 왔습니다.
              Keirsey는 이렇게 분류했습니다:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">대분류</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">조합</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">유형들</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">분석가형</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>N + T</strong></td>
                    <td className="border border-gray-300 px-4 py-2">INTJ, INTP, ENTJ, ENTP</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">외교관형</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>N + F</strong></td>
                    <td className="border border-gray-300 px-4 py-2">INFJ, INFP, ENFJ, ENFP</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">관리자형</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>S + J</strong></td>
                    <td className="border border-gray-300 px-4 py-2">ISTJ, ISFJ, ESTJ, ESFJ</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">탐험가형</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>S + P</strong></td>
                    <td className="border border-gray-300 px-4 py-2">ISTP, ISFP, ESTP, ESFP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
              <p className="font-medium text-yellow-800 mb-2">💡 흥미로운 점</p>
              <p className="text-yellow-700">
                N 그룹은 T/F로 나누고, S 그룹은 J/P로 나눴습니다.<br/>
                왜 N-T/F, S-J/P 조합일까요? N-J/P, S-T/F로 나눌 수도 있었는데 말이죠.
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 3: MBTI 분류의 숨겨진 논리 */}
        <section id="mbti-deep" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-lg">3</span>
            MBTI 분류의 숨겨진 논리
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-2">🎯 핵심 통찰</p>
              <p className="text-indigo-700">
                <strong>N/S(인식 방식)가 가장 근본적인 분류 기준</strong>입니다.<br/>
                세상을 &quot;어떻게 인식하느냐&quot;가 그 사람의 기질을 가장 크게 결정하기 때문입니다.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">N(직관형)의 세계</h3>

            <p>
              직관형(N)은 <strong>&quot;가능성, 미래, 추상적 패턴&quot;</strong>에 집중합니다.<br/>
              이들은 현실 그 자체보다 &quot;현실이 될 수 있는 것&quot;에 관심이 많습니다.
            </p>

            <p>
              이런 N들에게 가장 중요한 차이는 무엇일까요?<br/>
              바로 <strong>&quot;그 가능성을 어떻게 판단하느냐&quot;</strong>입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-purple-100 rounded-xl p-5 border border-purple-300">
                <div className="text-2xl mb-2">🧠</div>
                <div className="font-bold text-purple-800 mb-2">NT (분석가형)</div>
                <p className="text-purple-700 text-sm mb-3">
                  &quot;논리와 시스템으로 세상을 이해하고 바꾸겠다&quot;
                </p>
                <ul className="text-xs text-purple-600 space-y-1">
                  <li>• 효율성과 역량을 중시</li>
                  <li>• 전략적 사고</li>
                  <li>• 지적 호기심이 강함</li>
                  <li>• 감정보다 논리를 우선</li>
                </ul>
              </div>
              <div className="bg-green-100 rounded-xl p-5 border border-green-300">
                <div className="text-2xl mb-2">💚</div>
                <div className="font-bold text-green-800 mb-2">NF (외교관형)</div>
                <p className="text-green-700 text-sm mb-3">
                  &quot;공감과 가치로 세상을 연결하고 바꾸겠다&quot;
                </p>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• 진정성과 의미를 중시</li>
                  <li>• 이상주의적 비전</li>
                  <li>• 타인의 감정에 민감</li>
                  <li>• 조화와 성장을 추구</li>
                </ul>
              </div>
            </div>

            <p>
              추상적 세계에서는 <strong>T/F(판단 방식)</strong>가 핵심 차이입니다.<br/>
              같은 &quot;미래를 상상&quot;하더라도, 논리로 설계하느냐(NT) 가치로 그리느냐(NF)가 완전히 다른 사람을 만듭니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">S(감각형)의 세계</h3>

            <p>
              감각형(S)은 <strong>&quot;현실, 현재, 구체적 사실&quot;</strong>에 집중합니다.<br/>
              이들은 추상적 가능성보다 &quot;지금 눈앞에 있는 것&quot;에 관심이 많습니다.
            </p>

            <p>
              이런 S들에게 가장 중요한 차이는 무엇일까요?<br/>
              바로 <strong>&quot;그 현실에 어떻게 대응하느냐&quot;</strong>입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-100 rounded-xl p-5 border border-blue-300">
                <div className="text-2xl mb-2">🏛️</div>
                <div className="font-bold text-blue-800 mb-2">SJ (관리자형)</div>
                <p className="text-blue-700 text-sm mb-3">
                  &quot;질서와 체계로 현실을 안정시키겠다&quot;
                </p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• 책임감과 의무를 중시</li>
                  <li>• 전통과 규칙을 존중</li>
                  <li>• 계획적이고 체계적</li>
                  <li>• 안정성을 추구</li>
                </ul>
              </div>
              <div className="bg-orange-100 rounded-xl p-5 border border-orange-300">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-bold text-orange-800 mb-2">SP (탐험가형)</div>
                <p className="text-orange-700 text-sm mb-3">
                  &quot;자유롭게 현실을 경험하고 즐기겠다&quot;
                </p>
                <ul className="text-xs text-orange-600 space-y-1">
                  <li>• 즉흥성과 유연성을 중시</li>
                  <li>• 새로운 경험을 추구</li>
                  <li>• 현재 순간에 집중</li>
                  <li>• 자유를 추구</li>
                </ul>
              </div>
            </div>

            <p>
              현실 세계에서는 <strong>J/P(생활 양식)</strong>가 핵심 차이입니다.<br/>
              같은 &quot;현실을 살아가더라도&quot;, 계획적으로 관리하느냐(SJ) 유연하게 즐기느냐(SP)가 완전히 다른 사람을 만듭니다.
            </p>

            <div className="bg-gray-100 rounded-xl p-5 border border-gray-300 mt-6">
              <p className="font-bold text-gray-800 mb-3">🔑 왜 E/I는 분류 기준에서 빠졌나?</p>
              <p className="text-gray-700">
                E/I(에너지 방향)는 &quot;기질의 본질&quot;과 덜 관련됩니다.<br/><br/>
                외향적 분석가(ENTJ)나 내향적 분석가(INTJ)나 <strong>둘 다 논리적 전략가</strong>입니다.
                에너지를 어디서 얻느냐만 다를 뿐, 세상을 인식하고 판단하는 방식은 같습니다.<br/><br/>
                그래서 E/I는 대분류가 아닌, 각 유형 내의 변형으로 처리됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 4: 개그코드는 어떻게 분류했나? */}
        <section id="gagcode-philosophy" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-lg">4</span>
            개그코드는 어떻게 분류했나?
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              개그코드도 4개의 축이 있습니다:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="font-bold text-blue-800 mb-2">O/I (준비 방식)</div>
                <p className="text-sm text-blue-600">Organized vs Improvised</p>
                <p className="text-xs text-blue-500 mt-1">짜여진 개그 vs 즉흥적 개그</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="font-bold text-purple-800 mb-2">N/B (맥락 방식) ⭐</div>
                <p className="text-sm text-purple-600">iNtuitive vs aBstract</p>
                <p className="text-xs text-purple-500 mt-1">직관적(현실 공감) vs 추상적(병맛/엉뚱)</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <div className="font-bold text-yellow-800 mb-2">V/P (전달 방식)</div>
                <p className="text-sm text-yellow-600">Verbal vs Physical</p>
                <p className="text-xs text-yellow-500 mt-1">언어적 vs 비언어적(몸/표정)</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <div className="font-bold text-red-800 mb-2">B/D (주제 톤)</div>
                <p className="text-sm text-red-600">Bright vs Dark</p>
                <p className="text-xs text-red-500 mt-1">밝고 유쾌함 vs 어둡고 풍자적</p>
              </div>
            </div>

            <p>
              MBTI의 논리를 개그코드에 적용하면, <strong>가장 근본적인 축은 N/B(맥락 방식)</strong>입니다.
            </p>

            <div className="bg-pink-50 rounded-xl p-5 border border-pink-200">
              <p className="font-bold text-pink-800 mb-2">🎭 핵심 통찰</p>
              <p className="text-pink-700">
                유머를 <strong>&quot;어떤 맥락에서 찾느냐&quot;</strong>가 그 사람의 개그 기질을 가장 크게 결정합니다.<br/>
                현실에서 공감 포인트를 찾는가(N), 현실을 비틀어 병맛을 만드는가(B)?
              </p>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">대분류</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">조합</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">유형들</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">💛 분위기메이커형</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>N + B(밝음)</strong></td>
                    <td className="border border-gray-300 px-4 py-2">ONVB, ONPB, INVB, INPB</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">❤️ 팩폭형</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>N + D(어두움)</strong></td>
                    <td className="border border-gray-300 px-4 py-2">ONVD, ONPD, INVD, INPD</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">💙 컨셉형</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>O + B(추상)</strong></td>
                    <td className="border border-gray-300 px-4 py-2">OBVB, OBVD, OBPB, OBPD</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">💜 예측불가형</td>
                    <td className="border border-gray-300 px-4 py-2"><strong>I + B(추상)</strong></td>
                    <td className="border border-gray-300 px-4 py-2">IBVB, IBVD, IBPB, IBPD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">N(직관적/현실공감형)의 세계</h3>

            <p>
              직관적(N) 유머는 <strong>&quot;아, 맞아! 나도 저래!&quot;</strong> 하는 공감에서 웃음이 나옵니다.<br/>
              현실의 상황, 관계, 감정을 정확히 포착해서 &quot;그거 완전 공감&quot;하게 만드는 유머입니다.
            </p>

            <p>
              이런 N들에게 가장 중요한 차이는 무엇일까요?<br/>
              바로 <strong>&quot;그 공감을 어떤 톤으로 전달하느냐&quot;</strong>입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-yellow-100 rounded-xl p-5 border border-yellow-300">
                <div className="text-2xl mb-2">☀️</div>
                <div className="font-bold text-yellow-800 mb-2">NB (분위기메이커형)</div>
                <p className="text-yellow-700 text-sm mb-3">
                  &quot;모두가 편하게 웃을 수 있는 유쾌한 공감&quot;
                </p>
                <ul className="text-xs text-yellow-600 space-y-1">
                  <li>• 밝고 따뜻한 분위기</li>
                  <li>• 일상 에피소드 중심</li>
                  <li>• 자기비하, 귀여운 실수</li>
                  <li>• 누구도 불편하지 않은 웃음</li>
                </ul>
              </div>
              <div className="bg-red-100 rounded-xl p-5 border border-red-300">
                <div className="text-2xl mb-2">🔥</div>
                <div className="font-bold text-red-800 mb-2">ND (팩폭형)</div>
                <p className="text-red-700 text-sm mb-3">
                  &quot;찔리지만 인정할 수밖에 없는 날카로운 공감&quot;
                </p>
                <ul className="text-xs text-red-600 space-y-1">
                  <li>• 직설적이고 날카로움</li>
                  <li>• 사회/권력 비판</li>
                  <li>• 풍자, 블랙코미디</li>
                  <li>• 불편하지만 통쾌한 웃음</li>
                </ul>
              </div>
            </div>

            <p>
              현실 공감 세계에서는 <strong>B/D(주제 톤)</strong>가 핵심 차이입니다.<br/>
              같은 &quot;공감&quot;이라도, 밝게 풀어내느냐(NB) 날카롭게 찌르느냐(ND)가 완전히 다른 개그맨을 만듭니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">B(추상적/병맛형)의 세계</h3>

            <p>
              추상적(B) 유머는 <strong>&quot;이게 뭐야?... 근데 왜 웃기지?&quot;</strong> 하는 당황에서 웃음이 나옵니다.<br/>
              현실의 맥락을 깨고, 비논리적이고 엉뚱한 연결에서 웃음을 찾습니다.
            </p>

            <p>
              이런 B들에게 가장 중요한 차이는 무엇일까요?<br/>
              바로 <strong>&quot;그 병맛을 어떻게 준비하느냐&quot;</strong>입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-100 rounded-xl p-5 border border-blue-300">
                <div className="text-2xl mb-2">🎬</div>
                <div className="font-bold text-blue-800 mb-2">OB (컨셉형)</div>
                <p className="text-blue-700 text-sm mb-3">
                  &quot;치밀하게 설계된 세계관의 병맛&quot;
                </p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• 기획된 콩트, 스케치</li>
                  <li>• 캐릭터와 설정이 탄탄</li>
                  <li>• 복선과 콜백</li>
                  <li>• SNL, 개콘 스타일</li>
                </ul>
              </div>
              <div className="bg-purple-100 rounded-xl p-5 border border-purple-300">
                <div className="text-2xl mb-2">🎲</div>
                <div className="font-bold text-purple-800 mb-2">IB (예측불가형)</div>
                <p className="text-purple-700 text-sm mb-3">
                  &quot;즉흥적으로 터지는 혼돈의 병맛&quot;
                </p>
                <ul className="text-xs text-purple-600 space-y-1">
                  <li>• 예측 불가능한 전개</li>
                  <li>• 갑자기 튀어나오는 한마디</li>
                  <li>• 맥락 파괴의 쾌감</li>
                  <li>• 무한도전, 신서유기 스타일</li>
                </ul>
              </div>
            </div>

            <p>
              병맛 세계에서는 <strong>O/I(준비 방식)</strong>가 핵심 차이입니다.<br/>
              같은 &quot;병맛&quot;이라도, 기획해서 만드느냐(OB) 즉흥으로 터뜨리느냐(IB)가 완전히 다른 개그맨을 만듭니다.
            </p>

            <div className="bg-gray-100 rounded-xl p-5 border border-gray-300 mt-6">
              <p className="font-bold text-gray-800 mb-3">🔑 왜 V/P는 분류 기준에서 빠졌나?</p>
              <p className="text-gray-700">
                V/P(전달 방식)는 &quot;개그 기질의 본질&quot;과 덜 관련됩니다.<br/><br/>
                말로 웃기는 분위기메이커나 몸으로 웃기는 분위기메이커나 <strong>둘 다 밝은 공감형</strong>입니다.
                전달 수단만 다를 뿐, 유머의 본질은 같습니다.<br/><br/>
                그래서 V/P는 대분류가 아닌, 각 유형 내의 변형으로 처리됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 5: 두 체계의 비교 */}
        <section id="comparison" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-lg">5</span>
            두 체계의 비교
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">비교 항목</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">MBTI</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">개그코드</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">핵심 분류 축</td>
                    <td className="border border-gray-300 px-4 py-2">N/S (인식 방식)</td>
                    <td className="border border-gray-300 px-4 py-2">N/B (맥락 방식)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">직관형(N) 내 분류</td>
                    <td className="border border-gray-300 px-4 py-2">T/F (판단 방식)</td>
                    <td className="border border-gray-300 px-4 py-2">B/D (주제 톤)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">감각/추상형 내 분류</td>
                    <td className="border border-gray-300 px-4 py-2">J/P (생활 양식)</td>
                    <td className="border border-gray-300 px-4 py-2">O/I (준비 방식)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">대분류에서 제외된 축</td>
                    <td className="border border-gray-300 px-4 py-2">E/I (에너지 방향)</td>
                    <td className="border border-gray-300 px-4 py-2">V/P (전달 방식)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">대응 관계</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🧠</span>
                  <span className="text-xl">↔️</span>
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="font-bold text-purple-800 mb-2">분석가형 ↔ 팩폭형</div>
                <p className="text-purple-700 text-sm">
                  둘 다 <strong>날카로운 논리와 분석</strong>이 핵심.<br/>
                  하나는 시스템을, 하나는 사회를 분석합니다.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💚</span>
                  <span className="text-xl">↔️</span>
                  <span className="text-2xl">☀️</span>
                </div>
                <div className="font-bold text-green-800 mb-2">외교관형 ↔ 분위기메이커형</div>
                <p className="text-green-700 text-sm">
                  둘 다 <strong>따뜻한 공감과 연결</strong>이 핵심.<br/>
                  하나는 사람을, 하나는 분위기를 연결합니다.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl">↔️</span>
                  <span className="text-2xl">🎬</span>
                </div>
                <div className="font-bold text-blue-800 mb-2">관리자형 ↔ 컨셉형</div>
                <p className="text-blue-700 text-sm">
                  둘 다 <strong>체계와 구조</strong>가 핵심.<br/>
                  하나는 현실을, 하나는 세계관을 설계합니다.
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-xl">↔️</span>
                  <span className="text-2xl">🎲</span>
                </div>
                <div className="font-bold text-orange-800 mb-2">탐험가형 ↔ 예측불가형</div>
                <p className="text-orange-700 text-sm">
                  둘 다 <strong>즉흥성과 유연함</strong>이 핵심.<br/>
                  하나는 경험을, 하나는 웃음을 즉흥으로 만듭니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 섹션 6: 개그코드 4대 분류 상세 */}
        <section id="4types-detail" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-lg">6</span>
            개그코드 4대 분류 상세
          </h2>

          <div className="space-y-6">
            {/* 분위기메이커형 */}
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💛</span>
                <div>
                  <h3 className="text-xl font-bold text-yellow-800">분위기메이커형</h3>
                  <p className="text-yellow-600 text-sm">N + B(밝음) | ONVB, ONPB, INVB, INPB</p>
                </div>
              </div>
              <p className="text-yellow-700 mb-4">
                <strong>&quot;모두가 함께 웃을 수 있는 유쾌한 공감의 달인&quot;</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-yellow-800 mb-2">특징</p>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• 일상에서 공감 포인트를 찾아냄</li>
                    <li>• 밝고 따뜻한 분위기 조성</li>
                    <li>• 자연스러운 대화 속 웃음</li>
                    <li>• 누구도 불편하지 않은 유머</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-yellow-800 mb-2">대표 스타일</p>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• 유재석의 상황 정리 능력</li>
                    <li>• 신동엽의 자연스러운 진행</li>
                    <li>• 일상 공감 토크쇼</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 팩폭형 */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">❤️</span>
                <div>
                  <h3 className="text-xl font-bold text-red-800">팩폭형</h3>
                  <p className="text-red-600 text-sm">N + D(어두움) | ONVD, ONPD, INVD, INPD</p>
                </div>
              </div>
              <p className="text-red-700 mb-4">
                <strong>&quot;불편하지만 인정할 수밖에 없는 날카로운 통찰의 달인&quot;</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-red-800 mb-2">특징</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• 현실의 모순을 정확히 짚어냄</li>
                    <li>• 직설적이고 날카로운 표현</li>
                    <li>• 풍자와 비판의 유머</li>
                    <li>• 찔리지만 통쾌한 웃음</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-800 mb-2">대표 스타일</p>
                  <ul className="text-red-700 space-y-1">
                    <li>• 김구라의 직설 화법</li>
                    <li>• 이경규의 날카로운 관찰</li>
                    <li>• 시사 풍자 코미디</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 컨셉형 */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💙</span>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">컨셉형</h3>
                  <p className="text-blue-600 text-sm">O + B(추상) | OBVB, OBVD, OBPB, OBPD</p>
                </div>
              </div>
              <p className="text-blue-700 mb-4">
                <strong>&quot;치밀하게 설계된 세계관으로 웃음을 만드는 기획의 달인&quot;</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-blue-800 mb-2">특징</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• 캐릭터와 설정이 탄탄함</li>
                    <li>• 복선과 콜백을 활용</li>
                    <li>• 준비된 콩트, 스케치</li>
                    <li>• 완성도 높은 병맛 세계관</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-blue-800 mb-2">대표 스타일</p>
                  <ul className="text-blue-700 space-y-1">
                    <li>• 개그콘서트 콩트</li>
                    <li>• SNL 코리아 스케치</li>
                    <li>• 유튜브 기획 콘텐츠</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 예측불가형 */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💜</span>
                <div>
                  <h3 className="text-xl font-bold text-purple-800">예측불가형</h3>
                  <p className="text-purple-600 text-sm">I + B(추상) | IBVB, IBVD, IBPB, IBPD</p>
                </div>
              </div>
              <p className="text-purple-700 mb-4">
                <strong>&quot;예측 불가능한 순간에 터지는 혼돈의 달인&quot;</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-purple-800 mb-2">특징</p>
                  <ul className="text-purple-700 space-y-1">
                    <li>• 갑자기 튀어나오는 한마디</li>
                    <li>• 맥락을 완전히 파괴</li>
                    <li>• 즉흥적인 병맛 전개</li>
                    <li>• 예상 못한 곳에서 웃음 폭발</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-purple-800 mb-2">대표 스타일</p>
                  <ul className="text-purple-700 space-y-1">
                    <li>• 무한도전 즉흥 상황</li>
                    <li>• 신서유기 돌발 개그</li>
                    <li>• 노홍철의 예측불가 행동</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 하단 네비게이션 */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-xl px-6 py-3 font-medium shadow-lg transition-all duration-300"
          >
            <span>🎯</span>
            테스트 하러가기
          </Link>
          <Link
            href="/guide"
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <span>📊</span>
            4가지 축 설명
          </Link>
          <Link
            href="/types"
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <span>🎭</span>
            16가지 유형 보기
          </Link>
        </div>

        <Footer />
      </div>
    </main>
  )
}
