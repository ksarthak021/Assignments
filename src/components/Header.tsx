import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#services', label: 'Care' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#top">
          Northline Press
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-nav"
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary site-nav__cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Schedule pickup
          </a>
        </nav>
      </div>
    </header>
  )
}
