const points = [
  {
    title: 'Festival-ready capacity',
    text: 'Extra slots during Pushkar Fair and peak tourist weeks — booked early, delivered on time.',
  },
  {
    title: 'Fabric-aware sorting',
    text: 'Colors, cottons, and delicates stay separated — no mixed-load shortcuts.',
  },
  {
    title: 'Local riders',
    text: 'Pickup windows that fit temple-town traffic, with WhatsApp updates you can trust.',
  },
]

export function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="shell why-panel">
        <div className="why-panel__copy">
          <p className="eyebrow">Why Northline</p>
          <h2>Built for Pushkar’s rhythm.</h2>
          <ul className="why-list">
            {points.map((point) => (
              <li key={point.title}>
                <strong>{point.title}</strong>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="why-panel__media">
          <img
            src="/images/why-shirts.jpg"
            alt="Freshly pressed shirts hanging on a rail"
            width={1000}
            height={1500}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
