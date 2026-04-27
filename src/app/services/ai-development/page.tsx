import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'AI受託開発 | 有限会社ストーク',
  description: '最先端のAI技術を活用したシステムの企画・設計・開発を受託。お客様の課題に最適なAIシステムをオーダーメイドで構築します。',
}

export default function AiDevelopmentPage() {
  return (
    <ServicePage
      label="SERVICE"
      title="AI受託開発"
      image="/images/platform-strategy.jpg"
      description="最先端のAI技術を活用したシステムの企画・設計・開発を受託します。機械学習・ディープラーニング、自然言語処理（NLP）、画像認識・データ分析など、お客様の課題に最適なAIシステムをオーダーメイドで構築。要件定義から運用保守まで一貫してサポートします。"
      features={[
        { title: '機械学習・ディープラーニング', desc: '大量のデータからパターンを学習し、予測・分類・異常検知などを行うAIモデルを開発。ビジネスの意思決定を強力にサポートします。' },
        { title: '自然言語処理（NLP）', desc: 'テキストデータの分析、感情分析、文書要約、チャットボットなど、言語に関するAIアプリケーションを開発します。' },
        { title: '画像認識・データ分析', desc: '画像・動画の分析、物体検出、OCR、品質検査の自動化など、コンピュータビジョン技術を活用したソリューションを提供します。' },
        { title: 'システムインテグレーション', desc: '開発したAIモデルを既存の業務システムとシームレスに連携。API設計から本番環境への展開まで、確実な実装を行います。' },
      ]}
    />
  )
}
