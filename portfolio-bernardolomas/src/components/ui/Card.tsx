import type { ElementType, ReactNode } from "react";
export default function Card({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      className={`rounded-2xl border-2 border-white/10 bg-zinc-900/60 transition duration-200 ${className}`}
    >
      {children}
    </Tag>
  );
}
