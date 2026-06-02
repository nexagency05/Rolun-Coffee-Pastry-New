"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  GALLERY,
  GALLERY_CATEGORIES,
  type GalleryCategory,
} from "@/lib/gallery-data";

type Filter = "All" | GalleryCategory;

const FILTER_LABEL: Record<Filter, string> = {
  All: "Semua",
  Indoor: "Indoor",
  Outdoor: "Outdoor",
  Food: "Makanan",
  Drinks: "Minuman",
  Events: "Acara",
};

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter],
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  const filters: Filter[] = ["All", ...GALLERY_CATEGORIES];
  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <div>
      {/* Filter */}
      <div
        className="no-scrollbar -mx-1 flex justify-start gap-2 overflow-x-auto px-1 sm:justify-center"
        role="tablist"
        aria-label="Kategori galeri"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              filter === f
                ? "bg-forest-800 text-cream-50 shadow-soft"
                : "bg-white text-coffee-600 ring-1 ring-coffee-100 hover:ring-gold-300"
            }`}
          >
            {FILTER_LABEL[f]}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <motion.div
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mt-10 columns-2 gap-4 [column-fill:_balance] lg:columns-3 xl:columns-4"
      >
        {items.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`Buka gambar: ${img.alt}`}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl focus-visible:outline-none"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="h-auto w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-950/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="p-4 text-left text-xs font-medium text-cream-50">
                {FILTER_LABEL[img.category]}
              </span>
            </span>
          </button>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-950/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Tutup"
              className="absolute right-4 top-4 rounded-full bg-cream-50/10 p-2 text-cream-50 transition-colors hover:bg-cream-50/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Gambar sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-cream-50/10 p-2 text-cream-50 transition-colors hover:bg-cream-50/20 sm:left-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Gambar berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-cream-50/10 p-2 text-cream-50 transition-colors hover:bg-cream-50/20 sm:right-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <motion.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] w-auto max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="90vw"
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-cream-100/80">
                {current.alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
