import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '有限会社ストーク | AI × テクノロジーで、ビジネスを変革する',
  description: '有限会社ストーク｜AIソリューション・システム開発・WEBマーケティングで企業の成長を支援します。',
  keywords: 'ストーク, AI, コンサルティング, システム開発, 受託開発, WEBマーケティング, CRM, 業務改善',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja-JP">
      <head>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/graphik-regular-web.woff2" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/graphik-medium-web.woff2" />
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href="/fonts/graphik-semibold-web.woff2" />
        <link rel="stylesheet" href="/css/clientlib-base.min.css" />
        <link rel="stylesheet" href="/css/clientlib-rad.min.css" />
        <link rel="stylesheet" href="/css/front-page-hero-custom.css" />
      </head>
      <body className="radicalaccenturedesign generic page basicpage">
        {children}
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="beforeInteractive" />
        <Script src="/js/clientlib-rad.min.js" strategy="afterInteractive" />
        <Script src="/js/clientlib-rad-base.min.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
