import type { Project } from "../../data/projects";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <article className="flex flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/60 p-6 transition hover:border-white/20">
            <div className="space-y-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-zinc-300">
                    {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <li 
                            key={tech}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-5 flex gap-4 text-sm">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-300 hover:text-white"
                    >
                        GitHub 
                    </a>
                )}

                {project.liveUrl && (
                    <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-300 hover:text-white"
                    >
                        Live 
                    </a>
                )}
            </div>
        </article>
    )
}