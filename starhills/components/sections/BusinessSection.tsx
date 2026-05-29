'use client'

import SectionTitle from '../ui/SectionTitle'
import { siteConfig } from '../../data/site-config'

export default function BusinessSection() {
  const { business } = siteConfig
  const rows = business.overview as { label: string; value: string }[]

  // Split into pairs for 2-column layout
  const pairs: { label: string; value: string }[][] = []
  for (let i = 0; i < rows.length; i += 2) {
    pairs.push(rows.slice(i, i + 2))
  }

  return (
    <section id="business" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="사업안내" subtitle="용인양지 서희스타힐스 하이뷰 사업개요" />

        {/* Overview image */}
        <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden mb-10 flex items-center justify-center">
          <img
            src={business.image}
            alt="용인양지 서희스타힐스 하이뷰 사업안내 조감도"
            className="object-cover w-full h-full"
            onError={(e) => {
              const t = e.currentTarget
              t.style.display = 'none'
              const p = t.parentElement
              if (p) p.innerHTML = '<div class="flex flex-col items-center text-gray-400 p-8"><span class="text-5xl mb-3">🏗️</span><span>사업안내 대표 이미지</span></div>'
            }}
          />
        </div>

        {/* 2-column table */}
        <div className="mb-16 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {pairs.map((pair, pi) => (
                <tr key={pi} className={pi % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {/* Left cell */}
                  <td className="py-4 px-5 font-bold text-navy bg-gray-100 border border-gray-200 whitespace-nowrap w-[110px] text-center tracking-wider">
                    {pair[0].label}
                  </td>
                  <td className="py-4 px-5 text-gray-700 border border-gray-200 w-[35%]">
                    {pair[0].value}
                  </td>
                  {/* Right cell — may be empty on last odd row */}
                  {pair[1] ? (
                    <>
                      <td className="py-4 px-5 font-bold text-navy bg-gray-100 border border-gray-200 whitespace-nowrap w-[110px] text-center tracking-wider">
                        {pair[1].label}
                      </td>
                      <td className="py-4 px-5 text-gray-700 border border-gray-200">
                        {pair[1].value}
                      </td>
                    </>
                  ) : (
                    <td colSpan={2} className="border border-gray-200" />
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selling points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.sellingPoints.map((point) => (
            <div
              key={point.title}
              className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{point.icon}</div>
              <h4 className="text-navy font-bold text-base mb-2">{point.title}</h4>
              <p className="text-gray-600 text-sm">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
