import type { Metadata } from 'next'
import Header from '../../../components/Header'
import FloorSection from '../../../components/sections/FloorSection'

export const metadata: Metadata = {
  title: '평형안내 | 용인양지 서희스타힐스 하이뷰',
  description: '용인양지 서희스타힐스 하이뷰 평면도. 59·69·74·84㎡ 총 8개 타입, 4Bay 위주 혁신 평면, 팬트리·드레스룸 수납 특화 설계.',
  alternates: { canonical: 'https://starhills.aptmh.kr/floor-plan' },
  openGraph: {
    title: '평형안내 | 용인양지 서희스타힐스 하이뷰',
    description: '59·69·74·84㎡ 총 8개 타입 평면도. 4Bay 혁신 평면, 팬트리·드레스룸 수납 특화.',
    url: 'https://starhills.aptmh.kr/floor-plan',
    type: 'website',
  },
}

export default function FloorPlanPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <FloorSection />
      </main>
    </>
  )
}
