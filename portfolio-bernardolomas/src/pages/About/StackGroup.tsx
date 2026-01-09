import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../components/motion/motion.presets";
import StackCard from "./StackCard";

type Item = {
    name: string;
    icon: string;
}

type Props = {
    items: Item[]
};

export default function StackGroup({ items }: Props) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5"
    >
      {items.map((item) => (
        <motion.div key={item.name} variants={fadeInUp}>
          <StackCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
