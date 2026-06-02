import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/Motion";

export type Crumb = { name: string; href: string };

/**
 * Compact dark hero used at the top of every inner page. The dark backdrop
 * lets the transparent navbar render in light text. Supports a background photo
 * (with veil) or a plain forest gradient.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative isolate flex min-h-[56vh] items-center overflow-hidden bg-forest-900 pt-24 sm:min-h-[60vh]">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-veil" aria-hidden />
        </>
      ) : (
        <div className="absolute inset-0 bg-forest-veil grain" aria-hidden />
      )}

      <div className="container-rolun relative z-10 py-16 text-center sm:py-20">
        <Reveal>
          {eyebrow && (
            <span className="eyebrow mb-4 justify-center text-gold-300">
              <span className="h-px w-6 bg-gold-400/70" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="mx-auto max-w-4xl font-serif text-4xl font-semibold leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>

        <nav
          aria-label="Breadcrumb"
          className="mt-8 flex items-center justify-center"
        >
          <ol className="flex flex-wrap items-center justify-center gap-1 text-xs font-medium text-cream-100/70">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-1">
                  {last ? (
                    <span aria-current="page" className="text-gold-300">
                      {c.name}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-cream-50"
                    >
                      {c.name}
                    </Link>
                  )}
                  {!last && (
                    <ChevronRight
                      className="h-3.5 w-3.5 text-cream-100/40"
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
