export type Locale = "en" | "pt";
export type Localized = Record<Locale, string>;
export type ProjectCategory = "backend" | "web" | "academic";

export type Project = {
  slug: string;
  category: ProjectCategory;
  flagship?: boolean;
  status?: "inDevelopment";
  title: string;
  summary: Localized;
  context: Localized;
  approach: Localized;
  stack: string[];
  media: { src: string; alt: Localized }[];
  backend?: Partial<
    Record<
      | "api"
      | "database"
      | "persistence"
      | "authentication"
      | "testing"
      | "architecture",
      string
    >
  >;
  highlights: Record<Locale, string[]>;
  challenges: Record<Locale, string[]>;
  learnings: Record<Locale, string[]>;
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "api-orders",
    category: "backend",
    flagship: true,
    status: "inDevelopment",
    title: "Purchase Order API",
    summary: {
      en: "An enterprise-style backend learning project for modeling suppliers, products, and purchase orders.",
      pt: "Projeto de estudos backend com abordagem empresarial para modelar fornecedores, produtos e pedidos de compra.",
    },
    context: {
      en: "Purchase-order workflows connect several business entities and rules. This project creates a focused domain in which to practice representing those relationships without hiding its work-in-progress state.",
      pt: "Fluxos de pedidos de compra conectam diversas entidades e regras de negócio. O projeto cria um domínio focado para praticar essas relações sem esconder que ainda está em desenvolvimento.",
    },
    approach: {
      en: "The solution is being developed in C# and .NET with domain modeling, object-oriented design, business rules, layered responsibilities, and dependency injection as its learning goals. Only capabilities currently evidenced by the public project are described here.",
      pt: "A solução está sendo desenvolvida em C# e .NET, tendo modelagem de domínio, orientação a objetos, regras de negócio, responsabilidades em camadas e injeção de dependência como objetivos de aprendizado. Apenas capacidades evidenciadas pelo projeto público são descritas aqui.",
    },
    stack: ["C#", ".NET", "OOP", "Dependency Injection"],
    media: [
      {
        src: "/projects/api-orders-architecture.svg",
        alt: {
          en: "Purchase Order API domain diagram showing suppliers, products, and purchase orders",
          pt: "Diagrama de domínio da Purchase Order API com fornecedores, produtos e pedidos de compra",
        },
      },
    ],
    backend: { architecture: "Layered responsibilities (in development)" },
    highlights: {
      en: [
        "Models an enterprise purchase-order domain",
        "Keeps business rules and responsibilities explicit",
        "Uses the project to practice maintainable backend fundamentals",
      ],
      pt: [
        "Modela um domínio empresarial de pedidos de compra",
        "Mantém regras de negócio e responsabilidades explícitas",
        "Usa o projeto para praticar fundamentos de backend sustentável",
      ],
    },
    challenges: {
      en: [
        "Defining clear boundaries between suppliers, products, and orders",
        "Evolving the design without presenting planned capabilities as finished",
      ],
      pt: [
        "Definir limites claros entre fornecedores, produtos e pedidos",
        "Evoluir o design sem apresentar capacidades planejadas como concluídas",
      ],
    },
    learnings: {
      en: [
        "Translating business concepts into domain objects",
        "Applying dependency injection and layered design deliberately",
      ],
      pt: [
        "Traduzir conceitos de negócio em objetos de domínio",
        "Aplicar injeção de dependência e design em camadas de forma intencional",
      ],
    },
    githubUrl: "https://github.com/BernardoLomas/api-orders",
  },
  {
    slug: "poc",
    category: "web",
    title: "POC Order System",
    summary: {
      en: "A full-stack proof of concept for organizing and viewing order information.",
      pt: "Uma prova de conceito full stack para organizar e visualizar informações de pedidos.",
    },
    context: {
      en: "The project explores an order workflow through a web interface backed by an application service.",
      pt: "O projeto explora um fluxo de pedidos por meio de uma interface web conectada a um serviço de aplicação.",
    },
    approach: {
      en: "It combines a React and TypeScript interface with a Node.js backend and Prisma, preserving its original full-stack scope.",
      pt: "Combina uma interface em React e TypeScript com backend Node.js e Prisma, preservando seu escopo full stack original.",
    },
    stack: ["TypeScript", "React", "Node.js", "Prisma"],
    media: [
      {
        src: "/projects/poc-architecture.svg",
        alt: {
          en: "POC Order System architecture diagram",
          pt: "Diagrama de arquitetura do POC Order System",
        },
      },
    ],
    backend: { api: "REST", persistence: "Prisma" },
    highlights: {
      en: [
        "Connects a typed interface to an order backend",
        "Organizes the application into reusable responsibilities",
      ],
      pt: [
        "Conecta uma interface tipada a um backend de pedidos",
        "Organiza a aplicação em responsabilidades reutilizáveis",
      ],
    },
    challenges: {
      en: ["Coordinating data contracts between frontend and backend"],
      pt: ["Coordenar contratos de dados entre frontend e backend"],
    },
    learnings: {
      en: ["End-to-end application flow and data modeling"],
      pt: ["Fluxo ponta a ponta da aplicação e modelagem de dados"],
    },
    githubUrl: "https://github.com/BernardoLomas/POC-OrderSystem",
  },
];
