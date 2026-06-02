import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, ArrowUpRight } from "lucide-react";
import {
  SITE,
  CONTACT,
  NAV,
  SOCIAL,
  OPENING_HOURS,
  fullAddress,
  whatsappLink,
} from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9V9c-1.3.1-2.5-.3-3.6-1v6.8c0 3.4-2.7 5.7-5.8 5.2-2.7-.4-4.6-2.8-4.4-5.5.2-2.6 2.5-4.6 5.1-4.5.2 0 .4 0 .7.1v2.5c-.3-.1-.6-.2-.9-.2-1.3 0-2.3 1.1-2.2 2.4.1 1.2 1.1 2.1 2.3 2.1 1.3 0 2.3-1 2.3-2.4V3h3z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-950 text-cream-100/80 grain">
      <div className="container-rolun grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
            {SITE.tagline}
            {" Coffee shop specialty & bakery artisan di Bojongsoang, Bandung."}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE.name} di Instagram`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/80 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE.name} di TikTok`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/80 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer" className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-brand text-gold-400">
            Jelajahi
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-100/70 transition-colors hover:text-gold-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit */}
        <div className="lg:col-span-5">
          <h2 className="text-xs font-semibold uppercase tracking-brand text-gold-400">
            Kunjungi Kami
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
              <a
                href={CONTACT.mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-100/80 transition-colors hover:text-gold-300"
              >
                {fullAddress}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
              <a
                href={whatsappLink(
                  "Halo Rolun Coffee & Pastry, saya ingin bertanya.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-100/80 transition-colors hover:text-gold-300"
              >
                {CONTACT.phoneDisplay}{" "}
                <span className="text-cream-100/50">(WhatsApp)</span>
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
              <div className="text-cream-100/80">
                {OPENING_HOURS.map((h) => (
                  <p key={h.label}>
                    <span className="text-cream-100/60">{h.label}:</span>{" "}
                    {h.opens.replace(":", ".")} –{" "}
                    {(h.closes === "24:00" ? "00:00" : h.closes).replace(":", ".")}
                  </p>
                ))}
              </div>
            </li>
          </ul>
          <Link
            href="/reservation"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            Reservasi meja
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-rolun flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-100/50 sm:flex-row">
          <p>
            © {year} {SITE.legalName}. Hak cipta dilindungi.
          </p>
          <p>Dibuat di Bandung · Kopi · Pastry · Dapur</p>
        </div>
      </div>
    </footer>
  );
}
