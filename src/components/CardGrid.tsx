const cards = [
  {
    id: 'ai-consulting',
    type: 'perspective',
    variant: 'rad-content-grid-card--perspective',
    label: 'サービス',
    title: 'AIコンサルティング',
    image: '/images/ever-ready-infra.png',
    imageType: 'half',
    content: 'AIの導入戦略立案から実装まで、一貫したコンサルティングを提供。お客様のビジネスに最適なAIソリューションをご提案します。AI導入戦略の策定、業務プロセスのAI化診断、ROI最大化のためのロードマップ作成を行います。',
    cta: '詳しく見る',
    href: '/services/ai-consulting',
  },
  {
    id: 'ai-development',
    type: 'research-report',
    variant: 'rad-content-grid-card--research-report-dark',
    label: 'サービス',
    title: 'AI受託開発',
    image: '/images/platform-strategy.jpg',
    imageType: 'full',
    content: '最先端のAI技術を活用したシステムの企画・設計・開発を受託。機械学習・ディープラーニング、自然言語処理（NLP）、画像認識・データ分析など、お客様の課題に最適なAIシステムをオーダーメイドで構築します。',
    cta: '詳しく見る',
    href: '/services/ai-development',
  },
  {
    id: 'ai-improvement',
    type: 'research-report',
    variant: 'rad-content-grid-card--research-report-dark',
    label: 'サービス',
    title: 'AI業務改善提案',
    image: '/images/banking-trends-2026.jpg',
    imageType: 'full',
    content: 'AIを活用した業務改善提案で、生産性の向上とコスト削減を実現。業務フロー自動化、データドリブン経営支援、予測分析による意思決定支援まで一貫してサポートします。',
    cta: '詳しく見る',
    href: '/services/ai-improvement',
  },
  {
    id: 'system-dev',
    type: 'research-report',
    variant: 'rad-content-grid-card--research-report-dark',
    label: 'サービス',
    title: 'システム開発',
    image: '/images/pulse-of-change.jpg',
    imageType: 'full',
    content: 'オープンソースソフトウェア(OSS)を有効活用し、コストを抑えたシステム構築。Webアプリケーション開発、システム保守・運営、運用後の戦略的改善提案まで、豊富な経験と実績を活かした本当に使えるシステムをご提供します。',
    cta: '詳しく見る',
    href: '/services/system-development',
  },
  {
    id: 'web-marketing',
    type: 'perspective',
    variant: 'rad-content-grid-card--perspective',
    label: 'サービス',
    title: 'WEBマーケティング',
    image: '/images/thought-leadership.jpg',
    imageType: 'half',
    content: '教育コンテンツの作成から企業マッチングまで、デジタルマーケティングの全領域をカバー。動画を活用した教育コンテンツ、在宅資格取得支援、企業マッチングなどのソリューションを提供します。',
    cta: '詳しく見る',
    href: '/services/web-marketing',
  },
  {
    id: 'crm-hosting',
    type: 'research-report',
    variant: 'rad-content-grid-card--research-report-light',
    label: 'サービス',
    title: 'CRM & ホスティング',
    image: '/images/scale-paradox.jpg',
    imageType: 'full',
    content: '各種店舗向けCRMの開発・販売からサーバー構築・運用まで、ビジネスインフラをトータルサポート。CRMシステム開発・導入、サーバー構築・運用・管理、サポートコールセンター運営を行います。',
    cta: '詳しく見る',
    href: '/services/crm-hosting',
  },
]

export default function CardGrid() {
  return (
    <div className="tilegridv2 tilegrid" id="services">
      <div className="rad-card-grid rad-spacing-vertical-md" id="redesign-tile">
        <div className="rad-card-grid__cards-viewport">
          <div className="rad-card-grid__cards-container">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`rad-content-grid-card ${card.variant}`}
                id={card.id}
                data-cta-title={card.cta}
                data-card-title={card.title}
                data-content-type={card.type}
              >
                <button
                  className="rad-content-grid-card__front-toggle"
                  aria-expanded="false"
                  aria-controls={card.id}
                  aria-label={`${card.label}: ${card.title}`}
                ></button>
                <a href={card.href} className="rad-content-grid-card__cta-cover" tabIndex={-1} aria-label={`${card.cta}: ${card.title}`}></a>
                <div className="rad-content-grid-card__label">{card.label}</div>
                <div className="rad-content-grid-card__title">{card.title}</div>

                {card.imageType === 'full' && (
                  <div className="rad-content-grid-card__full-image">
                    <div className="image radimage">
                      <div className="cmp-image" itemScope itemType="http://schema.org/ImageObject">
                        <img src={card.image} loading="lazy" className="cmp-image__image" alt={card.title} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="rad-content-grid-card__sliding-content">
                  <div className="rad-content-grid-card__front-content">
                    {card.imageType === 'half' && (
                      <div className="rad-content-grid-card__half-image">
                        <div className="image radimage">
                          <div className="cmp-image" itemScope itemType="http://schema.org/ImageObject">
                            <img src={card.image} loading="lazy" className="cmp-image__image" alt={card.title} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="rad-content-grid-card__back-content">
                    <div className="rad-content-grid-card__content">
                      <p>{card.content}</p>
                    </div>
                    <a href={card.href} className="rad-button rad-button--ghost" tabIndex={-1} aria-label={`${card.cta}: ${card.title}`}>
                      <div className="rad-button__text">{card.cta}</div>
                      <div className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact" aria-hidden="true"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
