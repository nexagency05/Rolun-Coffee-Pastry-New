"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, CalendarHeart, Star, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { AGGREGATE_RATING } from "@/lib/reviews-data";

const EASE = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-950">
      <Image
        src="/images/interior-atrium.webp"
        alt="Interior dua lantai Rolun Coffee & Pastry dengan kayu hangat, tanaman hijau, dan dinding logo emas"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Layered veil for legibility */}
      <div className="absolute inset-0 bg-hero-fade" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-forest-950/30 to-transparent"
        aria-hidden
      />

      <div className="container-rolun relative z-10 pb-20 pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-cream-100/25 bg-forest-950/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-brand text-gold-300 backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Bojongsoang · Bandung
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-cream-50 drop-shadow-sm sm:text-6xl lg:text-7xl"
          >
            Kopi Penuh Makna.
            <span className="block text-gold-300">Momen Berkesan.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/90 sm:text-lg"
          >
            {SITE.name}
            {" adalah coffee shop specialty & bakery artisan — tempat pagi yang santai, makanan enak, dan teman ngobrol berpadu dalam ruang yang hangat dan penuh cahaya."}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-base font-medium text-forest-900 shadow-soft transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-gold-300"
            >
              <UtensilsCrossed className="h-5 w-5" aria-hidden />
              Lihat Menu
            </Link>
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 px-8 py-4 text-base font-medium text-cream-50 backdrop-blur transition-all duration-300 ease-brand hover:bg-cream-50 hover:text-forest-900"
            >
              <CalendarHeart className="h-5 w-5" aria-hidden />
              Reservasi Meja
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream-100/80"
          >
            <span className="inline-flex items-center gap-2">
              <span className="flex items-center gap-0.5 text-gold-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </span>
              <span className="font-semibold text-cream-50">
                {AGGREGATE_RATING.ratingValue}
              </span>
              · {AGGREGATE_RATING.reviewCount.toLocaleString("id-ID")}+ ulasan
              Google
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
        aria-hidden
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-cream-100/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream-100/70" />
        </span>
      </div>
    </section>
  );
}
