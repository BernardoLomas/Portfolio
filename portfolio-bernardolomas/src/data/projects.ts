export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  stack: string[];
  highlights: string[];
  challenges: string[];
  learnings: string[];
  repo?: string;
  live?: string;
  github?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "sistema-de-pombos",
    title: "Sistema de Pombos",
    shortDescription: "A real-world SaaS built to manage logistics and traceability in a niche domain.",
    longDescription:
      "A full stack system developed to solve real operational problems in a pigeon breeding business, focusing on management, traceability and scalability.",
    stack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "React"],
    highlights: [
      "Real user and real business requirements",
      "Scalable architecture and clean domain modeling",
      "Focus on maintainability over overengineering",
    ],
    challenges: [
      "Modeling a niche domain correctly",
      "Avoiding unnecessary complexity in a SaaS-like architecture",
    ],
    learnings: [
      "Domain-driven thinking",
      "Balancing simplicity and scalability",
      "Building software for real users",
    ],
    repo: "https://github.com/...",
    images: ["/images/projects/pombos-1.png"],
  },
];
