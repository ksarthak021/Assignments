export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero-panel">
          <div className="hero-panel__copy">
            <p className="eyebrow">Laundry & dry cleaning · Pushkar</p>
            <h1 id="hero-title">Fresh clothes, thoughtful care.</h1>
            <p className="hero-panel__lead">
              Northline picks up across Pushkar, washes or dry cleans with care,
              and returns hang-ready clothes — so guest houses, homes, and stays
              can focus on the day ahead.
            </p>
            <div className="hero-panel__actions">
              <a className="btn btn--purple" href="#book">
                Book a Pickup <span aria-hidden="true">→</span>
              </a>
              <a className="btn-link" href="#how">
                <span className="play" aria-hidden="true" />
                How it works
              </a>
            </div>
          </div>

          <div className="hero-panel__media">
            <img
              src="/images/hero-basket.jpg"
              alt="Team member holding a basket of freshly cleaned white laundry"
              width={1400}
              height={2100}
              fetchPriority="high"
            />
            <aside className="trust-chip">
              <span className="trust-chip__icon" aria-hidden="true">
                ✓
              </span>
              <div>
                <strong>8+ years</strong>
                <span>Trusted laundry care in Pushkar</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
