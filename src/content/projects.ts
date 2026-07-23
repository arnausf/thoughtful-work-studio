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
    slug: "fc-barcelona-museum",
    client: "Immersive Museum Experience",
    clientMark: "IME",
    name: "Immersive Museum Experience",
    oneLiner:
      "Designing for a museum that kept evolving while we were building it. The challenge wasn't designing individual interfaces; it was maintaining one coherent visitor experience across dozens of installations.",
    year: "2025",
    role: "UX/UI Designer",
    duration: "Coming soon",
    team: "Future Museum",
    tools: "Figma",
    preview: "linear-gradient(135deg, oklch(0.9 0.03 265), oklch(0.76 0.08 25))",
  },
  {
    slug: "securitas-vr",
    client: "Securitas VR",
    clientMark: "SVR",
    name: "Securitas VR",
    oneLiner: "Learning an entirely new interaction paradigm while designing for virtual reality.",
    year: "2025",
    role: "UX/UI Designer",
    duration: "Coming soon",
    team: "Content in progress",
    tools: "Coming soon",
    preview: "linear-gradient(135deg, oklch(0.88 0.02 250), oklch(0.74 0.05 245))",
  },
  {
    slug: "fifa-world",
    client: "FIFA World",
    clientMark: "FIFA",
    name: "FIFA World",
    oneLiner: "Joining an ongoing project and ensuring consistency across a fast-moving product.",
    year: "2024",
    role: "UX/UI Designer",
    duration: "Coming soon",
    team: "Content in progress",
    tools: "Coming soon",
    preview: "linear-gradient(135deg, oklch(0.88 0.01 90), oklch(0.78 0.03 60))",
  },
  {
    slug: "metahype-mobile",
    client: "Metahype Mobile",
    clientMark: "MH",
    name: "Metahype Mobile",
    oneLiner:
      "Adapting a desktop gaming experience into a mobile-first product instead of simply shrinking the interface.",
    year: "2024",
    role: "UX/UI Designer",
    duration: "Coming soon",
    team: "Content in progress",
    tools: "Coming soon",
    preview: "linear-gradient(135deg, oklch(0.9 0.008 260), oklch(0.75 0.02 260))",
  },
  {
    slug: "cuidals",
    client: "Cuida'ls",
    clientMark: "CL",
    name: "Cuida'ls",
    oneLiner:
      "Designing a digital experience that helps children better understand and care for animals.",
    year: "2023",
    role: "UX/UI Designer",
    duration: "Coming soon",
    team: "Content in progress",
    tools: "Coming soon",
    preview: "linear-gradient(135deg, oklch(0.9 0.02 30), oklch(0.8 0.04 20))",
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
