import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Packages } from "@/components/Packages";
import { faqs, pageMeta, services } from "@/lib/site";

export const metadata = pageMeta(
  "/services",
  "Tent, décor, and event direction",
  "Tent and mandap, floral décor, lighting, staging, guest hospitality, and full event direction from Shree Vishal Tent Palace in Jaipur, with three packages compared.",
);

export default function ServicesPage() {
  return (
    <main id="content">
      <Hero
        image="/images/stage-monogram.png"
        alt="A pink and white stage with a monogram, floral pillars, and carved jharokha niches."
        kicker="Services"
        title={
          <>
            Six crafts, <em>one direction.</em>
          </>
        }
        lede="Tent and mandap, flowers, light, staging, hospitality, and the person who keeps the day in order. The packages below say how those crafts combine."
      />

      <section className="section">
        <div className="wrap craft-list">
          {services.map((service, index) => (
            <Reveal as="article" key={service.numeral} delay={(index % 3) * 70}>
              <span>{service.numeral}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-paper" id="packages">
        <div className="wrap">
          <Reveal>
          <div className="intro">
            <p className="kicker">Packages</p>
            <h2>Nivaas, Darbar, Rajmahal.</h2>
            <p className="lede">
              Three plans, deliberately unlike. Fees are quoted after a conversation about the
              ground, the rites, and the season. They are not printed here.
            </p>
          </div>
          </Reveal>
          <Reveal delay={80}>
          <Packages />
          </Reveal>
          <p className="note">
            Not sure which plan fits? The short planner asks for event type, guest count, and season,
            then recommends one.
          </p>
          <Link className="text-link" href="/#plan">
            Plan your event
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-layout">
          <Reveal>
          <div>
            <p className="kicker">Questions</p>
            <h2>Before the first conversation.</h2>
          </div>
          </Reveal>
          <Reveal delay={90}>
          <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
