import { Link } from "@tanstack/react-router";
import type { Project } from "@/content/projects";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block py-12 md:py-16"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-16">
        <div className={isReversed ? "md:order-2" : undefined}>
          <div
            aria-hidden
            className="h-64 w-full bg-subtle md:h-[28rem]"
            style={{ background: project.preview }}
          />
        </div>

        <div className={isReversed ? "md:order-1" : undefined}>
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>{project.client}</span>
            <span aria-hidden>·</span>
            <span>{project.role}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>
          <h3 className="max-w-xl text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            {project.name}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {project.oneLiner}
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-foreground transition-transform duration-300 group-hover:translate-x-1">
            <span>View project</span>
            <span aria-hidden>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
