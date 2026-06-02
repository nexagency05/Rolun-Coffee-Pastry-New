import Link from "next/link";
import { Home, UtensilsCrossed } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-forest-900 grain px-5 py-28 text-center">
      <div className="relative z-10 max-w-lg">
        <LogoMark className="mx-auto h-16 w-16" />
        <p className="mt-8 font-serif text-6xl font-semibold text-gold-300">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-cream-50 sm:text-4xl">
          Halaman ini sudah dingin
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-cream-100/80">
          Halaman yang kamu cari tidak ada di menu kami. Yuk, balik ke sesuatu
          yang hangat.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-medium text-forest-900 transition-colors hover:bg-gold-300"
          >
            <Home className="h-4 w-4" aria-hidden />
            Kembali ke beranda
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-cream-100/40 px-7 py-3.5 text-sm font-medium text-cream-50 transition-colors hover:bg-cream-50 hover:text-forest-900"
          >
            <UtensilsCrossed className="h-4 w-4" aria-hidden />
            Lihat menu
          </Link>
        </div>
      </div>
    </section>
  );
}
