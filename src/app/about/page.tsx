import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Flame, HandHeart, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Kami — Cerita & Filosofi Kopi",
  description:
    "Cerita di balik Rolun Coffee & Pastry di Bojongsoang, Bandung — filosofi kopi kami, ruang kami, dan tim yang membuatnya terasa seperti rumah.",
  path: "/about",
  keywords: ["tentang Rolun Coffee", "kafe artisan Bandung"],
});

const PHILOSOPHY = [
  {
    Icon: Leaf,
    title: "Dipilih dengan cermat",
    body: "Kami memakai biji kopi Indonesia berkualitas dan bahan musiman, mengutamakan rasa dan kesegaran tanpa jalan pintas.",
  },
  {
    Icon: Flame,
    title: "Diracik dengan tangan",
    body: "Setiap shot di-dial in dan setiap pastry dilaminasi sendiri. Konsistensi adalah keahlian yang kami latih setiap hari.",
  },
  {
    Icon: HandHeart,
    title: "Disajikan dengan hangat",
    body: "Keramahan adalah resep yang paling penting. Kami ingin kamu pulang dengan rasa lebih betah daripada saat datang.",
  },
];

const VALUES = ["Hangat", "Premium", "Artisan", "Terpercaya", "Timeless"];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Tentang", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="Cerita Kami"
        title="Kopi yang diracik, dibuat bermakna"
        description="Bagaimana sebuah sudut di Bojongsoang menjadi rumah bagi pecinta kopi, keluarga, pelajar, dan orang-orang yang membuat Bandung terasa seperti Bandung."
        image="/images/bakery-counter.webp"
        crumbs={[
          { name: "Beranda", href: "/" },
          { name: "Tentang", href: "/about" },
        ]}
      />

      {/* Brand Story */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Awal Mula"
              title="Tempat untuk melambat sejenak"
              description={`${SITE.name} berawal dari ide sederhana: bahwa sebuah lingkungan layak punya tempat yang terasa spesial sekaligus mudah untuk merasa di rumah. Kami ingin membangun cafe dengan kopi yang benar-benar enak, makanan yang dibuat dengan sungguh-sungguh, dan tanpa pernah terburu-buru mengusir siapa pun.`}
            />
            <p className="mt-5 text-base leading-relaxed text-coffee-500">
              Yang awalnya cuma sebuah coffee counter kini tumbuh menjadi coffee
              shop, bakery artisan, dan dapur lengkap — tapi hatinya tidak berubah.
              Kami tetap di sini untuk menyajikan secangkir kopi yang enak dan
              menjaga ruang bagi momen-momen yang terjadi di sekitarnya.
            </p>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/images/pastry-shop.webp"
                alt="Interior toko pastry Rolun dengan logo emas di dinding kayu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Coffee Philosophy */}
      <Section tone="forest">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/images/latte-art.webp"
                alt="Cappuccino dengan latte art detail di atas meja kayu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              tone="light"
              align="left"
              eyebrow="Filosofi Kopi"
              title="Kualitas yang terasa di setiap cangkir"
              description="Kopi yang enak bukan kebetulan. Ada proses sourcing, roasting, dialing in, dan ketelatenan — diulang sampai rasanya konsisten."
            />
            <Stagger className="mt-8 space-y-5">
              {PHILOSOPHY.map(({ Icon, title, body }) => (
                <StaggerItem key={title}>
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-cream-50">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream-100/75">
                        {body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* Our Space */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Ruang Kami"
          title="Dirancang supaya kamu betah"
          description="Cahaya, kayu, dan tanaman hijau; sudut tenang untuk fokus dan meja terbuka untuk berkumpul. Di dalam maupun di teras, selalu ada tempat untuk setiap suasana hati."
        />
        <Reveal className="mt-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft sm:col-span-1">
              <Image
                src="/images/dining-hall.webp"
                alt="Ruang makan berkanopi kaca dengan tiang kayu dan kursi rotan"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/terrace.webp"
                alt="Tempat duduk teras terbuka dikelilingi tanaman hijau"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/space-main.webp"
                alt="Area duduk indoor yang hangat di dalam Rolun"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Meet the Team */}
      <Section tone="cream-deep">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/images/team.webp"
                alt="Tim Rolun Coffee & Pastry berkumpul di depan storefront"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Kenalan dengan Tim"
              title="Orang-orang di balik counter"
              description="Barista, baker, juru masak, dan host yang benar-benar mencintai pekerjaannya. Merekalah alasan kunjungan ke Rolun terasa personal — dan alasan banyak tamu balik lagi."
            />
            <div className="mt-7 flex flex-wrap gap-2.5">
              {VALUES.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-forest-700/20 bg-white px-4 py-1.5 text-sm font-medium text-forest-800"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Rolun Exists */}
      <section className="relative isolate overflow-hidden bg-forest-900 grain">
        <div className="container-rolun py-20 text-center sm:py-28">
          <Reveal>
            <Sparkles className="mx-auto h-8 w-8 text-gold-300" aria-hidden />
            <p className="mx-auto mt-6 max-w-3xl font-serif text-2xl font-medium leading-snug text-cream-50 sm:text-3xl lg:text-4xl">
              “Kami tidak sekadar menjual kopi dan pastry. Kami menyediakan ruang
              untuk momen-momen sederhana yang ternyata paling berarti.”
            </p>
            <p className="mt-6 text-sm uppercase tracking-wider2 text-gold-300">
              Alasan Rolun ada
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/menu" variant="gold">
                Jelajahi Menu
              </Button>
              <Button href="/reservation" variant="outlineLight">
                Reservasi Meja
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
