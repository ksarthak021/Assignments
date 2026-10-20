const reviews = [
  {
    quote:
      'Our guest house finally has laundry that lands on time during mela season. Guests notice the crisp sheets.',
    name: 'Ananya Sharma',
    role: 'Host, Brahma Temple area',
    avatar: '/images/avatars/a1.jpg',
  },
  {
    quote:
      'Pickup from Ajmer Road is reliable, and WhatsApp updates mean I never wonder where the bags are.',
    name: 'Rohit Mehta',
    role: 'Resident, Pushkar',
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
            alt="Neatly folded stack of freshly cleaned clothes"
            width={1100}
            height={1650}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
