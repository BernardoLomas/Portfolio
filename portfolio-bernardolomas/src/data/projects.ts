export type Project = {
    id: string,
    title: string,
    description: string,
    stack: string[],
    githubUrl?: string,
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        id: "Order System",
        title: "Bernardo Lomas Watches",
        description: "Aplicação Fullstack",
        stack: ["NodeJs", "Express"],
        githubUrl: "https//github"
    }
]