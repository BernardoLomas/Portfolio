import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Seo from "../../components/seo/Seo";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import ProjectSectionCard from "./ProjectSectionCard";
import { projectSections } from "../../data/projectDetails";
import { useTranslation, Trans } from "react-i18next";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const { t } = useTranslation();
  if (!project) return null;

  return (
    <>
      <Seo
        title={`${t(project.title)} | Bernardo Lomas`}
        description={t(project.shortDescription)}
      />

      <Section variant="first">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            <div className="space-y-10">

              <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-4">
                <div className="w-full h-[300px] rounded-xl bg-black/40 flex items-center justify-center">
                  <span className="text-zinc-400">
                    {t("projects.media.placeholder")}
                  </span>
                </div>
              </div>

              <ProjectSectionCard
                title={t("sections.stack")}
                icon={projectSections.stack.icon}
              >
                <ul className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border-2 border-white/10 bg-zinc-950/60 px-3 py-1 text-sm transition hover:border-emerald-400/40"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </ProjectSectionCard>

              <ProjectSectionCard
                title={t("sections.highlights")}
                icon={projectSections.highlights.icon}
              >
                <ul className="space-y-3 text-zinc-300">
                  {project.highlights.map((key) => (
                    <li key={key} className="flex gap-3 items-start">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSectionCard>
            </div>

            <div className="space-y-10">

              <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-8">
                <h1 className="text-4xl font-bold text-emerald-400 mb-4">
                  {t(project.title)}
                </h1>

                <p className="text-zinc-300 leading-relaxed text-justify">
                  <Trans
                    i18nKey={project.longDescription}
                    components={{
                      1: <span className="text-emerald-400 font-semibold" />
                    }}
                  />
                </p>
              </div>

              <ProjectSectionCard
                title={t("sections.challenges")}
                icon={projectSections.challenges.icon}
              >
                <ul className="space-y-3 text-zinc-300">
                  {project.challenges.map((key) => (
                    <li key={key} className="flex gap-3">
                      <span className="text-emerald-400">●</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSectionCard>


              <ProjectSectionCard
                title={t("sections.learnings")}
                icon={projectSections.learnings.icon}
              >
                <ul className="space-y-3 text-zinc-300">
                  {project.learnings.map((key) => (
                    <li key={key} className="flex gap-3">
                      <span className="text-emerald-400">▹</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSectionCard>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
