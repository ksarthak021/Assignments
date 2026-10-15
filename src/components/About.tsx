import { useInView } from '../hooks/useInView'

export function About() {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const visible = isInView ? ' is-visible' : ''

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container" ref={ref}>
        <div className="about__grid">
          <div className={`about__copy reveal${visible}`}>
            <p className="section__eyebrow">Who we are</p>
            <h2 className="section__title" id="about-title">
              A quieter standard for everyday cloth.
            </h2>
            <p>
              Northline Press began as a small finishing atelier for clients who
              wanted laundry to feel considered — not rushed through a counter
              line. We still work that way: fewer garments at a time, clearer
              communication, and finishes you can feel in the hand.
            </p>
            <p>
              From pressed shirting to delicate dry cleaning, every piece moves
              through a calm, documented process. The result is simple: clothes
              that look like they belong to someone who cares.
            </p>
          </div>

          <figure className={`about__figure reveal reveal-delay-1${visible}`}>
            <div className="media-frame">
              <img
                src="/images/about-knit.jpg"
                alt="Cream knit garment hanging on a wooden hanger"
                width={1600}
                height={2000}
                loading="lazy"
              />
            </div>
            <figcaption className="about__caption">
              Delicates on the rail — soft light, patient hands.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
