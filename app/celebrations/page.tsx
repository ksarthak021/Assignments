import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";
import { celebrations, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "/celebrations",
  "Celebrations and parties in Jaipur",
  "Social and corporate gatherings, birthdays, and sangeet-scale parties planned by Shree Vishal Tent Palace in Jaipur.",
);

export default function CelebrationsPage() {
  return (
    <main id="content">
      <Hero
        image="/images/tents.jpg"
        alt="A long table set inside a colourful event tent with striped canvas and chandeliers."
        kicker="Celebrations"
        title={
          <>
            Gatherings with the <em>scale of a sangeet.</em>
          </>
        }
        lede="Birthdays, family days, corporate dinners, and parties large enough to need a stage. The same craft as a wedding, held to the length of a single night or a single afternoon."
        actions={
          <Link className="btn btn-fill" href="/#plan">
            Plan a gathering
          </Link>
        }
      />

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <div>
              <p className="kicker">Social and hosted</p>
              <h2>A celebration still needs a room.</h2>
            </div>
          </Reveal>
          <Reveal delay={90}>
          <p>
            Without the sequence of a wedding, it is easy to underbuild. Guests still arrive, still
            need shade and water, still look for the person being honoured. SVTP treats these days
            as hosted rooms: tent or courtyard, flowers, light, and someone watching the order.
          </p>
          </Reveal>
        </div>
        <div className="wrap gather-grid">
          {celebrations.map((item, index) => (
            <Reveal as="article" key={item.title} delay={(index % 2) * 90}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap feature-grid">
          <Reveal as="figure" className="feature-card span-tall">
            <img src={asset("/images/stage-monogram.png")} alt="A pink and white stage with a monogram, floral pillars, and carved jharokha niches." />
            <figcaption>
              <span>Parties</span>
              A stage the night can use
            </figcaption>
          </Reveal>
          <Reveal as="figure" className="feature-card" delay={90}>
            <img src={asset("/images/floral-sofa.jpg")} alt="A seating set dressed in red and white flowers." />
            <figcaption>
              <span>Social</span>
              Seating that is part of the décor
            </figcaption>
          </Reveal>
          <Reveal as="figure" className="feature-card" delay={160}>
            <img src={asset("/images/red-chairs.jpg")} alt="Red and green chairs arranged in a decorated room." />
            <figcaption>
              <span>Corporate</span>
              A room that can hold a speech
            </figcaption>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <p className="kicker">Scale</p>
          <h2>From a dinner to a night that fills a tent.</h2>
          <p>
            Smaller gatherings begin with Nivaas: one dressed room and a producer. A sangeet-scale
            party, or a guest list that fills the lawn, moves to Darbar so the entrance, the stage,
            and the hospitality are designed together. The planner on the home page makes that
            distinction from your guest count and season.
          </p>
          <div className="actions">
            <Link className="btn btn-fill" href="/services#packages">
              See the packages
            </Link>
            <Link className="btn" href="/contact#inquiry">
              Inquire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
