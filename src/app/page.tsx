import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  Armchair,
  Wifi,
  HeartHandshake,
  Users,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Star,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import { Hero } from "@/components/home/Hero";
import { MenuCard } from "@/components/shared/MenuCard";
import { EventCard } from "@/components/shared/EventCard";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { SIGNATURE_DRINKS, SIGNATURE_PASTRIES } from "@/lib/menu-data";
import { EVENTS } from "@/lib/events-data";
import { REVIEWS, AGGREGATE_RATING } from "@/lib/reviews-data";
import { SOCIAL } from "@/lib/site";

const FEATURES = [
  {
    Icon: Coffee,
    title: "Kopi Premium",
    body: "Biji kopi pilihan dan house roast signature, diracik dan disajikan oleh barista berpengalaman.",
  },
  {
    Icon: Armchair,
    title: "Suasana Nyaman",
    body: "Ruang dua lantai yang lapang, penuh cahaya dan tanaman hijau, dengan tempat duduk yang nyaman.",
  },
  {
    Icon: Wifi,
    title: "WiFi Cepat & Gratis",
    body: "Koneksi stabil dan banyak colokan listrik — pas banget buat kerja remote dan belajar.",
  },
  {
    Icon: HeartHandshake,
    title: "Pelayanan Ramah",
    body: "Tim yang hangat dan perhatian, hafal pesananmu dan bikin setiap kunjungan terasa seperti rumah.",
  },
  {
    Icon: Users,
    title: "Ruang Komunitas",
    body: "Dari gathering, workshop, sampai live music — tempat warga Bojongsoang berkumpul.",
  },
];

const GALLERY_PREVIEW = [
  { src: "/images/dining-hall.webp", alt: "Ruang makan berkanopi kaca dengan tiang kayu", span: "row-span-2" },
  { src: "/images/pastry-case.webp", alt: "Aneka kue di etalase pastry", span: "" },
  { src: "/images/latte-art.webp", alt: "Cappuccino dengan latte art", span: "" },
  { src: "/images/terrace.webp", alt: "Teras outdoor yang rindang", span: "row-span-2" },
  { src: "/images/macarons.webp", alt: "Macaron warna-warni", span: "" },
  { src: "/images/bakery-counter.webp", alt: "Counter bakery dan barista", span: "" },
];

const INSTAGRAM = [
  "/images/atmosphere-1.webp",
  "/images/table-coffee-croissant.webp",
  "/images/atmosphere-3.webp",
  "/images/atmosphere-5.webp",
  "/images/atmosphere-2.webp",
  "/images/atmosphere-4.webp",
];

