const plans = [
  {
    name: 'Everyday',
    price: '₹349',
    unit: '/ bag',
    detail: 'Wash & fold up to 8 kg, ideal for a week of casual wear.',
    features: ['48-hour turnaround', 'Folded & sorted', 'Free pickup in Pushkar'],
    featured: false,
  },
  {
    name: 'Stay Ready',
    price: '₹999',
    unit: '/ month',
    detail: 'Four pickups a month for guest houses and busy households.',
    features: ['Priority slots', 'Express option included', 'WhatsApp status updates'],
    featured: true,
  },
  {
    name: 'Atelier',
    price: '₹119',
    unit: '/ piece',
    detail: 'Dry cleaning & steam press for kurtas, shirts, and occasion wear.',
    features: ['Pre-clean inspection', 'Hang-ready finish', 'Quoted before start'],
    featured: false,
  },
]

export function Pricing() {
  return (
    <div className="section">
      <div className="shell">
        <div className="section-head center">
          <p className="eyebrow">Pricing</p>
          <h2>Clear rates in rupees, with no surprise fees.</h2>
          <p className="lead">
            Honest Pushkar pricing — confirm every order before we begin.
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
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                className={`btn${plan.featured ? ' btn--yellow' : ' btn--navy'}`}
                href="#book"
              >
                Get started
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
