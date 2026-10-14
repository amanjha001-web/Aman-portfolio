import { Check, Sparkles } from "lucide-react";
import Button from "./Button";

export default function PricingCard({ plan }) {
  if (!plan || typeof plan !== "object") {
    return null;
  }

  const {
    name,
    price,
    currency = "₹",
    period = "project",
    description,
    delivery,
    features = [],
    popular = false,
    cta = "Get Started",
    href = "#contact",
  } = plan;

  const formattedPrice =
    price === null || price === undefined
      ? "Custom"
      : `${currency}${Number(price).toLocaleString("en-IN")}`;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
        popular
          ? "border-brand-gold/60 bg-gradient-to-b from-brand-gold/[0.09] to-brand-surface shadow-[0_0_40px_rgba(212,175,55,0.07)]"
          : "border-white/10 bg-brand-surface hover:border-brand-gold/30"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-brand-gold px-3 py-1.5 text-xs font-bold text-brand-bg">
          <Sparkles size={13} aria-hidden="true" />
          Popular Choice
        </div>
      )}

      <div className={popular ? "mt-3" : ""}>
        <h3 className="font-display text-xl font-bold text-brand-text">
          {name}
        </h3>

        {description && (
          <p className="mt-2 min-h-12 text-sm leading-6 text-brand-muted">
            {description}
          </p>
        )}
      </div>

      <div className="mt-6">
        <p className="font-display text-3xl font-bold tracking-tight text-brand-text sm:text-4xl">
          {formattedPrice}
        </p>

        {price !== null && price !== undefined && (
          <p className="mt-1 text-xs text-brand-muted">Per {period}</p>
        )}

        {delivery && (
          <p className="mt-4 inline-flex rounded-lg border border-white/10 bg-brand-bg px-3 py-2 text-xs font-medium text-brand-muted">
            Delivery: {delivery}
          </p>
        )}
      </div>

      <div className="my-6 h-px bg-white/10" />

      <ul className="flex-1 space-y-3">
        {Array.isArray(features) &&
          features.map((feature, index) => (
            <li
              key={`${feature}-${index}`}
              className="flex items-start gap-3 text-sm leading-6 text-brand-muted"
            >
              <Check
                size={17}
                className="mt-0.5 shrink-0 text-brand-gold"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
      </ul>

      <Button
        href={href}
        variant={popular ? "primary" : "outline"}
        className="mt-8 w-full"
        showArrow
      >
        {cta}
      </Button>
    </article>
  );
}
