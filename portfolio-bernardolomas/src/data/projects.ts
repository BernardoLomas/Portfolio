export type Project = {
    slug: string,
    title: string,
    description: string,
    longDescription: string,
    stack: string[],
    github?: string,
    demo?: string;
};

export const projects: Project[] = [
    {
        slug: "Order System",
        title: "Bernardo Lomas Watches",
        description: "Full Stack web application",
        longDescription: "asdjaksdjkasjdsajkd",
        stack: ["TypeScript", "ReactJs", "Tailwind CSS", "Express", "SQLite"],
        github: "https://github.com/BernardoLomas/POC-OrderSystem.git"
    },
    {
        slug: "Rick and Morty API",
        title: "Rick and Morty API",
        description: "Frontend project",
        longDescription: "asdjaksdjkasjdsajkd",
        stack: ["TypeScript", "ReactJs", "Tailwind CSS"],
        github: "https://github.com/BernardoLomas/RickandMorty.git"
    },
    {
        slug: "Reminders",
        title: "Reminders Project",
        description: "Full Stack web application",
        longDescription: "asdjaksdjkasjdsajkd",
        stack: ["TypeScript", "JavaScript", "Express"],
        github: "https://github.com/BernardoLomas/RickandMorty.git"
    }
]