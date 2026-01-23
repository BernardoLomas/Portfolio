export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  stack: string[];
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
    slug: "pigeons",

    title: "projects.pigeons.title",
    shortDescription: "projects.pigeons.shortDescription",
    longDescription: "projects.pigeons.longDescription",

    stack: ["Node.js", "NestJS", "PostgreSQL", "Prisma"],

    media: [
      { type: "image", src: "/projects/pigeons/dashboard.png" },
      { type: "image", src: "/projects/pigeons/list.png" },
      { type: "image", src: "/projects/pigeons/details.png" },
      { type: "video", src: "/projects/pigeons/demo.mp4" }
    ],

    highlights: [
      "projects.pigeons.highlights.0",
      "projects.pigeons.highlights.1"
    ],

    challenges: [
      "projects.pigeons.challenges.0",
      "projects.pigeons.challenges.1"
    ],

    learnings: [
      "projects.pigeons.learnings.0",
      "projects.pigeons.learnings.1"
    ],

    githubUrl: "https://github.com/bernardolomas/pigeons"
  }
];
