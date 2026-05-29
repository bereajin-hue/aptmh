import Header from '../../components/Header'
import HeroBanner from '../../components/HeroBanner'
import BusinessSection from '../../components/sections/BusinessSection'
import LocationSection from '../../components/sections/LocationSection'
import ComplexSection from '../../components/sections/ComplexSection'
import FloorSection from '../../components/sections/FloorSection'
import ReservationSection from '../../components/sections/ReservationSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <BusinessSection />
        <LocationSection />
        <ComplexSection />
        <FloorSection />
        <ReservationSection />
      </main>
      <footer className="bg-navy text-gray-400 text-center text-xs py-6">
        <p>© 2026 용인양지 서희스타힐스 하이뷰 공식 분양 홈페이지. All rights reserved.</p>
        <p className="mt-1">경기도 용인시 처인구 양지면 816-7번지 일대 | 대표전화: 1599-1877</p>
        <p className="mt-1">본 홈페이지의 이미지 및 내용은 실제와 다를 수 있습니다.</p>
      </footer>
    </>
  )
}
