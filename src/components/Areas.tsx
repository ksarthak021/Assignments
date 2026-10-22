const areas = [
  {
    title: 'Brahma Temple area',
    text: 'Guest houses, cafes, and homes around the temple and main market lanes.',
  },
  {
    title: 'Ajmer Road',
    text: 'Stays and residences along Ajmer Road with reliable morning and evening windows.',
  },
  {
    title: 'Pushkar Lake & ghats',
    text: 'Pickup near the lake rim and ghat-facing properties — confirm your landmark when booking.',
  },
  {
    title: 'Town & outskirts',
    text: 'Pushkar town coverage first; just outside? Message us and we will confirm availability.',
  },
]

export function Areas() {
  return (
    <section className="section" id="areas">
      <div className="shell panel areas-panel">
        <div className="section-head">
          <p className="eyebrow">Service areas</p>
          <h2>Where we pick up in Pushkar.</h2>
          <p className="lead">
            We serve Pushkar, Rajasthan — no invented street numbers. Share a
            landmark and we will meet you there.
          </p>
        </div>
        <div className="areas-grid">
          {areas.map((area) => (
            <article key={area.title} className="area-card">
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
