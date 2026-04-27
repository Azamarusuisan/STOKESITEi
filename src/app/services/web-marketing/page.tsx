import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'WEBマーケティング | 有限会社ストーク',
  description: '教育コンテンツの作成から企業マッチングまで、デジタルマーケティングの全領域をカバーします。',
}

export default function WebMarketingPage() {
  return (
    <ServicePage
      label="SERVICE"
      title="WEBマーケティング"
      image="/images/thought-leadership.jpg"
      description="教育コンテンツの作成から企業マッチングまで、デジタルマーケティングの全領域をカバーします。動画を活用した教育コンテンツ、在宅資格取得支援、企業マッチングなど、多角的なアプローチでお客様のビジネス拡大を支援します。"
      features={[
        { title: '動画を活用した教育コンテンツ', desc: '効果的な動画コンテンツの企画・制作を支援。eラーニング、製品紹介、採用動画など、目的に応じた最適なコンテンツを制作します。' },
        { title: '在宅資格取得支援', desc: 'オンラインを活用した資格取得支援プログラムの構築。学習管理システム（LMS）の導入から運用までをサポートします。' },
        { title: '企業マッチング', desc: '企業と個人事業主のマッチングプラットフォームの構築・運営。双方がWin-Winの関係を築けるエコシステムを提供します。' },
        { title: 'SEO・コンテンツマーケティング', desc: '検索エンジン最適化とコンテンツ戦略の立案・実行。ターゲット層に効果的にリーチするデジタルマーケティングを展開します。' },
      ]}
    />
  )
}
