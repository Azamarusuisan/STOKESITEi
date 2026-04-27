import Link from 'next/link'
import FadeIn from './FadeIn'

export default function ContactCta() {
  return (
    <section className="section contact-cta" id="contact">
      <div className="section-inner">
        <FadeIn>
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag" style={{ color: 'var(--accent-light)' }}>Contact</div>
            <h2 className="section-title">お気軽にご相談ください</h2>
            <p className="section-desc" style={{ margin: '0 auto 40px' }}>
              AIの導入、システム開発、業務改善など、まずはお気軽にお問い合わせください。<br />
              専門のコンサルタントが最適なソリューションをご提案いたします。
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-info-label">PHONE</div>
              <div className="contact-info-value">
                <a href="tel:03-5928-9115">03-5928-9115</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">LOCATION</div>
              <div className="contact-info-value" style={{ fontSize: '0.9rem' }}>
                東京都新宿区<br />高田馬場1-27-1
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <Link href="/contact" className="btn-primary">
            お問い合わせフォームへ &rarr;
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
