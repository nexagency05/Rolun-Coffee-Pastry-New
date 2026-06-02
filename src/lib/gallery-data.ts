/**
 * Gallery imagery grouped by the categories shown on the Gallery page.
 * Intrinsic width/height are stored so the masonry layout reserves space and
 * avoids layout shift (good CLS).
 */

export type GalleryCategory =
  | "Indoor"
  | "Outdoor"
  | "Food"
  | "Drinks"
  | "Events";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Indoor",
  "Outdoor",
  "Food",
  "Drinks",
  "Events",
];

export const GALLERY: GalleryImage[] = [
  // Indoor
  {
    src: "/images/interior-atrium.webp",
    alt: "Atrium dua lantai Rolun Coffee & Pastry dengan dinding logo yang menyala",
    category: "Indoor",
    width: 1920,
    height: 1440,
  },
  {
    src: "/images/dining-hall.webp",
    alt: "Ruang makan berkanopi kaca dengan tiang kayu dan kursi rotan",
    category: "Indoor",
    width: 512,
    height: 640,
  },
  {
    src: "/images/pastry-shop.webp",
    alt: "Interior toko pastry dengan logo Rolun dan etalase kue kaca",
    category: "Indoor",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/bakery-counter.webp",
    alt: "Counter bakery dan barista dengan etalase pastry",
    category: "Indoor",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/space-main.webp",
    alt: "Area duduk yang hangat di dalam Rolun Coffee & Pastry",
    category: "Indoor",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/atmosphere-1.webp",
    alt: "Meja sudut yang tenang di Rolun",
    category: "Indoor",
    width: 512,
    height: 640,
  },
  {
    src: "/images/atmosphere-2.webp",
    alt: "Detail interior yang cozy di Rolun Coffee & Pastry",
    category: "Indoor",
    width: 512,
    height: 640,
  },

  // Outdoor
  {
    src: "/images/terrace.webp",
    alt: "Tempat duduk teras terbuka dikelilingi tanaman hijau",
    category: "Outdoor",
    width: 1400,
    height: 2487,
  },
  {
    src: "/images/space-2.webp",
    alt: "Area duduk di sisi taman Rolun",
    category: "Outdoor",
    width: 1400,
    height: 1867,
  },
  {
    src: "/images/space-3.webp",
    alt: "Sudut outdoor yang rindang di Rolun Coffee & Pastry",
    category: "Outdoor",
    width: 1400,
    height: 1867,
  },
  {
    src: "/images/atmosphere-3.webp",
    alt: "Suasana outdoor di Rolun",
    category: "Outdoor",
    width: 512,
    height: 640,
  },
  {
    src: "/images/atmosphere-4.webp",
    alt: "Tanaman hijau dan cahaya alami di sekitar bangunan",
    category: "Outdoor",
    width: 513,
    height: 640,
  },

  // Food
  {
    src: "/images/signature-platter.webp",
    alt: "Sajian pizza, chicken steak panggang, dan aneka cemilan untuk berbagi",
    category: "Food",
    width: 1400,
    height: 1867,
  },
  {
    src: "/images/macarons.webp",
    alt: "Deretan macaron warna-warni di etalase",
    category: "Food",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/pastry-case.webp",
    alt: "Irisan kue dan cheesecake di etalase pastry",
    category: "Food",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/dish-1.webp",
    alt: "Hidangan yang ditata cantik dari dapur Rolun",
    category: "Food",
    width: 1400,
    height: 1867,
  },
  {
    src: "/images/dish-3.webp",
    alt: "Sajian signature di Rolun Coffee & Pastry",
    category: "Food",
    width: 1400,
    height: 1867,
  },
  {
    src: "/images/dish-4.webp",
    alt: "Makanan yang baru disajikan di Rolun",
    category: "Food",
    width: 1400,
    height: 1050,
  },
  {
    src: "/images/dish-6.webp",
    alt: "Makanan utama yang ditata di Rolun Coffee & Pastry",
    category: "Food",
    width: 1400,
    height: 1867,
  },
  {
    src: "/images/dish-8.webp",
    alt: "Sajian andalan chef di Rolun",
    category: "Food",
    width: 1400,
    height: 1867,
  },

  // Drinks
  {
    src: "/images/latte-art.webp",
    alt: "Cappuccino dengan latte art yang halus",
    category: "Drinks",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/table-coffee-croissant.webp",
    alt: "Es kopi dan croissant di meja sisi taman",
    category: "Drinks",
    width: 512,
    height: 640,
  },
  {
    src: "/images/atmosphere-5.webp",
    alt: "Minuman yang disajikan di interior yang terang",
    category: "Drinks",
    width: 513,
    height: 640,
  },

  // Events
  {
    src: "/images/romantic-dinner.webp",
    alt: "Pasangan merayakan dinner anniversary di booth yang cozy",
    category: "Events",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/team.webp",
    alt: "Tim Rolun Coffee & Pastry di depan storefront",
    category: "Events",
    width: 1080,
    height: 1350,
  },
  {
    src: "/images/space-4.webp",
    alt: "Ruang yang ditata untuk acara privat",
    category: "Events",
    width: 1400,
    height: 1867,
  },
];
