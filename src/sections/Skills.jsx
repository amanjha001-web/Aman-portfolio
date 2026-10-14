
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";

import Container from "../components/Container";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import SkillBadge from "../components/SkillBadge";
import { skillCategories } from "../data/skills";

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  tools: Wrench,
};

const skillIcons = {
  HTML5: Globe,
  CSS3: Layers3,
  JavaScript: Braces,
  React: Code2,
  "Redux Toolkit": Layers3,
  "Context API": Layers3,
  "Tailwind CSS": Globe,
  "React Router": GitBranch,
  "React Hook Form": Braces,
  "Node.js": Server,
  "Express.js": Server,
  MongoDB: Database,
  Mongoose: Database,
  "REST APIs": Server,
  Git: GitBranch,
  GitHub: GitBranch,
  Postman: Wrench,
  "VS Code": Code2,
};

function SkillCategoryCard({ category, index }) {
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(
    category.skills.length
  );

  const skillsContainerRef = useRef(null);
  const skillRefs = useRef([]);

  const CategoryIcon = categoryIcons[category.id] || Code2;

  useEffect(() => {
    const container = skillsContainerRef.current;

    if (!container) return;

    let animationFrame;

    const calculateVisibleSkills = () => {
      const badges = skillRefs.current.filter(Boolean);

      if (!badges.length) return;

      const rowTops = [];

      badges.forEach((badge) => {
        const top = Math.round(
          badge.getBoundingClientRect().top
        );

        let rowIndex = rowTops.findIndex(
          (rowTop) => Math.abs(rowTop - top) <= 2
        );

        if (rowIndex === -1) {
          rowTops.push(top);
          rowIndex = rowTops.length - 1;
        }

        badge.dataset.row = String(rowIndex);
      });

      const firstThirdRowIndex = badges.findIndex(
        (badge) => Number(badge.dataset.row) >= 2
      );

      const count =
        firstThirdRowIndex === -1
          ? badges.length
          : firstThirdRowIndex;

      setVisibleCount((previous) =>
        previous === count ? previous : count
      );
    };

    const scheduleCalculation = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(calculateVisibleSkills);
    };

    const observer = new ResizeObserver(scheduleCalculation);
    observer.observe(container);

    skillRefs.current.forEach((badge) => {
      if (badge) observer.observe(badge);
    });

    scheduleCalculation();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [category.skills]);

  const hasMore = visibleCount < category.skills.length;

  return (
    <RevealOnScroll key={category.id} delay={index * 100}>
      <article className="flex h-fit min-w-0 flex-col self-start rounded-3xl border border-white/10 bg-brand-surface p-6 transition-colors duration-300 hover:border-brand-gold/25 sm:p-7">
        <div className="mb-6 flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-brand-gold/20 bg-brand-gold/10 text-brand-gold">
            <CategoryIcon size={23} aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold text-brand-text">
              {category.title}
            </h3>

            <p className="mt-1 text-xs text-brand-muted">
              {category.skills.length} skills
            </p>
          </div>
        </div>

        <p className="mb-6 text-sm leading-6 text-brand-muted">
          {category.description}
        </p>

        <div
          ref={skillsContainerRef}
          className="flex flex-wrap content-start gap-2.5"
        >
          {category.skills.map((skill, skillIndex) => {
            const SkillIcon = skillIcons[skill.name] || Code2;

            const isVisible =
              expanded || skillIndex < visibleCount;

            return (
              <div
                key={skill.name}
                ref={(element) => {
                  skillRefs.current[skillIndex] = element;
                }}
                className={isVisible ? "" : "hidden"}
              >
                <SkillBadge
                  name={skill.name}
                  icon={SkillIcon}
                />
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((previous) => !previous)}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-gold"
            >
              {expanded ? "See less" : "See more"}

              <ArrowDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-300 ${
                  expanded
                    ? "rotate-180"
                    : "group-hover:translate-y-0.5"
                }`}
              />
            </button>
          </div>
        )}
      </article>
    </RevealOnScroll>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-brand-surface/40 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Technologies I work with."
            description="A growing toolkit for building responsive interfaces, connecting APIs, and developing maintainable web applications."
          />
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-brand-bg/70 p-5 sm:flex-row sm:items-center">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-red/10 text-brand-red">
              <GitBranch size={20} aria-hidden="true" />
            </div>

            <p className="text-sm leading-6 text-brand-muted">
              <span className="font-semibold text-brand-text">
                Always learning:
              </span>{" "}
              improving code quality, API integration, debugging, and full-stack
              development through hands-on projects.
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
