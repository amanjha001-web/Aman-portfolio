import { ArrowDownRight } from "lucide-react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  showAccent = true,
}) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`mx-auto mb-12 flex max-w-3xl flex-col ${
        alignment[align] || alignment.center
      } ${className}`}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold sm:text-sm">
          {showAccent && <ArrowDownRight size={15} />}
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
          {description}
        </p>
      )}

      {showAccent && (
        <span
          aria-hidden="true"
          className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-gold to-brand-red ${
            align === "right" ? "mr-0" : align === "left" ? "ml-0" : ""
          }`}
        />
      )}
    </div>
  );
}
