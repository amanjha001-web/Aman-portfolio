import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "../utils/constants";

export default function FloatingWhatsApp() {
  const whatsappUrl = SITE_CONFIG.whatsapp;

  if (!whatsappUrl) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-[80px] right-3 z-40 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/15 bg-[#25D366] px-4 text-white shadow-[0_8px_30px_rgba(37,211,102,0.22)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_36px_rgba(37,211,102,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-bg sm:right-7 sm:h-16 sm:px-5"
    >
      <FaWhatsapp size={26} aria-hidden="true" />

      <span className="text-sm font-semibold sm:text-base">WhatsApp</span>

      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-[#25D366]/40 animate-ping opacity-20"
      />
    </a>
  );
}
