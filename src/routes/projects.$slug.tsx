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
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.project.client} — ${loaderData.project.name}`;
    return {
      meta: [
        { title: `${t} · Arnau Sebastià` },
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

type CaseStudyCopy = {
  context: string[];
  contextNote: string;
  problem: string[];
  problemNote: string;
  approach: string[];
  decisions: string[];
  decisionsNote: string;
  outcome: string[];
  reflection: string[];
  lesson: string;
  takeaway: string;
};

const placeholderCopy: CaseStudyCopy = {
  context: [
    "Case study coming soon. Content currently being prepared.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, nibh at consequat luctus, arcu sem posuere lorem, vitae feugiat justo lectus non risus.",
  ],
  contextNote:
    "Content currently being prepared. Placeholder copy is used to preserve the case study rhythm while final writing is completed.",
  problem: [
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec ullamcorper nulla non metus auctor fringilla.",
  ],
  problemNote:
    "Case study coming soon. Final challenge details will be added here once the approved copy is ready.",
  approach: [
    "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur, etiam porta sem malesuada magna mollis euismod.",
    "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.",
  ],
  decisions: [
    "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui, consectetur adipiscing elit.",
  ],
  decisionsNote:
    "Content currently being prepared. Validation notes are intentionally placeholder content for now.",
  outcome: [
    "Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  ],
  reflection: [
    "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
  ],
  lesson:
    "Case study coming soon. Lessons learned will be documented when the final project copy is approved.",
  takeaway: "Content currently being prepared. This takeaway is placeholder content.",
};

const fcBarcelonaMuseumCopy: CaseStudyCopy = {
  context: [
    "The FC Barcelona Museum project was a digital and physical experience that kept evolving while the team was designing and building it.",
    "Because the museum experience was changing in real time, the design work had to stay flexible, clear and easy to adapt without losing consistency across the visitor journey.",
  ],
  contextNote:
    "Contributed as a UX/UI Designer, working with a multidisciplinary team to support an experience that was still taking shape during production.",
  problem: [
    "The main challenge was designing for an installation context that could not be fully understood through static screens or isolated mockups.",
    "Some decisions that seemed clear in a testing environment needed to be reconsidered once they were experienced in the real physical space.",
  ],
  problemNote:
    "The biggest lesson from this project was not to assume that a testing environment accurately represents the final installation context.",
  approach: [
    "The process required constant collaboration across design, development, motion and content, making communication as important as the interface decisions themselves.",
    "I focused on making thoughtful decisions that could support the evolving museum experience while keeping the work practical for the teams building it.",
  ],
  decisions: [
    "We treated the experience as something that needed to be validated in context, not only as a set of screens to approve in isolation.",
    "When something changed in the museum, the design had to respond without breaking the overall clarity and consistency of the visitor experience.",
  ],
  decisionsNote:
    "This project reinforced the importance of validating design decisions in the actual context whenever possible.",
  outcome: [
    "The outcome section is still being prepared. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ],
  reflection: [
    "This project changed the way I think about context. A design can make sense in a file and still need to change once it meets the real environment, the real team and the real constraints.",
  ],
  lesson:
    "Validate decisions in the actual installation context whenever possible, especially when the experience depends on physical space, timing and collaboration across disciplines.",
  takeaway:
    "Good communication between teams prevents unnecessary work and helps fast-changing projects move forward with more confidence.",
};

function getCaseStudyCopy(slug: string): CaseStudyCopy {
  if (slug === "fc-barcelona-museum") return fcBarcelonaMuseumCopy;
  return placeholderCopy;
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const next = getNextProject(project.slug);
  const copy = getCaseStudyCopy(project.slug);
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
              {copy.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Annotation kind="contribution">{copy.contextNote}</Annotation>
            </StorySection>

            <StorySection id="problem" title="The problem">
              {copy.problem.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Annotation kind="challenge">{copy.problemNote}</Annotation>
            </StorySection>

            <StorySection id="approach" title="Approach">
              {copy.approach.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </StorySection>

            <StorySection id="decisions" title="Key decisions">
              {copy.decisions.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Annotation kind="validation">{copy.decisionsNote}</Annotation>
            </StorySection>

            <StorySection id="outcome" title="Outcome">
              {copy.outcome.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </StorySection>

            <StorySection id="reflection" title="Reflection">
              {copy.reflection.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Annotation kind="lesson">{copy.lesson}</Annotation>
              <Annotation kind="takeaway">{copy.takeaway}</Annotation>
            </StorySection>
          </article>
        </div>
      </div>

      <section className="border-t border-hairline">
        <Container size="wide" className="py-20">
          <div className="eyebrow mb-6">Next project</div>
          <Link to="/projects/$slug" params={{ slug: next.slug }} className="group block">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="text-sm text-muted-foreground">{next.client}</div>
                <h3 className="mt-2 text-3xl tracking-tight text-foreground md:text-5xl">
                  {next.name} <span className="text-muted-foreground">→</span>
                </h3>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">{next.oneLiner}</p>
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
      <h2 className="mb-6 text-2xl tracking-tight text-foreground md:text-3xl">{title}</h2>
      <div className="space-y-6 text-base leading-[1.75] text-foreground [&_p]:max-w-[68ch]">
        {children}
      </div>
    </section>
  );
}
