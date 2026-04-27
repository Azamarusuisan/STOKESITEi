export default function Awards() {
  return (
    <div className="floatingcardblock">
      <div className="rad-awards">
        <div className="rad-awards__stage">
          <h2 className="rad-awards__headline">ストークの強み</h2>
        </div>
        <div className="rad-awards-cards__presenter">
          <div className="cmp-floating-awards-card">
            <div className="rad-awards-card rad-awards-card--purple" data-hover-delay="300">
              <button className="rad-awards-card__toggle">Toggle awards card detail view</button>
              <div className="rad-awards-card__cover">
                <div className="rad-awards-card__motion-bg">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: '<lottie-player preserveAspectRatio="xMidYMid slice" class="rad-awards-card__lp" aria-hidden="true" src="/lottie/anim_001_violet.json"></lottie-player>'
                    }}
                  />
                </div>
                <h3 className="rad-awards-card__title" aria-hidden="true">20年以上の実績</h3>
              </div>
              <div className="rad-awards-card__detail">
                <div className="rad-awards-card__description">
                  <h4 className="rad-awards-card__subheader">2003年の設立以来、500以上のプロジェクトを成功に導いてきました。</h4>
                  <div className="rad-awards-card__rte">
                    <p>システム開発からWEBマーケティングまで、幅広い分野で培った経験とノウハウを活かし、お客様のビジネス課題に最適なソリューションを提供しています。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cmp-floating-awards-card">
            <div className="rad-awards-card rad-awards-card--red" data-hover-delay="300">
              <button className="rad-awards-card__toggle">Toggle awards card detail view</button>
              <div className="rad-awards-card__cover">
                <div className="rad-awards-card__motion-bg">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: '<lottie-player preserveAspectRatio="xMidYMid slice" class="rad-awards-card__lp" aria-hidden="true" src="/lottie/anim_002_red.json"></lottie-player>'
                    }}
                  />
                </div>
                <h3 className="rad-awards-card__title" aria-hidden="true">最先端AI技術</h3>
              </div>
              <div className="rad-awards-card__detail">
                <div className="rad-awards-card__description">
                  <h4 className="rad-awards-card__subheader">AIコンサルティングから受託開発まで、最先端技術を駆使したソリューションを提供。</h4>
                  <div className="rad-awards-card__rte">
                    <p>機械学習・ディープラーニング、自然言語処理、画像認識など、お客様のビジネスに最適なAI技術を選定し、オーダーメイドで構築します。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cmp-floating-awards-card">
            <div className="rad-awards-card rad-awards-card--blue" data-hover-delay="300">
              <button className="rad-awards-card__toggle">Toggle awards card detail view</button>
              <div className="rad-awards-card__cover">
                <div className="rad-awards-card__motion-bg">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: '<lottie-player preserveAspectRatio="xMidYMid slice" class="rad-awards-card__lp" aria-hidden="true" src="/lottie/anim_003_blue.json"></lottie-player>'
                    }}
                  />
                </div>
                <h3 className="rad-awards-card__title" aria-hidden="true">ワンストップサービス</h3>
              </div>
              <div className="rad-awards-card__detail">
                <div className="rad-awards-card__description">
                  <h4 className="rad-awards-card__subheader">企画・開発・運用・マーケティングまで、ビジネスのあらゆるフェーズをトータルサポート。</h4>
                  <div className="rad-awards-card__rte">
                    <p>システム開発、CRM導入、ホスティング、WEBマーケティングまで、お客様のビジネスインフラを包括的にサポートします。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
