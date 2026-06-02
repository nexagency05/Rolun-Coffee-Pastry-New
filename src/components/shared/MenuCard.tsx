import Image from "next/image";
import { Coffee, CupSoda, Leaf, Croissant, UtensilsCrossed, Cookie } from "lucide-react";
import type { MenuCategory, MenuItem } from "@/lib/menu-data";
import { CATEGORY_LABEL } from "@/lib/menu-data";
import { formatRupiah } from "@/lib/site";
import { Tag } from "@/components/ui/Tag";

const categoryIcon: Record<MenuCategory, typeof Coffee> = {
  Coffee: Coffee,
  "Non Coffee": CupSoda,
  Tea: Leaf,
  Pastry: Croissant,
  "Main Course": UtensilsCrossed,
  Snacks: Cookie,
};

/** Branded placeholder used for items without a photo — keeps the grid premium. */
function MonogramTile({ category }: { category: MenuCategory }) {
  const Icon = categoryIcon[category];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-forest-800 grain">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-10 select-none font-serif text-[10rem] leading-none text-gold-400/[0.07]"
      >
        R
      </span>
      <div className="relative flex flex-col items-center gap-2 text-gold-300">
        <Icon className="h-9 w-9" strokeWidth={1.4} aria-hidden />
        <span className="text-[0.6rem] font-semibold uppercase tracking-wider2 text-gold-400/90">
          {CATEGORY_LABEL[category]}
        </span>
      </div>
    </div>
  );
}

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-coffee-100/60 bg-white shadow-sm transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
          />
        ) : (
          <MonogramTile category={item.category} />
        )}
        {item.tags && item.tags.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <Tag key={t} tag={t} />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold leading-snug text-forest-800">
            {item.name}
          </h3>
          <p className="shrink-0 whitespace-nowrap font-serif text-lg font-semibold text-gold-600">
            {formatRupiah(item.price)}
          </p>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-coffee-500">
          {item.description}
        </p>
        <div className="mt-auto pt-4">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider2 text-coffee-300">
            {item.group}
            {item.unit ? ` · ${item.unit}` : ""}
          </span>
        </div>
      </div>
    </article>
  );
}
