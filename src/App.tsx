import { About } from './components/About'
import { Areas } from './components/Areas'
import { Booking } from './components/Booking'
import { CareNotes } from './components/CareNotes'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Support } from './components/Support'
import { Testimonials } from './components/Testimonials'
import { Track } from './components/Track'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <div className="page">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Support />
          <HowItWorks />
          <Pricing />
          <WhyUs />
          <Areas />
          <CareNotes />
          <About />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Booking />
          <Track />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
