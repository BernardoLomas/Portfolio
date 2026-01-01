import { motion } from "framer-motion";
import { iconMap } from "../../utils/iconMap";

type Props = {
  name: string;
  icon: keyof typeof iconMap;
};

export default function StackCard({ name, icon }: Props) {
  const Icon = iconMap[icon];

  if (!Icon) {
    console.warn(`Icon not found: ${icon}`);
    return null;
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="flex min-h-[200px] flex-col items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-6"
    >
      <div className="flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition hover:border-emerald-400/40">
        <Icon className="h-10 w-10 text-emerald-400" />

        <span className="text-sm text-zinc-200">{name}</span>
      </div>
    </motion.div>
  );
}
