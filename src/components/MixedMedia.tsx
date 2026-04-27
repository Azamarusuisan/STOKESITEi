import Link from 'next/link'

export default function MixedMedia() {
  return (
    <section className="section section--accent">
      <div className="section__inner section__inner--narrow">
        <p className="section__eyebrow">About Us</p>
        <h2 className="section__title">確かな実績と、新しい挑戦で未来を創る</h2>
        <p className="section__lead">
          有限会社ストークは、セールスサポートの総合サービスを基盤に、AIテクノロジーを融合した新しい価値を提供します。20年以上にわたり培った経験と最先端技術で、お客様のビジネスを次のステージへ導きます。
        </p>
        <Link href="/contact" className="btn btn--secondary">お問い合わせ</Link>
      </div>
    </section>
  )
}
