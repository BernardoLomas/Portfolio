import SkillsCarousel from "./SkillsCarousel";
import Container from "../../components/layout/Container";
import { hardSkills } from "../../data/hardskills";
import { softSkills } from "../../data/softskills";
import { motion } from "framer-motion";
import { stagger } from "../../components/motion/motion.presets";

export default function Highlights() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-10"
    >
      <Container>
        <div className="mx-auto max-w-8xl space-y-10">
          <header className="max-w-2xl space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-400">
              Skills Overview
            </h2>
            <p className="text-zinc-300">
              A quick look at the skills I apply in real-world projects.
            </p>
          </header>

          <div className="grid gap-10 lg:grid-cols-2">
            <SkillsCarousel
              title="Hard Skills"
              subtitle="Technical capabilities used in development."
              items={hardSkills}
            />

            <SkillsCarousel
              title="Soft Skills"
              subtitle="Interpersonal skills that drive collaboration."
              items={softSkills}
            />
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
