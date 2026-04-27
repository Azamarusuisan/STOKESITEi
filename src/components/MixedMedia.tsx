export default function MixedMedia() {
  return (
    <div className="mixedmediatextblock">
      <div className="rad-mixed-media-and-text rad-mixed-media-and-text--with-optional rad-spacing-vertical-md">
        <div className="rad-mixed-media-and-text__media">
          <img
            className="rad-mixed-media-and-text__primary-media rad-mixed-media-and-text__primary-image"
            src="/images/careers-module.jpg"
            alt="ストークについて"
          />
        </div>
        <div className="rad-mixed-media-and-text__text">
          <div className="rad-mixed-media-and-text__label">About Us</div>
          <h3 className="rad-mixed-media-and-text__title">
            確かな実績と、新しい挑戦で未来を創る
          </h3>
          <p className="rad-mixed-media-and-text__description">
            有限会社ストークは、セールスサポートの総合サービスを基盤に、AIテクノロジーを融合した新しい価値を提供します。20年以上にわたり培った経験と最先端技術で、お客様のビジネスを次のステージへ導きます。
          </p>
          <a href="/contact" className="rad-button rad-button--tertiary" aria-label="お問い合わせ: ストークについて">
            <div className="rad-button__text">お問い合わせ</div>
            <div className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact" aria-hidden="true"></div>
          </a>
        </div>
      </div>
    </div>
  )
}
