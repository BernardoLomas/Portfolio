export type ProjectType =
  | "flagship"
  | "fullstack"
  | "backend"
  | "frontend"
  | "academic";

export type Project = {
  slug: string;
  type: ProjectType;
  title: string;
  shortDescription: string;
  longDescription: string;
  stack: string[];

  backend?: {
    api: string;
    database: string;
    orm?: string;
    auth?: string;
    hosting?: string;
  };

  media: {
    type: "image" | "video";
    src: string;
    alt?: string;
  }[];

  highlights: string[];
  challenges: string[];
  learnings: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "poc",
    type: "fullstack",

    title: "projects.poc.title",
    shortDescription: "projects.poc.shortDescription",
    longDescription: "projects.poc.longDescription",

    stack: ["TypeScript", "React.js", "Node.js", "Prisma"],

    backend: {
      api: "REST",
      database: "Prisma",
    },

    media: [
      { type: "image", src: "/projects/poc/dashboard.png" },
      { type: "image", src: "/projects/poc/list.png" },
      { type: "image", src: "/projects/poc/details.png" },
      { type: "video", src: "/projects/poc/demo.mp4" },
    ],

    highlights: [
      "projects.poc.highlights.0",
      "projects.poc.highlights.1",
    ],

    challenges: [
      "projects.poc.challenges.0",
      "projects.poc.challenges.1",
    ],

    learnings: [
      "projects.poc.learnings.0", 
      "projects.poc.learnings.1",
    ],

    githubUrl: "https://github.com/BernardoLomas/POC-OrderSystem.git",
  },
];
