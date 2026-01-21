import Container from "../layout/Container";
import profile from "/images/FotoProfi.jpeg";
import { useTranslation } from "react-i18next";

const socials = [
  {
    name: "LinkedIn",
    handle: "bernardolomas",
    url: "https://www.linkedin.com/in/bernardolomas/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "GitHub",
    handle: "BernardoLomas",
    url: "https://github.com/BernardoLomas",
    icon: "/icons/github.svg",
  },
  {
    name: "Email",
    handle: "bernardo.lomasb@gmail.com",
    url: "mailto:bernardo.lomasb@gmail.com",
    icon: "/icons/gmail.svg",
  },
];

export default function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <Container>
        <div className="grid gap-4 py-10 text-center lg:grid-cols-3 lg:text-left">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <img
              src={profile}
              alt="Bernardo Lomas"
              className="h-48 w-48 rounded-full border-4 border-emerald-400 object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-7 lg:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Social
            </h3>

            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-emerald-400"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="h-5 w-5 [filter:brightness(0)_saturate(100%)_invert(75%)_sepia(81%)_saturate(364%)_hue-rotate(83deg)]"
                    />
                    <span className="font-medium">{social.name}</span>
                    <span className="text-zinc-500">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 lg:items-start">
            <p className="max-w-xs text-sm text-zinc-300 text-justify">
              {t("footer.about")}
            </p>

            <a
              href="https://www.linkedin.com/in/bernardolomas/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white text-black inline-flex items-center justify-center border border-white/50 px-6 py-3 text-sm font-semibold"
            >
              {t("footer.talk")}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Bernardo Lomas. {t("footer.rights")}
        </div>
      </Container>
    </footer>
  );
}
