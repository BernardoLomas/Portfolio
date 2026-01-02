export type StackItem = {
  name: string;
  icon: keyof typeof import("../utils/iconMap").iconMap
}

export const stackData = {
  main: [
    { name: "JavaScript", icon: "javascript"},
    { name: "TypeScript", icon: "typescript"},
    { name: "C#", icon: "csharp"},
    { name: "React.Js", icon: "reactjs"},
    { name: "SQLite", icon: "sqlite"},
    { name: "HTML", icon: "html"},
    { name: "CSS", icon: "css"},
    { name: "Node.Js", icon: "nodejs"},
    { name: "Express", icon: "express"},
    { name: "Git", icon: "git"},
  ],
  improving: [
    { name: "Next.Js", icon: "nextjs"},
    { name: "Tailwind CSS", icon: "tailwind"},
    { name: "Vite", icon: "vite"},
    { name: "Swagger", icon: "swagger"},
    { name: "Linux OS", icon: "linux"},
  ],
  future: [
    { name: "Nest.Js", icon: "nestjs"},
    { name: "Php", icon: "php"},
    { name: "MySQL", icon: "mysql"},
    { name: "PostgreSQL", icon: "postgresql"},
    { name: "GraphQL", icon: "graphql"},
    { name: "Docker", icon: "docker"},
    { name: "Jest", icon: "jest"},
    { name: "Kubernetes", icon: "kubernetes"},
    { name: "Figma", icon: "figma"},
    { name: "Cloud", icon: "cloud"}
  ]
}