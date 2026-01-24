import ProjectSectionCard from "./ProjectSectionCard";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";

interface Props {
  project: Project;
}

export default function BackendOverview({ project }: Props) {
  const { t } = useTranslation();

  if (!project.backend) return null;

  return (
    <ProjectSectionCard
      title={t("sections.backend")}
      icon="/icons/backend.svg"
    >
      <ul className="space-y-2 text-zinc-300">
        <li><strong>API:</strong> {project.backend.api}</li>
        <li><strong>Database:</strong> {project.backend.database}</li>

        {project.backend.orm && (
          <li><strong>ORM:</strong> {project.backend.orm}</li>
        )}

        {project.backend.auth && (
          <li><strong>Auth:</strong> {project.backend.auth}</li>
        )}

        {project.backend.hosting && (
          <li><strong>Hosting:</strong> {project.backend.hosting}</li>
        )}
      </ul>
    </ProjectSectionCard>
  );
}
