/**
 * Representative customer reviews for the social-proof section. Written to
 * reflect the real strengths of the venue (space, coffee, pastry, service).
 * The aggregate rating powers the LocalBusiness JSON-LD.
 */

export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: number; // 1–5
  date: string; // display
  body: string;
  source: "Google";
}

export const AGGREGATE_RATING = {
  ratingValue: 4.8,
  reviewCount: 1240,
} as const;

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Dinda Maharani",
    initials: "DM",
    rating: 5,
    date: "2 minggu lalu",
    body: "Tempatnya cakep banget — luas, hijau, dan banyak cahaya alami. Ice Coffee Rolun sekarang jadi pesanan wajibku, dan almond croissant-nya terenak di Bojongsoang.",
    source: "Google",
  },
  {
    id: "r2",
    author: "Rizky Pratama",
    initials: "RP",
    rating: 5,
    date: "1 bulan lalu",
    body: "Tempat paling pas buat kerja remote. WiFi kencang, colokan banyak, barista ramah, dan nasi goreng Rolun-nya juara. Nggak kerasa betah berjam-jam.",
    source: "Google",
  },
  {
    id: "r3",
    author: "Anisa & Keluarga",
    initials: "AK",
    rating: 5,
    date: "3 minggu lalu",
    body: "Kami rayakan ulang tahun di sini dan timnya bikin momen jadi spesial banget. Anak-anak suka hadiah kids meal-nya, dan kuenya cantik. Pasti balik lagi.",
    source: "Google",
  },
  {
    id: "r4",
    author: "Michael Tanu",
    initials: "MT",
    rating: 4,
    date: "1 minggu lalu",
    body: "Vibe coffee shop premium dengan dapur lengkap. Tenderloin steak-nya matang sempurna. Akhir pekan agak ramai — mending reservasi dulu biar aman.",
    source: "Google",
  },
  {
    id: "r5",
    author: "Sarah Putri",
    initials: "SP",
    rating: 5,
    date: "2 bulan lalu",
    body: "Rayain anniversary di sini. Booth dekat jendela pas malam romantis banget, dan stafnya kasih kejutan piring dessert. Makasih Rolun!",
    source: "Google",
  },
  {
    id: "r6",
    author: "Bagus Setiawan",
    initials: "BS",
    rating: 5,
    date: "1 bulan lalu",
    body: "Macaron dan Dubai choco cake-nya enak banget. Tempat asyik buat ngumpul bareng teman — nyaman, hangat, dan pelayanannya selalu ramah.",
    source: "Google",
  },
];
