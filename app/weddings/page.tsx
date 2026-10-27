import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";
import { pageMeta, weddingChapters } from "@/lib/site";

export const metadata = pageMeta(
  "/weddings",
  "Wedding planning in Jaipur",
  "Wedding planning with Shree Vishal Tent Palace: mandap, sangeet, haldi, pheras, reception, and palace or tent settings in Jaipur.",
);

export default function WeddingsPage() {
  return (
    <main id="content">
      <Hero
        image="/images/palace-courtyard.jpg"
        alt="A palace courtyard set for a wedding, with a floral arch, a cream aisle, and carved stone balconies."
        kicker="Weddings"
        title={
          <>
            The wedding, <em>from mandap to last light.</em>
          </>
        }
        lede="A Jaipur wedding is a sequence, not a single decorated hour. SVTP Events plans the mandap, the sangeet, the haldi, the pheras, and the reception as one house."
        actions={
          <>
            <Link className="btn btn-fill" href="/#plan">
              Plan the wedding
            </Link>
            <Link className="btn btn-line-light" href="/services#packages">
              Compare packages
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap narrow">
          <p className="kicker">The arc</p>
          <h2>Six parts of the same day, or the same weekend.</h2>
          <p className="lede">
            Families keep different rites and different lengths. The structure below is the one the
            house knows how to hold: a place for each ceremony, and a path between them.
          </p>
        </div>
      </section>

      <div className="chapters">
        {weddingChapters.map((chapter, index) => (
          <article key={chapter.numeral} className={`chapter${index % 2 ? " is-flip" : ""}`}>
            <Reveal className="chapter-media">
              <img src={asset(chapter.image)} alt={chapter.alt} />
            </Reveal>
            <Reveal className="chapter-copy" delay={100}>
              <p className="kicker">{chapter.numeral}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
              {"frames" in chapter ? (
                <div className="chapter-frames">
                  {chapter.frames.map((frame) => (
                    <img key={frame.src} src={asset(frame.src)} alt={frame.alt} />
                  ))}
                </div>
              ) : null}
            </Reveal>
          </article>
        ))}
      </div>

      <section className="section section-maroon">
        <div className="wrap split">
          <div>
            <p className="kicker">With the family</p>
            <h2>Direction is part of the wedding, not an extra.</h2>
          </div>
          <div>
            <p>
              The house asks which rites are essential, who must sit near the fire, and how the haldi
              — the turmeric ceremony — should be held. Decoration follows those answers. A beautiful
              mandap that the family cannot use is a set, not a wedding.
            </p>
            <p>
              Palace grounds and tents are both part of the practice. Stone gives one kind of room.
              Canvas gives another, built for the week and taken down after. Many weddings use both.
            </p>
            <Link className="btn btn-light" href="/contact#inquiry">
              Talk about a wedding
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