export default function HomePage() {
  const upcoming = EVENTS.slice(0, 3);

  return (
    <>
      <Hero />

      {/* ── Welcome / brand intro ── */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/pastry-shop.webp"
                alt="Bagian dalam toko pastry Rolun dengan dinding logo emas dan etalase kaca"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-forest-800 px-6 py-5 text-cream-50 shadow-card sm:block">
              <p className="font-serif text-3xl font-semibold text-gold-300">Est. 2022</p>
              <p className="text-xs uppercase tracking-wider2 text-cream-100/70">
                Bojongsoang, Bandung
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Selamat Datang di Rolun"
              title="Coffee shop yang berpusat pada orang, bukan sekadar kopi"
              description="Buat kami, cafe yang baik diukur dari momen-momen di dalamnya — tegukan pertama di pagi hari, obrolan yang berubah jadi persahabatan, perayaan di meja bersama. Rolun memadukan kopi specialty dan dapur yang masak dari nol dengan ruang yang bikin kamu betah berlama-lama."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about" variant="primary">
                Cerita Kami
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/menu" variant="outlineDark">
                Jelajahi Menu
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Signature Drinks ── */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Dari Bar Kami"
          title="Minuman Signature"
          description="Racikan yang bikin pelanggan setia balik lagi — kopi house, diseduh ala Rolun."
        />
        <Stagger className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE_DRINKS.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <MenuCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-10 text-center">
          <Button href="/menu" variant="outlineDark">
            Lihat menu minuman lengkap
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Section>

      {/* ── Signature Pastries ── */}
      <Section tone="cream-deep">
        <SectionHeading
          eyebrow="Dari Oven Kami"
          title="Pastry Signature"
          description="Kue, croissant, dan patisserie yang dipanggang segar setiap hari di open bakery kami."
        />
        <Stagger className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE_PASTRIES.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <MenuCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Why Customers Stay ── */}
      <Section tone="forest">
        <SectionHeading
          tone="light"
          eyebrow="Kenapa Pelanggan Betah"
          title="Lebih dari sekadar secangkir kopi"
          description="Lima alasan Rolun menjadi rumah kedua bagi warga Bojongsoang."
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, body }) => (
            <StaggerItem key={title}>
              <div className="flex h-full flex-col rounded-2xl border border-cream-100/10 bg-forest-900/60 p-7 transition-colors duration-300 hover:border-gold-400/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-cream-50">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/75">
                  {body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Atmosphere Gallery Preview ── */}
      <Section tone="cream">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Ruang Kami"
            title="Suasana yang bikin betah berlama-lama"
            className="max-w-xl"
          />
          <Reveal>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-800 transition-colors hover:text-gold-600"
            >
              Lihat galeri lengkap
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
            {GALLERY_PREVIEW.map((img) => (
              <Link
                key={img.src}
                href="/gallery"
                className={`group relative overflow-hidden rounded-2xl ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-forest-950/0 transition-colors duration-500 group-hover:bg-forest-950/20" />
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Upcoming Events Preview ── */}
      <Section tone="white">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Agenda Kami"
            title="Acara mendatang"
            className="max-w-xl"
          />
          <Reveal>
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-800 transition-colors hover:text-gold-600"
            >
              Lihat semua acara
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-10 grid gap-7 md:grid-cols-3">
          {upcoming.map((event) => (
            <StaggerItem key={event.id} className="h-full">
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Google Reviews ── */}
      <Section tone="cream-deep">
        <SectionHeading
          eyebrow="Favorit Warga Lokal"
          title="Kata mereka tentang Rolun"
          description={
            <span className="inline-flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-0.5 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </span>
              <span className="font-semibold text-forest-800">
                {AGGREGATE_RATING.ratingValue} / 5
              </span>
              dari {AGGREGATE_RATING.reviewCount.toLocaleString("id-ID")}+ ulasan
              Google
            </span>
          }
        />
        <Stagger className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <StaggerItem key={review.id} className="h-full">
              <ReviewCard review={review} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ── Instagram Preview ── */}
      <Section tone="white">
        <SectionHeading
          eyebrow="@roluncoffee"
          title="Ikuti keseharian kami"
          description="Intip momen sehari-hari di Rolun — tag kami, siapa tahu fotomu tampil di sini."
        />
        <Reveal className="mt-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
            {INSTAGRAM.map((src, i) => (
              <a
                key={src}
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat Rolun Coffee di Instagram (foto ${i + 1})`}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-brand group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-forest-950/0 text-cream-50 opacity-0 transition-all duration-300 group-hover:bg-forest-950/40 group-hover:opacity-100">
                  <Instagram className="h-6 w-6" aria-hidden />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 text-center">
          <Button href={SOCIAL.instagram.url} variant="outlineDark">
            <Instagram className="h-4 w-4" aria-hidden />
            Ikuti {SOCIAL.instagram.handle}
          </Button>
        </div>
      </Section>

      {/* ── Final Reservation CTA ── */}
      <section className="relative isolate overflow-hidden bg-forest-900">
        <Image
          src="/images/romantic-dinner.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/80" aria-hidden />
        <div className="container-rolun relative z-10 py-20 text-center sm:py-28">
          <Reveal>
            <span className="eyebrow mb-4 justify-center text-gold-300">
              Reservasi Mejamu
            </span>
            <h2 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
              Amankan tempatmu untuk pagi yang santai atau malam yang spesial
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
              Booking cuma butuh beberapa detik — kami konfirmasi mejamu lewat
              WhatsApp. Mulai dari sudut tenang di hari kerja sampai perayaan dan
              acara privat, kami senang menyambutmu.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/reservation" variant="gold" size="lg">
                Reservasi Meja
              </Button>
              <Button href="/contact" variant="outlineLight" size="lg">
                Temukan Kami
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
