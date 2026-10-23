import { GalleryView } from "@/components/GalleryView";
import { Hero } from "@/components/Hero";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "/gallery",
  "Gallery of tents, decor, and evenings",
  "A filterable visual library of wedding rites, tents, floral decor, and evening light for SVTP Events, Shree Vishal Tent Palace in Jaipur.",
);

export default function GalleryPage() {
  return (
    <main id="content">
      <Hero
        variant="short"
        image="/images/entrance.jpg"
        alt="An outdoor celebration entrance framed by red drapes and strings of lights."
        kicker="Gallery"
        title={
          <>
            Rooms, flowers, <em>and evening light.</em>
          </>
        }
        lede="Filter by weddings, tents, decor, or evenings. Open any photograph to look closely."
      />
      <section className="section">
        <div className="wrap">
          <GalleryView />
        </div>
      </section>
    </main>
  );
}
