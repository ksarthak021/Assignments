import { useInView } from '../hooks/useInView'

export function Contact() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div
          className={`contact__panel reveal${isInView ? ' is-visible' : ''}`}
          ref={ref}
        >
          <div>
            <p className="section__eyebrow">Begin care</p>
            <h2 className="contact__title" id="contact-title">
              Ready for a calmer laundry week?
            </h2>
            <p className="contact__text">
              Tell us your neighborhood and preferred window. We&apos;ll confirm
              pickup within one business day — no app maze, no surge pricing.
            </p>
            <div className="contact__actions">
              <a className="btn btn--primary" href="mailto:hello@northlinepress.com">
                Email the studio
              </a>
              <a className="btn btn--ghost" href="tel:+12065550140">
                Call (206) 555-0140
              </a>
            </div>
          </div>

          <dl className="contact__meta">
            <div>
              <dt>Studio</dt>
              <dd>
                418 Mercer Street
                <br />
                Seattle, WA 98109
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>
                Mon–Fri 8a–6p
                <br />
                Sat 9a–2p · by appointment
              </dd>
            </div>
            <div>
              <dt>Service area</dt>
              <dd>Seattle, Bellevue, and the Eastside</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
