export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/hero-wash.jpg"
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content">
        <h1 className="hero__brand" id="hero-brand">
          Northline Press
        </h1>
        <p className="hero__headline">Garment care, quietly elevated.</p>
        <p className="hero__support">
          Premium laundry and dry cleaning for people who notice the finish —
          collected, cared for, and returned with intention.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            Schedule a pickup
          </a>
          <a className="btn btn--ghost btn--on-light" href="#process">
            See how it works
          </a>
        </div>
      </div>
    </section>
  )
}
