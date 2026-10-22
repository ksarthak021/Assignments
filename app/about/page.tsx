import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";
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
          <Reveal>
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
              The house works in canvas and stone: a tent for the week, a courtyard for the rite,
              and direction that keeps both in order.
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
