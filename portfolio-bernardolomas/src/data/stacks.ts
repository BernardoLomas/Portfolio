export type Stacks = {
    title: string,
    items: string [],
};

export const stacks: Stacks[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS", "NextJs"],
  },
  {
    title: "Backend",
    items: ["NodeJs", "Express", "NestJs", "C#", "REST APIs"],
  },
  {
    title: "DataBase",
    items: ["MySQL", "PostgreSQL", "SQLite", "Prisma"],
  },
  {
    title: "Good Practices",
    items: [
        "Clean Code",
        "Conventional commits",
        "Swagger Documentation",
    ]
  },
  {
    title: "Learning",
    items: [
        "Jest",   
        "Docker", 
        "Linux", 
        "Kubernetes"
    ],
  },
  {
    title: "Improving",
    items: [
        "NextJs",
        "NestJs",
        "MySQL",
    ]
  }
];