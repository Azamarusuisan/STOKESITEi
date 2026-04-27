const items = [
  {
    title: '20年以上の実績',
    headline: '2003年の設立以来、500以上のプロジェクトを成功に導いてきました。',
    body: 'システム開発からWEBマーケティングまで、幅広い分野で培った経験とノウハウを活かし、お客様のビジネス課題に最適なソリューションを提供しています。',
  },
  {
    title: '最先端AI技術',
    headline: 'AIコンサルティングから受託開発まで、最先端技術を駆使したソリューションを提供。',
    body: '機械学習・ディープラーニング、自然言語処理、画像認識など、お客様のビジネスに最適なAI技術を選定し、オーダーメイドで構築します。',
  },
  {
    title: 'ワンストップサービス',
    headline: '企画・開発・運用・マーケティングまで、ビジネスのあらゆるフェーズをトータルサポート。',
    body: 'システム開発、CRM導入、ホスティング、WEBマーケティングまで、お客様のビジネスインフラを包括的にサポートします。',
  },
]

export default function Awards() {
  return (
    <section className="section">
      <div className="section__inner">
        <header className="section__header">
          <p className="section__eyebrow">Strengths</p>
          <h2 className="section__title">ストークの強み</h2>
        </header>
        <div className="features">
          {items.map((item) => (
            <div key={item.title} className="feature">
              <h3 className="feature__title">{item.title}</h3>
              <p className="feature__headline">{item.headline}</p>
              <p className="feature__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
