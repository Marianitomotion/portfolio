import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteConfig.url}${siteConfig.routes.unity}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}${siteConfig.routes.unlocked}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
