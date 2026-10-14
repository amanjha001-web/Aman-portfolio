
import { useState } from "react";
import { useSelector } from "react-redux";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";

import Button from "../components/Button";
import Container from "../components/Container";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = useSelector((state) => state.services.items);
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? services
    : services.slice(0, 3);

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-brand-surface/40 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="WHAT I DO"
            title="Services built around your goals."
            description="From responsive interfaces to API-connected applications, I focus on practical solutions with maintainable code."
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 80}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>

        {services.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-gold"
              aria-expanded={showAll}
            >
              {showAll ? "See less" : "See more"}
              {showAll ? (
                <ArrowDown
                  size={16}
                  className="rotate-180"
                  aria-hidden="true"
                />
              ) : (
                <ArrowDown size={16} aria-hidden="true" />
              )}
            </button>
          </div>
        )}

        <RevealOnScroll delay={150}>
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-brand-gold/20 bg-brand-surface p-7 sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
                  Have a project in mind?
                </p>

                <h3 className="mt-3 font-display text-2xl font-bold text-brand-text sm:text-3xl">
                  Let&apos;s build something useful together.
                </h3>

                <p className="mt-3 leading-7 text-brand-muted">
                  Share your requirements and we can discuss the scope,
                  features, timeline, and estimated cost.
                </p>
              </div>

              <Button
                href="#contact"
                variant="primary"
                showArrow
                className="!flex !flex-row !flex-nowrap !items-center !justify-center !gap-2 !whitespace-nowrap"
                style={{
                  display: "inline-flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  width: "max-content",
                  minWidth: "max-content",
                }}
              >
                <MessageCircle
                  size={17}
                  aria-hidden="true"
                  style={{ flexShrink: 0, display: "inline-block", marginRight: "0.5rem" }}
                />
                <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  Discuss a Project
                </span>
              </Button>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-8 flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm text-brand-muted transition-colors hover:text-brand-gold"
          >
            Explore selected projects
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
