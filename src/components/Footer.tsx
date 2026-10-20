export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <a className="brand brand--light" href="#top">
          <span className="brand__mark" aria-hidden="true" />
          Northline
        </a>
        <nav aria-label="Footer">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>© {new Date().getFullYear()} Northline. Pickup, clean, deliver.</p>
      </div>
    </footer>
  )
}
