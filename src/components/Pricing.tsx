const plans = [
  {
    name: 'Essentials',
    price: '$39',
    period: '/bag',
    detail: 'Wash & fold up to 15 lb, 48-hour turnaround, standard delivery window.',
    featured: false,
  },
  {
    name: 'Routine',
    price: '$119',
    period: '/mo',
    detail: 'Four pickups a month, priority slots, and free hang-finish on shirting.',
    featured: true,
  },
  {
    name: 'Atelier',
    price: '$29',
    period: '/piece',
    detail: 'Dry cleaning and press for structured garments — quoted before we begin.',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-panel">
        <div className="section-panel__intro">
          <p className="eyebrow">Pricing</p>
          <h2>Transparent rates. No surge surprises.</h2>
          <p className="lead">
            Choose a bag, a monthly rhythm, or piece-by-piece care — you always confirm before we start.
          </p>
        </div>
        <div className="price-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`price-card${plan.featured ? ' price-card--featured' : ''}`}
            >
              <h3>{plan.name}</h3>
              <p className="price-card__amount">
                {plan.price}
                <span>{plan.period}</span>
              </p>
              <p>{plan.detail}</p>
              <a className="btn-soft" href="#book">
                Choose plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
