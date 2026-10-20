export function About() {
  return (
    <section className="section" id="about">
      <div className="shell panel about-panel">
        <div className="about-panel__media">
          <img
            src="/images/about-care.jpg"
            alt="Specialist carefully sorting garments for professional care"
            width={1100}
            height={733}
            loading="lazy"
          />
        </div>
        <div className="about-panel__copy">
          <p className="eyebrow">About Northline</p>
          <h2>Neighborhood laundry care with boutique standards.</h2>
          <p>
            Northline started as a small finishing studio for people who wanted
            laundry to feel considered — clear communication, careful sorting,
            and finishes you notice when you put a shirt on.
          </p>
          <p>
            Today we serve homes and small offices across the city with the same
            promise: reliable pickup windows, fabric-aware cleaning, and
            hang-ready returns you can count on.
          </p>
          <a className="btn btn--yellow" href="#contact">
            Meet the studio
          </a>
        </div>
      </div>
    </section>
  )
}
