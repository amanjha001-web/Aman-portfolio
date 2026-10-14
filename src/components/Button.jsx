import { forwardRef } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

const variants = {
  primary:
    "bg-brand-gold text-brand-bg hover:bg-brand-gold-light shadow-[0_0_24px_rgba(212,175,55,0.12)] hover:shadow-[0_0_30px_rgba(212,175,55,0.24)]",
  secondary:
    "bg-brand-surface text-brand-text border border-white/10 hover:border-brand-gold/50 hover:bg-white/5",
  outline:
    "border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-bg",
  danger: "bg-brand-red text-white hover:bg-brand-orange",
  ghost: "text-brand-text hover:bg-white/5 hover:text-brand-gold",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-6 py-3.5 text-base",
};

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    href,
    type = "button",
    className = "",
    loading = false,
    showArrow = false,
    disabled = false,
    external = false,
    onClick,
    ...props
  },
  ref,
) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg",
    "active:scale-[0.98]",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ].join(" ");

  const content = (
    <>
      {loading && <LoaderCircle size={18} className="animate-spin" />}
      <span>{children}</span>
      {showArrow && !loading && (
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={`${classes} ${showArrow ? "group" : ""}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-disabled={disabled || loading || undefined}
        onClick={(event) => {
          if (disabled || loading) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={`${classes} ${showArrow ? "group" : ""}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

export default Button;
