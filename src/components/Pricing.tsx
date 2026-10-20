const plans = [
  {
    name: 'Essentials',
    price: '$39',
    unit: '/ bag',
    detail: 'Wash & fold up to 15 lb with a 48-hour turnaround.',
    features: ['Standard delivery window', 'Sorted & labeled', 'Email updates'],
    featured: false,
  },
  {
    name: 'Routine',
    price: '$119',
    unit: '/ month',
    detail: 'Four pickups a month with priority slots and hang-finish on shirting.',
    features: ['Priority scheduling', 'Free hang-finish', 'Dedicated route notes'],
    featured: true,
  },
  {
    name: 'Atelier',
    price: '$29',
    unit: '/ piece',
    detail: 'Dry cleaning and press for structured garments — quoted before we start.',
    features: ['Pre-clean inspection', 'Hand finishing', 'Garment notes on return'],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="shell">
        <div className="section-head center">
          <p className="eyebrow">Pricing</p>
          <h2>Simple plans. Clear totals.</h2>
          <p className="lead">
            Confirm every order before we begin — no surge pricing, no surprise fees.
          </p>
        </div>
        <div className="price-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`price-card${plan.featured ? ' price-card--featured' : ''}`}
            >
              {plan.featured ? <span className="price-card__badge">Most popular</span> : null}
              <h3>{plan.name}</h3>
              <p className="price-card__amount">
                {plan.price}
                <span>{plan.unit}</span>
              </p>
              <p className="price-card__detail">{plan.detail}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                className={`btn${plan.featured ? ' btn--yellow' : ' btn--navy'}`}
                href="#contact"
              >
                Get started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
