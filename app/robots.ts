import type { MetadataRoute } from "next";
import { siteUrl } from "./_lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!siteUrl || process.env.VERCEL_ENV === "preview") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
