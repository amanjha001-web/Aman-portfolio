import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import { SITE_CONFIG } from "../utils/constants";

const socialItems = [
  {
    label: "GitHub",
    href: SITE_CONFIG.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "Email",
    href: SITE_CONFIG.email ? `mailto:${SITE_CONFIG.email}` : "",
    icon: FaEnvelope,
  },
  {
    label: "WhatsApp",
    href: SITE_CONFIG.whatsapp,
    icon: FaWhatsapp,
  },
];

export default function SocialLinks({
  className = "",
  iconSize = 19,
  showLabels = false,
}) {
  const availableLinks = socialItems.filter(({ href }) => Boolean(href));

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {availableLinks.map(({ label, href, icon: Icon }) => {
        const external = /^https?:\/\//i.test(href);

        return (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="group inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-brand-surface text-brand-muted transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <Icon size={iconSize} aria-hidden="true" focusable="false" />

            {showLabels && (
              <span className="pr-2 text-sm font-medium">{label}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
