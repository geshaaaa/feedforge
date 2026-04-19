import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoCarousel from '@/components/LogoCarousel'
import StatsBanner from '@/components/StatsBanner'
import SearchChanging from '@/components/SearchChanging'
import AISolution from '@/components/AISolution'
import SimpleProcess from '@/components/SimpleProcess'
import BuiltForTeams from '@/components/BuiltForTeams'
import ComplexTechnology from '@/components/ComplexTechnology'
import CatalogPerfection from '@/components/CatalogPerfection'
import WorksWhereYouDo from '@/components/WorksWhereYouDo'
import StartBuilding from '@/components/StartBuilding'
import DemoRequest from '@/components/DemoRequest'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen min-w-0 overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <LogoCarousel />
      <StatsBanner />
      <SearchChanging />
      <CatalogPerfection />
      <AISolution />
      <SimpleProcess />
      <BuiltForTeams />
      <ComplexTechnology />
      <WorksWhereYouDo />
      <DemoRequest />
      <StartBuilding />
      <Footer />
    </main>
  )
}

