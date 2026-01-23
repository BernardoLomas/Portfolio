import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export default function ProjectSectionCard({ title, icon, children }: Props) {
  const { t } = useTranslation();

  return (
    <div className="rounded-2xl border-2 border-white/10 bg-zinc-900/60 p-6">
      <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 text-emerald-400">
        <img
          src={icon}
          className="w-6 h-6 opacity-80"
        />
        {t(title)}
      </h2>

      {children}
    </div>
  );
}
