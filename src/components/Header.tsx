import { useEffect, useState } from 'react'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#track', label: 'Track' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const scroller = document.getElementById('snap-scroller')
    const onScroll = () => {
      const y = scroller ? scroller.scrollTop : window.scrollY
      setScrolled(y > 10)
    }
    onScroll()
    scroller?.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      scroller?.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function goTo(href: string) {
    setOpen(false)
    if (!href.startsWith('#')) return
    const id = href.slice(1)
    const target = document.getElementById(id)
    const panel = target?.closest('.snap-panel') as HTMLElement | null
    ;(panel ?? target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="shell site-header__inner">
        <a
          className="brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            goTo('#top')
          }}
        >
          <span className="brand__mark" aria-hidden="true" />
          Northline
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                goTo(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--navy btn--sm"
            href="#book"
            onClick={(e) => {
              e.preventDefault()
              goTo('#book')
            }}
          >
            Book a Pickup
          </a>
        </nav>
      </div>
    </header>
  )
}
