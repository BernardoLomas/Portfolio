import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, hoverLift } from "../../components/motion/motion.presets";
import type { Project } from "../../data/projects";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useTranslation } from "react-i18next";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeInUp}>
      <motion.div whileHover={hoverLift}>
        <Link to={`/projects/${project.slug}`} className="block h-full">
          <Card className="flex h-full flex-col border-2 justify-between transition hover:border-emerald-400/40">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-300">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border-2 border-white/10 px-2 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button variant="outline">
                    {t("projects.code")}
                  </Button>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button variant="primary">
                    Live
                  </Button>
                </a>
              )}
            </div>
          </Card>
        </Link>
      </motion.div>
    </motion.div>
  );
}
