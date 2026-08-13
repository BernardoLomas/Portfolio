import type { Localized } from "./projects";
export const technologies = [
  { name: "C#", icon: "/icons/csharp.svg" },
  { name: ".NET", icon: "/icons/backend.svg" },
  { name: "SAP ABAP", icon: "/icons/code.svg" },
  { name: "SQL", icon: "/icons/backend.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
] as const;
export const engineeringSkills: Localized[] = [
  { en: "Object-Oriented Programming", pt: "Programação Orientada a Objetos" },
  { en: "REST APIs", pt: "APIs REST" },
  { en: "Layered Architecture", pt: "Arquitetura em Camadas" },
  { en: "Dependency Injection", pt: "Injeção de Dependência" },
  { en: "SOLID", pt: "SOLID" },
  { en: "Unit Testing", pt: "Testes Unitários" },
  { en: "Test Doubles", pt: "Dublês de Teste" },
  { en: "Relational Data Modeling", pt: "Modelagem de Dados Relacionais" },
  { en: "Debugging", pt: "Depuração" },
  { en: "Clean Code and Refactoring", pt: "Código Limpo e Refatoração" },
];
