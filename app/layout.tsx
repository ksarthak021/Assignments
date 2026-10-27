import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyInquire } from "@/components/StickyInquire";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SVTP Events · Shree Vishal Tent Palace",
    template: "%s · SVTP Events",
  },
  description:
    "SVTP Events is Shree Vishal Tent Palace, a Jaipur house for weddings and gatherings.",
  applicationName: "SVTP Events",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SVTP Events",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd />
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <StickyInquire />
      </body>
    </html>
  );
}
