const services = [
  {
    title: 'Wash & fold',
    text: 'Weekly essentials returned soft, sorted, and labeled — ready for the drawer.',
    icon: '01',
  },
  {
    title: 'Dry cleaning',
    text: 'Structured pieces and delicates finished with careful solvent care and press.',
    icon: '02',
  },
  {
    title: 'Pickup & delivery',
    text: 'Scheduled windows across the city, with live route updates when your bag is on the move.',
    icon: '03',
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="section-panel">
        <div className="section-panel__intro">
          <p className="eyebrow">Services</p>
          <h2>Everything you need to stay wardrobe-ready.</h2>
          <p className="lead">
            Simple offerings, clear timelines, and finishes you can feel — without the counter wait.
          </p>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article key={item.title} className="service-tile">
              <span className="service-tile__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
