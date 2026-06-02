import { Flame, Award, Star, Sparkles } from "lucide-react";
import type { MenuTag } from "@/lib/menu-data";
import { TAG_LABEL } from "@/lib/menu-data";

const tagStyles: Record<
  MenuTag,
  { className: string; Icon: typeof Flame }
> = {
  signature: {
    className: "bg-gold-100 text-gold-700 ring-1 ring-gold-300/60",
    Icon: Star,
  },
  chef: {
    className: "bg-forest-50 text-forest-700 ring-1 ring-forest-200",
    Icon: Award,
  },
  spicy: {
    className: "bg-copper/10 text-copper-dark ring-1 ring-copper/30",
    Icon: Flame,
  },
  new: {
    className: "bg-maroon/10 text-maroon ring-1 ring-maroon/20",
    Icon: Sparkles,
  },
};

export function Tag({ tag, className = "" }: { tag: MenuTag; className?: string }) {
  const { className: tone, Icon } = tagStyles[tag];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${tone} ${className}`}
    >
      <Icon className="h-3 w-3" aria-hidden />
      {TAG_LABEL[tag]}
    </span>
  );
}
