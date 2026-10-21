import { LOCATION, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_E164 } from '../lib/constants'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="brand brand--light" href="#top">
          <span className="brand__mark" aria-hidden="true" />
          Northline
        </a>
        <nav aria-label="Footer">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#gallery">Gallery</a>
          <a href="#track">Track</a>
          <a href="#faq">FAQ</a>
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="site-footer__meta">
          <p>{LOCATION.label}</p>
          <p>
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            {' · '}
            <a href={`https://wa.me/${WHATSAPP_E164}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </p>
          <p>© {new Date().getFullYear()} Northline. Pickup, clean, deliver.</p>
        </div>
      </div>
    </footer>
  )
}
