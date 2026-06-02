import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Galeri — Suasana Rolun Coffee & Pastry",
  description:
    "Jelajahi Rolun Coffee & Pastry di Bojongsoang, Bandung lewat foto — ruang indoor dan outdoor, makanan, minuman, dan acara. Suasana cafe dalam gambar.",
  path: "/gallery",
  keywords: ["cafe instagramable Bandung", "tempat foto cafe Bojongsoang"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Galeri", path: "/gallery" },
        ])}
      />

      <PageHero
        eyebrow="Galeri"
        title="Suasana Rolun dalam gambar"
        description="Dari sudut indoor yang cerah sampai teras rindang, makanan di meja, dan momen-momen di antaranya."
        image="/images/dining-hall.webp"
        crumbs={[
          { name: "Beranda", href: "/" },
          { name: "Galeri", href: "/gallery" },
        ]}
      />

      <section className="bg-cream-50 py-14 sm:py-16 lg:py-20">
        <div className="container-rolun">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
