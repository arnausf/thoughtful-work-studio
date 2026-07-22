import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Container";
import { ProjectRow } from "@/components/site/ProjectRow";
import { projects } from "@/content/projects";

const title = "Projects — Arnau Sebastià";
const description =
  "Selected projects from Arnau Sebastià, including real FC Barcelona Museum content and placeholders for upcoming case studies.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <Section eyebrow="Index · Selected projects" size="wide" className="pt-32">
      <h1 className="mb-16 max-w-3xl text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
        Selected projects, decisions, challenges and lessons that shaped the way I design.
      </h1>
      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
