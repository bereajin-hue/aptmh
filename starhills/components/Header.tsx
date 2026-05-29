'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '../data/site-config'

const sectionIds = ['business', 'location', 'complex', 'floor', 'reservation']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2"
        >
          <img
            src="/images/logo.png"
            alt="용인양지 서희스타힐스 하이뷰 로고"
            className="h-8 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className={`font-bold text-base tracking-tight transition-colors ${
            scrolled ? 'text-navy' : 'text-white'
          }`}>
            용인양지 서희스타힐스 하이뷰
          </span>
        </button>

        {/* Desktop GNB */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.header.gnb.map((label, i) => (
            <button
              key={label}
              onClick={() => scrollTo(sectionIds[i])}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? 'text-navy' : 'text-white'
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href={`tel:${siteConfig.header.phone.replace(/-/g, '')}`}
            className="ml-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            📞 {siteConfig.header.phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {siteConfig.header.gnb.map((label, i) => (
            <button
              key={label}
              onClick={() => scrollTo(sectionIds[i])}
              className="block w-full text-left px-6 py-4 text-navy font-medium border-b border-gray-100 hover:bg-gray-50"
            >
              {label}
            </button>
          ))}
          <a
            href={`tel:${siteConfig.header.phone.replace(/-/g, '')}`}
            className="block px-6 py-4 text-gold font-bold"
          >
            📞 {siteConfig.header.phone}
          </a>
        </div>
      )}
    </header>
  )
}
