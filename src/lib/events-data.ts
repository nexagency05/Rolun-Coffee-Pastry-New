/**
 * Upcoming events hosted at Rolun Coffee & Pastry. Dates are ISO strings so
 * they can power both the Events page and Event JSON-LD. Keep dates current.
 */

export type EventType =
  | "Live Music"
  | "Workshop Kopi"
  | "Kumpul Komunitas"
  | "Open Mic"
  | "Spesial";

export interface EventItem {
  id: string;
  title: string;
  type: EventType;
  /** ISO date, e.g. "2026-06-06" */
  date: string;
  startTime: string; // "19:00"
  endTime: string;
  description: string;
  image: string;
  imageW: number;
  imageH: number;
  /** Free entry vs ticketed (display only) */
  entry: string;
}

export const EVENTS: EventItem[] = [
  {
    id: "acoustic-night-jun",
    title: "Malam Live Music Akustik",
    type: "Live Music",
    date: "2026-06-06",
    startTime: "19:00",
    endTime: "22:00",
    description:
      "Tutup pekan dengan alunan akustik dari musisi lokal Bandung, ditemani kopi signature dan pastry hangat kami.",
    image: "/images/dining-hall.webp",
    imageW: 512,
    imageH: 640,
    entry: "Gratis",
  },
  {
    id: "manual-brew-workshop-jun",
    title: "Workshop Manual Brew 101",
    type: "Workshop Kopi",
    date: "2026-06-14",
    startTime: "10:00",
    endTime: "12:30",
    description:
      "Kelas langsung bareng barista kami: V60, gilingan, rasio, dan tasting — pulang bawa skill menyeduh kopi Rolun sendiri.",
    image: "/images/latte-art.webp",
    imageW: 1200,
    imageH: 1600,
    entry: "Rp 150.000 / orang",
  },
  {
    id: "community-gathering-jun",
    title: "Kumpul Kreatif Bojongsoang",
    type: "Kumpul Komunitas",
    date: "2026-06-22",
    startTime: "16:00",
    endTime: "19:00",
    description:
      "Meet-up terbuka untuk para kreator, pelajar, dan pekerja remote di ruang komunitas kami. Berbagi ide, cari kolaborator, lanjut makan malam.",
    image: "/images/space-main.webp",
    imageW: 1600,
    imageH: 1200,
    entry: "Gratis",
  },
  {
    id: "open-mic-jun",
    title: "Malam Open Mic Rolun",
    type: "Open Mic",
    date: "2026-06-27",
    startTime: "19:30",
    endTime: "22:30",
    description:
      "Musik, puisi, atau stand-up — panggung ini milikmu. Daftar di kasir mulai pukul 18.30 dan nikmati suasana yang penuh dukungan.",
    image: "/images/atmosphere-2.webp",
    imageW: 512,
    imageH: 640,
    entry: "Gratis",
  },
  {
    id: "latte-art-throwdown-jul",
    title: "Latte Art Throwdown",
    type: "Spesial",
    date: "2026-07-05",
    startTime: "15:00",
    endTime: "18:00",
    description:
      "Para barista se-Bandung adu kreasi dalam kompetisi latte art yang seru. Datang, dukung, seruput, dan pilih pour favoritmu.",
    image: "/images/bakery-counter.webp",
    imageW: 1600,
    imageH: 1200,
    entry: "Gratis",
  },
  {
    id: "sunset-pairing-jul",
    title: "Sunset Akustik & Pairing Pastry",
    type: "Live Music",
    date: "2026-07-19",
    startTime: "17:00",
    endTime: "20:00",
    description:
      "Sore intim di teras — pairing pastry dan kopi pilihan diiringi alunan akustik saat matahari terbenam.",
    image: "/images/terrace.webp",
    imageW: 1400,
    imageH: 2487,
    entry: "Rp 95.000 / orang",
  },
];

/** Tanggal panjang, mis. "Sabtu, 14 Juni 2026". */
export function formatEventDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Bagian tanggal ringkas untuk chip kalender. */
export function eventDateParts(iso: string): { day: string; month: string } {
  const d = new Date(`${iso}T00:00:00`);
  return {
    day: d.toLocaleDateString("id-ID", { day: "2-digit" }),
    month: d.toLocaleDateString("id-ID", { month: "short" }).toUpperCase(),
  };
}
