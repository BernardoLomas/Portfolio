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
          className="w-8 h-8 [filter:brightness(0)_saturate(100%)_invert(75%)_sepia(81%)_saturate(364%)_hue-rotate(83deg)]"
        />
        {t(title)}
      </h2>

      {children}
    </div>
  );
}
