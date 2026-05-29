'use client'

import { useState, useEffect, useCallback } from 'react'
import { siteConfig } from '../data/site-config'

export default function HeroBanner() {
  const { slides } = siteConfig.hero
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length])
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image}), linear-gradient(135deg, #0F2A5A 0%, #1a4080 100%)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Text overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <p className="text-gold text-sm md:text-base font-medium tracking-widest mb-4 uppercase">
          Official Sales Website
        </p>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-gold text-sm md:text-base font-medium tracking-widest mb-4 uppercase">
              Official Sales Website
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white text-base md:text-xl mb-8 drop-shadow-md">
              {slide.subtitle}
            </p>
            <a
              href="#reservation"
              className="inline-block bg-gold text-white font-bold px-8 py-4 rounded-full text-base md:text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              방문예약 신청하기
            </a>
          </div>
        ))}
      </div>

      {/* Left/Right arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
        aria-label="이전 슬라이드"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
        aria-label="다음 슬라이드"
      >
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? 'bg-gold w-8' : 'bg-white/60'
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
