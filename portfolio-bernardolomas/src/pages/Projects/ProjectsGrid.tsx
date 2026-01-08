import { motion } from "framer-motion"
import { stagger } from "../../components/motion/motion.presets"
import { projects } from "../../data/projects"
import ProjectCard from "./ProjectCard"

export default function ProjectsGrid() {
    return (
        <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </motion.div>
    )
}