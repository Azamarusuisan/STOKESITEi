import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
