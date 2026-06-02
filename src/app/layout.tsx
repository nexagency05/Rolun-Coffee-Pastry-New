import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE, fullAddress } from "@/lib/site";
import { BASE_KEYWORDS, OG_IMAGE } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: BASE_KEYWORDS,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  category: "restaurant",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "id_ID",
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Bojongsoang, Bandung",
    "geo.position": "-6.97597;107.6291",
    ICBM: "-6.97597, 107.6291",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F4A3C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Google Fonts loaded via link to keep builds network-independent. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-cream-50"
        >
          Lewati ke konten
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <span className="sr-only">{`${SITE.name}, ${fullAddress}`}</span>
      </body>
    </html>
  );
}
