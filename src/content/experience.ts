export type Experience = {
  company: string;
  role: string;
  dates: string;
  description?: string;
  clients?: string[];
};

export const experience: Experience[] = [
  {
    company: "Mediapro Exhibitions · GRUP MEDIAPRO",
    role: "Mid UX/UI Designer",
    dates: "Apr 2023 — Present",
    description:
      "Interactive and immersive digital experiences for museums, cultural spaces and international brands.",
    clients: ["CUPRA", "Securitas", "Olympiakos FC", "Zoo de Barcelona"],
  },
  {
    company: "TechStyleOS",
    role: "Acquisition Designer",
    dates: "Apr 2022 — Apr 2023",
    description:
      "Performance-focused visual and motion design for international e-commerce brands.",
  },
  {
    company: "Ajuntament de la Llagosta",
    role: "UX/UI Designer",
    dates: "Nov 2021 — Apr 2022",
  },
  {
    company: "Modo in action",
    role: "Jr UX/UI Designer",
    dates: "Feb 2020 — Jun 2021",
  },
  {
    company: "Adiplus Tech&Content",
    role: "Jr Graphic Designer",
    dates: "Oct 2019 — Feb 2020",
  },
  {
    company: "Chispum Studio",
    role: "Graphic Designer Intern",
    dates: "Nov 2018 — May 2019",
  },
  {
    company: "Factoría de Proyectos",
    role: "Graphic Designer Intern",
    dates: "Nov 2017 — Nov 2018",
  },
];

export const education = {
  institution: "BAU, Centre Universitari d'Arts i Disseny",
  qualification: "Master’s Degree in Digital Experiences",
  dates: "Oct 2022 — Jun 2023",
};
