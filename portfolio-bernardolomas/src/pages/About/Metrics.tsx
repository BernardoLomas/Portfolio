import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../components/motion/motion.presets";
import { metrics } from "../../data/metrics";
import { useTranslation } from "react-i18next";

export default function Metrics() {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {metrics.map((item) => (
        <motion.article
          key={item.key}
          variants={fadeInUp}
          className="
            rounded-xl
            border
            border-white/10
            bg-zinc-900/60
            p-6
            transition
            hover:border-emerald-400/40
          "
        >
          <span className="text-4xl font-bold text-emerald-300">
            {item.value}
          </span>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {t(`metrics.${item.key}.label`)}
          </h3>

          <p className="mt-1 text-sm text-zinc-300">
            {t(`metrics.${item.key}.description`)}
          </p>
        </motion.article>
      ))}
    </motion.section>
  );
}
