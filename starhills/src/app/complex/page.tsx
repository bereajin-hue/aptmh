import type { Metadata } from 'next'
import Header from '../../../components/Header'
import ComplexSection from '../../../components/sections/ComplexSection'

export const metadata: Metadata = {
  title: '단지소개 | 용인양지 서희스타힐스 하이뷰',
  description: '용인양지 서희스타힐스 하이뷰 단지 특징. 시공능력평가 16위 서희건설, 총 1,265세대 브랜드 대단지, 전 세대 남향 위주 간세 배치.',
  alternates: { canonical: 'https://starhills.aptmh.kr/complex' },
  openGraph: {
    title: '단지소개 | 용인양지 서희스타힐스 하이뷰',
    description: '서희건설 1,265세대 브랜드 대단지. 전 세대 남향 위주, 4Bay 혁신 평면, 한경주거환경대상 수상(2024).',
    url: 'https://starhills.aptmh.kr/complex',
    type: 'website',
  },
}

export default function ComplexPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ComplexSection />
      </main>
    </>
  )
}
