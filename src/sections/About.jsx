
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Workflow,
} from "lucide-react";

import Button from "../components/Button";
import Container from "../components/Container";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";

const approach = [
  {
    icon: Code2,
    title: "Reusable Components",
    description:
      "Building modular React components that are easier to maintain and extend.",
  },
  {
    icon: Layers3,
    title: "Consistent UI",
    description:
      "Using shared design patterns, spacing, and theme colors across the interface.",
  },
  {
    icon: Workflow,
    title: "API Integration",
    description:
      "Connecting frontend screens to backend endpoints and handling application data.",
  },
];

const strengths = [
  "Responsive-first development",
  "Reusable and maintainable UI",
  "Practical problem-solving",
  "Continuous learning through projects",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-brand-surface/40 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="ABOUT ME"
            title="Developer mindset. Practical execution."
            description="I focus on building clean, responsive interfaces and improving my skills through real projects."
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-10">
          {/* Left component */}
          <RevealOnScroll direction="left" className="h-full">
            <div className="relative h-full">
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-brand-gold/60"
              />

              <div className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-brand-surface p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  My approach
                </p>

                <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-brand-text sm:text-3xl">
                  Good interfaces start with clear thinking and thoughtful
                  details.
                </h3>

                <p className="mt-5 text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                  My goal is to make websites that look polished, work across
                  screen sizes, and remain manageable as the project grows. I
                  value readable code, practical problem-solving, and continuous
                  improvement.
                </p>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm leading-7 text-brand-muted">
                    I believe good development combines a consistent design,
                    maintainable code, and a smooth user experience.
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <Button href="#contact" variant="secondary" showArrow>
                    Let&apos;s Connect
                  </Button>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-brand-red/60"
              />
            </div>
          </RevealOnScroll>

          {/* Right component */}
          <RevealOnScroll direction="right" className="h-full">
            <div className="flex h-full min-w-0 flex-col gap-6">
              <div className="space-y-4">
                <p className="text-base leading-8 text-brand-muted sm:text-lg">
                  I&apos;m a frontend developer working with React and modern
                  JavaScript tools. My project work includes responsive landing
                  pages, an informative platform with separate client and admin
                  interfaces, and ShopSphere, a multi-vendor e-commerce
                  application.
                </p>

                <p className="text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
                  I also work with API integration and backend technologies as
                  part of my full-stack development journey. I aim to turn
                  requirements into reliable user experiences rather than
                  focusing on appearance alone.
                </p>
              </div>

              {/* All 3 cards in one row on desktop */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {approach.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <RevealOnScroll key={item.title} delay={index * 100}>
                      <article className="h-full min-w-0 rounded-2xl border border-white/10 bg-brand-surface p-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/30 sm:p-4">
                        <div className="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-brand-gold/10 text-brand-gold sm:h-10 sm:w-10">
                          <Icon size={19} aria-hidden="true" />
                        </div>

                        <h3 className="break-words font-display text-sm font-semibold leading-snug text-brand-text sm:text-base">
                          {item.title}
                        </h3>

                        <p className="mt-2 break-words text-xs leading-5 text-brand-muted sm:text-sm sm:leading-6">
                          {item.description}
                        </p>
                      </article>
                    </RevealOnScroll>
                  );
                })}
              </div>

              {/* Strengths */}
              <div className="rounded-2xl border border-white/10 bg-brand-surface/60 p-4 sm:p-5">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
                  What I focus on
                </h3>

                <ul className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                  {strengths.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-brand-text"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-gold"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button centered across full right-side width */}
              <div className="mt-auto flex w-full justify-center pt-2">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/25 px-5 py-3 text-sm font-semibold text-brand-gold transition-all duration-300 hover:border-brand-gold/60 hover:bg-brand-gold/5"
                >
                  See my projects
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}