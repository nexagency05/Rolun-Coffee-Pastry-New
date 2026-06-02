"use client";

import { useMemo, useState } from "react";
import { Search, X, UtensilsCrossed } from "lucide-react";
import {
  MENU,
  MENU_CATEGORIES,
  CATEGORY_LABEL,
  TAG_LABEL,
  type MenuCategory,
  type MenuItem,
  type MenuTag,
} from "@/lib/menu-data";
import { MenuCard } from "@/components/shared/MenuCard";

const TAG_ORDER: MenuTag[] = ["signature", "chef", "spicy", "new"];

function groupBy(items: MenuItem[], key: (i: MenuItem) => string) {
  const map = new Map<string, MenuItem[]>();
  for (const item of items) {
    const k = key(item);
    const arr = map.get(k);
    if (arr) arr.push(item);
    else map.set(k, [item]);
  }
  return Array.from(map.entries());
}

export function MenuExplorer() {
  const [active, setActive] = useState<MenuCategory>("Coffee");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const visible = useMemo(() => {
    const pool = searching ? MENU : MENU.filter((m) => m.category === active);
    if (!searching) return pool;
    return pool.filter((m) =>
      `${m.name} ${m.description} ${m.group} ${m.category}`
        .toLowerCase()
        .includes(q),
    );
  }, [active, q, searching]);

  // While browsing a tab, group by sub-section; while searching, group by category.
  const groups = useMemo(
    () =>
      searching
        ? groupBy(visible, (i) => i.category)
        : groupBy(visible, (i) => i.group),
    [visible, searching],
  );

  const activeBlurb = MENU_CATEGORIES.find((c) => c.id === active)?.blurb;

  return (
    <div>
      {/* Controls */}
      <div className="sticky top-16 z-30 -mx-5 border-b border-coffee-100/60 bg-cream-50/95 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8 lg:top-20 lg:-mx-12 lg:px-12">
        <div className="mx-auto flex max-w-container flex-col gap-4">
          {/* Search */}
          <div role="search" className="relative">
            <label htmlFor="menu-search" className="sr-only">
              Cari menu
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-coffee-300"
              aria-hidden
            />
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari minuman, pastry, makanan…"
              className="w-full rounded-full border border-coffee-100 bg-white py-3 pl-12 pr-12 text-sm text-coffee-700 shadow-sm outline-none transition-colors placeholder:text-coffee-300 focus:border-gold-400"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Hapus pencarian"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-coffee-400 transition-colors hover:bg-coffee-50 hover:text-coffee-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div
            className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
            role="tablist"
            aria-label="Kategori menu"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = !searching && active === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActive(cat.id);
                    setQuery("");
                  }}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-forest-800 text-cream-50 shadow-soft"
                      : "bg-white text-coffee-600 ring-1 ring-coffee-100 hover:ring-gold-300"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Heading / legend */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-forest-800">
            {searching ? "Hasil pencarian" : CATEGORY_LABEL[active]}
          </h2>
          <p className="mt-1 text-sm text-coffee-500">
            {searching
              ? `${visible.length} item cocok dengan “${query.trim()}”`
              : activeBlurb}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-coffee-400">
          {TAG_ORDER.map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${
                  t === "signature"
                    ? "bg-gold-400"
                    : t === "chef"
                      ? "bg-forest-500"
                      : t === "spicy"
                        ? "bg-copper"
                        : "bg-maroon"
                }`}
              />
              {TAG_LABEL[t]}
            </li>
          ))}
        </ul>
      </div>

      {/* Results */}
      {visible.length === 0 ? (
        <div className="mt-16 flex flex-col items-center rounded-3xl border border-dashed border-coffee-200 bg-white/60 py-20 text-center">
          <UtensilsCrossed className="h-10 w-10 text-coffee-200" aria-hidden />
          <p className="mt-4 font-serif text-xl text-forest-800">
            Tidak ada menu yang cocok
          </p>
          <p className="mt-1 text-sm text-coffee-400">
            Coba kata kunci lain, atau jelajahi kategori di atas.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-6 rounded-full bg-forest-800 px-6 py-2.5 text-sm font-medium text-cream-50 transition-colors hover:bg-forest-900"
          >
            Hapus pencarian
          </button>
        </div>
      ) : (
        <div className="mt-10 space-y-14">
          {groups.map(([groupName, items]) => (
            <section key={groupName} aria-labelledby={`grp-${groupName}`}>
              <div className="mb-6 flex items-center gap-4">
                <h3
                  id={`grp-${groupName}`}
                  className="font-serif text-xl font-semibold text-forest-700"
                >
                  {groupName}
                </h3>
                <span className="h-px flex-1 bg-coffee-100" aria-hidden />
                <span className="text-xs font-medium text-coffee-300">
                  {items.length}
                </span>
              </div>
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
