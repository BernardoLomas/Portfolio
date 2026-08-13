import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../layout/Container";
import { SOCIAL_LINKS, localizedPath } from "../../config/site";
import { useLocale } from "../../hooks/useLocale";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const first = useRef<HTMLAnchorElement>(null);
  const { t } = useTranslation();
  const locale = useLocale();
  const { pathname } = useLocation();
  const paths = ["/", "/projects", "/about"];
  useEffect(() => {
    if (open) first.current?.focus();
  }, [open]);
  const links = paths.map((path, i) => ({
    to: localizedPath(path, locale),
    label: t(["nav.home", "nav.projects", "nav.about"][i]),
  }));
  const navigation = (mobile = false) =>
    links.map((link, i) => (
      <NavLink
        ref={mobile && i === 0 ? first : undefined}
        key={link.to}
        to={link.to}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `rounded px-2 py-1 font-semibold transition ${isActive ? "text-emerald-400" : "text-zinc-300 hover:text-white"}`
        }
      >
        {link.label}
      </NavLink>
    ));
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
      <Container>
        <nav
          aria-label={t("nav.navigationLabel")}
          className="grid h-16 grid-cols-[1fr_auto] items-center md:grid-cols-3"
        >
          <div>
            <NavLink
              aria-label={t("nav.language")}
              to={localizedPath(pathname, locale === "en" ? "pt" : "en")}
              className="inline-flex rounded-lg border-2 border-white/15 px-3 py-2 text-sm font-bold transition hover:border-emerald-400/50"
            >
              {locale === "en" ? "PT" : "EN"}
            </NavLink>
          </div>
          <div className="hidden items-center justify-center gap-7 md:flex">
            {navigation()}
          </div>
          <div className="flex justify-end gap-2">
            <div className="hidden md:block">
              <Button
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.reach")}
              </Button>
            </div>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? t("nav.close") : t("nav.menu")}
              onClick={() => setOpen(!open)}
              className="icon-button md:hidden"
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </nav>
      </Container>
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-zinc-950 px-6 py-6 md:hidden"
        >
          <nav
            aria-label={t("nav.mobileNavigationLabel")}
            className="flex flex-col gap-5"
          >
            {navigation(true)}
            <Button
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("nav.reach")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex h-16 items-center justify-between"
        >
          <NavLink
            to={localizedPath("/", locale)}
            className="font-bold tracking-tight"
          >
            Bernardo <span className="text-emerald-400">Lomas</span>
          </NavLink>
          <div className="hidden items-center gap-6 md:flex">{nav}</div>
          <div className="flex items-center gap-3">
            <NavLink
              aria-label={t("nav.language")}
              to={localizedPath(pathname, locale === "en" ? "pt" : "en")}
              className="rounded-lg border border-white/15 px-3 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
            >
              {locale === "en" ? "PT" : "EN"}
            </NavLink>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black sm:inline-flex"
            >
              {t("nav.reach")}
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? t("nav.close") : t("nav.menu")}
              onClick={() => setOpen(!open)}
              className="rounded p-2 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 md:hidden"
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </nav>
      </Container>
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-zinc-950 px-6 py-6 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-5">
            {nav}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-400"
            >
              {t("nav.reach")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
