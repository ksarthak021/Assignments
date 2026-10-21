import type { ReactNode } from 'react'
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

function SnapCard({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`snap-panel${className ? ` ${className}` : ''}`} id={id}>
      <div className="snap-card">{children}</div>
    </section>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
      <main className="snap-scroller" id="snap-scroller">
        <SnapCard id="top" className="snap-panel--hero">
          <Hero />
          <Stats />
        </SnapCard>

        <SnapCard id="services">
          <Services />
          <HowItWorks />
        </SnapCard>

        <SnapCard id="pricing">
          <Pricing />
        </SnapCard>

        <SnapCard id="why">
          <About />
          <WhyUs />
        </SnapCard>

        <SnapCard id="reviews">
          <Testimonials />
        </SnapCard>

        <SnapCard id="gallery">
          <Gallery />
        </SnapCard>

        <SnapCard id="faq">
          <FAQ />
        </SnapCard>

        <SnapCard id="book">
          <Booking />
          <Track />
        </SnapCard>

        <SnapCard id="contact">
          <Contact />
          <Footer />
        </SnapCard>
      </main>
    </>
  )
}

export default App
