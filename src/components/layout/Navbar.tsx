"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarHeart } from "lucide-react";
import { NAV } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

/**
 * Fixed header. Transparent with light text while at the top of a page (every
 * page opens with a dark hero), then turns into a solid cream bar with a blur
 * and shadow once the user scrolls. Includes an accessible mobile drawer.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const linkColor = solid
    ? "text-coffee-600 hover:text-forest-800"
    : "text-cream-100/90 hover:text-white";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand ${
        solid
          ? "bg-cream-50/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-rolun flex h-16 items-center justify-between lg:h-20"
      >
        <Logo variant={solid ? "dark" : "light"} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${linkColor} ${
                  isActive(item.href) ? "after:scale-x-100" : "after:scale-x-0"
                } after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-gold-500 after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-medium text-forest-900 shadow-soft transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-gold-300"
          >
            <CalendarHeart className="h-4 w-4" aria-hidden />
            Reservasi Meja
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className={`lg:hidden ${solid ? "text-forest-800" : "text-cream-50"}`}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-forest-900 text-cream-100 transition-[max-height,opacity] duration-500 ease-brand lg:hidden ${
          open ? "max-h-[90vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="container-rolun flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-forest-700/60 text-gold-300"
                    : "text-cream-100/90 hover:bg-forest-800"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/reservation"
              className="flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-base font-semibold text-forest-900"
            >
              <CalendarHeart className="h-5 w-5" aria-hidden />
              Reservasi Meja
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
