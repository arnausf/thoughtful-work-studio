import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";

const title = "Contact — M. Reyes";
const description =
  "Get in touch about a product design engagement or a quiet consulting conversation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Container className="py-40">
      <div className="eyebrow mb-10">Contact</div>
      <h1 className="max-w-3xl text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
        Send a paragraph, not a brief.
      </h1>
      <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
        One paragraph about the product, the team, and what feels stuck is
        usually enough for me to know whether I can help. I reply within two
        working days.
      </p>

      <a
        href="mailto:hello@reyes.design"
        className="link-underline mt-16 inline-block text-3xl tracking-tight text-foreground md:text-5xl"
      >
        hello@reyes.design
      </a>

      <dl className="mt-20 grid max-w-3xl grid-cols-1 gap-10 border-t border-hairline pt-10 font-mono text-xs md:grid-cols-3">
        <div>
          <dt className="text-muted-foreground">Availability</dt>
          <dd className="mt-2 text-foreground">Q3 2026 · one engagement</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Based in</dt>
          <dd className="mt-2 text-foreground">Barcelona · CET</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Best fit</dt>
          <dd className="mt-2 text-foreground">Seed–Series B SaaS & dev tools</dd>
        </div>
      </dl>
    </Container>
  );
}