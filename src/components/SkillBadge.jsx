import { Code2 } from "lucide-react";

export default function SkillBadge({
  name,
  icon: Icon = Code2,
  level,
  className = "",
}) {
  return (
    <div
      className={`group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-brand-surface px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-brand-gold/[0.04] ${className}`}
      title={level ? `${name}: ${level}` : name}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-bg text-brand-gold transition-colors group-hover:bg-brand-gold/10">
        <Icon size={19} strokeWidth={1.8} />
      </span>

      <span className="flex flex-col">
        <span className="text-sm font-semibold text-brand-text">{name}</span>

        {level && (
          <span className="mt-0.5 text-xs text-brand-muted">{level}</span>
        )}
      </span>
    </div>
  );
}
