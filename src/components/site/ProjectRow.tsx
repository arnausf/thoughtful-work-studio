import { Link } from "@tanstack/react-router";
import type { Project } from "@/content/projects";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group relative block border-t border-hairline py-8 md:py-10 lg:pr-[23rem]"
    >
      <div className="grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-start gap-5 md:grid-cols-[6rem_minmax(0,1fr)_5rem] md:gap-10">
        <div className="flex h-12 w-12 items-center justify-center border border-hairline text-sm font-medium tracking-tight text-muted-foreground md:h-14 md:w-14">
          {project.clientMark}
        </div>
        <div className="min-w-0">
          <div className="mb-2 text-sm text-muted-foreground">{project.client}</div>
          <h3 className="text-xl tracking-tight text-foreground md:text-2xl">{project.name}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.oneLiner}
          </p>
        </div>
        <span className="text-sm text-muted-foreground">{project.year}</span>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 z-10 hidden h-52 w-80 translate-y-[calc(-50%+10px)] border border-hairline opacity-0 transition-all duration-300 lg:block lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 lg:group-focus-visible:-translate-y-1/2 lg:group-focus-visible:opacity-100"
        style={{ background: project.preview }}
      />
    </Link>
  );
}
