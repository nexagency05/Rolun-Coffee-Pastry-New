# Rolun Coffee & Pastry — Website

A production-ready, multipage marketing website for **Rolun Coffee & Pastry**, a
premium specialty coffee shop & artisan bakery in Bojongsoang, Bandung.

Built to increase brand awareness, showcase the menu, and drive table
reservations and footfall — **not** an e‑commerce or admin app (no login, cart,
backend or CMS).

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS 3** for styling (brand design tokens in `tailwind.config.ts`)
- **Framer Motion** for subtle, performance‑minded animations
- **Lucide** icons
- **sharp** for build‑time image optimization

## Getting started

```bash
npm install          # install dependencies
npm run images       # (optional) regenerate optimized WebP assets from /gambar
npm run dev          # start the dev server  → http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
```

> **Note:** the npm scripts call Next via `node node_modules/next/dist/bin/next`
> on purpose — it keeps the commands working even though this folder path
> contains spaces (which otherwise breaks npm's `.bin` shim on Windows).

## Pages

| Route          | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| `/`            | Home — hero, signatures, why‑stay, gallery/events/reviews, CTA |
| `/about`       | Brand story, coffee philosophy, space, team                    |
| `/menu`        | Full menu with category tabs + live search (most important)    |
| `/gallery`     | Masonry gallery with category filter + lightbox                |
| `/events`      | Upcoming events + private event packages                       |
| `/reservation` | Reservation form → opens a pre‑filled WhatsApp message         |
| `/contact`     | Map embed, address, hours, WhatsApp, Instagram, TikTok         |

## Project structure

```
src/
  app/                 # routes, layout, sitemap.ts, robots.ts, manifest.ts, icon.svg
  components/
    home/  layout/  menu/  gallery/  reservation/  shared/  ui/  motion/  seo/
  lib/
    site.ts            # brand facts, NAP, hours, social, WhatsApp + currency helpers
    menu-data.ts       # the full menu, transcribed from the menu book
    gallery-data.ts    events-data.ts    reviews-data.ts
    schema.ts          # JSON-LD builders (LocalBusiness, Menu, Event, Breadcrumb)
    seo.ts             # per-page metadata helper
scripts/
  optimize-images.mjs  # /gambar → /public/images (WebP) + OG image + icons
public/images/         # optimized, web-ready photography
gambar/                # original source photography & the menu book (reference)
```

## Editing content

Everything content‑related lives in `src/lib/*-data.ts` and `src/lib/site.ts`:

- **Menu items / prices** → `menu-data.ts`
- **Business name, address, phone, hours, socials** → `site.ts`
- **Events** → `events-data.ts` (keep dates current)
- **Gallery images** → `gallery-data.ts`

Set the live domain in `SITE.url` (`src/lib/site.ts`) so canonical URLs, the
sitemap, Open Graph tags and structured data point to production.

## SEO & performance

- Per‑page metadata, Open Graph & Twitter cards, canonical URLs
- `LocalBusiness` (CafeOrCoffeeShop), `Menu`, `Event` & `BreadcrumbList` JSON‑LD
- `sitemap.xml`, `robots.txt`, web manifest, geo meta tags
- All pages prerendered as static HTML; images served as optimized AVIF/WebP via
  `next/image`; fonts loaded with `display=swap`
- Accessibility: semantic landmarks, skip link, keyboard‑navigable menus &
  lightbox, focus-visible rings, alt text, `prefers-reduced-motion` support

Local SEO targets: _cafe Bandung, coffee shop Bandung, cafe Bojongsoang, coffee
shop Bojongsoang, Rolun Coffee & Pastry_.
