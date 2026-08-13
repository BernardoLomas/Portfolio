import Card from "../ui/Card";
export type Technology = { name: string; icon: string };
export default function TechnologyCard({
  technology,
  compact = false,
}: {
  technology: Technology;
  compact?: boolean;
}) {
  return (
    <Card
      className={`flex items-center gap-3 p-4 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-emerald-400/40 motion-reduce:transform-none ${compact ? "min-h-16" : "min-h-24 flex-col justify-center text-center"}`}
    >
      <img
        src={technology.icon}
        alt=""
        width="36"
        height="36"
        className="h-9 w-9 object-contain emerald-icon"
      />
      <span className="text-sm font-semibold text-emerald-200">
        {technology.name}
      </span>
    </Card>
  );
}
