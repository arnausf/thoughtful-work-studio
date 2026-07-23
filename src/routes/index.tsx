import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { ProjectRow } from "@/components/site/ProjectRow";
import { projects } from "@/content/projects";

const title = "Arnau Sebastià — Product Designer";
const description = "A portfolio about how I think, how I work, and who you will be working with.";

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
      <section className="flex min-h-[64vh] items-end border-b border-hairline">
        <Container size="wide" className="w-full pb-16 pt-28 md:pb-20 md:pt-32">
          <div className="eyebrow mb-8">Product Designer · UX/UI Designer</div>
          <Reveal
            as="h1"
            className="max-w-4xl text-3xl leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            I don't want this portfolio to show you my best designs.
          </Reveal>
          <Reveal
            delay={120}
            className="mt-10 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            <p>I want it to show you:</p>
            <div className="mt-5 space-y-1 text-foreground">
              <p>How I think.</p>
              <p>How I work.</p>
              <p>Who you'll be working with.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section eyebrow="Manifesto" size="wide">
        <Reveal
          as="p"
          className="max-w-3xl text-2xl leading-[1.4] tracking-tight text-foreground md:text-3xl"
        >
          This portfolio isn't a showcase of polished screens. It's a collection of projects,
          decisions, challenges and lessons that shaped the way I design. Rather than focusing only
          on outcomes, I want to show the thinking behind them: the context, the trade-offs, the
          collaboration and the continuous learning that happens throughout a project.
        </Reveal>
      </Section>

      <Section eyebrow="Selected projects" size="wide">
        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
          <div className="pt-4">
            <Link to="/projects" className="link-underline text-sm text-muted-foreground">
              View projects →
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="How I work" size="wide">
        <div className="grid max-w-5xl gap-x-16 gap-y-12 md:grid-cols-2">
          {[
            {
              t: "Solve before asking",
              b: "I try to solve independently first. When I need help, I ask early, share context and keep the next step clear.",
            },
            {
              t: "Attention to detail",
              b: "Small details rarely stand out alone, but together they shape how polished, trustworthy and useful a product feels.",
            },
            {
              t: "Design is collaborative",
              b: "The strongest projects happen when design, development, motion and content teams move as one shared team.",
            },
            {
              t: "Continuous learning",
              b: "Every project changes how I approach the next one. Learning is not separate from design; it is part of the process.",
            },
          ].map((s) => (
            <Reveal key={s.t}>
              <h3 className="text-xl tracking-tight text-foreground md:text-2xl">{s.t}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{s.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="thinking" eyebrow="How I think" size="wide">
        <div className="max-w-3xl space-y-14">
          {[
            {
              t: "Biggest lesson",
              b: "Good design rarely starts with all the answers. It usually starts with clearer, better questions.",
            },
            {
              t: "Biggest mistake",
              b: "Assuming a test environment represented the real installation. Now I validate decisions in context whenever I can.",
            },
            {
              t: "What motivates me",
              b: "Helping teams turn complex problems into experiences that feel simple, useful and intuitive.",
            },
            {
              t: "What frustrates me",
              b: "Poor communication between teams. It creates extra work, repeated decisions and avoidable mistakes.",
            },
            {
              t: "If I were Head of Design",
              b: "I'd improve communication between disciplines before adding more processes, tools or rituals.",
            },
          ].map((n) => (
            <Reveal key={n.t}>
              <h3 className="text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
                {n.t}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {n.b}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" size="wide">
        <ul className="max-w-5xl">
          {[
            ["2025 —", "Future Museum", "UX/UI Designer · Lorem ipsum dolor sit amet..."],
            ["2024 —", "NaviLens", "UX/UI Designer · Lorem ipsum dolor sit amet..."],
          ].map(([years, org, role]) => (
            <li
              key={org}
              className="grid grid-cols-[6rem_minmax(0,1fr)] gap-6 border-t border-hairline py-6 md:grid-cols-[10rem_14rem_minmax(0,1fr)] md:gap-10"
            >
              <span className="text-sm text-muted-foreground">{years}</span>
              <span className="text-base tracking-tight text-foreground">{org}</span>
              <span className="col-span-2 text-sm text-muted-foreground md:col-span-1">{role}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Contact" size="wide" className="pb-40">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              If something resonated with you, I'd love to talk.
            </p>
            <a
              href="mailto:arnausebastia98@gmail.com"
              className="link-underline mt-10 inline-block text-3xl tracking-tight text-foreground md:text-5xl"
            >
              arnausebastia98@gmail.com
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
