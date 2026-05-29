export const siteConfig = {
  meta: {
    title: "용인양지 서희스타힐스 하이뷰 | 공식 분양 홈페이지",
    description:
      "용인 반도체클러스터 10분대, SK하이닉스·삼성전자 배후 수혜단지. 용인양지 서희스타힐스 하이뷰 모델하우스 방문예약·분양가·평형안내 공식 홈페이지",
    keywords:
      "용인양지 서희스타힐스, 서희스타힐스 하이뷰, 용인양지 서희스타힐스 분양가, 용인양지 서희스타힐스 모델하우스, 용인 반도체클러스터 아파트",
    canonical: "https://starhills.aptmh.kr",
    ogImage: "/og-image.jpg",
    naverVerification: "",
    googleVerification: "",
  },

  header: {
    projectName: "서희스타힐스 하이뷰",
    phone: "1599-1877",
    gnb: ["사업안내", "입지정보", "단지소개", "평형안내", "방문예약"],
  },

  hero: {
    slides: [
      {
        image: "/images/hero/hero-01.jpg",
        title: "용인양지 서희스타힐스 하이뷰",
        subtitle: "SK하이닉스·삼성전자 반도체클러스터 10분대",
      },
      {
        image: "/images/hero/hero-02.jpg",
        title: "세계가 주목하는 K-반도체클러스터",
        subtitle: "1천조 원 규모 배후주거, 지금이 기회입니다",
      },
      {
        image: "/images/hero/hero-03.jpg",
        title: "총 1,265세대 브랜드 대단지",
        subtitle: "59·69·74·84㎡ | 2030년 2월 입주예정",
      },
    ],
  },

  business: {
    overview: {
      사업명: "용인 양지 서희스타힐스 하이뷰 신축공사",
      위치: "경기도 용인시 처인구 양지면 816-7번지 일대",
      세대수: "총 1,265세대",
      공급면적: "59㎡ / 69㎡ / 74㎡ / 84㎡",
      공급규모: "지하 3층 ~ 지상 29층 / 9개동",
      입주예정: "2030년 2월",
      시공사: "(주)서희건설",
      시행사: "양지지역주택조합",
    },
    sellingPoints: [
      { icon: "🏭", title: "반도체클러스터 10분대", desc: "SK하이닉스·삼성전자 최대 수혜지" },
      { icon: "🚗", title: "서울 30분대", desc: "제2경부·수도권제2순환고속도로 직결" },
      { icon: "🏠", title: "계약금 1,000만원", desc: "입주까지 계약금 5%, 전매제한 6개월" },
      { icon: "🏫", title: "초품아 학세권", desc: "양지초 도보통학, 초·중교 신설 예정" },
    ],
    image: "/images/business/overview.jpg",
  },

  location: {
    images: [
      {
        src: "/images/location/location-wide.jpg",
        alt: "용인양지 서희스타힐스 광역위치도 교통망 반도체클러스터",
        caption: "광역 교통망 및 반도체클러스터 위치",
      },
      {
        src: "/images/location/location-infra.jpg",
        alt: "용인양지 서희스타힐스 생활 교육 인프라 지도",
        caption: "단지 근접 생활·교육 인프라",
      },
    ],
    cards: [
      {
        icon: "🚗",
        title: "수도권 핵심 교통망",
        points: [
          "영동고속도로 양지IC 5분 · 제2경부고속도로 직결",
          "서울 30분대, 분당·수원 생활권",
          "SK하이닉스 10분대 출퇴근",
        ],
      },
      {
        icon: "🏪",
        title: "풍요로운 생활 인프라",
        points: [
          "하나로마트 · 양지면사무소 · 우체국 근접",
          "아시아나CC · 양지파인CC 인접",
          "태봉산 품은 숲세권 힐링 환경",
        ],
      },
      {
        icon: "🏫",
        title: "도보통학 초품아 학세권",
        points: [
          "양지초등학교 도보통학권",
          "용동중학교 인접",
          "사업지 내 초·중교 신설 예정",
        ],
      },
      {
        icon: "🔬",
        title: "1천조 원 반도체클러스터 수혜",
        points: [
          "SK하이닉스 약 600조 + 삼성전자 약 360조",
          "용인테크노밸리 · 용인국제유통물류단지",
          "용인 동부권 개발 거점 — 미래가치 상승",
        ],
      },
    ],
  },

  complex: {
    headline: "용인양지 스카이라인을 바꾸는 새로운 랜드마크",
    features: [
      {
        title: "K-APT 대표 브랜드 프리미엄",
        desc: "시공능력평가 16위(2025년) 1군 건설사 서희건설, 서희스타힐스 브랜드 프리미엄",
      },
      {
        title: "1,265세대 커뮤니티 대단지",
        desc: "전 세대 남향 위주 간세 배치, 한경주거환경대상 수상(2024년), 총 2,300여 세대 신흥주거 브랜드타운",
      },
      {
        title: "선호도 높은 중소평 혁신 설계",
        desc: "4Bay 위주 혁신 평면, 팬트리·드레스룸 등 수납 특화, 59·69·74·84㎡ 실용 구성",
      },
    ],
    images: {
      main: "/images/complex/complex-day.jpg",
      site: "/images/complex/complex-site.jpg",
    },
  },

  floors: [
    { type: "59A", units: 286, exclusive: "59.97", supply: "82.46", contract: "123.03", image: "/images/floor/plan-59a.jpg" },
    { type: "59B", units: 141, exclusive: "59.99", supply: "83.08", contract: "123.67", image: "/images/floor/plan-59b.jpg" },
    { type: "59C", units: 160, exclusive: "59.98", supply: "83.31", contract: "123.89", image: "/images/floor/plan-59c.jpg" },
    { type: "69",  units: 225, exclusive: "69.99", supply: "95.63", contract: "142.98", image: "/images/floor/plan-69.jpg"  },
    { type: "74A", units: 102, exclusive: "74.99", supply: "102.53", contract: "153.27", image: "/images/floor/plan-74a.jpg" },
    { type: "74B", units: 99,  exclusive: "74.99", supply: "102.74", contract: "153.48", image: "/images/floor/plan-74b.jpg" },
    { type: "84A", units: 168, exclusive: "85.00", supply: "115.79", contract: "173.29", image: "/images/floor/plan-84a.jpg" },
    { type: "84B", units: 81,  exclusive: "85.00", supply: "115.80", contract: "173.51", image: "/images/floor/plan-84b.jpg" },
  ],

  reservation: {
    phone: "1599-1877",
    notice: "방문예약제로 운영 중입니다. 방문 전 예약 후 방문해 주시기 바랍니다.",
    formEndpoint: "",
  },
}
