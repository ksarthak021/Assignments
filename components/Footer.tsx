import Link from "next/link";
import { BRAND, MAP, NAV } from "@/lib/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Wordmark />
          <p>
            {BRAND.name} is {BRAND.established}, a wedding and event house in {BRAND.city}.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="kicker">House</p>
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="kicker">Visit</p>
          <p>
            <a href={BRAND.phoneTel}>{BRAND.phone}</a>
            <br />
            <a href={BRAND.emailMailto}>{BRAND.email}</a>
          </p>
          <p>
            {BRAND.streetAddress}
            <br />
            {BRAND.city} {BRAND.postalCode}
          </p>
          <p>
            <a href={MAP.google} rel="noreferrer">
              Google Maps
            </a>
          </p>
        </div>
      </div>
      <div className="wrap footer-meta">
        <p>© {new Date().getFullYear()} {BRAND.name}</p>
      </div>
    </footer>
  );
}
