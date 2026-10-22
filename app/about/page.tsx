import Link from "next/link";
import { Hero } from "@/components/Hero";
import { BRAND, MAP, pageMeta, processSteps } from "@/lib/site";

export const metadata = pageMeta(
  "/about",
  "About the house in Jaipur",
  "About SVTP Events, the site of Shree Vishal Tent Palace: a Jaipur house for weddings and gatherings, and how the work is done.",
);

export default function AboutPage() {
  return (
    <main id="content">
      <Hero
        image="/images/hawa-mahal.jpg"
        alt="Hawa Mahal in Jaipur, a pink sandstone façade of stacked windows and small balconies."
        kicker="About"
        title={
          <>
            A Jaipur house for <em>the rite and the room.</em>
          </>
        }
        lede="Shree Vishal Tent Palace is the established name. SVTP Events is how the house is named on this site."
      />

      <section className="section">
        <div className="wrap about-grid">
          <div className="prose">
            <p className="kicker">The house</p>
            <h2>Canvas, flower, and the order of a day.</h2>
            <p>
              Shree Vishal Tent Palace builds the rooms in which families in Jaipur marry, host, and
              gather. The work is physical: timber and canvas, flowers, light, and a sequence that
              can survive a real afternoon.
            </p>
            <p>
              The city has always made rooms beyond its stone. Courtyards, canopies, and tents take
              a lawn or a palace ground and give a rite its own climate. The mandap is not a
              backdrop. Guests feel it when they arrive. The couple feel it when the noise drops.
            </p>
            <p>
              This site does not invent a founding year, an owner’s name, or a tally of weddings.
              Those details were not established from the public listing. What is published is the
              place, and a practice built around tents, mandaps, and direction.
            </p>
          </div>
          <figure className="about-photo">
            <img
              src="/images/city-palace.jpg"
              alt="A red sandstone courtyard with arched galleries, in the manner of City Palace, Jaipur."
            />
            <figcaption>Palace courtyards are one of the grounds the house works in.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <div className="intro">
            <p className="kicker">Jaipur</p>
            <h2>Pink stone, and the tents beside it.</h2>
          </div>
          <div className="jaipur-grid">
            <figure>
              <img src="/images/amber.jpg" alt="Sandstone fortifications and ramparts on a green hillside." />
              <figcaption>Hill forts in the sandstone country around the city.</figcaption>
            </figure>
            <figure>
              <img src="/images/water-palace.jpg" alt="A white palace standing in a wide body of water." />
              <figcaption>Palaces set in water, part of the city’s imagination of a room.</figcaption>
            </figure>
            <figure>
              <img src="/images/palace-door.jpg" alt="A tall carved wooden door set in a colourful palace wall." />
              <figcaption>Thresholds, colour, and the moment of arrival.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap process process-light">
          <div>
            <p className="kicker">How the work goes</p>
            <h2>Listen, walk, draw, host.</h2>
          </div>
          <ol>
            {processSteps.map((step) => (
              <li key={step.numeral}>
                <span>{step.numeral}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-maroon">
        <div className="wrap split">
          <div>
            <p className="kicker">Where the pin sits</p>
            <h2>
              {BRAND.city}, {BRAND.region}.
            </h2>
          </div>
          <div>
            <p>
              The published Google Maps pin is {BRAND.lat}, {BRAND.lng}. OpenStreetMap reads that
              point as the {BRAND.area} area of Jaipur, postal code {BRAND.postalCode}. That is a
              reading of the pin, not a street address. A house number, telephone, and opening hours
              were not confirmed, so they are not listed.
            </p>
            <div className="actions">
              <a className="btn btn-light" href={MAP.google} rel="noreferrer">
                Open the Google pin
              </a>
              <Link className="btn btn-line-light" href="/contact">
                Inquiry and map
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
