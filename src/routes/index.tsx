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
      <section className="flex min-h-[75vh] items-end border-b border-hairline">
        <Container size="wide" className="w-full pb-16 pt-32 md:pb-24">
          <div className="eyebrow mb-10">Product Designer • UX/UI Designer</div>
          <Reveal
            as="h1"
            className="max-w-5xl text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            I don't want this portfolio to show you my best designs.
          </Reveal>
          <Reveal
            delay={120}
            className="mt-10 flex flex-col gap-2 font-mono text-xs text-muted-foreground md:flex-row md:gap-10"
          >
            <span>How I think, how I work, and what it feels like to work with me.</span>
            <span>UX/UI & Product Designer helping complex digital projects move forward.</span>
            <span>
              Thoughtful decisions, cross-team collaboration and experiences that solve real
              problems—not just beautiful interfaces.
            </span>
          </Reveal>
        </Container>
      </section>

      <Section eyebrow="01 — Manifesto" size="default">
        <Reveal
          as="p"
          className="text-2xl leading-[1.4] tracking-tight text-foreground md:text-3xl"
        >
          This portfolio isn't a showcase of polished screens. It's a collection of projects,
          decisions, challenges and lessons that shaped the way I design. Rather than focusing only
          on outcomes, I want to show the thinking behind them: the context, the trade-offs, the
          collaboration and the continuous learning that happens throughout a project.
        </Reveal>
      </Section>

      <Section eyebrow="02 — How to read this portfolio" size="wide">
        <div className="grid gap-10 border-t border-hairline pt-10 md:grid-cols-3 md:gap-16">
          {[
            {
              time: "Card 01",
              title: "Projects aren't ordered chronologically.",
              body: "Each one represents a different challenge that helped me grow as a designer.",
            },
            {
              time: "Card 02",
              title: "Screens matter.",
              body: "But the decisions behind them matter even more.",
            },
            {
              time: "Card 03",
              title: "Every project includes lessons learned.",
              body: "Because that's where the most valuable growth happens.",
            },
          ].map((r) => (
            <Reveal key={r.time}>
              <div className="font-mono text-xs text-accent">{r.time}</div>
              <h3 className="mt-3 text-lg tracking-tight text-foreground">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="03 — Selected projects" size="wide">
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
          <div className="border-t border-hairline pt-8">
            <Link to="/projects" className="link-underline font-mono text-xs text-muted-foreground">
              View Projects
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="04 — How I work" size="default">
        <ol className="space-y-12">
          {[
            {
              n: "01",
              t: "Solve before asking",
              b: "I try to solve independently first. When I need help, I ask early, share context and keep the next step clear.",
            },
            {
              n: "02",
              t: "Attention to detail",
              b: "Small details rarely stand out alone, but together they shape how polished, trustworthy and useful a product feels.",
            },
            {
              n: "03",
              t: "Design is collaborative",
              b: "The strongest projects happen when design, development, motion and content teams move as one shared team.",
            },
            {
              n: "04",
              t: "Continuous learning",
              b: "Every project changes how I approach the next one. Learning is not separate from design; it is part of the process.",
            },
          ].map((s) => (
            <Reveal
              key={s.n}
              as="li"
              className="grid grid-cols-[4rem_1fr] gap-6 border-t border-hairline pt-6"
            >
              <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              <div>
                <h3 className="text-xl tracking-tight text-foreground">{s.t}</h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {s.b}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="thinking" eyebrow="05 — How I think" size="default">
        <div className="space-y-16">
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

      <Section eyebrow="06 — Experience" size="wide">
        <ul>
          {[
            ["2025 —", "Future Museum", "UX/UI Designer · Lorem ipsum dolor sit amet..."],
            ["2024 —", "NaviLens", "UX/UI Designer · Lorem ipsum dolor sit amet..."],
          ].map(([years, org, role]) => (
            <li
              key={org}
              className="grid grid-cols-[6rem_minmax(0,1fr)] gap-6 border-t border-hairline py-6 md:grid-cols-[10rem_14rem_minmax(0,1fr)] md:gap-10"
            >
              <span className="font-mono text-xs text-muted-foreground">{years}</span>
              <span className="text-base tracking-tight text-foreground">{org}</span>
              <span className="col-span-2 text-sm text-muted-foreground md:col-span-1">{role}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="07 — Contact" size="default" className="pb-40">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If something resonated with you, I'd love to talk.
          </p>
          <a
            href="mailto:arnausebastia98@gmail.com"
            className="link-underline mt-10 inline-block text-3xl tracking-tight text-foreground md:text-5xl"
          >
            arnausebastia98@gmail.com
          </a>
        </Reveal>
      </Section>
    </>
  );
}
