import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/content/projects";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative block border-t border-hairline py-8 md:py-10"
    >
      <div className="grid grid-cols-[3rem_minmax(0,1fr)_auto] items-baseline gap-6 md:grid-cols-[4rem_10rem_minmax(0,1fr)_auto] md:gap-10">
        <span className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="hidden items-center gap-3 md:flex">
          <span className="grid h-8 w-8 place-items-center border border-border font-mono text-[10px] tracking-widest text-foreground">
            {project.clientMark}
          </span>
          <span className="text-sm text-muted-foreground">{project.client}</span>
        </div>
        <div className="min-w-0">
          <div className="mb-1 text-xs text-muted-foreground md:hidden">
            {project.client}
          </div>
          <h3 className="text-xl tracking-tight text-foreground md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
            {project.oneLiner}
          </p>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {project.year}
        </span>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 hidden h-32 w-52 border border-hairline transition-all duration-300 md:right-24 lg:block"
        style={{
          background: project.preview,
          opacity: hover ? 1 : 0,
          transform: `translateY(calc(-50% + ${hover ? "0px" : "6px"}))`,
        }}
      />
    </Link>
  );
}
