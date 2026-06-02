import type { Metadata } from "next";
import { Clock, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { Reveal } from "@/components/motion/Motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { OPENING_HOURS, CONTACT, fullAddress } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Reservasi Meja",
  description:
    "Booking meja di Rolun Coffee & Pastry, Bojongsoang, Bandung. Reservasi cepat — kami konfirmasi langsung lewat WhatsApp. Tanpa perlu akun.",
  path: "/reservation",
  keywords: ["reservasi cafe Bandung", "booking meja Bojongsoang"],
});

const PERKS = [
  {
    Icon: ShieldCheck,
    title: "Tempat duduk terjamin",
    body: "Nggak perlu antre, apalagi pas akhir pekan dan jam ramai.",
  },
  {
    Icon: Sparkles,
    title: "Siap bantu perayaan",
    body: "Mau rayain ulang tahun atau bikin kejutan? Ceritakan, kami senang bantu.",
  },
];

export default function ReservationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Reservasi", path: "/reservation" },
        ])}
      />

      <PageHero
        eyebrow="Reservasi"
        title="Reservasi mejamu"
        description="Cukup isi beberapa detail dan kamu siap. Kami konfirmasi bookingmu lewat WhatsApp — tanpa akun, tanpa ribet."
        image="/images/romantic-dinner.webp"
        crumbs={[
          { name: "Beranda", href: "/" },
          { name: "Reservasi", href: "/reservation" },
        ]}
      />

      <section className="bg-cream-50 py-14 sm:py-16 lg:py-24">
        <div className="container-rolun grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <ReservationForm />
          </Reveal>

          {/* Info */}
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl bg-forest-800 p-7 text-cream-100 grain sm:p-8">
                <h2 className="font-serif text-2xl font-semibold text-cream-50">
                  Info penting
                </h2>
                <ul className="mt-5 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" aria-hidden />
                    <div>
                      <p className="font-medium text-cream-50">Jam buka</p>
                      {OPENING_HOURS.map((h) => (
                        <p key={h.label} className="text-cream-100/75">
                          {h.label}: {h.opens.replace(":", ".")}–
                          {(h.closes === "24:00" ? "00:00" : h.closes).replace(":", ".")}
                        </p>
                      ))}
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" aria-hidden />
                    <div>
                      <p className="font-medium text-cream-50">Lokasi</p>
                      <a
                        href={CONTACT.mapsPlaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream-100/75 underline-offset-2 hover:underline"
                      >
                        {fullAddress}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {PERKS.map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-coffee-100/70 bg-white p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-forest-800">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-coffee-500">
                      {body}
                    </p>
                  </div>
                ))}
              </div>

              <p className="rounded-2xl bg-cream-200/60 px-5 py-4 text-sm leading-relaxed text-coffee-600">
                Mau bikin acara privat — pernikahan, gathering, atau meeting? Lihat{" "}
                <a href="/events" className="font-medium text-forest-800 underline-offset-2 hover:underline">
                  halaman acara
                </a>{" "}
                kami atau chat WhatsApp untuk paket yang disesuaikan.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
