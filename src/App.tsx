import { Booking } from './components/Booking'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Track } from './components/Track'

function App() {
  return (
    <>
      <a className="skip-link" href="#services">
        Skip to content
      </a>
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Track />
        <Booking />
      </main>
      <Footer />
    </>
  )
}

export default App
