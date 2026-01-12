
export const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
} as const;

export const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const hoverLift = {
    y: -4,
    transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
    },
} as const;