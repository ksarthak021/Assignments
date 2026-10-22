import { LOCATION } from '../lib/constants'

export function About() {
  return (
    <section className="section" id="about">
      <div className="shell about-panel">
        <figure className="about-panel__media">
          <img
            src="/images/about-care.jpg"
            alt="Garments being carefully sorted for laundry care"
            width={1100}
            height={733}
            loading="lazy"
          />
        </figure>
        <div className="about-panel__copy">
          <p className="eyebrow">About Northline</p>
          <h2>Local laundry care rooted in Pushkar.</h2>
          <p>
            We started as a small finishing studio for guest houses that needed
            reliable turnaround during festival season. Today Northline serves
            homes, hostels, and stays across {LOCATION.label} with the same
            promise: clear windows, careful sorting, and hang-ready returns.
          </p>
          <p>
            Whether you are near the Brahma Temple or along Ajmer Road, we
            collect on your schedule and keep you updated until delivery.
          </p>
          <a className="btn btn--purple" href="#book">
            Book your first pickup <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
