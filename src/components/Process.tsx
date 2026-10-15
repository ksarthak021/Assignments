import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    name: 'Collect',
    text: 'We pick up on your schedule — labeled bags, clear notes, no counter wait. Prefer drop-off? Our studio welcomes by appointment.',
  },
  {
    num: '02',
    name: 'Care',
    text: 'Each garment is sorted by fiber and finish. Spot treatment, wash, or dry clean follows the fabric — never a one-size cycle.',
  },
  {
    num: '03',
    name: 'Return',
    text: 'Pressed, inspected, and delivered within a reliable window. Hang-ready pieces come home looking quietly exact.',
  },
]

export function Process() {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const visible = isInView ? ' is-visible' : ''

  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container" ref={ref}>
        <div className={`process__intro reveal${visible}`}>
          <p className="section__eyebrow">How it works</p>
          <h2 className="section__title" id="process-title">
            Three steps. No theater.
          </h2>
          <p className="section__lead">
            A straightforward rhythm designed around your week — pickup, precise
            care, and a return you can count on.
          </p>
        </div>

        <ol className="process__list">
          {steps.map((step, index) => (
            <li
              key={step.num}
              className={`process__item reveal reveal-delay-${index + 1}${visible}`}
            >
              <span className="process__num" aria-hidden="true">
                {step.num}
              </span>
              <h3 className="process__name">{step.name}</h3>
              <p className="process__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
