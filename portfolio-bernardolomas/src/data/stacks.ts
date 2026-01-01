export type StackItem = {
  name: string;
  icon: keyof typeof import("../utils/iconMap").iconMap
}

export const stackData = {
  main: [
    { name: "JavaScript", icon: "javascript"},
    { name: "TypeScript", icon: "typescript"},
    { name: "HTML", icon: "html"},
    { name: "CSS", icon: "css"},
  ],
  improving: [
    { name: "React.Js", icon: "reactjs"},
    { name: "Node.Js", icon: "nodejs"},
    { name: "Express", icon: "express"},
    { name: "Tailwind CSS", icon: "tailwind"},
    { name: "Vite", icon: "vite"},
    { name: "SQLite", icon: "sqlite"},
  ],
  future: [
    { name: "Next.Js", icon: "nextjs"},
    { name: "Nest.Js", icon: "nestjs"},
    { name: "MySQL", icon: "mysql"},
    { name: "Linux OS", icon: "linux"},
    { name: "Docker", icon: "docker"},
    { name: "GraphQL", icon: "graphql"},
    { name: "Kubernetes", icon: "kubernetes"},
  ]
}