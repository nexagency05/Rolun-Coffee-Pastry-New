import type { Metadata } from "next";
import { CalendarHeart, PartyPopper } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Motion";
import { EventCard } from "@/components/shared/EventCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, eventSchema } from "@/lib/schema";
import { EVENTS } from "@/lib/events-data";
import { PACKAGES, whatsappLink } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Acara — Live Music, Workshop & Gathering",
  description:
    "Agenda di Rolun Coffee & Pastry — live music, workshop kopi, kumpul komunitas, dan open mic di Bojongsoang, Bandung. Plus paket acara privat.",
  path: "/events",
  keywords: ["live music cafe Bandung", "workshop kopi Bandung", "event space Bojongsoang"],
});

export default function EventsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Acara", path: "/events" },
          ]),
          ...EVENTS.map((e) => eventSchema(e)),
        ]}
      />

      <PageHero
        eyebrow="Acara"
        title="Selalu ada yang seru di Rolun"
        description="Live music, workshop kopi langsung praktik, kumpul komunitas, dan malam open mic — Rolun adalah panggung untuk warga Bojongsoang."
        image="/images/space-main.webp"
        crumbs={[
          { name: "Beranda", href: "/" },
          { name: "Acara", href: "/events" },
        ]}
      />

      {/* Upcoming events */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Mendatang"
          title="Catat tanggalnya"
          description="Sebagian besar acara gratis — workshop dan malam spesial berbayar. Tempat terbatas, jadi pesan dari jauh hari ya."
        />
        <Stagger className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <StaggerItem key={event.id} className="h-full">
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Private events / packages */}
      <Section tone="forest">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="light"
              align="left"
              eyebrow="Acara Privat"
              title="Rayakan momenmu bersama Rolun"
              description="Dari perayaan intim sampai gathering kantor, ruang dan dapur kami tersedia untuk booking privat. Ceritakan rencanamu, dan kami akan susun paket yang pas."
            />
            <div className="mt-7 flex flex-wrap gap-2.5">
              {PACKAGES.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-cream-100/15 bg-forest-900/60 px-4 py-1.5 text-sm font-medium text-cream-100/90"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                href={whatsappLink(
                  "Halo Rolun Coffee & Pastry, saya ingin menanyakan paket acara (private event).",
                )}
                variant="gold"
              >
                <PartyPopper className="h-4 w-4" aria-hidden />
                Tanya via WhatsApp
              </Button>
              <Button href="/reservation" variant="outlineLight">
                <CalendarHeart className="h-4 w-4" aria-hidden />
                Reservasi Meja
              </Button>
            </div>
          </div>

          <Reveal>
            <div className="rounded-[2rem] border border-cream-100/10 bg-forest-900/50 p-8 sm:p-10">
              <p className="font-serif text-2xl font-medium leading-snug text-cream-50">
                “Nikmati setiap momen bersama Rolun Coffee &amp; Pastry.”
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream-100/75">
                Pernikahan, lamaran, ulang tahun, bridal shower, photoshoot,
                meeting, dan dinner romantis — semua pernah kami selenggarakan, dan
                kami akan dengan senang hati menyambut acaramu.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-xs uppercase tracking-wider2 text-gold-300">
                    Kapasitas
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-cream-50">
                    Sampai 100+
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider2 text-gold-300">
                    Indoor &amp; Outdoor
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-cream-50">
                    Dua lantai
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
