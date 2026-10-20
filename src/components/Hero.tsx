export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero-card">
          <div className="hero-card__copy">
            <p className="eyebrow">Cleaner clothes, a brighter week</p>
            <h1 id="hero-title">Effortless laundry for busy urban living.</h1>
            <p className="hero-card__lead">
              We pick up, wash or dry clean, and deliver hang-ready clothes —
              so your week stays clear of laundry day.
            </p>
            <div className="hero-card__actions">
              <a className="btn btn--yellow" href="#contact">
                Book a Pickup
              </a>
              <a className="btn-link" href="#how">
                <span className="play" aria-hidden="true" />
                How it Works
              </a>
            </div>
          </div>

          <div className="hero-card__media">
            <img
              src="/images/hero-person.jpg"
              alt="Customer loading laundry into a home washer with a laundry basket"
              width={1400}
              height={2100}
              fetchPriority="high"
            />
            <div className="trust-badge">
              <strong>12+</strong>
              <span>Years of trusted service</span>
            </div>
            <aside className="simplify-card" aria-label="Laundry simplified">
              <h2>Laundry, simplified.</h2>
              <ul>
                <li>Scheduled pickup & delivery</li>
                <li>Professional wash & press</li>
                <li>On-time, hang-ready return</li>
              </ul>
              <a className="simplify-card__cta" href="#contact">
                Get started <span aria-hidden="true">→</span>
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
