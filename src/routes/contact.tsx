import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";

const title = "Contact — Arnau Sebastià";
const description = "Get in touch with Arnau Sebastià about UX/UI and product design.";

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
        If something resonated with you, I'd love to talk.
      </h1>
      <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
        You can reach me by email, connect with me on LinkedIn, or check back soon for my resume.
      </p>

      <a
        href="mailto:arnausebastia98@gmail.com"
        className="link-underline mt-16 inline-block text-3xl tracking-tight text-foreground md:text-5xl"
      >
        arnausebastia98@gmail.com
      </a>

      <dl className="mt-20 grid max-w-3xl grid-cols-1 gap-10 border-t border-hairline pt-10 font-mono text-xs md:grid-cols-3">
        <div>
          <dt className="text-muted-foreground">Email</dt>
          <dd className="mt-2 text-foreground">arnausebastia98@gmail.com</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">LinkedIn</dt>
          <dd className="mt-2 text-foreground">linkedin.com/in/arnausebastiafarre</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Resume</dt>
          <dd className="mt-2 text-foreground">Coming soon.</dd>
        </div>
      </dl>
    </Container>
  );
}
