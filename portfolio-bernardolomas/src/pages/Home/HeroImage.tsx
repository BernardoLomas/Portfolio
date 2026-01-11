import { motion } from "framer-motion";
import profile from "/images/FotoProfi.jpeg";

type Props = {
  onOpen: () => void;
};

export default function HeroImage({ onOpen }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="cursor-pointer"
      onClick={onOpen}
    >
      <img
        src={profile}
        alt="Bernardo Lomas"
        className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[450px] aspect-square rounded-full object-cover border border-white/10 bg-emerald-400/40 p-3"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent opacity-0 transition hover:opacity-100" />
    </motion.div>
  );
}
