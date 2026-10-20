const services = [
  {
    title: 'Wash & fold',
    text: 'Weekly essentials cleaned soft, sorted, and labeled for drawers and closets.',
    image: '/images/service-wash.jpg',
    alt: 'Laundry basket filled with everyday clothing',
  },
  {
    title: 'Dry cleaning',
    text: 'Jackets, silk, and occasion wear finished with careful solvent care and press.',
    image: '/images/service-dry.jpg',
    alt: 'Crisply pressed suit ready for wear',
  },
  {
    title: 'Press & hang',
    text: 'Travel wrinkles and closet rest restored with steam and shape — hang-ready.',
    image: '/images/service-press.jpg',
    alt: 'Colorful shirts hanging on a professional rack',
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="shell panel services-panel">
        <div className="services-panel__intro">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Laundry services for modern living.</h2>
            <p className="lead">
              From everyday loads to delicate dry cleaning — photography of real
              care, not stock fluff.
            </p>
          </div>
          <a className="btn btn--yellow" href="#pricing">
            Explore pricing
          </a>
        </div>

        <div className="services-panel__grid">
          <figure className="services-panel__feature">
            <img
              src="/images/service-hang.jpg"
              alt="Clothes hanging neatly on wooden hangers"
              width={1200}
              height={800}
              loading="lazy"
            />
          </figure>
          <div className="service-cards">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <img
                  src={service.image}
                  alt={service.alt}
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
