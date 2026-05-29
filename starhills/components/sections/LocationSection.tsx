'use client'

import SectionTitle from '../ui/SectionTitle'
import { siteConfig } from '../../data/site-config'

export default function LocationSection() {
  const { location } = siteConfig
  return (
    <section id="location" className="py-20 md:py-24" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="입지정보" subtitle="용인양지 서희스타힐스 하이뷰 입지환경" />

        {/* Two images side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {location.images.map((img) => (
            <div key={img.src} className="rounded-xl overflow-hidden shadow-md">
              <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const t = e.currentTarget
                    t.style.display = 'none'
                    const p = t.parentElement
                    if (p) p.innerHTML = `<div class="flex flex-col items-center text-gray-400 p-8"><span class="text-4xl mb-2">🗺️</span><span class="text-sm">${img.caption}</span></div>`
                  }}
                />
              </div>
              <div className="bg-white px-4 py-3 text-center text-sm font-medium text-brand">
                {img.caption}
              </div>
            </div>
          ))}
        </div>

        {/* 4 info cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {location.cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h4 className="text-brand font-bold text-base mb-3">{card.title}</h4>
              <ul className="space-y-1">
                {card.points.map((pt) => (
                  <li key={pt} className="text-gray-600 text-xs flex items-start gap-1">
                    <span className="text-brand mt-0.5 shrink-0">·</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
