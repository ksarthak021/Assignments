const faqs = [
  {
    q: 'Which areas of Pushkar do you cover?',
    a: 'We pick up across Pushkar town, including the Brahma Temple area and stays along Ajmer Road, and if you are just outside town we will confirm availability.',
  },
  {
    q: 'How fast is express laundry?',
    a: 'Express orders booked before 10a are typically returned the same evening, and standard wash & fold is about 48 hours.',
  },
  {
    q: 'How do I pay?',
    a: 'UPI, cash on delivery, or card at the studio, with monthly Stay Ready plans billed at the start of each cycle.',
  },
  {
    q: 'Can I track my order?',
    a: 'Yes. Use your reference number (for example NL-1042) on the Track section for live status stages.',
  },
  {
    q: 'Do you handle guest-house linen?',
    a: 'Yes — sheets, towels, and duvet covers on scheduled pickups. Ask about Stay Ready if you need four windows a month.',
  },
]

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="shell panel faq-panel">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Questions we hear in Pushkar.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
