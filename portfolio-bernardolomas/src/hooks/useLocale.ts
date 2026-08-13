import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import i18n from "../i18n";
import type { Locale } from "../data/projects";

export function useLocale(): Locale {
  const { pathname } = useLocation();
  const locale: Locale = /^\/pt(?:\/|$)/.test(pathname) ? "pt" : "en";
  useEffect(() => {
    void i18n.changeLanguage(locale);
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    localStorage.setItem("language", locale);
  }, [locale]);
  return locale;
}
