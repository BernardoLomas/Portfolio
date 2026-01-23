export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  challenges: string[];
  learnings: string[];
  stack: string[];
  media?: { type: "image" | "video"; src: string }[];
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "pigeons",

    title: "projects.pigeons.title",
    shortDescription: "projects.pigeons.shortDescription",
    longDescription: "projects.pigeons.longDescription",

    stack: ["Node.js", "Express", "PostgreSQL"],

    highlights: [
      "projects.pigeons.highlights.0",
      "projects.pigeons.highlights.1",
      "projects.pigeons.highlights.2",
    ],

    challenges: [
      "projects.pigeons.challenges.0",
      "projects.pigeons.challenges.1",
    ],

    learnings: ["projects.pigeons.learnings.0", "projects.pigeons.learnings.1"],
  },
];
