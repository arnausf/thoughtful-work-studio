import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Container } from "@/components/site/Container";
import { Annotation } from "@/components/site/Annotation";
import { getNextProject, getProject } from "@/content/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.project.client} — ${loaderData.project.name}`;
    return {
      meta: [
        { title: `${t} · M. Reyes` },
        { name: "description", content: loaderData.project.oneLiner },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.project.oneLiner },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <Container className="py-40">
      <h1 className="text-3xl">Project not found.</h1>
      <Link to="/projects" className="link-underline mt-6 inline-block">
        Back to work
      </Link>
    </Container>
  );
}

const sections = [
  { id: "context", label: "Context" },
  { id: "problem", label: "The problem" },
  { id: "approach", label: "Approach" },
  { id: "decisions", label: "Key decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const next = getNextProject(project.slug);
  const [active, setActive] = useState<string>("context");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="border-b border-hairline">
        <Container size="wide" className="pb-16 pt-32">
          <div className="eyebrow mb-8">
            {project.client} · {project.year}
          </div>
          <h1 className="max-w-4xl text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.oneLiner}
          </p>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 font-mono text-xs md:grid-cols-4">
            {[
              ["Role", project.role],
              ["Duration", project.duration],
              ["Team", project.team],
              ["Tools", project.tools],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 lg:px-16">
        <div className="lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[10rem_minmax(0,42rem)_18rem] xl:gap-12">
          <nav className="mb-12 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
            <div className="eyebrow mb-4">On this page</div>
            <ol className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`flex items-baseline gap-3 font-mono text-xs transition-colors ${
                      active === s.id
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-none">
            <StorySection id="context" title="Context">
              <p>
                {project.client} operates a large internal platform that had
                grown, over eight years, into a dense web of tools maintained
                by four different teams. New employees needed weeks before
                they could use it confidently, and even veterans admitted they
                only trusted a fraction of the screens they touched.
              </p>
              <p>
                I joined for one quarter with a mandate that was intentionally
                small: pick a single workflow and make it feel like a decision
                surface, not a data entry form.
              </p>
              <Annotation kind="contribution">
                Led design end to end: research, IA, prototyping, and the
                design system additions that shipped with the redesign.
              </Annotation>
            </StorySection>

            <StorySection id="problem" title="The problem">
              <p>
                Interviews with sixteen operators surfaced a pattern I did not
                expect: nobody read the page. They memorised where fields
                lived and pattern-matched shapes. The screen was a keyboard,
                not a document.
              </p>
              <p>
                That meant every change we shipped broke muscle memory in ways
                the tickets never captured. The redesign could not just look
                better — it had to earn the right to be re-learned.
              </p>
              <Annotation kind="challenge">
                The team assumed the problem was visual density. Research
                showed it was closer to trust: operators did not believe the
                numbers on screen.
              </Annotation>
            </StorySection>

            <StorySection id="approach" title="Approach">
              <p>
                We built a small internal prototype that let one team try a
                new reading order for two weeks, alongside the existing tool.
                We measured nothing at first — just watched, and asked people
                to narrate what they were looking at.
              </p>
              <p>
                The prototype was ugly on purpose. Removing the visual polish
                made it easier for operators to critique the structure rather
                than the styling, which is a habit I have kept ever since.
              </p>
            </StorySection>

            <StorySection id="decisions" title="Key decisions">
              <p>
                We collapsed twelve tabs into three reading modes: monitor,
                investigate, resolve. Each mode hid the controls that did not
                belong to its intent, which reduced average clicks per task
                by roughly a third once the pattern was learned.
              </p>
              <p>
                Every number on the page now has a provenance popover — a
                tiny thing that took two weeks to design and became the
                feature operators mention first.
              </p>
              <Annotation kind="validation">
                Eight of eight users in the second round of testing described
                the new layout as "calmer" without prompt. We shipped the
                week after.
              </Annotation>
            </StorySection>

            <StorySection id="outcome" title="Outcome">
              <p>
                Time to first correct action dropped from 4m 20s to 1m 40s
                for new operators. Support tickets for the workflow fell by
                62% over the following quarter. More importantly, the team
                started using the same reading-order language in unrelated
                design reviews.
              </p>
            </StorySection>

            <StorySection id="reflection" title="Reflection">
              <p>
                The lesson I keep returning to is that in mature products,
                design is mostly negotiation with existing behaviour. The
                best move is often to name the pattern out loud so the team
                can decide, together, whether it is worth preserving.
              </p>
              <Annotation kind="lesson">
                Ship the vocabulary before the interface. If the team cannot
                describe the new model in one sentence, users never will.
              </Annotation>
              <Annotation kind="takeaway">
                Ugly prototypes are a design tool. They protect structural
                critique from being derailed by taste.
              </Annotation>
            </StorySection>
          </article>
        </div>
      </div>

      <section className="border-t border-hairline">
        <Container size="wide" className="py-20">
          <div className="eyebrow mb-6">Next project</div>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group block"
          >
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-sm text-muted-foreground">
                  {next.client}
                </div>
                <h3 className="mt-2 text-3xl tracking-tight text-foreground md:text-5xl">
                  {next.name}{" "}
                  <span className="text-muted-foreground">→</span>
                </h3>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                {next.oneLiner}
              </p>
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
}

function StorySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-24 scroll-mt-24 first:mt-0">
      <h2 className="mb-6 text-2xl tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="space-y-6 text-base leading-[1.75] text-foreground [&_p]:max-w-[68ch]">
        {children}
      </div>
    </section>
  );
}