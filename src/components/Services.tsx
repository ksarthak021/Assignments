import { useInView } from '../hooks/useInView'

const services = [
  {
    title: 'Everyday laundry',
    text: 'Weekly washes finished with hotel-level pressing — bedding, shirting, and the pieces you wear on repeat. Folded or hung, labeled to your preference.',
    image: '/images/service-laundry.jpg',
    alt: 'Fresh laundry piled in a soft teal basket',
    flip: false,
  },
  {
    title: 'Dry cleaning & delicates',
    text: 'Structured jackets, silk, wool, and occasion wear receive solvent care and hand finishing. We flag concerns before we proceed — no surprises on the hanger.',
    image: '/images/service-suit.jpg',
    alt: 'Crisply pressed blue suit jacket and waistcoat',
    flip: true,
  },
  {
    title: 'Press & refresh',
    text: 'When a garment only needs steam and shape — travel wrinkles, closet rest, or last-minute polish — we restore the line without a full clean.',
    image: '/images/service-press.jpg',
    alt: 'Colorful shirts hanging on wooden hangers along a rail',
    flip: false,
  },
]

function ServiceRow({
  title,
  text,
  image,
  alt,
  flip,
}: (typeof services)[number]) {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <article
      ref={ref}
      className={`service-row${flip ? ' service-row--flip' : ''} reveal${isInView ? ' is-visible' : ''}`}
    >
      <figure className="service-row__media">
        <div className="media-frame">
          <img src={image} alt={alt} width={1600} height={1280} loading="lazy" />
        </div>
      </figure>
      <div className="service-row__copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

export function Services() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div
          className={`services__intro reveal${isInView ? ' is-visible' : ''}`}
          ref={ref}
        >
          <p className="section__eyebrow">What we care for</p>
          <h2 className="section__title" id="services-title">
            Services shaped around fabric, not volume.
          </h2>
          <p className="section__lead">
            An editorial approach to care — each offering is a practice, not a
            package tier.
          </p>
        </div>

        <div className="services__rows">
          {services.map((service) => (
            <ServiceRow key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
