const points = [
  { icon: '◉', title: 'Doorstep pickup', text: 'Windows that fit Pushkar mornings and evenings.' },
  { icon: '◈', title: 'Fabric-aware care', text: 'Colors, cottons, and delicates stay separated.' },
  { icon: '◇', title: 'Flexible plans', text: 'One-off bags or monthly Stay Ready cycles.' },
  { icon: '◎', title: 'Clear updates', text: 'WhatsApp status from pickup to delivery.' },
]

export function Support() {
  return (
    <section className="section" id="support">
      <div className="shell support-grid">
        <div className="support-copy">
          <p className="eyebrow">Why book with us</p>
          <h2>Support for every step of laundry day.</h2>
          <div className="support-points">
            {points.map((point) => (
              <article key={point.title} className="support-point">
                <span className="support-point__icon" aria-hidden="true">
                  {point.icon}
                </span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="quote-card">
          <span className="quote-card__mark" aria-hidden="true">
            “
          </span>
          <p>
            Hang-ready returns, clear windows, and riders who know Pushkar
            traffic — so your week stays free of laundry piles.
          </p>
          <a className="btn btn--purple" href="#book">
            Book a Pickup <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </section>
  )
}
