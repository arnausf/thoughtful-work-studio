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

const defaultSections = [
  { id: "context", label: "Context" },
  { id: "problem", label: "The problem" },
  { id: "approach", label: "Approach" },
  { id: "decisions", label: "Key decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

const museumSections = [
  { id: "context", label: "What this project was about" },
  { id: "problem", label: "What made it challenging" },
  { id: "approach", label: "How we approached it" },
  { id: "decisions", label: "User Validation" },
  { id: "outcome", label: "Looking Back" },
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

const immersiveMuseumExperienceCopy: CaseStudyCopy = {
  context: [
    "This project involved designing digital experiences for a large-scale immersive museum featuring multiple interactive installations.",
    "The experience combined different technologies, physical spaces and storytelling formats. Rather than designing a single product, the challenge was creating consistency across a collection of independent experiences that visitors would perceive as one museum.",
  ],
  contextNote:
    "My contribution focused on UX/UI design, interface design, adapting experiences to multiple formats and maintaining consistency across installations. I worked alongside developers, motion designers, architects and content teams, iterating as the wider project changed.",
  problem: [
    "The project paused for an extended period and returned with changed branding, updated visual assets, evolving content and installations that no longer matched earlier assumptions.",
    "Those changes had practical consequences: screen sizes shifted, interactions needed to be adapted and decisions depended on architecture, content, motion, production and development moving at the same time.",
  ],
  problemNote:
    "The project changed repeatedly throughout development. Learning to adapt without sacrificing consistency became just as important as designing the interfaces themselves.",
  approach: [
    "The process was iterative rather than linear. As installations changed, the design system, interface logic and content structure had to evolve with them.",
    "Maintaining consistency required constant communication across disciplines. Design decisions were shaped through conversations with developers, motion designers, architects, production teams and content teams, not through isolated screen work.",
  ],
  decisions: [
    "Seeing people outside the project enjoy an experience we had been designing for months was one of the most rewarding validations of the process.",
    "Beyond confirming design decisions, those sessions also revealed improvements that only become visible when observing real people interacting with the experience.",
  ],
  decisionsNote:
    "The complexity wasn't designing individual screens. It was ensuring that dozens of independent experiences felt like parts of the same museum.",
  outcome: [
    "Looking back, I would invest earlier in communication between teams, especially when architecture, content, motion, development and production are all evolving simultaneously.",
    "I would also validate assumptions in the real installation whenever possible and avoid assuming that testing environments perfectly represent production.",
  ],
  reflection: [
    "This project taught me that adaptability is not separate from design quality. In a large-scale digital visitor experience, the interface is only one part of a wider system of people, spaces, content and production constraints.",
  ],
  lesson:
    "Good communication becomes a design tool when many disciplines work together. When architecture, content, motion, development and production evolve simultaneously, communication prevents weeks of unnecessary redesign.",
  takeaway:
    "The strongest design decisions were the ones that helped the team preserve coherence while the project continued to change.",
};

function getCaseStudyCopy(slug: string): CaseStudyCopy {
  if (slug === "fc-barcelona-museum") return immersiveMuseumExperienceCopy;
  return placeholderCopy;
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const next = getNextProject(project.slug);
  const isMuseumCaseStudy = project.slug === "fc-barcelona-museum";
  const copy = getCaseStudyCopy(project.slug);
  const sections = isMuseumCaseStudy ? museumSections : defaultSections;
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
  }, [sections]);

  return (
    <>
      <header className="border-b border-hairline">
        <Container size="wide" className="pb-16 pt-32">
          {isMuseumCaseStudy && (
            <p className="mb-8 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground">
              Some project details have been intentionally generalized due to confidentiality
              agreements. The focus of this case study is the design process, decision-making and
              lessons learned rather than the client itself.
            </p>
          )}
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
            <StorySection id="context" title={sections[0].label}>
              {copy.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Annotation kind="contribution">{copy.contextNote}</Annotation>
            </StorySection>

            <StorySection id="problem" title={sections[1].label}>
              {copy.problem.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Annotation kind="challenge">{copy.problemNote}</Annotation>
            </StorySection>

            <StorySection id="approach" title={sections[2].label}>
              {copy.approach.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </StorySection>

            <StorySection id="decisions" title={sections[3].label}>
              {copy.decisions.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Annotation kind="validation">{copy.decisionsNote}</Annotation>
            </StorySection>

            <StorySection id="outcome" title={sections[4].label}>
              {copy.outcome.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </StorySection>

            <StorySection id="reflection" title={sections[5].label}>
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
