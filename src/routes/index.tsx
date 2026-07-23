import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { ProjectRow } from "@/components/site/ProjectRow";
import { projects } from "@/content/projects";

const title = "Arnau Sebastià — Product Designer";
const description =
  "Product Designer and UX/UI Designer helping complex digital projects move forward through collaboration, adaptability and thoughtful design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="flex min-h-[58vh] items-end border-b border-hairline">
        <Container size="wide" className="w-full pb-16 pt-28 md:pb-20 md:pt-32">
          <div className="eyebrow mb-8">Product Designer · UX/UI Designer</div>
          <Reveal
            as="h1"
            className="max-w-4xl text-3xl leading-[1.14] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Hi, I’m Arnau — a Product Designer and UX/UI Designer based in Barcelona.
          </Reveal>
          <Reveal
            delay={120}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            I help complex digital projects move forward through collaboration, adaptability and
            thoughtful design.
          </Reveal>
          <Reveal delay={180} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link to="/manifesto" className="link-underline text-foreground">
              Read my manifesto →
            </Link>
            <a href="#selected-projects" className="link-underline text-muted-foreground">
              View selected work
            </a>
          </Reveal>
        </Container>
      </section>

      <Section id="selected-projects" eyebrow="Selected projects" size="wide">
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
          <div className="border-t border-hairline pt-8">
            <Link to="/projects" className="link-underline text-sm text-muted-foreground">
              Full index →
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Experience" size="wide">
        <ul className="max-w-4xl">
          {[
            ["2025 —", "Future Museum", "UX/UI Designer"],
            ["2024 —", "NaviLens", "UX/UI Designer"],
          ].map(([years, organisation, role]) => (
            <li
              key={organisation}
              className="grid grid-cols-[6rem_minmax(0,1fr)] gap-6 border-t border-hairline py-6 md:grid-cols-[10rem_14rem_minmax(0,1fr)] md:gap-10"
            >
              <span className="text-sm text-muted-foreground">{years}</span>
              <span className="text-base tracking-tight text-foreground">{organisation}</span>
              <span className="col-span-2 text-sm text-muted-foreground md:col-span-1">{role}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
