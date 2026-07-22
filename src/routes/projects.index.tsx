import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Container";
import { ProjectRow } from "@/components/site/ProjectRow";
import { projects } from "@/content/projects";

const title = "Work — M. Reyes";
const description =
  "A chronological index of selected product design work between 2023 and 2025.";

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
    <Section eyebrow="Index · Selected work" size="wide" className="pt-32">
      <h1 className="mb-16 max-w-3xl text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
        Five projects, one recurring question — what does the reader need to
        see right now?
      </h1>
      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}