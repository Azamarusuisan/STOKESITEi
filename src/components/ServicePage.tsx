import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

interface ServicePageProps {
  label: string
  title: string
  description: string
  features: { title: string; desc: string }[]
}

export default function ServicePage({ label, title, description, features }: ServicePageProps) {
  return (
    <>
      <Header />
      <main>
        <article className="service-page">
          <div className="service-page__inner">
            <p className="service-page__label">{label}</p>
            <h1 className="service-page__title">{title}</h1>
            <p className="service-page__desc">{description}</p>

            <section className="service-page__features">
              <h2>サービス内容</h2>
              <ul>
                {features.map((f, i) => (
                  <li key={i}>
                    <span className="service-page__num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <Link href="/contact" className="btn btn--primary">お問い合わせ</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
