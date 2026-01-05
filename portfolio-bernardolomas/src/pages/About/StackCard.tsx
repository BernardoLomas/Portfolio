import { motion } from "framer-motion";
import { iconMap } from "../../utils/iconMap";
import { hoverLiftSoft } from "../../utils/motion";

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
      whileHover={hoverLiftSoft}
    >
      <div className="flex min-h-[200px] w-[200px] flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition hover:border-emerald-400/40">
        <Icon 
          className="h-20 w-20 text-emerald-400 hover:text-emerald-300 transition-colors" 
          color="#34d399"
          fill="#34d399"
        />

        <span className="text-lg font-bold text-emerald-200 p-2">{name}</span>
      </div>
    </motion.div>
  );
}
