import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '../../data/site-config'

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  metadataBase: new URL(siteConfig.meta.canonical),
  alternates: {
    canonical: siteConfig.meta.canonical,
  },
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.canonical,
    type: 'website',
    images: [
      {
        url: siteConfig.meta.ogImage,
        width: 1200,
        height: 630,
        alt: '용인양지 서희스타힐스 하이뷰 공식 분양 홈페이지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.meta.ogImage],
  },
  other: {
    'naver-site-verification': siteConfig.meta.naverVerification,
    'google-site-verification': siteConfig.meta.googleVerification,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: '용인양지 서희스타힐스 하이뷰',
  description: siteConfig.meta.description,
  url: siteConfig.meta.canonical,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '양지면 816-7번지 일대',
    addressLocality: '용인시 처인구',
    addressRegion: '경기도',
    addressCountry: 'KR',
  },
  numberOfRooms: '59~84㎡',
  floorSize: {
    '@type': 'QuantitativeValue',
    value: '59~84',
    unitCode: 'MTK',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreSale',
    priceCurrency: 'KRW',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Google Fonts — preconnect for faster DNS + non-blocking stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
