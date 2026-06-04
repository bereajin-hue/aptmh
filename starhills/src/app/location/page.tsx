import type { Metadata } from 'next'
import Header from '../../../components/Header'
import LocationSection from '../../../components/sections/LocationSection'

export const metadata: Metadata = {
  title: '입지정보 | 용인양지 서희스타힐스 하이뷰',
  description: '용인양지 서희스타힐스 하이뷰 입지환경. SK하이닉스·삼성전자 반도체클러스터 10분대, 영동고속도로 양지IC 5분, 서울 30분대 접근.',
  alternates: { canonical: 'https://starhills.aptmh.kr/location' },
  openGraph: {
    title: '입지정보 | 용인양지 서희스타힐스 하이뷰',
    description: 'SK하이닉스·삼성전자 반도체클러스터 10분대, 영동고속도로 양지IC 5분, 서울 30분대.',
    url: 'https://starhills.aptmh.kr/location',
    type: 'website',
  },
}

export default function LocationPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <LocationSection />
      </main>
    </>
  )
}
