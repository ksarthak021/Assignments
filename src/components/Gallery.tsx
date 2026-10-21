const shots = [
  { src: '/images/gallery-1.jpg', alt: 'Pressed shirts on a rail' },
  { src: '/images/gallery-2.jpg', alt: 'Laundry basket ready for pickup' },
  { src: '/images/gallery-3.jpg', alt: 'Dry-cleaned suit finish' },
  { src: '/images/gallery-4.jpg', alt: 'Fresh shirts hanging to air' },
  { src: '/images/gallery-5.jpg', alt: 'Delivery bags prepared for return' },
  { src: '/images/gallery-6.jpg', alt: 'Neatly folded laundry stack' },
]

export function Gallery() {
  return (
    <div className="section">
      <div className="shell">
        <div className="section-head center">
          <p className="eyebrow">Gallery</p>
          <h2>A look inside the finish.</h2>
        </div>
        <div className="gallery-grid">
          {shots.map((shot) => (
            <figure key={shot.src} className="gallery-item">
              <img src={shot.src} alt={shot.alt} width={1000} height={750} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
