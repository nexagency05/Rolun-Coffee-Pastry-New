import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, menuSchema } from "@/lib/schema";
import { MENU, MENU_CATEGORIES } from "@/lib/menu-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Menu — Kopi, Pastry & Dapur",
  description:
    "Jelajahi menu lengkap Rolun Coffee & Pastry — kopi signature, minuman non-kopi, teh premium, pastry segar, makanan utama, dan cemilan. Cari dan filter berdasarkan kategori.",
  path: "/menu",
  keywords: ["menu Rolun Coffee", "menu cafe Bojongsoang", "harga kopi Bandung"],
});

export default function MenuPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Menu", path: "/menu" },
          ]),
          menuSchema(
            MENU,
            MENU_CATEGORIES.map((c) => c.id),
          ),
        ]}
      />

      <PageHero
        eyebrow="Menu Kami"
        title="Menu premium yang siap kamu jelajahi"
        description="Dari kopi house signature sampai dapur dan bakery yang masak dari nol — semuanya dibuat sendiri di tempat. Cari atau filter untuk menemukan favorit barumu."
        image="/images/signature-platter.webp"
        crumbs={[
          { name: "Beranda", href: "/" },
          { name: "Menu", href: "/menu" },
        ]}
      />

      <section className="bg-cream-50 py-14 sm:py-16 lg:py-20">
        <div className="container-rolun">
          <MenuExplorer />
        </div>
      </section>
    </>
  );
}
