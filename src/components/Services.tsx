import FadeIn from './FadeIn'

const services = [
  {
    icon: '🤖',
    title: 'AIコンサルティング',
    desc: 'AIの導入戦略立案から実装まで、一貫したコンサルティングを提供。お客様のビジネスに最適なAIソリューションをご提案します。',
    items: ['AI導入戦略の策定', '業務プロセスのAI化診断', 'ROI最大化のためのロードマップ作成'],
  },
  {
    icon: '💻',
    title: 'AI受託開発',
    desc: '最先端のAI技術を活用したシステムの企画・設計・開発を受託。お客様の課題に最適なAIシステムをオーダーメイドで構築します。',
    items: ['機械学習・ディープラーニング', '自然言語処理（NLP）', '画像認識・データ分析'],
  },
  {
    icon: '📈',
    title: 'AI業務改善提案',
    desc: 'AIを活用した業務改善提案で、生産性の向上とコスト削減を実現。既存業務フローの分析から最適化まで一貫してサポートします。',
    items: ['業務フロー自動化', 'データドリブン経営支援', '予測分析による意思決定支援'],
  },
  {
    icon: '🖥',
    title: 'システム開発',
    desc: 'オープンソースソフトウェア(OSS)を有効活用し、コストを抑えたシステム構築。豊富な経験と実績を活かし、本当に使えるシステムをご提案します。',
    items: ['Webアプリケーション開発', 'システム保守・運営', '運用後の戦略的改善提案'],
  },
  {
    icon: '📣',
    title: 'WEBマーケティング',
    desc: '教育コンテンツの作成から企業マッチングまで、デジタルマーケティングの全領域をカバーします。',
    items: ['動画を活用した教育コンテンツ', '在宅資格取得支援', '企業マッチング'],
  },
  {
    icon: '📱',
    title: 'CRM & ホスティング',
    desc: '各種店舗向けCRMの開発・販売からサーバー構築・運用まで、ビジネスインフラをトータルサポートします。',
    items: ['CRMシステム開発・導入', 'サーバー構築・運用・管理', 'サポートコールセンター運営'],
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-inner">
        <FadeIn>
          <div className="section-header">
            <div className="section-tag">Services</div>
            <h2 className="section-title">包括的なサービスラインナップ</h2>
            <p className="section-desc">
              既存の強みに最先端AIテクノロジーを融合し、お客様のあらゆるビジネス課題に対応します。
            </p>
          </div>
        </FadeIn>
        <div className="services-grid">
          {services.map((s, i) => (
            <FadeIn key={i}>
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
