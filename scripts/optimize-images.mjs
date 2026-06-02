// Optimizes the brand photography in /gambar into web-ready WebP assets in
// /public/images, plus an Open Graph image and raster app icons.
// Run with: npm run images
import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "gambar");
const MENU_SRC = path.join(SRC, "Rolun menu");
const OUT = path.join(ROOT, "public", "images");
const MENU_OUT = path.join(OUT, "menu");
const APP_DIR = path.join(ROOT, "src", "app");

// source file -> { name, width, quality }
const MAP = {
  "tampilan.jpg": { name: "interior-atrium", width: 1920 },
  "food4.jpg": { name: "pastry-shop", width: 1600 },
  "food2.jpg": { name: "bakery-counter", width: 1600 },
  "Snapinsta.app_404571886_362845702886441_1486177116390271761_n_1080.jpg": { name: "dining-hall", width: 1080 },
  "Snapinsta.app_404570742_876224927287848_5555604604248279585_n_1080.jpg": { name: "table-coffee-croissant", width: 1080 },
  "Snapinsta.app_404574403_1100546787738909_254211577292023373_n_1080.jpg": { name: "atmosphere-1", width: 1080 },
  "Snapinsta.app_404584460_205616989253818_2319426170705715722_n_1080.jpg": { name: "atmosphere-2", width: 1080 },
  "Snapinsta.app_404893023_1107778153443224_3776422383692123957_n_1080.jpg": { name: "atmosphere-3", width: 1080 },
  "Snapinsta.app_404938529_1060321082089781_3481712204987490057_n_1080.jpg": { name: "atmosphere-4", width: 1080 },
  "Snapinsta.app_405254800_790827732852271_1545197791963415033_n_1080.jpg": { name: "atmosphere-5", width: 1080 },
  "ruangan1.jpg": { name: "terrace", width: 1400 },
  "ruangan2.jpg": { name: "space-2", width: 1400 },
  "ruangan3.jpg": { name: "space-3", width: 1400 },
  "ruangan4.jpg": { name: "space-4", width: 1400 },
  "Ruaangan.jpg": { name: "space-main", width: 1600 },
  "Food.jpg": { name: "signature-platter", width: 1400 },
  "food1.jpg": { name: "pastry-case", width: 1400 },
  "food3.jpg": { name: "macarons", width: 1400 },
  "food5.jpg": { name: "dish-1", width: 1400 },
  "food6.jpg": { name: "dish-2", width: 1400 },
  "food7.jpg": { name: "dish-3", width: 1400 },
  "food8.jpg": { name: "dish-4", width: 1400 },
  "food9.jpg": { name: "dish-5", width: 1400 },
  "food10.jpg": { name: "dish-6", width: 1400 },
  "food11.jpg": { name: "dish-7", width: 1400 },
  "food12.jpg": { name: "dish-8", width: 1400 },
  "latte.jpg": { name: "latte-art", width: 1200 },
  "Our Team Rolun Coffee & Pastry ✨...📍Rolun Coffee & Pastry (Bojong Soang).jpg": { name: "team", width: 1200 },
  "lamar.jpg": { name: "romantic-dinner", width: 1200 },
};

// Individual menu-book pages we crop signature dish thumbnails from would be
// brittle; instead we publish the curated photo set above and reuse it on the
// menu page. (Menu pages remain available in /gambar for reference.)

const QUALITY = 72;

async function ensure(dir) {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
}

async function processOne(file, cfg) {
  const input = path.join(SRC, file);
  if (!existsSync(input)) {
    console.warn(`  ! missing source: ${file}`);
    return;
  }
  const out = path.join(OUT, `${cfg.name}.webp`);
  const img = sharp(input).rotate();
  const meta = await img.metadata();
  await img
    .resize({ width: Math.min(cfg.width, meta.width || cfg.width), withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);
  const o = await sharp(out).metadata();
  console.log(`  ✓ ${cfg.name}.webp  ${o.width}x${o.height}`);
}

// The real Rolun logo lives on the menu-book cover. We crop the green disc,
// mask it into a clean transparent circle, and use it for the logo + icons.
const LOGO_SRC = path.join(MENU_SRC, "MENU ROLUN BOJONGSOANG_pages-to-jpg-0001.jpg");

async function buildLogoDisc() {
  const size = 760;
  const cropped = await sharp(LOGO_SRC)
    .extract({ left: 240, top: 294, width: size, height: size })
    .png()
    .toBuffer();
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="380" cy="380" r="373" fill="#fff"/></svg>`,
  );
  return sharp(cropped).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

async function main() {
  console.log("Optimizing brand photography ->", OUT);
  await ensure(OUT);
  await ensure(MENU_OUT);

  for (const [file, cfg] of Object.entries(MAP)) {
    await processOne(file, cfg);
  }

  // Open Graph image (1200x630) from the atrium hero with a dark veil baked in.
  const ogSrc = path.join(SRC, "tampilan.jpg");
  if (existsSync(ogSrc)) {
    const veil = Buffer.from(
      `<svg width="1200" height="630"><rect width="1200" height="630" fill="rgba(8,44,36,0.45)"/></svg>`,
    );
    await sharp(ogSrc)
      .rotate()
      .resize(1200, 630, { fit: "cover", position: "centre" })
      .composite([{ input: veil, blend: "over" }])
      .jpeg({ quality: 82 })
      .toFile(path.join(OUT, "og-image.jpg"));
    console.log("  ✓ og-image.jpg 1200x630");
  }

  // Real circular logo + app icons, cropped from the menu cover.
  await ensure(APP_DIR);
  if (existsSync(LOGO_SRC)) {
    const disc = await buildLogoDisc();
    await sharp(disc).resize(512, 512).png().toFile(path.join(OUT, "logo-circle.png"));
    await sharp(disc).resize(512, 512).webp({ quality: 90 }).toFile(path.join(OUT, "logo-circle.webp"));
    await sharp(disc).resize(512, 512).png().toFile(path.join(OUT, "logo-mark.png"));
    await sharp(disc).resize(512, 512).png().toFile(path.join(APP_DIR, "icon.png"));
    await sharp(disc).resize(180, 180).png().toFile(path.join(APP_DIR, "apple-icon.png"));
    console.log("  ✓ logo-circle + icons");
  } else {
    console.warn("  ! logo source not found, skipping logo/icons");
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
