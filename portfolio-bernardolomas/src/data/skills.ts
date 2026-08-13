export const skillGroups = [
  {
    key: "backend",
    title: { en: "Backend", pt: "Backend" },
    items: [
      "C#",
      ".NET",
      "REST APIs",
      "Object-Oriented Programming",
      "Layered Architecture",
      "Dependency Injection",
    ],
  },
  {
    key: "databases",
    title: { en: "Databases", pt: "Bancos de Dados" },
    items: [
      "SQL",
      "Relational Databases",
      "Data Modeling",
      "Normalization",
      "Transactions / ACID",
    ],
  },
  {
    key: "sap",
    title: { en: "Enterprise / SAP", pt: "Empresarial / SAP" },
    items: [
      "SAP ABAP",
      "ABAP Objects",
      "SAP S/4HANA",
      "ABAP Unit",
      "Debugging",
      "Integrations",
    ],
  },
  {
    key: "engineering",
    title: { en: "Testing & Engineering", pt: "Testes e Engenharia" },
    items: [
      "xUnit",
      "ABAP Unit",
      "Test Doubles",
      "Git",
      "Azure DevOps",
      "SOLID",
      "Clean Code / Refactoring",
    ],
  },
  {
    key: "web",
    title: { en: "Additional Web Experience", pt: "Experiência Web Adicional" },
    items: ["JavaScript", "TypeScript", "React", "HTML / CSS", "Tailwind CSS"],
    secondary: true,
  },
] as const;
