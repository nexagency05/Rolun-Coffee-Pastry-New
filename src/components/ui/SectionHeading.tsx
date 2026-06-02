import type { ElementType, ReactNode } from "react";
import { Reveal } from "@/components/motion/Motion";

/**
 * Standard section header: small gold eyebrow, serif title, optional intro.
 * `align` controls centering; `tone` flips colours for dark forest sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  as = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  as?: ElementType;
  className?: string;
}) {
  const Tag = as;
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-cream-50" : "text-forest-800";
  const descColor = tone === "light" ? "text-cream-200/80" : "text-coffee-500";

  return (
    <Reveal
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow mb-4">
          <span className="h-px w-6 bg-gold-500/70" aria-hidden />
          {eyebrow}
        </span>
      )}
      <Tag
        className={`font-serif text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.85rem] ${titleColor}`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${descColor} ${isCenter ? "" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
