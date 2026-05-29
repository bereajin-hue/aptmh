'use client'

import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import { siteConfig } from '../../data/site-config'

export default function ReservationSection() {
  const { reservation } = siteConfig
  const [form, setForm] = useState({ name: '', phone: '', area: '', agree: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.agree) {
      alert('개인정보 수집 및 이용에 동의해 주세요.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="py-20 md:py-24 bg-brand">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionTitle title="방문예약" subtitle="용인양지 서희스타힐스 하이뷰 모델하우스 방문예약" light />

        <p className="text-center text-gray-300 mb-10">{reservation.notice}</p>

        {submitted ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-white text-xl font-bold mb-2">예약 신청이 완료되었습니다!</p>
            <p className="text-gray-300">담당자가 확인 후 연락드리겠습니다.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl space-y-5">
            <div>
              <label className="block text-brand font-medium text-sm mb-1">이름 <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand"
                placeholder="성함을 입력해 주세요"
              />
            </div>
            <div>
              <label className="block text-brand font-medium text-sm mb-1">연락처 <span className="text-red-500">*</span></label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^0-9]/g, '') })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand"
                placeholder="숫자만 입력해 주세요"
              />
            </div>
            <div>
              <label className="block text-brand font-medium text-sm mb-1">관심 평형</label>
              <select
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand bg-white"
              >
                <option value="">선택해 주세요</option>
                <option value="59㎡">59㎡</option>
                <option value="69㎡">69㎡</option>
                <option value="74㎡">74㎡</option>
                <option value="84㎡">84㎡</option>
              </select>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agree"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="mt-1 w-4 h-4 accent-brand"
              />
              <label htmlFor="agree" className="text-gray-600 text-sm cursor-pointer">
                개인정보 수집 및 이용에 동의합니다. (수집항목: 이름, 연락처 / 목적: 분양 상담 / 보유기간: 상담 완료 후 즉시 파기)
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-base"
            >
              예약 신청하기
            </button>
          </form>
        )}

        {/* Phone CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">전화로 바로 상담하실 수 있습니다</p>
          <a
            href={`tel:${reservation.phone.replace(/-/g, '')}`}
            className="inline-flex items-center gap-3 bg-brand text-white font-black text-2xl px-10 py-5 rounded-2xl shadow-2xl hover:opacity-90 transition-opacity"
          >
            📞 {reservation.phone}
            <span className="text-base font-medium">전화 문의하기</span>
          </a>
        </div>
      </div>
    </section>
  )
}
