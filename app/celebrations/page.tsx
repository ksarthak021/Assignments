import Link from "next/link";
import { Hero } from "@/components/Hero";
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
          <div>
            <p className="kicker">Social and hosted</p>
            <h2>A celebration still needs a room.</h2>
          </div>
          <p>
            Without the sequence of a wedding, it is easy to underbuild. Guests still arrive, still
            need shade and water, still look for the person being honoured. SVTP treats these days
            as hosted rooms: tent or courtyard, flowers, light, and someone watching the order.
          </p>
        </div>
        <div className="wrap gather-grid">
          {celebrations.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap feature-grid">
          <figure className="feature-card span-tall">
            <img src={asset("/images/stage-celebration.jpg")} alt="A floral stage prepared for a celebration, with warm light." />
            <figcaption>
              <span>Parties</span>
              A stage the night can use
            </figcaption>
          </figure>
          <figure className="feature-card">
            <img src={asset("/images/floral-sofa.jpg")} alt="A seating set dressed in red and white flowers." />
            <figcaption>
              <span>Social</span>
              Seating that is part of the décor
            </figcaption>
          </figure>
          <figure className="feature-card">
            <img src={asset("/images/red-chairs.jpg")} alt="Red and green chairs arranged in a decorated room." />
            <figcaption>
              <span>Corporate</span>
              A room that can hold a speech
            </figcaption>
          </figure>
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
