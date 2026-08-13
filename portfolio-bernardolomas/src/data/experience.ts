import type { Locale, Localized } from "./projects";

export type Experience = {
  category: "professional" | "academic" | "teaching";
  period?: string;
  role: Localized;
  organization: Localized;
  label: Localized;
  description: Localized;
  points: Record<Locale, string[]>;
};

export const experiences: Experience[] = [
  {
    category: "professional",
    role: {
      en: "Junior SAP ABAP Developer",
      pt: "Desenvolvedor SAP ABAP Júnior",
    },
    organization: { en: "SEIDOR", pt: "SEIDOR" },
    label: { en: "SEIDOR", pt: "SEIDOR" },
    description: {
      en: "Professional enterprise software development in the SAP ecosystem.",
      pt: "Desenvolvimento profissional de software empresarial no ecossistema SAP.",
    },
    points: {
      en: [
        "Object-oriented ABAP, debugging, and root-cause analysis",
        "REST integrations using JSON, HTTPS, and authentication",
        "Background processing, ABAP Unit, test doubles, and dependency injection",
        "Technical documentation and collaboration",
      ],
      pt: [
        "ABAP orientado a objetos, depuração e análise de causa raiz",
        "Integrações REST com JSON, HTTPS e autenticação",
        "Processamento em background, ABAP Unit, dublês de teste e injeção de dependência",
        "Documentação técnica e colaboração",
      ],
    },
  },
  {
    category: "academic",
    role: { en: "Information Systems", pt: "Sistemas de Informação" },
    organization: { en: "PUC Minas", pt: "PUC Minas" },
    label: { en: "PUC Minas", pt: "PUC Minas" },
    description: {
      en: "Degree studies that build a foundation in software development and engineering.",
      pt: "Graduação que desenvolve uma base em desenvolvimento e engenharia de software.",
    },
    points: {
      en: [
        "Object-oriented programming and software development",
        "Relational databases, SQL, and web development",
      ],
      pt: [
        "Programação orientada a objetos e desenvolvimento de software",
        "Bancos relacionais, SQL e desenvolvimento web",
      ],
    },
  },
  {
    category: "academic",
    role: {
      en: "Teaching Assistant , Web Application Development",
      pt: "Monitor , Desenvolvimento de Aplicações Web",
    },
    organization: { en: "PUC Minas", pt: "PUC Minas" },
    label: { en: "Teaching Assistant", pt: "Monitoria" },
    description: {
      en: "Supports student learning across backend and frontend web development.",
      pt: "Apoia o aprendizado de estudantes em desenvolvimento web backend e frontend.",
    },
    points: {
      en: [
        "JavaScript, web fundamentals, and HTTP",
        "REST APIs, messaging concepts, backend and frontend development",
      ],
      pt: [
        "JavaScript, fundamentos web e HTTP",
        "APIs REST, conceitos de mensageria e desenvolvimento backend e frontend",
      ],
    },
  },
  {
    category: "teaching",
    role: { en: "English Teacher", pt: "Professor de Inglês" },
    organization: { en: "Independent", pt: "Autônomo" },
    label: { en: "English Teaching", pt: "Ensino de Inglês" },
    description: {
      en: "Teaching experience that developed clear professional communication and presentation skills.",
      pt: "Experiência de ensino que desenvolveu comunicação profissional clara e capacidade de apresentação.",
    },
    points: {
      en: [
        "Explaining complex topics for different learning needs",
        "Preparing and presenting structured lessons",
      ],
      pt: [
        "Explicação de temas complexos para diferentes necessidades de aprendizagem",
        "Preparação e apresentação de aulas estruturadas",
      ],
    },
  },
];
