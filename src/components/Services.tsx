const cards = [
  {
    title: 'Wash & fold',
    text: 'Everyday loads sorted, washed, and folded — ready for drawers and guest rooms.',
    icon: '01',
  },
  {
    title: 'Express wash',
    text: 'Same-day or next-morning turnaround when checkout or travel cannot wait.',
    icon: '02',
  },
  {
    title: 'Dry cleaning',
    text: 'Kurtas, jackets, and occasion wear cleaned and pressed for temple visits.',
    icon: '03',
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="services-panel">
          <figure className="services-panel__media">
            <img
              src="/images/services-feature.jpg"
              alt="Person folding a crisp white sheet in the Northline studio"
              width={1400}
              height={2100}
              loading="lazy"
            />
          </figure>
          <div className="services-panel__copy">
            <p className="eyebrow">Services</p>
            <h2>Keep every load in careful focus.</h2>
            <p className="lead">
              From guest-house sheets to delicate dry cleaning — Northline covers
              homes, hostels, and stays around the Brahma Temple area and Ajmer
              Road.
            </p>
            <div className="service-card-list">
              {cards.map((card) => (
                <article key={card.title} className="service-card">
                  <span className="service-card__icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <a className="btn btn--purple" href="#pricing">
              Explore all services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="service-extra" id="more-services">
          <article className="service-extra__item">
            <h3>Press only</h3>
            <p>Steam press for shirts, kurtas, and uniforms that need a crisp finish.</p>
          </article>
          <article className="service-extra__item">
            <h3>Household linen</h3>
            <p>Bedsheets, towels, and duvet covers for homes and guest houses.</p>
          </article>
          <article className="service-extra__item">
            <h3>Guest-house loads</h3>
            <p>Scheduled pickups sized for busy stays during fair and festival weeks.</p>
          </article>
        </div>
      </div>
    </section>
  )
}