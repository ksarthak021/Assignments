const points = [
  {
    title: 'Fabric-first sorting',
    text: 'We never dump mixed loads. Colors, fibers, and finishes stay separated.',
  },
  {
    title: 'Reliable windows',
    text: 'Pickup and delivery slots you can plan around — with live status updates.',
  },
  {
    title: 'Inspected returns',
    text: 'Every bag is checked before it leaves. Issues are flagged before you notice.',
  },
]

export function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="shell panel why-panel">
        <div className="why-panel__copy">
          <p className="eyebrow">Why Northline</p>
          <h2>Built for people who notice the finish.</h2>
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
