import './globals.css'

export const metadata = {
  title: 'ARONO Digital - Dijital Dünyada Fark Yaratan Çözümler',
  description: 'Kurumsal kalitede yazılım geliştirme. Güçlü backend altyapısı, kullanıcı odaklı tasarım ve kesintisiz destek.',
  keywords: ['arono', 'arono digital', 'yazılım geliştirme', 'web tasarım', 'dijital ajans', 'kurumsal yazılım', 'backend geliştirme', 'frontend geliştirme'],
  authors: [{ name: 'ARONO Digital' }],
  creator: 'ARONO Digital',
  publisher: 'ARONO Digital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://arono.digital',
    siteName: 'ARONO Digital',
    title: 'ARONO Digital - Dijital Dünyada Fark Yaratan Çözümler',
    description: 'Kurumsal kalitede yazılım geliştirme. Güçlü backend altyapısı, kullanıcı odaklı tasarım ve kesintisiz destek.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ARONO Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARONO Digital - Dijital Dünyada Fark Yaratan Çözümler',
    description: 'Kurumsal kalitede yazılım geliştirme. Güçlü backend altyapısı, kullanıcı odaklı tasarım ve kesintisiz destek.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://arono.digital',
  },
  verification: {
    google: 'google-site-verification-code-buraya-gelecek',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ARONO Digital',
    alternateName: 'ARONO',
    url: 'https://arono.digital',
    logo: 'https://arono.digital/favicon.svg',
    description: 'Kurumsal kalitede yazılım geliştirme. Güçlü backend altyapısı, kullanıcı odaklı tasarım ve kesintisiz destek.',
    sameAs: [
      // Sosyal medya linklerinizi buraya ekleyin
      // 'https://www.linkedin.com/company/arono-digital',
      // 'https://twitter.com/aronodigital',
      // 'https://www.instagram.com/aronodigital',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Turkish', 'English']
    }
  }

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
