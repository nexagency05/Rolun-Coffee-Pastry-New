import type { Metadata } from "next";
import { SITE } from "./site";

export const OG_IMAGE = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — ${SITE.tagline}`,
};

export const BASE_KEYWORDS = [
  "Rolun Coffee & Pastry",
  "Rolun Coffee",
  "cafe Bandung",
  "coffee shop Bandung",
  "cafe Bojongsoang",
  "coffee shop Bojongsoang",
  "kafe Bojongsoang",
  "kopi Bandung",
  "pastry Bandung",
  "tempat nongkrong Bandung",
  "cafe instagramable Bandung",
];

/** Build per-page metadata with consistent OG/Twitter and canonical URL. */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = path === "/" ? SITE.url : `${SITE.url}${path}`;
  const og = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : [OG_IMAGE];
  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "id_ID",
      url,
      title,
      description,
      images: og,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: og.map((i) => i.url),
    },
  };
}
