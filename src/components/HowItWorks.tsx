const steps = [
  {
    num: '01',
    title: 'Book a window',
    text: 'Choose a pickup time online. Bag your clothes — we bring labeled bags if you need them.',
  },
  {
    num: '02',
    title: 'We clean with care',
    text: 'Each load is sorted by fabric. Wash, dry clean, or press — never a one-size cycle.',
  },
  {
    num: '03',
    title: 'Delivered ready',
    text: 'Folded or hung, inspected, and returned in your window with a clear order summary.',
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
