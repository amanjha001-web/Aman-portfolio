import { useEffect } from "react";

const bubbles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  size: `${8 + ((index * 13) % 25)}px`,
  duration: `${9 + ((index * 7) % 12)}s`,
  delay: `${-((index * 11) % 20)}s`,
  drift: `${((index * 19) % 150) - 75}px`,
  opacity: 0.35 + ((index * 17) % 55) / 100,
}));

export default function PageBackground({ appRef }) {
  useEffect(() => {
    const app = appRef?.current;

    if (!app) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return;

    let frameId = null;

    const handlePointerMove = (event) => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        app.style.setProperty("--mx", `${event.clientX}px`);
        app.style.setProperty("--my", `${event.clientY}px`);
        frameId = null;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [appRef]);

  return (
    <div className="page-background" aria-hidden="true">
      <div className="ambient-glow" />

      <div className="page-orb-field">
        <div
          className="page-orb"
          style={{
            "--orb-left": "12%",
            "--orb-top": "15%",
            "--orb-size": "280px",
            "--orb-opacity": ".48",
            "--orb-duration": "14s",
            "--orb-delay": "0s",
            "--orb-drift": "45px",
          }}
        />

        <div
          className="page-orb"
          style={{
            "--orb-left": "78%",
            "--orb-top": "55%",
            "--orb-size": "340px",
            "--orb-opacity": ".38",
            "--orb-duration": "18s",
            "--orb-delay": "-3s",
            "--orb-drift": "-60px",
          }}
        />
      </div>

      <div className="page-bubble-field">
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="bubble"
            style={{
              "--left": bubble.left,
              "--size": bubble.size,
              "--duration": bubble.duration,
              "--delay": bubble.delay,
              "--drift": bubble.drift,
              "--rise": "-110vh",
              "--opacity": bubble.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
