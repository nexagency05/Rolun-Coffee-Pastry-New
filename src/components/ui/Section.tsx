import type { ReactNode } from "react";

type Tone = "cream" | "white" | "forest" | "cream-deep";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream-50 text-coffee-700",
  "cream-deep": "bg-cream-100 text-coffee-700",
  white: "bg-white text-coffee-700",
  forest: "bg-forest-800 text-cream-100 grain",
};

/**
 * Vertical rhythm wrapper for a page section, with brand background tones and
 * an inner max-width container.
 */
export function Section({
  children,
  id,
  tone = "cream",
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-28 ${toneClasses[tone]} ${className}`}
    >
      <div className={`container-rolun ${containerClassName}`}>{children}</div>
    </section>
  );
}
