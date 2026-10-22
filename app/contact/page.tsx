import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { InquiryForm } from "@/components/InquiryForm";
import { BRAND, MAP, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "/contact",
  "Inquiry and map",
  "Write an inquiry to SVTP Events, Shree Vishal Tent Palace in Jaipur. The form stays on this page. A map marks the published pin.",
);

export default function ContactPage() {
  return (
    <main id="content">
      <Hero
        variant="short"
        image="/images/city-palace.jpg"
        alt="Red sandstone arches and a courtyard in Jaipur."
        kicker="Contact"
        title={
          <>
            Begin with the day <em>you have in mind.</em>
          </>
        }
        lede="Share the gathering, a way to write back, and whatever you already know about guests and season. The form does not send the note anywhere."
      />

      <section className="section" id="inquiry">
        <div className="wrap contact-grid">
          <div>
            <p className="kicker">Inquiry</p>
            <h2>A note, checked on this page.</h2>
            <Suspense fallback={<p className="lede">Opening the inquiry…</p>}>
              <InquiryForm />
            </Suspense>
          </div>
          <aside className="contact-side">
            <div className="facts">
              <p className="kicker">Confirmed</p>
              <h3>{BRAND.established}</h3>
              <dl>
                <div>
                  <dt>Also named here</dt>
                  <dd>{BRAND.name}</dd>
                </div>
                <div>
                  <dt>City</dt>
                  <dd>
                    {BRAND.city}, {BRAND.region}, India
                  </dd>
                </div>
                <div>
                  <dt>Map pin</dt>
                  <dd>
                    {BRAND.lat}, {BRAND.lng}
                  </dd>
                </div>
                <div>
                  <dt>Map area</dt>
                  <dd>
                    {BRAND.area}, {BRAND.postalCode}. Read from OpenStreetMap at the published pin.
                    Not a street address.
                  </dd>
                </div>
                <div>
                  <dt>Phone and hours</dt>
                  <dd>Not listed. They were not confirmed from the public Google listing.</dd>
                </div>
              </dl>
              <p>
                <a href={MAP.google} rel="noreferrer">
                  Google Maps listing
                </a>
                <br />
                <a href={MAP.osm} rel="noreferrer">
                  OpenStreetMap
                </a>
              </p>
            </div>
            <iframe
              className="map-frame"
              title="Map of the Shree Vishal Tent Palace pin in Jaipur"
              src={MAP.embed}
              loading="lazy"
            />
            <p className="note">
              If the map does not load, the coordinates and the links above still locate the pin.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
