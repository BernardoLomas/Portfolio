import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "first" | "default" | "alt";
};

export default function Section({
  children,
  className,
  variant = "default",
}: Props) {
  return (
    <section
      className={clsx(
        "py-16 sm:py-20 lg:py-24",
        variant === "first" && "pt-20 sm:pt-24 lg:pt-28",
        variant === "alt" && "bg-zinc-950/40",
        className
      )}
    >
      {children}
    </section>
  );
}
