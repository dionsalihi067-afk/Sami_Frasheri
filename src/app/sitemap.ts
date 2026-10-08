import type { MetadataRoute } from "next";
import { legalNavigation, navigation } from "@/data/school";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...navigation.map((item) => ({
      url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.8,
    })),
    ...legalNavigation.map((item) => ({
      url: `${siteUrl}${item.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
