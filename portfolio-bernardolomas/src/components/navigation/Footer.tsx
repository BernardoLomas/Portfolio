import { useTranslation } from "react-i18next";
import Container from "../layout/Container";
import { SOCIAL_LINKS } from "../../config/site";
export default function Footer() {
  const { t } = useTranslation();
  const links = [
    {
      name: "LinkedIn",
      handle: "bernardolomas",
      url: SOCIAL_LINKS.linkedin,
      icon: "/icons/linkedin.svg",
      external: true,
    },
    {
      name: "GitHub",
      handle: "BernardoLomas",
      url: SOCIAL_LINKS.github,
      icon: "/icons/github.svg",
      external: true,
    },
    {
      name: "Email",
      handle: "bernardo.lomasb@gmail.com",
      url: SOCIAL_LINKS.email,
      icon: "/icons/gmail.svg",
      external: false,
    },
  ];
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container>
        <div className="grid items-center gap-10 py-12 text-center lg:grid-cols-[.75fr_1.25fr_1fr] lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/FotoProfi.jpeg"
              alt={t("footer.photo")}
              width="160"
              height="160"
              loading="lazy"
              className="h-40 w-40 rounded-full border-4 border-emerald-400 object-cover shadow-lg shadow-emerald-950"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              {t("footer.social")}
            </h2>
            <ul className="mt-5 space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-3 text-sm text-zinc-300 transition hover:text-emerald-300"
                  >
                    <img
                      src={link.icon}
                      alt=""
                      width="22"
                      height="22"
                      className="h-[22px] w-[22px] emerald-icon"
                    />
                    <span className="font-semibold">{link.name}</span>
                    <span className="text-zinc-500 group-hover:text-zinc-400">
                      {link.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-left text-sm leading-7 text-zinc-300 md:text-justify">
              {t("footer.about")}
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-zinc-500">
          {t("footer.copyright")} {new Date().getFullYear()} Bernardo Lomas.{" "}
          {t("footer.rights")}
        </div>
      </Container>
    </footer>
  );
}
