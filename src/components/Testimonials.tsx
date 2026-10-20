const reviews = [
  {
    quote:
      'Pickup is on time, shirts come back crisp, and I never have to chase a status update. Northline just quietly works.',
    name: 'Maya Chen',
    role: 'Product manager, Capitol Hill',
    avatar: '/images/avatars/a1.jpg',
  },
  {
    quote:
      'We switched our office towels and staff shirts to their Routine plan. Fewer missed days, cleaner finishes.',
    name: 'Jordan Lee',
    role: 'Studio lead, Bellevue',
    avatar: '/images/avatars/a2.jpg',
  },
]

export function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="shell panel reviews-panel">
        <div className="reviews-panel__copy">
          <p className="eyebrow">Testimonials</p>
          <h2>What our clients say</h2>
          <div className="review-list">
            {reviews.map((review) => (
              <blockquote key={review.name} className="review">
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p>“{review.quote}”</p>
                <footer>
                  <img src={review.avatar} alt="" width={48} height={48} loading="lazy" />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
        <figure className="reviews-panel__media">
          <img
            src="/images/folded-laundry.jpg"
            alt="Neatly folded stack of freshly cleaned denim"
            width={1100}
            height={1650}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
