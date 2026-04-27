import FadeIn from './FadeIn'

export default function Company() {
  return (
    <section className="section company" id="company">
      <div className="section-inner">
        <FadeIn>
          <div className="section-header">
            <div className="section-tag">Company</div>
            <h2 className="section-title">会社概要</h2>
          </div>
        </FadeIn>
        <FadeIn>
          <table className="company-table">
            <tbody>
              <tr>
                <th>社名</th>
                <td>有限会社ストーク</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  〒169-0075<br />
                  東京都新宿区高田馬場1丁目27-1<br />
                  ファインテックビル5階
                </td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>藤原 憲市</td>
              </tr>
              <tr>
                <th>代表電話</th>
                <td>03-5928-9115</td>
              </tr>
              <tr>
                <th>事業概要</th>
                <td>
                  <ol>
                    <li>AIコンサルティング・受託開発・業務改善提案</li>
                    <li>インターネットにおけるサーバーの構築、運用、管理、賃貸業務</li>
                    <li>電気通信事業法に基づく電気通信事業</li>
                    <li>ネットワークシステムを利用したショッピングサイトの構築、企画、運営</li>
                    <li>ソフトウェアの開発、販売</li>
                    <li>インターネットを利用した各種情報提供サービス</li>
                    <li>インターネットを利用した通信販売業務並びにその取次ぎ</li>
                    <li>人材派遣業</li>
                    <li>上記に関するコンサルティング業務</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th>サービス内容</th>
                <td>
                  <ol>
                    <li>AIコンサルティング・AI受託開発</li>
                    <li>AIを活用した業務改善提案</li>
                    <li>WEBマーケティング</li>
                    <li>システム開発事業</li>
                    <li>ホスティングサービス</li>
                    <li>各種店舗向けCRMの開発・販売</li>
                    <li>各種店舗向けホームページ作成</li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.565542014831!2d139.70302631525956!3d35.71230748018705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d395e063cff%3A0x2dcd52a0aba63d39!2z44CSMTY5LTAwNzUg5p2x5Lqs6YO95paw5a6_5Yy66auY55Sw6aas5aC077yR5LiB55uu77yS77yX4oiS77yR!5e0!3m2!1sja!2sjp!4v1515739325326"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
