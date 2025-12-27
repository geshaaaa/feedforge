import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoCarousel from '@/components/LogoCarousel'
import StatsBanner from '@/components/StatsBanner'
import SearchChanging from '@/components/SearchChanging'
import SimpleProcess from '@/components/SimpleProcess'
import BuiltForTeams from '@/components/BuiltForTeams'
import CatalogPerfection from '@/components/CatalogPerfection'
import WorksWhereYouDo from '@/components/WorksWhereYouDo'
import StartBuilding from '@/components/StartBuilding'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LogoCarousel />
      <StatsBanner />
      <SearchChanging />
      <SimpleProcess />
      <BuiltForTeams />
      <CatalogPerfection />
      <WorksWhereYouDo />
      <StartBuilding />
      <Footer />
    </main>
  )
}

