import type { MetadataRoute } from "next";
import { navigation, siteUrl, villa } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["/", ...navigation.map(({ href }) => href), villa.href].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
