import { ArrowRight, Sparkles } from "lucide-react";

import Button from "../components/Button";
import Container from "../components/Container";
import RevealOnScroll from "../components/RevealOnScroll";

export default function CTA() {
  return (
    <section className="bg-brand-surface/40 px-0 py-10 sm:py-14">
      <Container>
        <RevealOnScroll>
          <div className="relative isolate overflow-hidden rounded-3xl border border-brand-gold/25 bg-brand-surface px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(255,59,29,0.10),transparent_50%)]"
            />

            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-brand-gold/25 bg-brand-gold/10 text-brand-gold">
              <Sparkles size={27} aria-hidden="true" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Let&apos;s create something
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-brand-text sm:text-4xl lg:text-5xl">
              Have a project in mind?
              <span className="mt-2 block bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">
                Let&apos;s make it happen.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-brand-muted sm:text-base">
              Tell me about your idea, your goals, and the experience you want
              to create. We can discuss the scope and plan the next steps
              together.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="#contact" variant="primary" showArrow>
                Start a Conversation
              </Button>

              <Button href="#projects" variant="outline">
                Explore Projects
                <ArrowRight size={17} aria-hidden="true" />
              </Button>
            </div>

            <div className="mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

            <p className="mt-5 text-xs text-brand-muted">
              Thoughtful design · Responsive development · Practical solutions
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
