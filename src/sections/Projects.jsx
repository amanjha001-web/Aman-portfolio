import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import { projects, projectCategories } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.categoryKey === activeCategory);
  }, [activeCategory]);

  // Initially show only 3 projects
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Section Heading */}
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Selected Works"
            title={
              <>
                Crafted with precision &{" "}
                <span className="gradient-text">modern code</span>.
              </>
            }
            description="Explore our recent full-stack web applications, interactive dashboards, and high-performance digital platforms."
          />
        </RevealOnScroll>

        {/* Category Filters */}
        <RevealOnScroll delay={100}>
          <div className="mb-6 mt-8 flex flex-wrap gap-2">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.value);
                    setShowAll(false);
                  }}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-xs font-extrabold transition-all duration-200 ${
                    isActive
                      ? "border-brand-text bg-brand-text text-brand-bg"
                      : "border-white/10 bg-brand-surface text-brand-muted hover:border-brand-gold/40 hover:text-brand-text"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <RevealOnScroll
                key={project.id}
                delay={(index % 3) * 100}
                className="h-full"
              >
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-brand-surface p-10 text-center">
            <h3 className="font-display text-lg font-bold text-brand-text">
              More projects coming soon
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              No projects available in this category yet.
            </p>
          </div>
        )}

        {/* See More / See Less */}
        {filteredProjects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              className="inline-flex items-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-surface px-6 py-3 text-sm font-semibold text-brand-gold transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-bg"
              aria-expanded={showAll}
            >
              {showAll ? "See Less" : "See More"}

              {showAll ? (
                <ChevronUp size={17} aria-hidden="true" />
              ) : (
                <ChevronDown size={17} aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
