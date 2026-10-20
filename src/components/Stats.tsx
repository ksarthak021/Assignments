const stats = [
  { value: '1,250+', label: 'Happy clients' },
  { value: '7,800+', label: 'Loads cleaned' },
  { value: '5,000+', label: 'On-time deliveries' },
]

export function Stats() {
  return (
    <section className="stats" aria-label="Company highlights">
      <div className="shell stats__inner">
        {stats.map((item) => (
          <div key={item.label} className="stat">
            <p className="stat__value">{item.value}</p>
            <p className="stat__label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
