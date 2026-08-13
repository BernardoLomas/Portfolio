import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-zinc-400">{description}</p>
      )}
    </header>
  );
}
