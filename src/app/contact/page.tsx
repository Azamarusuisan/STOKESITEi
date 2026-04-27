import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | 有限会社ストーク',
  description: 'AIソリューション・システム開発・WEBマーケティングに関するお問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" className="rad-main-content" role="main">
        <div className="stork-contact-page">
          <div className="stork-contact-wrapper">
            <div className="stork-contact-form">
              <h1>お問い合わせ</h1>
              <p className="form-desc">
                AIの導入、システム開発、業務改善など、お気軽にお問い合わせください。<br />
                担当者より2営業日以内にご連絡いたします。
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
