/**
 * Single source of truth for brand facts, contact details (NAP), opening
 * hours, navigation and social links. Imported by SEO metadata, JSON-LD,
 * the footer, contact page and reservation form so everything stays in sync.
 */

export const SITE = {
  name: "Rolun Coffee & Pastry",
  shortName: "Rolun Coffee",
  legalName: "Rolun Coffee & Pastry",
  tagline: "Kopi Penuh Makna, Momen Berkesan.",
  description:
    "Rolun Coffee & Pastry adalah coffee shop specialty dan bakery artisan di Bojongsoang, Bandung — menyajikan kopi signature, aneka pastry segar, dan menu dapur lengkap dalam suasana yang hangat dan timeless.",
  // Canonical production URL (update when the domain goes live).
  url: "https://www.roluncoffee.id",
  locale: "id_ID",
  // Used in copyright + structured data.
  foundingYear: 2022,
} as const;

export const CONTACT = {
  phoneDisplay: "0852-3694-9467",
  phoneE164: "+6285236949467",
  // wa.me requires the number without the leading "+".
  whatsapp: "6285236949467",
  email: "hello@roluncoffee.id",
  address: {
    street: "Jl. Raya Cijagra No. 8",
    district: "Bojongsoang",
    locality: "Kabupaten Bandung",
    region: "Jawa Barat",
    postalCode: "40288",
    country: "ID",
  },
  geo: {
    latitude: -6.97597,
    longitude: 107.6291,
  },
  // Google Maps directions + embed (query-based, no API key required).
  mapsPlaceUrl:
    "https://www.google.com/maps/search/?api=1&query=Rolun+Coffee+%26+Pastry+Bojongsoang",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Rolun%20Coffee%20%26%20Pastry%2C%20Jl.%20Raya%20Cijagra%20Bojongsoang%2C%20Kabupaten%20Bandung&output=embed",
} as const;

export const fullAddress = `${CONTACT.address.street}, ${CONTACT.address.district}, ${CONTACT.address.locality}, ${CONTACT.address.region} ${CONTACT.address.postalCode}`;

export type OpeningHour = {
  /** Schema.org day token(s) */
  days: string[];
  label: string;
  opens: string; // 24h "HH:MM"
  closes: string;
};

export const OPENING_HOURS: OpeningHour[] = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
    label: "Minggu – Kamis",
    opens: "09:00",
    closes: "23:00",
  },
  {
    days: ["Friday", "Saturday"],
    label: "Jumat – Sabtu",
    opens: "09:00",
    closes: "24:00",
  },
];

export const HOURS_SUMMARY =
  "Buka Setiap Hari · 09.00 – 23.00 (Jumat–Sabtu sampai tengah malam)";

export const SOCIAL = {
  instagram: {
    label: "Instagram",
    handle: "@roluncoffee",
    url: "https://www.instagram.com/roluncoffee",
  },
  tiktok: {
    label: "TikTok",
    handle: "@roluncoffee",
    url: "https://www.tiktok.com/@roluncoffee",
  },
} as const;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Galeri", href: "/gallery" },
  { label: "Acara", href: "/events" },
  { label: "Reservasi", href: "/reservation" },
  { label: "Kontak", href: "/contact" },
];

/** Events / private functions the venue hosts (from the menu book). */
export const PACKAGES = [
  "Pernikahan",
  "Lamaran",
  "Gathering",
  "Meeting",
  "Photoshoot",
  "Ulang Tahun",
  "Bridal Shower",
  "Dinner Romantis",
] as const;

/**
 * Build a wa.me deep link with a pre-filled message. Used by every
 * "WhatsApp" / "Reserve" CTA and by the reservation form on submit.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Format a number as Indonesian Rupiah, e.g. 32500 -> "Rp 32.500". */
export function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}
