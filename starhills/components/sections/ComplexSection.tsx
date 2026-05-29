'use client'

import SectionTitle from '../ui/SectionTitle'
import { siteConfig } from '../../data/site-config'

export default function ComplexSection() {
  const { complex } = siteConfig
  return (
    <section id="complex" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="단지소개" subtitle="용인양지 서희스타힐스 하이뷰 단지 특징" />

        <p className="text-center text-gray-600 text-lg mb-12">{complex.headline}</p>

        {/* Image left + features right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="relative w-full min-h-[350px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={complex.images.main}
              alt="용인양지 서희스타힐스 하이뷰 단지 주간 조감도"
              className="object-cover w-full h-full"
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                const p = t.parentElement
                if (p) p.innerHTML = '<div class="flex flex-col items-center text-gray-400 p-8"><span class="text-5xl mb-3">🏙️</span><span>단지 조감도</span></div>'
              }}
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            {complex.features.map((f, i) => (
              <div key={f.title} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-brand text-base mb-1">{f.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width site map */}
        <div className="relative w-full min-h-[300px] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={complex.images.site}
            alt="용인양지 서희스타힐스 하이뷰 단지 배치도"
            className="object-contain w-full"
            onError={(e) => {
              const t = e.currentTarget
              t.style.display = 'none'
              const p = t.parentElement
              if (p) p.innerHTML = '<div class="flex flex-col items-center text-gray-400 p-12"><span class="text-5xl mb-3">🗺️</span><span>단지 배치도</span></div>'
            }}
          />
        </div>
      </div>
    </section>
  )
}
