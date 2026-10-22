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
            {BRAND.name} is the name of this site for {BRAND.established}, a wedding and event house
            in {BRAND.city}.
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
          <p className="kicker">Map pin</p>
          <p>
            {BRAND.lat}, {BRAND.lng}
            <br />
            {BRAND.city}, {BRAND.region}
          </p>
          <p>
            <a href={MAP.google} rel="noreferrer">
              Google Maps
            </a>
            <br />
            <a href={MAP.osm} rel="noreferrer">
              OpenStreetMap
            </a>
          </p>
        </div>
      </div>
      <div className="wrap footer-meta">
        <p>
          Photographs are freely licensed studies from Unsplash. They describe the craft — mandap,
          tent, flower, palace light — and are not a catalogue of SVTP commissions.
        </p>
        <p>© {new Date().getFullYear()} {BRAND.name}</p>
      </div>
    </footer>
  );
}
