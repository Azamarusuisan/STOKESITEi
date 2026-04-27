import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__title">AI × テクノロジーで変革を</p>
        </div>
        <div className="site-footer__cols">
          <ul>
            <li><Link href="/#services">サービス</Link></li>
            <li><Link href="/#ai">AIソリューション</Link></li>
            <li><Link href="/#company">会社概要</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
          <ul>
            <li><a href="tel:03-5928-9115">TEL: 03-5928-9115</a></li>
            <li>東京都新宿区高田馬場1-27-1</li>
            <li>ファインテックビル5階</li>
          </ul>
        </div>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} Stork Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
