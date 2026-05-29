'use client'

interface FloorData {
  type: string
  units: number
  exclusive: string
  supply: string
  contract: string
  image: string
}

export default function FloorCard({ floor }: { floor: FloorData }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="bg-brand px-4 py-3 flex items-center justify-between">
        <span className="text-white font-bold text-lg">{floor.type}㎡형</span>
        <span className="text-white opacity-80 text-sm font-medium">{floor.units.toLocaleString()}세대</span>
      </div>
      <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center">
        <img
          src={floor.image}
          alt={`용인양지 서희스타힐스 하이뷰 ${floor.type}㎡형 평면도`}
          className="object-contain w-full h-full"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-gray-400"><span class="text-4xl mb-2">📐</span><span class="text-sm">${floor.type}㎡형 평면도 준비중</span></div>`
            }
          }}
        />
      </div>
      <div className="p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-xs border-b border-gray-200">
              <th className="pb-2 text-left font-medium">전용면적</th>
              <th className="pb-2 text-left font-medium">공급면적</th>
              <th className="pb-2 text-left font-medium">계약면적</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-brand font-semibold">
              <td className="pt-2">{floor.exclusive}㎡</td>
              <td className="pt-2">{floor.supply}㎡</td>
              <td className="pt-2">{floor.contract}㎡</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
