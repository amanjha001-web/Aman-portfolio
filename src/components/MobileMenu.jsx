import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { SITE_CONFIG } from "../utils/constants";

const defaultLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu({ isOpen, onClose, links = defaultLinks }) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
      />

      <nav className="animate-slide-in-right absolute right-0 top-0 flex h-full w-[min(88%,380px)] flex-col overflow-y-auto border-l border-white/10 bg-brand-bg px-6 pb-8 pt-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="font-display text-lg font-bold text-brand-text">
            Navigation<span className="text-brand-gold">.</span>
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-brand-text transition-colors hover:border-brand-gold/40 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <X size={21} />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 py-6">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="animate-fade-up rounded-xl px-4 py-3.5 text-base font-medium text-brand-muted transition-colors hover:bg-white/5 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={onClose}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 py-3 font-semibold text-brand-bg transition-colors hover:bg-brand-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          Let's Talk
          <ArrowUpRight size={18} />
        </a>

        {SITE_CONFIG.email && (
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="mt-4 break-all text-center text-sm text-brand-muted hover:text-brand-gold"
          >
            {SITE_CONFIG.email}
          </a>
        )}
      </nav>
    </div>
  );
}
