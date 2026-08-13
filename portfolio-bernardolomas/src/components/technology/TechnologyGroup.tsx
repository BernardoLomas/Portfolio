type Props = { title: string; items: readonly string[]; secondary?: boolean };
export default function TechnologyGroup({ title, items, secondary }: Props) {
  return (
    <article
      className={`rounded-2xl border p-6 ${secondary ? "border-white/10 bg-zinc-950/40" : "border-emerald-400/20 bg-zinc-900/60"}`}
    >
      <h3 className="text-lg font-semibold text-emerald-300">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="max-w-full break-words rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
