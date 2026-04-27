import FadeIn from './FadeIn'

const solutions = [
  {
    number: '01',
    title: '業務プロセスの自動化',
    desc: 'AIとRPAを組み合わせた業務自動化により、定型業務の効率を大幅に向上。人的リソースをより創造的な業務に集中させます。',
  },
  {
    number: '02',
    title: 'データ分析・予測',
    desc: '大量のビジネスデータからAIが有意義なインサイトを抽出。売上予測、需要予測、リスク分析など、データドリブンな経営を支援します。',
  },
  {
    number: '03',
    title: 'カスタマーサポートAI',
    desc: 'AIチャットボットや自然言語処理を活用した顧客対応の自動化・高度化。24時間365日の対応と顧客満足度の向上を実現します。',
  },
  {
    number: '04',
    title: 'オーダーメイドAI開発',
    desc: 'お客様の独自の課題に合わせたAIモデルの設計・開発。既存システムとの連携も含め、最適なソリューションをフルスクラッチで構築します。',
  },
]

export default function AiSolutions() {
  return (
    <section className="section ai-feature" id="ai">
      <div className="section-inner">
        <FadeIn>
          <div className="section-header">
            <div className="section-tag">AI Solutions</div>
            <h2 className="section-title">AIを活用した<br />多様なソリューション</h2>
            <p className="section-desc">
              最先端のAI技術を活用し、業種・業態を問わず、お客様のビジネス課題を解決します。
            </p>
          </div>
        </FadeIn>
        <div className="ai-grid">
          {solutions.map((s, i) => (
            <FadeIn key={i}>
              <div className="ai-card">
                <div className="ai-card-number">{s.number}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
