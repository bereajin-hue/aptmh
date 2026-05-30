'use client'

import SectionTitle from '../ui/SectionTitle'
import { siteConfig } from '../../data/site-config'

export default function ReservationSection() {
  const { reservation } = siteConfig

  return (
    <section id="reservation" className="py-20 md:py-24 bg-brand">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <SectionTitle title="방문예약" subtitle="용인양지 서희스타힐스 하이뷰 모델하우스 방문예약" light />

        <p className="text-white/80 mb-12 text-base leading-relaxed">{reservation.notice}</p>

        {/* 전화 CTA */}
        <a
          href={`tel:${reservation.phone.replace(/-/g, '')}`}
          className="inline-flex flex-col items-center gap-3 bg-white text-brand rounded-2xl px-16 py-8 shadow-2xl hover:shadow-brand/30 hover:scale-105 transition-all duration-200"
        >
          <span className="text-4xl">📞</span>
          <span className="font-black text-4xl md:text-5xl tracking-wide">{reservation.phone}</span>
          <span className="text-base font-semibold text-brand/70">터치하여 전화 연결</span>
        </a>

        <p className="mt-8 text-white/60 text-sm">평일 09:00 ~ 18:00 · 주말 및 공휴일 운영</p>
      </div>
    </section>
  )
}
