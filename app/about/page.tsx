import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";
import { BRAND, MAP, pageMeta, processSteps } from "@/lib/site";

export const metadata = pageMeta(
  "/about",
  "About us",
  "Shree Vishal Tent Palace, also called SVTP Events, has been curating weddings and gatherings in Jaipur since 1990 — more than 35 years of tents, mandaps, décor, and the memory of the day.",
);

export default function AboutPage() {
  return (
    <main id="content">
      <Hero
        image="/images/hawa-mahal.jpg"
        alt="Hawa Mahal in Jaipur, a pink sandstone façade of stacked windows and small balconies."
        kicker="About us"
        title={
          <>
            Curating the experience <em>since 1990.</em>
          </>
        }
        lede="Shree Vishal Tent Palace, also called SVTP Events, has spent more than 35 years making the memories. The work is the tent, the mandap, the décor, and the sequence of the day."
      />

      <section className="section">
        <div className="wrap about-grid">
          <Reveal>
          <div className="prose">
            <p className="kicker">About us</p>
            <h2>More than 35 years, and the memory of the day.</h2>
            <p>
              We have been curating the experience since 1990. A wedding here is sangeet, haldi,
              pheras, and reception, held as one sequence rather than a single decorated hour. The
              tent, the mandap, and the décor are how that sequence becomes a room.
            </p>
            <p>
              The same house keeps celebrations that are not weddings: a birthday, a family day, a
              hosted evening. We make the memories by keeping the hour, the path, and the light in
              order, so the people in the room can stay with the rite.
            </p>
            <p>
              {BRAND.established}, also called {BRAND.name}, is in {BRAND.city}. The house is at{" "}
              {BRAND.address}.
            </p>
          </div>
          </Reveal>
          <Reveal as="figure" className="about-photo" delay={100}>
            <img
              src={asset("/images/city-palace.jpg")}
              alt="A red sandstone courtyard with arched galleries, in the manner of City Palace, Jaipur."
            />
            <figcaption>Palace courtyards are one of the grounds the house works in.</figcaption>
          </Reveal>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <Reveal>
          <div className="intro">
            <p className="kicker">Jaipur</p>
            <h2>Pink stone, and the tents beside it.</h2>
          </div>
          </Reveal>
          <div className="jaipur-grid">
            <Reveal as="figure">
              <img src={asset("/images/amber.jpg")} alt="Sandstone fortifications and ramparts on a green hillside." />
              <figcaption>Hill forts in the sandstone country around the city.</figcaption>
            </Reveal>
            <Reveal as="figure" delay={90}>
              <img src={asset("/images/water-palace.jpg")} alt="A white palace standing in a wide body of water." />
              <figcaption>Palaces set in water, part of the city’s imagination of a room.</figcaption>
            </Reveal>
            <Reveal as="figure" delay={160}>
              <img src={asset("/images/palace-door.jpg")} alt="A tall carved wooden door set in a colourful palace wall." />
              <figcaption>Thresholds, colour, and the moment of arrival.</figcaption>
            </Reveal>
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
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.numeral} delay={(index % 4) * 70}>
                <span>{step.numeral}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-maroon">
        <div className="wrap split">
          <div>
            <p className="kicker">Visit</p>
            <h2>
              {BRAND.city}, {BRAND.region}.
            </h2>
          </div>
          <div>
            <p>
              {BRAND.established} is at {BRAND.address}. Call{" "}
              <a href={BRAND.phoneTel}>{BRAND.phone}</a> or write to{" "}
              <a href={BRAND.emailMailto}>{BRAND.email}</a>.
            </p>
            <div className="actions">
              <a className="btn btn-light" href={MAP.google} rel="noreferrer">
                Open in Google Maps
              </a>
              <Link className="btn btn-line-light" href="/contact">
                Write an inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
