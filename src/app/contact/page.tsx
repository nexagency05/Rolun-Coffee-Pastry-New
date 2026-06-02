import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Motion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  CONTACT,
  OPENING_HOURS,
  SOCIAL,
  SITE,
  fullAddress,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Kontak & Lokasi — Bojongsoang, Bandung",
  description:
    "Temukan Rolun Coffee & Pastry di Jl. Raya Cijagra No. 8, Bojongsoang, Kabupaten Bandung. Jam buka, petunjuk arah, WhatsApp, Instagram, dan TikTok.",
  path: "/contact",
  keywords: ["lokasi Rolun Coffee", "alamat cafe Bojongsoang", "coffee shop dekat saya"],
});

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9V9c-1.3.1-2.5-.3-3.6-1v6.8c0 3.4-2.7 5.7-5.8 5.2-2.7-.4-4.6-2.8-4.4-5.5.2-2.6 2.5-4.6 5.1-4.5.2 0 .4 0 .7.1v2.5c-.3-.1-.6-.2-.9-.2-1.3 0-2.3 1.1-2.2 2.4.1 1.2 1.1 2.1 2.3 2.1 1.3 0 2.3-1 2.3-2.4V3h3z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Kontak", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Kontak & Lokasi"
        title="Mampir dan sapa kami"
        description="Kami ada di Jl. Raya Cijagra, Bojongsoang, tepat di selatan pusat Bandung. Mampir langsung, chat kami, atau ikuti kami online."
        image="/images/space-main.webp"
        crumbs={[
          { name: "Beranda", href: "/" },
          { name: "Kontak", href: "/contact" },
        ]}
      />

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Details */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Kunjungi Kami"
              title="Semua yang kamu butuhkan untuk menemukan kami"
            />

            <div className="mt-8 space-y-4">
              {/* Address */}
              <div className="flex gap-4 rounded-2xl border border-coffee-100/70 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-coffee-400">
                    Alamat
                  </h3>
                  <p className="mt-1 text-base text-forest-800">{fullAddress}</p>
                  <a
                    href={CONTACT.mapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 hover:text-gold-700"
                  >
                    <Navigation className="h-4 w-4" aria-hidden />
                    Petunjuk arah
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex gap-4 rounded-2xl border border-coffee-100/70 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-coffee-400">
                    Telepon & WhatsApp
                  </h3>
                  <p className="mt-1 text-base text-forest-800">
                    {CONTACT.phoneDisplay}
                  </p>
                  <a
                    href={whatsappLink(
                      `Halo ${SITE.name}, saya ingin bertanya.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 hover:text-gold-700"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Chat WhatsApp
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 rounded-2xl border border-coffee-100/70 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-coffee-400">
                    Jam Buka
                  </h3>
                  <ul className="mt-1 space-y-0.5 text-base text-forest-800">
                    {OPENING_HOURS.map((h) => (
                      <li key={h.label} className="flex justify-between gap-6">
                        <span>{h.label}</span>
                        <span className="text-coffee-500">
                          {h.opens.replace(":", ".")}–
                          {(h.closes === "24:00" ? "00:00" : h.closes).replace(":", ".")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={SOCIAL.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-coffee-100/70 bg-white px-5 py-4 text-sm font-medium text-forest-800 transition-colors hover:border-gold-300"
                >
                  <Instagram className="h-5 w-5 text-gold-600" aria-hidden />
                  {SOCIAL.instagram.handle}
                </a>
                <a
                  href={SOCIAL.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-coffee-100/70 bg-white px-5 py-4 text-sm font-medium text-forest-800 transition-colors hover:border-gold-300"
                >
                  <TikTokIcon className="h-5 w-5 text-gold-600" />
                  {SOCIAL.tiktok.handle}
                </a>
              </div>

              {/* Big WhatsApp CTA */}
              <a
                href={whatsappLink(
                  `Halo ${SITE.name}! Saya ingin bertanya / memesan.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Chat kami di WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-coffee-100/70 shadow-soft">
              <iframe
                title={`Peta lokasi ${SITE.name} di Bojongsoang, Bandung`}
                src={CONTACT.mapsEmbedUrl}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
