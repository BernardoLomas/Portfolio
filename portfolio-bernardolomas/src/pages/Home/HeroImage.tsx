import { motion } from "framer-motion"
import profile from "../../assets/images/FotoProfi.jpeg"

type Props = {
    onOpen: () => void;
};

export default function HeroImage({ onOpen }: Props) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="relative cursor-pointer"
            onClick={onOpen}
        >
            <img
                src={profile}
                alt="Bernardo Lomas"
                className="h-[400px] w-[400px] rounded-full object-cover border border-white/10 bg-emerald-400/40 p-3"
            />

            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent opacity-0 transition hover:opacity-100" />
        </motion.div>
    )
}