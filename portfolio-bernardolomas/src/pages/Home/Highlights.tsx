import { hardSkills } from "../../data/hardskills";
import { softSkills } from "../../data/softskills";
import { motion } from "framer-motion"
import { fadeInUp, stagger, hoverLift } from "../../components/motion/motion.presets";

export default function Highlights() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-10"
    >
      <section className="space-y-8">
        <header className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-400">Hard Skills</h2>
          <p className="text-zinc-300">
            Technical features that guide me in projects and make me a good software developer.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hardSkills.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <motion.article
                whileHover={hoverLift}
                className="rounded-xl border border-white/10 bg-zinc-900/60 p-6 transition hover:border-emerald-400/40"
              >
                <h3 className="mb-2 text-lg font-semibold text-emerald-400">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-300">
                  {item.description}
                </p>
              </motion.article>
            </motion.div>
          ))}
        </div>


        <div className="max-w-2xl space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-400">Soft Skills</h2>
          <p className="text-zinc-300">
            Skills that make me a highly requested professional.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <motion.article
                whileHover={hoverLift}
                className="rounded-xl border border-white/10 bg-zinc-900/60 p-6 transition hover:border-emerald-400/40"
              >
                <h3 className="mb-2 text-lg font-semibold text-emerald-400">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-300">
                  {item.description}
                </p>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.section >
  );
}
