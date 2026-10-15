export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__brand">Northline Press</p>
        <p className="site-footer__note">
          © {year} Northline Press. Premium laundry & garment care.
        </p>
      </div>
    </footer>
  )
}
