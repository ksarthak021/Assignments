const notes = [
  {
    title: 'Whites & colors',
    text: 'We separate whites, darks, and brights. Flag anything new or untested for dye bleed.',
  },
  {
    title: 'Delicates',
    text: 'Silk, chiffon, and embellished pieces go to gentle cycles or dry cleaning — ask when booking.',
  },
  {
    title: 'Stains',
    text: 'Point out oil, turmeric, or henna marks. We pretreat when possible and quote before harsh methods.',
  },
  {
    title: 'Hanging vs folding',
    text: 'Tell us your preference per bag. Guest-house sheets typically return folded; shirts hang-ready.',
  },
]

export function CareNotes() {
  return (
    <section className="section" id="care">
      <div className="shell">
        <div className="section-head center">
          <p className="eyebrow">Garment care</p>
          <h2>Notes that keep fabrics looking right.</h2>
          <p className="lead">
            Clear habits from our Pushkar studio — so returns look the way you expect.
          </p>
        </div>
        <div className="care-grid">
          {notes.map((note) => (
            <article key={note.title} className="care-card">
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}