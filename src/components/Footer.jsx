import { ArrowUpRight} from "lucide-react";
import logo from "../assets/logot.png";
import { SITE_CONFIG } from "../utils/constants";
import Container from "./Container";
import SocialLinks from "./SocialLinks";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-surface/40">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" aria-label="Trinetra Tech homepage">
              <img
                src={logo}
                alt="Logo"
                className="h-50 w-50 rounded-lg object-contain animate-logo-glow"
                loading="lazy"
              />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-brand-muted">
              Building thoughtful, responsive and user-focused digital
              experiences with modern web technologies.
            </p>

            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-brand-text">
              Quick Links
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-brand-muted transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-brand-text">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-brand-muted">
              Have a project in mind? Let's discuss how we can bring your idea
              to life.
            </p>

            {SITE_CONFIG.email && (
              <a
                href={SITE_CONFIG.email}
                className="mt-4 inline-flex max-w-full items-center gap-2 break-all text-sm font-medium text-brand-gold hover:text-brand-gold-light"
              >
                {SITE_CONFIG.email.key
                  ? SITE_CONFIG.email.key
                  : SITE_CONFIG.email.replace("mailto:", "")}
                <ArrowUpRight size={16} className="shrink-0" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-brand-muted">
            © {year} {SITE_CONFIG.brand}. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 text-brand-muted">
            Crafted with {SITE_CONFIG.brand} by{" "}
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-text transition-colors hover:text-brand-gold"
            >
              Aman
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
