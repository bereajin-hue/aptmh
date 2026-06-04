import type { Metadata } from 'next'
import Header from '../../../components/Header'
import BusinessSection from '../../../components/sections/BusinessSection'

export const metadata: Metadata = {
  title: '사업안내 | 용인양지 서희스타힐스 하이뷰',
  description: '용인양지 서희스타힐스 하이뷰 사업개요. 경기도 용인시 처인구 양지면, 지하3층~지상29층 총 1,265세대, 건폐율 22.20%, 용적율 238.73%.',
  alternates: { canonical: 'https://starhills.aptmh.kr/business' },
  openGraph: {
    title: '사업안내 | 용인양지 서희스타힐스 하이뷰',
    description: '용인양지 서희스타힐스 하이뷰 사업개요. 경기도 용인시 처인구 양지면, 지하3층~지상29층 총 1,265세대.',
    url: 'https://starhills.aptmh.kr/business',
    type: 'website',
  },
}

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <BusinessSection />
      </main>
    </>
  )
}
