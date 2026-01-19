import { motion } from "framer-motion"
import { fadeInUp, hoverLift } from "../../components/motion/motion.presets"
import type { Project } from "../../data/projects"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import { useTranslation } from "react-i18next"

type Props = {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const { t } = useTranslation();

    return (
        <motion.div variants={fadeInUp}>
            <motion.div whileHover={hoverLift}>
                <Card className="flex h-full flex-col justify-between">
                    <div className="space-y-4">
                        <h3 className="tex-xl font-semibold">
                            {project.title}
                        </h3>

                        <p className="text-sm text-zinc-300">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 px-2 py-1 text-xs text-zinc-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                        {project.github && (
                            <Button to={project.github} variant="outline">
                                {t("projects.code")}
                            </Button>
                        )}

                        {project.demo && (
                            <Button to={project.demo} variant="primary">
                                Live
                            </Button>
                        )}
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    )
}