import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/weddings", "/celebrations", "/services", "/gallery", "/about", "/contact"];
  return paths.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
