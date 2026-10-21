export function Hero() {
  return (
    <div className="hero" aria-labelledby="hero-title">
      <div className="hero-card">
        <div className="hero-card__copy">
          <p className="eyebrow">Fresh clothes for Pushkar days</p>
          <h1 id="hero-title">Laundry care that keeps pace with temple town life.</h1>
          <p className="hero-card__lead">
            Northline picks up across Pushkar, then washes or dry cleans with
            care and returns your clothes hang-ready, so you can focus on
            guests, guest houses, and the ghats.
          </p>
          <div className="hero-card__actions">
            <a className="btn btn--yellow" href="#book">
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
            src="/images/hero-basket.jpg"
            alt="Team member holding a basket of freshly cleaned white laundry"
            width={1400}
            height={2100}
            fetchPriority="high"
          />
          <div className="trust-badge">
            <strong>8+</strong>
            <span>Years serving Pushkar</span>
          </div>
          <aside className="simplify-card">
            <h2>Laundry, simplified.</h2>
            <ul>
              <li>Doorstep pickup & delivery</li>
              <li>Wash, press & dry cleaning</li>
              <li>On-time return in Pushkar</li>
            </ul>
            <a className="simplify-card__cta" href="#book">
              Get started <span aria-hidden="true">→</span>
            </a>
          </aside>
        </div>
      </div>
    </div>
  )
}
