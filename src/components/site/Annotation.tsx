import type { ReactNode } from "react";

type Kind = "takeaway" | "challenge" | "contribution" | "validation" | "lesson";

const labels: Record<Kind, string> = {
  takeaway: "Biggest takeaway",
  challenge: "Unexpected challenge",
  contribution: "My contribution",
  validation: "User validation",
  lesson: "Lesson learned",
};

export function Annotation({ kind, children }: { kind: Kind; children: ReactNode }) {
  return (
    <aside
      className="not-prose my-8 border-l border-accent bg-subtle px-5 py-4 text-sm"
      role="note"
    >
      <div className="eyebrow mb-2 text-accent">{labels[kind]}</div>
      <div className="leading-relaxed text-foreground">{children}</div>
    </aside>
  );
}