export const fadeInUpSoft = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
} as const;

export const hoverLiftSoft = {
  y: -4,
  transition: {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.9,
  },
} as const;

export const staggerSoft = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
