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

  const isFlagship = project.slug === project.type; 

  return (
    <motion.div variants={fadeInUp}>
      <motion.div whileHover={hoverLift}>
        <Card
          className={`
            relative
            flex
            h-full
            flex-col
            justify-between
            border-2
            transition
            hover:border-emerald-400/40
            ${isFlagship ? "border-emerald-400/40" : "border-white/10"}
          `}
        >

          {isFlagship && (
            <span className="
              absolute
              -top-3
              right-4
              rounded-full
              bg-emerald-400
              px-3
              py-1
              text-xs
              font-semibold
              text-black
            ">
              Flagship
            </span>
          )}

          
          <Link to={`/projects/${project.slug}`} className="block flex-1 space-y-4">
            <h3 className="text-xl font-semibold">
              {t(project.title)}
            </h3>
            <p className="text-sm text-zinc-300">
              {t(project.shortDescription)}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded bg-emerald-400/20 text-emerald-400">
                  {tech}
                </span>
              ))}
            </div>
          </Link>

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
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
