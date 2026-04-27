const cards = [
  {
    id: 'ai-consulting',
    label: 'サービス',
    title: 'AIコンサルティング',
    content: 'AIの導入戦略立案から実装まで、一貫したコンサルティングを提供。お客様のビジネスに最適なAIソリューションをご提案します。AI導入戦略の策定、業務プロセスのAI化診断、ROI最大化のためのロードマップ作成を行います。',
    href: '/services/ai-consulting',
  },
  {
    id: 'ai-development',
    label: 'サービス',
    title: 'AI受託開発',
    content: '最先端のAI技術を活用したシステムの企画・設計・開発を受託。機械学習・ディープラーニング、自然言語処理（NLP）、画像認識・データ分析など、お客様の課題に最適なAIシステムをオーダーメイドで構築します。',
    href: '/services/ai-development',
  },
  {
    id: 'ai-improvement',
    label: 'サービス',
    title: 'AI業務改善提案',
    content: 'AIを活用した業務改善提案で、生産性の向上とコスト削減を実現。業務フロー自動化、データドリブン経営支援、予測分析による意思決定支援まで一貫してサポートします。',
    href: '/services/ai-improvement',
  },
  {
    id: 'system-dev',
    label: 'サービス',
    title: 'システム開発',
    content: 'オープンソースソフトウェア(OSS)を有効活用し、コストを抑えたシステム構築。Webアプリケーション開発、システム保守・運営、運用後の戦略的改善提案まで、豊富な経験と実績を活かした本当に使えるシステムをご提供します。',
    href: '/services/system-development',
  },
  {
    id: 'web-marketing',
    label: 'サービス',
    title: 'WEBマーケティング',
    content: '教育コンテンツの作成から企業マッチングまで、デジタルマーケティングの全領域をカバー。動画を活用した教育コンテンツ、在宅資格取得支援、企業マッチングなどのソリューションを提供します。',
    href: '/services/web-marketing',
  },
  {
    id: 'crm-hosting',
    label: 'サービス',
    title: 'CRM & ホスティング',
    content: '各種店舗向けCRMの開発・販売からサーバー構築・運用まで、ビジネスインフラをトータルサポート。CRMシステム開発・導入、サーバー構築・運用・管理、サポートコールセンター運営を行います。',
    href: '/services/crm-hosting',
  },
]

export default function CardGrid() {
  return (
    <section id="services" className="section">
      <div className="section__inner">
        <header className="section__header">
          <p className="section__eyebrow">Service</p>
          <h2 className="section__title">サービス</h2>
        </header>
        <div className="card-grid">
          {cards.map((card) => (
            <a key={card.id} href={card.href} className="card">
              <div className="card__label">{card.label}</div>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__content">{card.content}</p>
              <span className="card__cta">詳しく見る →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
