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
      <footer className="bg-brand text-white/70 text-center text-xs py-8 px-4">
        <p>© 2026 용인양지 서희스타힐스 하이뷰. All rights reserved.</p>
        <p className="mt-1">경기도 용인시 처인구 양지면 양지리 산105-8번지 일원 | 대표전화: 1599-1877</p>
        <div className="mt-4 pt-4 border-t border-white/20 text-left max-w-4xl mx-auto space-y-1 leading-relaxed">
          <p>※ 본 홍보물에 사용된 이미지, CG, 일러스트 등은 소비자의 이해를 돕기 위한 이미지컷으로 실제와 다를 수 있습니다.</p>
          <p>※ 본 홍보물에 관련된 자세한 사항은 해당 견본주택에 방문하시어 확인하시기 바랍니다.</p>
          <p>※ 아파트 하자 등에 따른 소비자 피해보상은 주택법 시행령 제59조에 따라 적용됩니다.</p>
        </div>
      </footer>
    </>
  )
}
