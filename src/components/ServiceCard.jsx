import {
  ArrowUpRight,
  Code2,
  LayoutTemplate,
  MonitorSmartphone,
  ShoppingCart,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";

const iconMap = {
  code: Code2,
  design: LayoutTemplate,
  responsive: MonitorSmartphone,
  ecommerce: ShoppingCart,
  dashboard: PanelsTopLeft,
  maintenance: Wrench,
};

export default function ServiceCard({ service }) {
  const {
    title,
    description,
    icon = "code",
    features = [],
    number,
    href = "#contact",
  } = service;

  const Icon = iconMap[icon] || Code2;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_16px_50px_rgba(212,175,55,0.07)] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-gold/5 blur-3xl transition-colors duration-500 group-hover:bg-brand-red/10"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-gold/5 text-brand-gold transition-all duration-300 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10">
          <Icon size={23} strokeWidth={1.7} />
        </div>

        {number && (
          <span className="font-display text-sm font-semibold tracking-wider text-brand-muted/60">
            {number}
          </span>
        )}
      </div>

      <h3 className="relative mt-6 font-display text-xl font-bold text-brand-text transition-colors group-hover:text-brand-gold">
        {title}
      </h3>

      <p className="relative mt-3 flex-1 text-sm leading-7 text-brand-muted">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="relative mt-5 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-brand-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <a
        href={href}
        className="relative mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-gold transition-colors hover:text-brand-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
      >
        Discuss Project
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
        />
      </a>
    </article>
  );
}
