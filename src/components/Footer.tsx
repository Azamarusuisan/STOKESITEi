import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="customexperiencefragment experiencefragment">
      <div className="cmp-experiencefragment cmp-experiencefragment--global-footer">
        <div className="cmp-container">
          <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
            <div className="footerblock aem-GridColumn aem-GridColumn--default--12">
              <div className="rad-footer">
                <div className="rad-footer__main">
                  <h4 className="rad-footer__title">AI × テクノロジーで変革を</h4>
                  <div className="rad-footer__main-bottom">
                    <div className="rad-footer__links-container">
                      <ul className="rad-footer__links-column">
                        <li className="rad-footer__link-item">
                          <Link href="/#services" className="rad-footer__link">サービス</Link>
                        </li>
                        <li className="rad-footer__link-item">
                          <Link href="/#ai" className="rad-footer__link">AIソリューション</Link>
                        </li>
                        <li className="rad-footer__link-item">
                          <Link href="/#company" className="rad-footer__link">会社概要</Link>
                        </li>
                        <li className="rad-footer__link-item">
                          <Link href="/contact" className="rad-footer__link">お問い合わせ</Link>
                        </li>
                      </ul>
                      <ul className="rad-footer__links-column">
                        <li className="rad-footer__link-item">
                          <a href="tel:03-5928-9115" className="rad-footer__link">TEL: 03-5928-9115</a>
                        </li>
                        <li className="rad-footer__link-item">
                          <span className="rad-footer__link" style={{ cursor: 'default' }}>東京都新宿区高田馬場1-27-1</span>
                        </li>
                        <li className="rad-footer__link-item">
                          <span className="rad-footer__link" style={{ cursor: 'default' }}>ファインテックビル5階</span>
                        </li>
                      </ul>
                    </div>
                    <p className="rad-footer__copyright">
                      &copy; <span className="rad-footer__this-year">2025</span>{' '}
                      Stork Co., Ltd. All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div className="rad-footer__lottie-positioner">
                  <div className="rad-footer__lottie-centerer">
                    <div className="rad-footer__lottie-ratio-maintainer" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
