import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'CRM & ホスティング | 有限会社ストーク',
  description: '各種店舗向けCRMの開発・販売からサーバー構築・運用まで、ビジネスインフラをトータルサポートします。',
}

export default function CrmHostingPage() {
  return (
    <ServicePage
      label="SERVICE"
      title="CRM & ホスティング"
      description="各種店舗向けCRMの開発・販売からサーバー構築・運用まで、ビジネスインフラをトータルサポートします。お客様のビジネス規模に合わせた最適なソリューションで、顧客管理とITインフラの両面から経営を支援します。"
      features={[
        { title: 'CRMシステム開発・導入', desc: '店舗ごとの業務フローに最適化されたCRMシステムをカスタム開発。顧客データの一元管理、販促施策の自動化、顧客分析機能を提供します。' },
        { title: 'サーバー構築・運用・管理', desc: '高い可用性とセキュリティを備えたサーバー環境を構築。24時間365日の監視体制で安定したサービス稼働を保証します。' },
        { title: 'サポートコールセンター運営', desc: 'お客様のエンドユーザーに対する技術サポートをワンストップで提供。電話・メール・チャットなど、マルチチャネルでの対応が可能です。' },
        { title: 'ホームページ作成', desc: '各種店舗向けのホームページを企画からデザイン、公開まで一貫して対応。スマートフォン対応のレスポンシブデザインで制作します。' },
      ]}
    />
  )
}
