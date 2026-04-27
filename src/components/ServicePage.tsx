import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

interface ServicePageProps {
  label: string
  title: string
  image: string
  description: string
  features: { title: string; desc: string }[]
}

export default function ServicePage({ label, title, image, description, features }: ServicePageProps) {
  return (
    <>
      <Header />
      <main id="main" className="rad-main-content" role="main">
        <div className="stork-service-page">
          <div className="stork-service-hero">
            <img src={image} alt={title} />
          </div>
          <div className="stork-service-inner">
            <div className="stork-service-content">
              <div className="service-label">{label}</div>
              <h1>{title}</h1>
              <div className="service-description">{description}</div>

              <div className="service-features">
                <h2>サービス内容</h2>
                <ul className="feature-list">
                  {features.map((f, i) => (
                    <li key={i}>
                      <span className="feature-number">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <strong>{f.title}</strong><br />
                        {f.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="service-cta">
                お問い合わせ
                <div className="rad-icon rad-icon__chevron-right rad-icon--compact" aria-hidden="true"></div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
