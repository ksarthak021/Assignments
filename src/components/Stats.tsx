const stats = [
  { icon: '◎', value: '2,400+', label: 'Happy clients' },
  { icon: '◇', value: '18,000+', label: 'Loads cleaned' },
  { icon: '▹', value: '97%', label: 'On-time deliveries' },
]

const partners = ['GhatStay', 'Lakeview Inn', 'DesertNest', 'Ajmer Road Cafe', 'Pushkar Hostel Co.']

export function Stats() {
  return (
    <section className="stats" aria-label="Company highlights">
      <div className="shell">
        <div className="stats-panel">
          <p className="stats-panel__intro">
            Trusted by guest houses and families across Pushkar for reliable
            laundry every week.
          </p>
          <div className="stats-panel__grid">
            {stats.map((item) => (
              <div key={item.label} className="stat">
                <span className="stat__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="stat__value">{item.value}</p>
                  <p className="stat__label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="logo-strip" aria-label="Trusted by local stays">
          {partners.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
