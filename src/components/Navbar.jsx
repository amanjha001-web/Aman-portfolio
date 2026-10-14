import { useEffect, useState } from "react";
import {  Menu } from "lucide-react";
import logo from "../assets/logot.png";
import MobileMenu from "./MobileMenu";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 150) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-brand-bg/90 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border-b border-transparent bg-brand-bg/50 backdrop-blur-sm"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12"
        >
          <a
            href="#home"
            aria-label="Go to homepage"
            className="flex shrink-0 items-center gap-3"
          >
            <img
              src={logo}
              alt="Trinetra Tech logo"
              className="h-10 w-10 rounded-lg object-contain sm:h-11 sm:w-11"
              fetchPriority="high"
            />

            <span className="font-display text-lg font-bold tracking-tight text-brand-text sm:text-xl">
              Trinetra<span className="text-brand-gold"> Tech</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors xl:px-3.5 ${
                    isActive
                      ? "text-brand-gold"
                      : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-brand-gold transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden shrink-0 lg:block">
            <Button href="#contact" size="sm" showArrow>
              Let's Talk
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-brand-surface text-brand-text transition-colors hover:border-brand-gold/40 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold lg:hidden"
          >
            <Menu size={23} />
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
