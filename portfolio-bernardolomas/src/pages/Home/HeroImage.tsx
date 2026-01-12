import { motion } from "framer-motion";
import profile from "/images/FotoProfi.jpeg";

type Props = {
  onOpen?: () => void;
};

export default function HeroImage({ onOpen }: Props) {
  return (
    <motion.div
      onClick={onOpen ? onOpen : undefined}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 140, damping: 20 }}
      className="relative flex items-center justify-center cursor-pointer"
    >
      <div className="rounded-full border-4 border-emerald-400/80">
        <img
          src={profile}
          alt="Bernardo Lomas"
          className="block h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72 lg:h-96 lg:w-96"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent opacity-0 transition hover:opacity-100" />
    </motion.div>
  );
}
