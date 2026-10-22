"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/site";
import { Wordmark } from "./Wordmark";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const root = menuRef.current;
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");
    document.body.classList.add("scroll-lock");
    content?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const nodes = () => {
      const toggle = toggleRef.current;
      const inside = Array.from(root?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);
      return toggle ? [toggle, ...inside] : inside;
    };
    nodes().find((node) => node !== toggleRef.current)?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !root) return;
      const list = nodes();
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("scroll-lock");
      content?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${solid ? " is-solid" : ""}${open ? " is-open" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="wordmark-link" aria-label="SVTP Events, home">
            <Wordmark />
          </Link>
          <nav className="nav-desktop" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="btn header-cta" href="/contact#inquiry">
            Inquire
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-icon" aria-hidden="true" />
          </button>
        </div>
      </header>
      <button
        type="button"
        className={`nav-scrim${open ? " is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`nav-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={open ? undefined : true}
      >
        <nav aria-label="Mobile">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-light nav-drawer-cta" href="/contact#inquiry">
          Inquire
        </Link>
      </div>
    </>
  );
}
