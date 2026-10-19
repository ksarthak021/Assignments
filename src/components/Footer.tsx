export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="wordmark wordmark--footer" href="#top">
          <span className="wordmark__mark" aria-hidden="true" />
          Northline
        </a>
        <p>© {new Date().getFullYear()} Northline Press. Pickup, press, deliver.</p>
      </div>
    </footer>
  )
}
