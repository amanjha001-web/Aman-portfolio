import { BadgeCheck, MessageCircle } from "lucide-react";

import Container from "../components/Container";
import PricingCard from "../components/PricingCard";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import { pricingPlans } from "../data/pricing";

const pricingNotes = [
  "Final cost depends on the agreed project scope.",
  "Backend, hosting, domain, and third-party service costs may be separate.",
  "Timeline starts after requirements and content are finalized.",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-brand-surface/40 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="SIMPLE PRICING"
            title="A starting point for your next project."
            description="Choose a starting package or request a custom quote based on your website requirements."
          />
        </RevealOnScroll>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <RevealOnScroll
              key={plan.id}
              delay={index * 100}
              className="h-full"
            >
              <PricingCard plan={plan} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="mt-10 rounded-3xl border border-brand-gold/20 bg-brand-surface p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gold/10 text-brand-gold">
                <BadgeCheck size={22} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-brand-text">
                  What to know before getting started
                </h3>

                <ul className="mt-4 space-y-3">
                  {pricingNotes.map((note) => (
                    <li
                      key={note}
                      className="text-sm leading-6 text-brand-muted"
                    >
                      <span className="mr-2 text-brand-gold">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-brand-muted">
                Not sure which package fits your project? Let&apos;s discuss it.
              </p>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-gold-light"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Request a Quote
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
