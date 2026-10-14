
import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.12,
  as: Tag = "div",
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      element.dataset.revealFallback = "true";

      return () => {
        delete element.dataset.revealFallback;
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  const hiddenDirection = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "translate-y-0",
  };

  return (
    <Tag
      ref={elementRef}
      data-reveal
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
      className={[
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none",
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${hiddenDirection[direction] || hiddenDirection.up}`,
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
