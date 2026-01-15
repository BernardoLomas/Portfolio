import { useTranslation, Trans } from "react-i18next";

export default function Bio() {
  useTranslation();

  return (
    <section className="max-w-3xl space-y-8 text-zinc-300">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          <Trans
            i18nKey="about.headline"
            components={{
              1: <span className="text-emerald-400 font-bold" />,
            }}
          />
        </h1>
      </header>

      <div className="space-y-3 text-justify">
        <p>
          <Trans
            i18nKey="about.p1"
            components={{
              1: <span className="text-emerald-400 font-bold" />,
            }}
          />
        </p>

        <p>
          <Trans
            i18nKey="about.p2"
            components={{
              1: <span className="text-emerald-400 font-bold" />,
            }}
          />
        </p>

        <p>
          <Trans
            i18nKey="about.p3"
            components={{
              1: <span className="text-emerald-400 font-bold" />,
            }}
          />
        </p>
      </div>
    </section>
  );
}
