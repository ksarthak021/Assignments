import { CityMap } from './CityMap'

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&q=80',
]

export function Hero() {
  return (
    <section className="hero-shell" id="top" aria-label="Northline Press home">
      <div className="hero-panel">
        <div className="hero-panel__left">
          <header className="hero-nav">
            <a className="wordmark" href="#top">
              <span className="wordmark__mark" aria-hidden="true" />
              Northline
            </a>
            <nav className="hero-nav__links" aria-label="Primary">
              <a href="#services">
                Services <span aria-hidden="true">▾</span>
              </a>
              <a href="#pricing">
                Pricing <span aria-hidden="true">▾</span>
              </a>
              <a href="#track">Track Order</a>
            </nav>
          </header>

          <p className="hero-kicker">Effortless care for clothes you actually wear.</p>

          <div className="hero-visual">
            <img
              className="hero-shirt"
              src="/images/shirt.svg"
              alt="Crisp white dress shirt"
              width={420}
              height={520}
            />
          </div>

          <div className="hero-bottom">
            <h1 className="hero-headline">
              A better way to{' '}
              <span className="hero-headline__soft">care</span> for your clothes.
            </h1>
            <div className="social-proof" aria-label="Trusted by thousands of customers">
              <div className="social-proof__avatars">
                {avatars.map((src) => (
                  <img key={src} src={src} alt="" width={40} height={40} />
                ))}
              </div>
              <span className="social-proof__count">+5k</span>
            </div>
          </div>
        </div>

        <div className="hero-panel__right">
          <a className="book-btn" href="#book">
            Book Time
          </a>

          <div className="map-stage">
            <CityMap />
            <img
              className="map-pin map-pin--pending"
              src="/images/map-pin-pending.svg"
              alt=""
              width={88}
              height={104}
            />
            <img
              className="map-pin map-pin--done"
              src="/images/map-pin-folded.svg"
              alt=""
              width={88}
              height={104}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
