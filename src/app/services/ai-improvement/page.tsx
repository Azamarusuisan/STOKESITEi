import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'AI業務改善提案 | 有限会社ストーク',
  description: 'AIを活用した業務改善提案で、生産性の向上とコスト削減を実現します。',
}

export default function AiImprovementPage() {
  return (
    <ServicePage
      label="SERVICE"
      title="AI業務改善提案"
      description="AIを活用した業務改善提案で、生産性の向上とコスト削減を実現します。現場の業務フローを詳細に分析し、AI技術による自動化・効率化の余地を見出します。データドリブンな経営判断を可能にし、企業の競争力を高めます。"
      features={[
        { title: '業務フロー自動化', desc: 'AIとRPAを組み合わせた業務自動化により、定型業務の効率を大幅に向上。人的リソースをより創造的な業務に集中させます。' },
        { title: 'データドリブン経営支援', desc: '散在するビジネスデータを統合・分析し、経営判断に必要なインサイトをリアルタイムで提供。ダッシュボード構築も支援します。' },
        { title: '予測分析による意思決定支援', desc: '売上予測、需要予測、顧客行動予測など、AIによる高精度な予測分析で、先を見据えた戦略的な意思決定をサポートします。' },
        { title: '継続的な改善サイクル', desc: '導入後も定期的に効果測定を行い、改善提案を継続。ビジネス環境の変化に合わせてAIモデルを最適化し、持続的な価値を提供します。' },
      ]}
    />
  )
}
