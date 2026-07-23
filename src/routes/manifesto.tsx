import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Container } from "@/components/site/Container";
import { Reveal } from "@/components/site/Reveal";

const title = "Manifesto — Arnau Sebastià";
const description = "How Arnau Sebastià thinks, works and approaches UX/UI and product design.";

export const Route = createFileRoute("/manifesto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ManifestoPage,
});

function ManifestoPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <Container size="wide" className="pb-16 pt-32 md:pb-20">
          <div className="eyebrow mb-8">Manifesto</div>
          <Reveal
            as="h1"
            className="max-w-4xl text-3xl leading-[1.16] tracking-tight text-foreground md:text-5xl"
          >
            <span className="block">This isn't a portfolio about polished screens.</span>
            <span className="mt-8 block">
              It's about how I think, how I work, and what it feels like to work with me.
            </span>
          </Reveal>
        </Container>
      </section>

      <Section eyebrow="What this portfolio is about" size="wide">
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

      <Section eyebrow="How I work" size="wide">
        <div className="grid max-w-5xl gap-x-16 gap-y-12 md:grid-cols-2">
          {[
            {
              title: "Solve before asking",
              body: "I try to solve independently first. When I need help, I ask early, share context and keep the next step clear.",
            },
            {
              title: "Attention to detail",
              body: "Small details rarely stand out alone, but together they shape how polished, trustworthy and useful a product feels.",
            },
            {
              title: "Design is collaborative",
              body: "The strongest projects happen when design, development, motion and content teams move as one shared team.",
            },
            {
              title: "Continuous learning",
              body: "Every project changes how I approach the next one. Learning is not separate from design; it is part of the process.",
            },
          ].map((principle) => (
            <Reveal key={principle.title}>
              <h2 className="text-xl tracking-tight text-foreground md:text-2xl">
                {principle.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="How I think" size="wide">
        <div className="grid max-w-5xl gap-x-16 gap-y-14 md:grid-cols-2">
          {[
            {
              title: "Biggest lesson",
              body: "Good design rarely starts with all the answers. It usually starts with clearer, better questions.",
            },
            {
              title: "Biggest mistake",
              body: "Assuming a test environment represented the real installation. Now I validate decisions in context whenever I can.",
            },
            {
              title: "What motivates me",
              body: "Helping teams turn complex problems into experiences that feel simple, useful and intuitive.",
            },
            {
              title: "What frustrates me",
              body: "Poor communication between teams. It creates extra work, repeated decisions and avoidable mistakes.",
            },
            {
              title: "If I were Head of Design",
              body: "I'd improve communication between disciplines before adding more processes, tools or rituals.",
            },
          ].map((thought) => (
            <Reveal key={thought.title}>
              <h2 className="text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
                {thought.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {thought.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section size="wide" className="pb-40">
        <Reveal>
          <p className="max-w-xl text-xl leading-relaxed text-foreground">
            See how these principles show up in the work.
          </p>
          <Link to="/projects" className="link-underline mt-8 inline-block text-sm text-foreground">
            View selected projects →
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
