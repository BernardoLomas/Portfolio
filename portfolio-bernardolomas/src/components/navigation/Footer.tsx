import { useTranslation } from "react-i18next";
import Container from "../layout/Container";
import { SOCIAL_LINKS } from "../../config/site";
export default function Footer() {
  const { t } = useTranslation();
  const links = [
    ["LinkedIn", SOCIAL_LINKS.linkedin],
    ["GitHub", SOCIAL_LINKS.github],
    ["Email", SOCIAL_LINKS.email],
    [t("footer.resume"), SOCIAL_LINKS.resume],
  ];
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-bold">
              Bernardo <span className="text-emerald-400">Lomas</span>
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              {t("footer.about")}
            </p>
          </div>
          <div className="md:text-right">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              {t("footer.links")}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4 md:justify-end">
              {links.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target={url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      url.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="rounded text-sm text-zinc-300 underline-offset-4 hover:text-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Bernardo Lomas. {t("footer.rights")}
        </div>
      </Container>
    </footer>
  );
}
