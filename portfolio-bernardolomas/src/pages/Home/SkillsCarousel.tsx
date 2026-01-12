import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../components/motion/motion.presets";

type Skill = {
    title: string;
    description: string;
}

type Props = {
    title: string;
    subtitle: string;
    items: Skill[];
}

export default function SkillsCarousel({ title, subtitle, items }: Props) {
    return (
        <motion.div
            variants={fadeInUp}
            className="space-y-4"
        >
            <div className="space-y-1">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-zinc-400">{subtitle}</p>
            </div>

            <motion.div
                variants={stagger}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
            >
                {items.map((item) => (
                    <motion.article
                        key={item.title}
                        variants={fadeInUp}
                        className="min-w-[260px] snap-start rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition hover:border-emerald-400/40"
                    >
                        <h4 className="mb-2 font-semibold text-white">
                            {item.title}
                        </h4>
                        <p className="text-sm text-zinc-300">
                            {item.description}
                        </p>
                    </motion.article>
                ))}
            </motion.div>
        </motion.div>
    )
}