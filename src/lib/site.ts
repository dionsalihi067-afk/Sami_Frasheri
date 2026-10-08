import type { Metadata } from "next";
import { assets, school } from "@/data/school";

/** Set NEXT_PUBLIC_SITE_URL in production; the localhost fallback is for development only. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sq_AL",
      siteName: school.name,
      title,
      description,
      url: path,
      images: [{ url: assets.logo, width: 221, height: 228, alt: school.name }],
    },
    twitter: { card: "summary", title, description, images: [assets.logo] },
  };
}
