const steps = [
  {
    num: '01',
    title: 'Book a window',
    text: 'Tell us your Pushkar address, service, and preferred slot. We confirm by WhatsApp or call.',
  },
  {
    num: '02',
    title: 'We collect & clean',
    text: 'Bags are labeled, sorted by fabric, then washed, dry cleaned, or pressed as ordered.',
  },
  {
    num: '03',
    title: 'Delivered ready',
    text: 'Clothes return folded or hung within your window — with a reference you can track.',
  },
]

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Three steps from pile to polish.</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article key={step.num} className="step-card">
              <span className="step-card__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
