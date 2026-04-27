import FadeIn from './FadeIn'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <FadeIn>
          <div className="section-header">
            <div className="section-tag">About Us</div>
            <h2 className="section-title">企業と個人を結び、<br />テクノロジーで未来を創る</h2>
            <p className="section-desc">
              セールスサポートの総合サービスを基盤に、AIテクノロジーを融合した新しい価値を提供します。
            </p>
          </div>
        </FadeIn>
        <div className="about-grid">
          <FadeIn>
            <div className="about-text">
              <h3>確かな実績と、新しい挑戦</h3>
              <p>
                弊社では、セールスサポートの総合サービスを得意としています。企業と個人事業主とのマッチングを行い、教育制度を導入し、企業・個人双方が「Win-Win」の関係になりますよう、日々ノウハウを蓄積しています。
              </p>
              <p>
                特にWebアプリケーション関連のソフトウェア技術に力を入れており、最新テクノロジーを駆使したシステムをご提供しています。システム開発と保守・運営、SOHOとしての教育からバックオフィスセンター、Webシステム開発、Webマーケティングの展開、ショッピングサイトの構築など、多数の実績を持っています。
              </p>
              <p>
                さらに、AIを活用したコンサルティング・受託開発・業務改善提案など、様々なソリューションを通じて、お客様のビジネスを次のステージへ導きます。
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="about-visual">
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">年以上の実績</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">プロジェクト</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">クライアント</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">サポート体制</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
