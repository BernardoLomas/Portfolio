export type Project = {
    id: string,
    title: string,
    description: string,
    longDescription: string,
    stack: string[],
    githubUrl?: string,
    liveUrl?: string;
};

export const projects: Project[] = [
    {
        id: "Order System",
        title: "Bernardo Lomas Watches",
        description: "Full Stack web application",
        longDescription: "asdjaksdjkasjdsajkd",
        stack: ["TypeScript", "ReactJs", "Tailwind CSS", "Express", "SQLite"],
        githubUrl: "https://github.com/BernardoLomas/POC-OrderSystem.git"
    },
    {
        id: "Rick and Morty API",
        title: "Rick and Morty API",
        description: "Frontend project",
        longDescription: "asdjaksdjkasjdsajkd",
        stack: ["TypeScript", "ReactJs", "Tailwind CSS"],
        githubUrl: "https://github.com/BernardoLomas/RickandMorty.git"
    },
    {
        id: "Reminders",
        title: "Reminders Project",
        description: "Full Stack web application",
        longDescription: "asdjaksdjkasjdsajkd",
        stack: ["TypeScript", "JavaScript", "Express"],
        githubUrl: "https://github.com/BernardoLomas/RickandMorty.git"
    }
]