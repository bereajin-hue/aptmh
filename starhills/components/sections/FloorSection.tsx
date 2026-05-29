'use client'

import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import FloorCard from '../ui/FloorCard'
import { siteConfig } from '../../data/site-config'

const TABS = ['59㎡', '69㎡', '74㎡', '84㎡']
const TAB_PREFIXES: Record<string, string> = {
  '59㎡': '59',
  '69㎡': '69',
  '74㎡': '74',
  '84㎡': '84',
}

export default function FloorSection() {
  const [activeTab, setActiveTab] = useState('59㎡')
  const prefix = TAB_PREFIXES[activeTab]
  const filtered = siteConfig.floors.filter((f) => f.type.startsWith(prefix))

  return (
    <section id="floor" className="py-20 md:py-24" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="평형안내" subtitle="용인양지 서희스타힐스 하이뷰 평면도" />

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeTab === tab
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-white text-navy border border-navy hover:bg-navy/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Floor cards */}
        <div className={`grid gap-6 ${
          filtered.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
          filtered.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' :
          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filtered.map((floor) => (
            <FloorCard key={floor.type} floor={floor} />
          ))}
        </div>
      </div>
    </section>
  )
}
