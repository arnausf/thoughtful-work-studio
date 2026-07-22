export type Project = {
  slug: string;
  client: string;
  clientMark: string;
  name: string;
  oneLiner: string;
  year: string;
  role: string;
  duration: string;
  team: string;
  tools: string;
  preview: string;
};

export const projects: Project[] = [
  {
    slug: "northwind-ledger",
    client: "Northwind",
    clientMark: "NW",
    name: "Ledger",
    oneLiner:
      "Reframing an internal finance tool as a calm reading surface for daily decisions.",
    year: "2025",
    role: "Lead Product Designer",
    duration: "6 months",
    team: "2 designers · 5 engineers · 1 PM",
    tools: "Figma, Linear, Notion",
    preview:
      "linear-gradient(135deg, oklch(0.92 0.02 250), oklch(0.82 0.05 245))",
  },
  {
    slug: "meridian-atlas",
    client: "Meridian",
    clientMark: "MR",
    name: "Atlas",
    oneLiner:
      "A navigational system for a fragmented logistics platform used by 40+ teams.",
    year: "2024",
    role: "Senior Product Designer",
    duration: "9 months",
    team: "3 designers · 12 engineers",
    tools: "Figma, Framer, Miro",
    preview:
      "linear-gradient(135deg, oklch(0.88 0.01 90), oklch(0.78 0.03 60))",
  },
  {
    slug: "loom-editor",
    client: "Loom Labs",
    clientMark: "LL",
    name: "Editor",
    oneLiner:
      "Rebuilding a text editor around one question: what does the writer need to see right now?",
    year: "2024",
    role: "Product Design Lead",
    duration: "4 months",
    team: "1 designer · 3 engineers",
    tools: "Figma, Playwright, TipTap",
    preview:
      "linear-gradient(135deg, oklch(0.9 0.008 260), oklch(0.75 0.02 260))",
  },
  {
    slug: "quorum-review",
    client: "Quorum",
    clientMark: "QM",
    name: "Review",
    oneLiner:
      "Turning peer review into a structured conversation instead of an inbox of comments.",
    year: "2023",
    role: "Product Designer",
    duration: "5 months",
    team: "2 designers · 4 engineers · 1 researcher",
    tools: "Figma, Dovetail, Notion",
    preview:
      "linear-gradient(135deg, oklch(0.9 0.02 30), oklch(0.8 0.04 20))",
  },
  {
    slug: "harbor-signals",
    client: "Harbor",
    clientMark: "HB",
    name: "Signals",
    oneLiner:
      "Designing an observability product for engineers who do not want another dashboard.",
    year: "2023",
    role: "Product Designer",
    duration: "7 months",
    team: "2 designers · 8 engineers",
    tools: "Figma, Grafana, Notion",
    preview:
      "linear-gradient(135deg, oklch(0.88 0.02 200), oklch(0.72 0.05 220))",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return projects[0];
  return projects[(i + 1) % projects.length];
}