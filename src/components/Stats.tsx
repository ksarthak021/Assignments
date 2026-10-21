const stats = [
  { value: '2,400+', label: 'Happy clients' },
  { value: '18,000+', label: 'Loads cleaned' },
  { value: '97%', label: 'On-time deliveries' },
]

const partners = ['GhatStay', 'Lakeview Inn', 'DesertNest', 'Ajmer Road Cafe', 'Pushkar Hostel Co.']

export function Stats() {
  return (
    <div className="stats" aria-label="Company highlights">
      <div className="stats__inner">
        {stats.map((item) => (
          <div key={item.label} className="stat">
            <p className="stat__value">{item.value}</p>
            <p className="stat__label">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="logo-strip" aria-label="Trusted by local stays">
        {partners.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  )
}
