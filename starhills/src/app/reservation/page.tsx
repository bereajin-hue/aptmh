import type { Metadata } from 'next'
import Header from '../../../components/Header'
import ReservationSection from '../../../components/sections/ReservationSection'

export const metadata: Metadata = {
  title: '방문예약 | 용인양지 서희스타힐스 하이뷰',
  description: '용인양지 서희스타힐스 하이뷰 모델하우스 방문예약. 대표전화 1599-1877. 평일 09:00~18:00, 주말 및 공휴일 운영.',
  alternates: { canonical: 'https://starhills.aptmh.kr/reservation' },
  openGraph: {
    title: '방문예약 | 용인양지 서희스타힐스 하이뷰',
    description: '모델하우스 방문예약 ☎ 1599-1877. 평일 09:00~18:00, 주말 및 공휴일 운영.',
    url: 'https://starhills.aptmh.kr/reservation',
    type: 'website',
  },
}

export default function ReservationPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ReservationSection />
      </main>
    </>
  )
}
