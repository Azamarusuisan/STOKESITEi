import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CardGrid from '@/components/CardGrid'
import ValueHeader from '@/components/ValueHeader'
import Awards from '@/components/Awards'
import MixedMedia from '@/components/MixedMedia'
import CompanySection from '@/components/CompanySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CardGrid />
        <ValueHeader />
        <Awards />
        <MixedMedia />
        <CompanySection />
      </main>
      <Footer />
    </>
  )
}
