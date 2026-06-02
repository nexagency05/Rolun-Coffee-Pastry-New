import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/** Persistent WhatsApp CTA, bottom-right, for quick questions & bookings. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(
        "Halo Rolun Coffee & Pastry! Saya ingin bertanya / memesan.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat dengan Rolun Coffee & Pastry via WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-card transition-transform duration-300 ease-brand hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
