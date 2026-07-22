import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";
import { ProjectRow } from "@/components/site/ProjectRow";
import { projects } from "@/content/projects";

const title = "M. Reyes — Product Designer";
const description =
  "A portfolio built as a reading surface: how I think, how I approach design problems, and how I work with teams.";

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
          <div className="eyebrow mb-10">Portfolio · 2026 · Product Design</div>
          <Reveal
            as="h1"
            className="max-w-5xl text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Marta Reyes designs quiet software for teams doing complicated
            work — tools that get out of the way once you learn them.
          </Reveal>
          <Reveal
            delay={120}
            className="mt-10 flex flex-col gap-2 font-mono text-xs text-muted-foreground md:flex-row md:gap-10"
          >
            <span>Based in Barcelona</span>
            <span>Available Q3 2026</span>
            <span>12 years · SaaS, fintech, developer tools</span>
          </Reveal>
        </Container>
      </section>

      <Section eyebrow="01 — Manifesto" size="default">
        <Reveal
          as="p"
          className="text-2xl leading-[1.4] tracking-tight text-foreground md:text-3xl"
        >
          I believe most product problems are reading problems. A screen that
          answers the right question at the right moment does more than a
          feature. My work is a slow attempt at that — removing what a person
          does not need to see, so the thing that matters can be read in a
          single breath.
        </Reveal>
      </Section>

      <Section eyebrow="02 — How to read this portfolio" size="wide">
        <div className="grid gap-10 border-t border-hairline pt-10 md:grid-cols-3 md:gap-16">
          {[
            {
              time: "1 minute",
              title: "Scan the projects",
              body: "Client, one sentence, done. Enough to know if my work fits your problem.",
            },
            {
              time: "5 minutes",
              title: "Read a project page",
              body: "Each one is a small annotated document. The margins carry the honest parts.",
            },
            {
              time: "10 minutes",
              title: "Sit with 'How I Think'",
              body: "Short notes on the ideas I return to — process, taste, and second-guessing.",
            },
          ].map((r) => (
            <Reveal key={r.time}>
              <div className="font-mono text-xs text-accent">{r.time}</div>
              <h3 className="mt-3 text-lg tracking-tight text-foreground">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="03 — Selected work · 2023—2025" size="wide">
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
          <div className="border-t border-hairline pt-8">
            <Link
              to="/projects"
              className="link-underline font-mono text-xs text-muted-foreground"
            >
              Full index →
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="04 — How I work" size="default">
        <ol className="space-y-12">
          {[
            {
              n: "01",
              t: "Understand before drawing",
              b: "I spend the first weeks reading — tickets, transcripts, competitors, the product itself. Sketches come after.",
            },
            {
              n: "02",
              t: "One question per artifact",
              b: "Every doc, prototype and review is scoped to a single decision. It keeps meetings short and reversible.",
            },
            {
              n: "03",
              t: "Build the thin version",
              b: "I prefer a flow shipped to five users over a full design system nobody uses. Ship, watch, revise.",
            },
            {
              n: "04",
              t: "Design the seams",
              b: "The interesting problems live in the transitions between screens, roles and systems. That is where I focus late in a project.",
            },
          ].map((s) => (
            <Reveal
              key={s.n}
              as="li"
              className="grid grid-cols-[4rem_1fr] gap-6 border-t border-hairline pt-6"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {s.n}
              </span>
              <div>
                <h3 className="text-xl tracking-tight text-foreground">
                  {s.t}
                </h3>
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
              t: "The interface is a sentence.",
              b: "Every screen has a subject, a verb and an object. When users cannot find them, no amount of colour will help.",
            },
            {
              t: "Complexity is a debt, not a feature.",
              b: "Each new state, toggle or edge case is borrowed against the attention of everyone who will ever open the product.",
            },
            {
              t: "Trust is built at the edges.",
              b: "Loading, error, empty. These states carry more weight than the happy path. I design them first.",
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
            ["2024 —", "Independent", "Product design partner to seed-stage teams."],
            ["2021 — 24", "Meridian", "Senior Product Designer · Platform."],
            ["2019 — 21", "Loom Labs", "Product Designer · Editor team."],
            ["2016 — 19", "Quorum", "Product Designer · Reviewer experience."],
            ["2014 — 16", "Studio Ochre", "Interaction Designer."],
          ].map(([years, org, role]) => (
            <li
              key={org}
              className="grid grid-cols-[6rem_minmax(0,1fr)] gap-6 border-t border-hairline py-6 md:grid-cols-[10rem_14rem_minmax(0,1fr)] md:gap-10"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {years}
              </span>
              <span className="text-base tracking-tight text-foreground">
                {org}
              </span>
              <span className="col-span-2 text-sm text-muted-foreground md:col-span-1">
                {role}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="07 — Contact" size="default" className="pb-40">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The best way to start is a short email — a paragraph about the
            product, the team and what feels stuck. I reply within two days.
          </p>
          <a
            href="mailto:hello@reyes.design"
            className="link-underline mt-10 inline-block text-3xl tracking-tight text-foreground md:text-5xl"
          >
            hello@reyes.design
          </a>
        </Reveal>
      </Section>
    </>
  );
}
