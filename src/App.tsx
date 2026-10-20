import { About } from './components/About'
import { Booking } from './components/Booking'
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
import { Testimonials } from './components/Testimonials'
import { Track } from './components/Track'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <About />
        <HowItWorks />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Track />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
