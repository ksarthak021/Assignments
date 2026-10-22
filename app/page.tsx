import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PlanFlow } from "@/components/PlanFlow";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";
import {
  compositeNotes,
  homeMeta,
  processSteps,
  services,
} from "@/lib/site";

export const metadata = homeMeta();

const RITES = ["Mandap", "Sangeet", "Baraat", "Pheras", "Reception"];

export default function HomePage() {
  return (
    <main id="content">
      <Hero
        variant="home"
        image="/images/floral-ceiling.jpg"
        alt="A wedding aisle beneath a dense ceiling of white and gold flowers."
        kicker="Shree Vishal Tent Palace · Jaipur"
        title={
          <>
            Ceremonies, <em>held like palaces.</em>
          </>
        }
        lede="SVTP Events is the house name on this site for Shree Vishal Tent Palace. We build weddings and gatherings in canvas, courtyards, and palace grounds."
        actions={
          <>
            <Link className="btn btn-fill" href="/contact#inquiry">
              Begin an inquiry
            </Link>
            <Link className="btn btn-line-light" href="/gallery">
              View the library
            </Link>
          </>
        }
        aside={
          <ol className="hero-index">
            {RITES.map((rite) => (
              <li key={rite}>{rite}</li>
            ))}
          </ol>
        }
      />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...RITES, ...RITES, ...RITES, ...RITES].map((rite, index) => (
            <span key={`${rite}-${index}`}>{rite}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap story">
          <Reveal>
            <p className="pull">The tent is the room. The mandap is its centre of gravity.</p>
          </Reveal>
          <Reveal>
            <div className="story-copy">
              <p className="kicker">The house</p>
              <p>
                Jaipur has long made rooms out of more than stone. A lawn becomes a climate. A
                courtyard becomes a court. Canvas, flower, and light give a rite its own weather.
              </p>
              <p>
                The work is physical and sequential: the path a baraat can actually walk, the height
                of a mandap, the hour the reception changes temperature, the seat from which an elder
                can hear the pheras.
              </p>
              <Link className="text-link" href="/about">
                How the house works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <Reveal>
            <div className="intro">
              <p className="kicker">Signature services</p>
              <h2>What the house actually builds.</h2>
            </div>
          </Reveal>
          <div className="service-index">
            {services.map((service) => (
              <article key={service.numeral}>
                <span>{service.numeral}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/services">
            Packages and the full list
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="intro">
              <p className="kicker">Signature settings</p>
              <h2>Rooms in the language of the house.</h2>
              <p className="lede">
                These photographs are studies of mandap, tent, and evening light. They are not a
                list of past clients.
              </p>
            </div>
          </Reveal>
          <div className="feature-grid">
            <figure className="feature-card span-tall">
              <img src={asset("/images/couple-florals.png")} alt="A couple seated under a white floral ceiling with chandeliers and candle stands." />
              <figcaption>
                <span>Weddings</span>
                Under the flowers
              </figcaption>
            </figure>
            <figure className="feature-card">
              <img src={asset("/images/tents.jpg")} alt="Dining tables inside a colourful striped tent with chandeliers." />
              <figcaption>
                <span>Tents</span>
                Canvas as a dining room
              </figcaption>
            </figure>
            <figure className="feature-card">
              <img src={asset("/images/stage-monogram.png")} alt="A pink and white stage with a monogram, floral pillars, and carved jharokha niches." />
              <figcaption>
                <span>Décor</span>
                A stage with proportion
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-maroon">
        <div className="wrap process">
          <div>
            <p className="kicker">Planning</p>
            <h2>Four movements, then the day.</h2>
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

      <section className="section">
        <div className="wrap">
          <div className="intro">
            <p className="kicker">Composite notes</p>
            <h2>Lines in the shape of a weekend.</h2>
            <p className="note">
              These are composite impressions of the work, written for this site. They are not
              quotations from named guests, and they are not taken from a public review.
            </p>
          </div>
          <div className="quotes">
            {compositeNotes.map((note) => (
              <blockquote key={note.text}>
                <p>{note.text}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" id="plan">
        <div className="wrap plan-grid">
          <div>
            <p className="kicker">Plan your event</p>
            <h2>Three questions, then a package.</h2>
            <p className="lede">
              Tell us the gathering, an approximate guest count, and the season you have in mind.
              The house recommends Nivaas, Darbar, or Rajmahal, and carries those answers into the
              inquiry.
            </p>
          </div>
          <PlanFlow />
        </div>
      </section>

      <section className="band">
        <img src={asset("/images/palace-night.jpg")} alt="A palace lit at night and reflected in still water." />
        <div className="band-shade" aria-hidden="true" />
        <div className="band-copy">
          <p className="kicker">Jaipur</p>
          <h2>Begin with the day you already know.</h2>
          <Link className="btn btn-fill" href="/contact#inquiry">
            Write an inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
