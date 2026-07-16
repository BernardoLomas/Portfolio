export type LandingPage = {
  slug: string;
  accent: string;
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: string;
  highlights: string[];
  servicesTitle: string;
  services: string[];
  stackTitle: string;
  stack: string[];
};

export const landingPages: LandingPage[] = [
  {
    slug: "sap-abap",
    accent: "SAP • ABAP • ERP",
    eyebrow: "Principal atuação",
    title: "Consultoria ABAP Junior para evolução do ecossistema SAP",
    summary:
      "Atuo no desenvolvimento ABAP e na sustentação de soluções dentro do ecossistema SAP, conectando regra de negócio, análise técnica e entrega com clareza.",
    primaryCta: "Conversar sobre SAP",
    highlights: [
      "Desenvolvimento ABAP com foco em legibilidade, manutenção e aderência ao processo de negócio.",
      "Apoio em demandas de melhoria, correção e evolução técnica no ambiente SAP.",
      "Perfil consultivo junior: escuta ativa, documentação clara e colaboração com times funcionais e técnicos.",
    ],
    servicesTitle: "Como posso contribuir",
    services: [
      "Construção e ajuste de reports, includes, exits, enhancements e objetos ABAP.",
      "Análise técnica de incidentes e apoio à sustentação de rotinas SAP.",
      "Comunicação entre negócio e tecnologia para transformar requisitos em entregas viáveis.",
    ],
    stackTitle: "Ecossistema de atuação",
    stack: ["ABAP", "SAP ERP", "Debugging", "Documentação técnica", "Processos de negócio"],
  },
  {
    slug: "english-teacher",
    accent: "English • Communication • Mentoring",
    eyebrow: "Educação e comunicação",
    title: "Aulas de inglês personalizadas para objetivos reais",
    summary:
      "Como professor de inglês, uno método, acompanhamento individual e comunicação clara para ajudar alunos a ganharem confiança em conversação, estudos e carreira.",
    primaryCta: "Agendar uma conversa",
    highlights: [
      "Planos de aula adaptados ao nível, rotina e objetivo de cada aluno.",
      "Foco em conversação, vocabulário útil e segurança para situações reais.",
      "Experiência ensinando mais de 10 alunos com acompanhamento próximo e feedback constante.",
    ],
    servicesTitle: "Formatos de aula",
    services: [
      "Inglês para carreira, entrevistas, tecnologia e comunicação profissional.",
      "Reforço de gramática aplicada com prática oral e escrita.",
      "Mentoria de estudo para criar consistência e autonomia no aprendizado.",
    ],
    stackTitle: "Pilares do ensino",
    stack: ["Conversação", "Pronúncia", "Business English", "Feedback", "Plano individual"],
  },
  {
    slug: "web-development",
    accent: "C# • TypeScript • Web",
    eyebrow: "Posicionamento técnico",
    title: "Desenvolvimento web com C# e TypeScript para produtos modernos",
    summary:
      "Mesmo não atuando hoje diretamente com linguagens open-source, mantenho um posicionamento ativo para o mercado web, com projetos e estudos em C#, TypeScript, React e APIs.",
    primaryCta: "Ver projetos web",
    highlights: [
      "Construção de interfaces responsivas e componentes reutilizáveis com React e TypeScript.",
      "Interesse em backend, APIs, arquitetura limpa e integração entre frontend e serviços.",
      "Base acadêmica e projetos pessoais voltados à entrega ponta a ponta de aplicações web.",
    ],
    servicesTitle: "Interesses de atuação",
    services: [
      "Aplicações web com React, TypeScript, Tailwind e boas práticas de componentização.",
      "APIs e backends com C#, Node.js/NestJS e modelagem de dados.",
      "Projetos full stack pequenos e médios com foco em evolução, clareza e manutenção.",
    ],
    stackTitle: "Stack em evolução",
    stack: ["C#", "TypeScript", "React", "Node.js", "NestJS", "SQL", "Tailwind CSS"],
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
