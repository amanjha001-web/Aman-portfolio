import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

export default function ProjectCard({ project }) {
  if (!project || typeof project !== "object") {
    return null;
  }

  const {
    title,
    category,
    description,
    technologies = [],
    image,
    imageAlt,
    liveUrl,
    adminUrl,
    githubUrl,
    previewUrl,
    status,
    year = "2026",
    featured = false,
  } = project;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-brand-surface transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${
        featured ? "border-brand-gold/30" : "border-white/10"
      }`}
    >
      {/* Actual Website Preview */}
      <div className="project-art relative overflow-hidden">
        {previewUrl ? (
  <div className="project-desktop-preview">
    <iframe
      src={previewUrl}
      title={`${title} desktop preview`}
      loading="lazy"
      className="project-desktop-iframe"
      tabIndex={-1}
    />
  </div>
) : image ? (
  <img
    src={image}
    alt={imageAlt || `${title} preview`}
    loading="lazy"
    className="absolute inset-0 h-full w-full object-cover object-top"
  />
) : (
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6">
            <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
              {category || "Web Development"}
            </span>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Project Preview
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">
                {description}
              </p>
            </div>
          </div>
        )}

        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-brand-bg/85 px-3 py-1.5 text-[10px] font-semibold text-brand-text backdrop-blur-md">
          {category || "Web Development"}
        </span>

        {previewUrl && (
          <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/70 px-2.5 py-1 text-[10px] font-semibold text-white">
            Live Preview
          </span>
        )}
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-muted">
          <span>{category || "Web Development"}</span>
          <span>{year}</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-brand-text transition-colors group-hover:text-brand-gold sm:text-xl">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-7 text-brand-muted">
          {description}
        </p>

        {Array.isArray(technologies) && technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {technologies.map((technology, index) => (
              <span
                key={`${technology}-${index}`}
                className="rounded-lg border border-white/10 bg-brand-bg/70 px-2.5 py-1.5 text-[10px] font-bold text-brand-muted"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-gold transition-colors hover:text-brand-gold-light"
            >
              Live Website
              <FaArrowUpRightFromSquare size={12} aria-hidden="true" />
            </a>
          )}

          {adminUrl && (
            <a
              href={adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-text transition-colors hover:text-brand-gold"
            >
              Admin Panel
              <FaArrowUpRightFromSquare size={12} aria-hidden="true" />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-muted transition-colors hover:text-brand-text"
            >
              <FaGithub size={14} aria-hidden="true" />
              GitHub
            </a>
          )}

          {!liveUrl && !adminUrl && !githubUrl && (
            <span className="text-xs font-extrabold text-brand-muted">
              {status || "Project Preview"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
