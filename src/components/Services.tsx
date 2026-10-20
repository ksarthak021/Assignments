const cards = [
  {
    title: 'Express wash',
    text: 'Same-day or next-morning turnaround for guests rushing to checkout.',
    icon: 'Ex',
  },
  {
    title: 'Dry cleaning',
    text: 'Kurtas, jackets, and occasion wear cleaned and pressed for temple visits.',
    icon: 'Dc',
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="shell panel services-panel">
        <div className="services-panel__grid">
          <figure className="services-panel__feature">
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
            <h2>Laundry services for modern Pushkar living.</h2>
            <p className="lead">
              From guest-house loads to delicate dry cleaning — we cover homes,
              hostels, and stays around the Brahma Temple area and Ajmer Road.
            </p>
            <div className="service-mini-grid">
              {cards.map((card) => (
                <article key={card.title} className="service-mini">
                  <span className="service-mini__icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
            <a className="btn btn--yellow" href="#pricing">
              Explore our services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
