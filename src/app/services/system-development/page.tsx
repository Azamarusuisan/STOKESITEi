import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'システム開発 | 有限会社ストーク',
  description: 'オープンソースソフトウェア(OSS)を有効活用し、コストを抑えたシステム構築を実現します。',
}

export default function SystemDevelopmentPage() {
  return (
    <ServicePage
      label="SERVICE"
      title="システム開発"
      image="/images/pulse-of-change.jpg"
      description="オープンソースソフトウェア(OSS)を有効活用し、コストを抑えたシステム構築を実現します。Webアプリケーション開発からシステム保守・運営、運用後の戦略的改善提案まで、豊富な経験と実績を活かした本当に使えるシステムをご提供します。"
      features={[
        { title: 'Webアプリケーション開発', desc: 'React、Next.js、Node.jsなどのモダンな技術スタックを活用し、高性能で使いやすいWebアプリケーションを開発します。' },
        { title: 'システム保守・運営', desc: '開発後のシステムの安定稼働を支援。監視体制の構築、パフォーマンス最適化、セキュリティアップデートなどを継続的に実施します。' },
        { title: '運用後の戦略的改善提案', desc: 'ユーザーの利用状況データを分析し、UX改善やパフォーマンス向上のための改善提案を継続的に行います。' },
        { title: 'クラウドインフラ構築', desc: 'AWS、GCP、Azureなどのクラウドサービスを活用し、スケーラブルで可用性の高いインフラ環境を構築します。' },
      ]}
    />
  )
}
