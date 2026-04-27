import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'AIコンサルティング | 有限会社ストーク',
  description: 'AIの導入戦略立案から実装まで、一貫したコンサルティングを提供。お客様のビジネスに最適なAIソリューションをご提案します。',
}

export default function AiConsultingPage() {
  return (
    <ServicePage
      label="SERVICE"
      title="AIコンサルティング"
      image="/images/ever-ready-infra.png"
      description="AIの導入戦略立案から実装まで、一貫したコンサルティングを提供します。お客様のビジネスに最適なAIソリューションをご提案し、競争優位性の確立と持続的な成長をサポートします。豊富な実績と最新の技術知見に基づき、実現可能で効果的なAI戦略を策定します。"
      features={[
        { title: 'AI導入戦略の策定', desc: 'お客様のビジネス目標と現状の課題を分析し、最適なAI導入ロードマップを策定します。短期・中期・長期の段階的な導入計画で、確実な成果を実現します。' },
        { title: '業務プロセスのAI化診断', desc: '現行の業務プロセスを詳細に分析し、AI化による効率改善が見込める領域を特定。優先度の高い施策から着手し、早期にROIを実感いただけます。' },
        { title: 'ROI最大化のためのロードマップ作成', desc: '投資対効果を最大化するための具体的なアクションプランを策定。KPI設定から効果測定まで、PDCAサイクルを回しながら継続的な改善を支援します。' },
        { title: 'AI人材育成支援', desc: 'お客様社内のAIリテラシー向上のための研修プログラムを提供。AI技術の基礎からビジネス活用まで、段階的に学べるカリキュラムをご用意しています。' },
      ]}
    />
  )
}
