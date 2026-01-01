import { motion } from "framer-motion";

type Props = {
  name: string;
  icon: string;
};

export default function StackCard({ name, icon }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="flex min-h-[200px] flex-col items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-6"
    >
      <img src={icon} alt={name} className="h-10 w-10 opacity-90" />
      <span className="text-sm text-zinc-200">{name}</span>
    </motion.div>
  );
}
