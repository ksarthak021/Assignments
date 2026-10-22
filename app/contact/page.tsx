import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { BRAND, MAP, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "/contact",
  "Inquiry",
  "Write to Shree Vishal Tent Palace in Jaipur. Call, email, WhatsApp, or open the house on Google Maps.",
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
        lede="Share the gathering, a way to write back, and whatever you already know about guests and season."
      />

      <section className="section" id="inquiry">
        <div className="wrap contact-grid">
          <Reveal>
          <div>
            <p className="kicker">Inquiry</p>
            <h2>Write to the house.</h2>
            <Suspense fallback={<p className="lede">Opening the inquiry…</p>}>
              <InquiryForm />
            </Suspense>
          </div>
          </Reveal>
          <Reveal as="aside" className="contact-side" delay={100}>
            <div className="facts">
              <p className="kicker">Visit</p>
              <h3>{BRAND.established}</h3>
              <dl>
                <div>
                  <dt>Also named</dt>
                  <dd>{BRAND.name}</dd>
                </div>
                <div>
                  <dt>Address</dt>
                  <dd>{BRAND.address}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={BRAND.phoneTel}>{BRAND.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={BRAND.emailMailto}>{BRAND.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a href={BRAND.whatsapp} rel="noreferrer">
                      Message the house
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <a className="map-link" href={MAP.google} rel="noreferrer">
              <span>Google Maps</span>
              <strong>Shree Vishal Tent Palace</strong>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
