import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CardGrid from '@/components/CardGrid'
import ValueHeader from '@/components/ValueHeader'
import ClientCarousel from '@/components/ClientCarousel'
import Awards from '@/components/Awards'
import MixedMedia from '@/components/MixedMedia'
import CompanySection from '@/components/CompanySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="rad-main-content" role="main">
        <div className="root responsivegrid">
          <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">
            <Hero />
            <CardGrid />
            <ValueHeader />
            <ClientCarousel />
            <Awards />
            <MixedMedia />
            <CompanySection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
