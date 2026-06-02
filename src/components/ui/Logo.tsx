import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

/**
 * Brand logo mark — the real Rolun monogram (gold serif "R" with a coffee-leaf
 * sprig on a forest-green disc), served as an optimized circular PNG.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-circle.png"
      alt=""
      width={512}
      height={512}
      className={className}
      priority
    />
  );
}

export function Logo({
  variant = "dark",
  withText = true,
  className,
}: {
  /** "dark" = forest text (light backgrounds); "light" = cream text (dark bg) */
  variant?: "dark" | "light";
  withText?: boolean;
  className?: string;
}) {
  const textColor = variant === "light" ? "text-cream-50" : "text-forest-800";
  const subColor = variant === "light" ? "text-gold-300" : "text-gold-600";
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — beranda`}
      className={`group inline-flex items-center gap-3 ${className ?? ""}`}
    >
      <LogoMark className="h-11 w-11 shrink-0 transition-transform duration-500 ease-brand group-hover:scale-105" />
      {withText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-lg font-semibold tracking-wide ${textColor}`}
          >
            Rolun
          </span>
          <span
            className={`text-[0.6rem] font-semibold uppercase tracking-wider2 ${subColor}`}
          >
            Coffee &amp; Pastry
          </span>
        </span>
      )}
    </Link>
  );
}
