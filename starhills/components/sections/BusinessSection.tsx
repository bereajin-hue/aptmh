'use client'

import SectionTitle from '../ui/SectionTitle'
import InfoTable from '../ui/InfoTable'
import { siteConfig } from '../../data/site-config'

export default function BusinessSection() {
  const { business } = siteConfig
  return (
    <section id="business" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="사업안내" subtitle="용인양지 서희스타힐스 하이뷰 사업개요" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <InfoTable data={business.overview} />
          </div>
          <div className="relative w-full min-h-[300px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
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
