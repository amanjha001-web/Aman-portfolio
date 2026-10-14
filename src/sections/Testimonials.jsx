import { MessageSquareQuote, Star } from "lucide-react";

import Container from "../components/Container";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-brand-surface/40 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="TESTIMONIALS"
            title="Trust is built through good work."
            description="Honest feedback matters. This section will feature genuine client experiences as they become available."
          />
        </RevealOnScroll>

        {testimonials.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <RevealOnScroll key={item.id}>
                <article className="h-full rounded-3xl border border-white/10 bg-brand-surface p-7">
                  <div
                    className="flex gap-1 text-brand-gold"
                    aria-label="Rating"
                  >
                    {Array.from({ length: item.rating || 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={16}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <MessageSquareQuote
                    size={28}
                    className="mt-6 text-brand-gold/70"
                    aria-hidden="true"
                  />

                  <blockquote className="mt-4 leading-7 text-brand-text">
                    “{item.quote}”
                  </blockquote>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-semibold text-brand-text">{item.name}</p>
                    {item.role && (
                      <p className="mt-1 text-sm text-brand-muted">
                        {item.role}
                      </p>
                    )}
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <RevealOnScroll delay={100}>
            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-dashed border-brand-gold/30 bg-brand-surface/70 px-6 py-10 text-center sm:px-10 sm:py-12">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gold/10 text-brand-gold">
                <MessageSquareQuote size={27} aria-hidden="true" />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-brand-text">
                Your feedback could be featured here.
              </h3>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-brand-muted">
                This section is ready for genuine testimonials. Once client
                feedback is available, add it to the testimonials data file and
                the cards will appear automatically.
              </p>
            </div>
          </RevealOnScroll>
        )}
      </Container>
    </section>
  );
}
