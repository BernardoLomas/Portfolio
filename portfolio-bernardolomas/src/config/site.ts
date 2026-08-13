export const SITE_URL = "https://bernardolomasdev.com.br";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/bernardolomas/",
  github: "https://github.com/BernardoLomas",
  email: "mailto:bernardo.lomasb@gmail.com",
  resume: "/cv/Currículo-BernardoLomas.pdf",
} as const;

export const localizedPath = (path: string, locale: "en" | "pt") => {
  const englishPath = path.replace(/^\/pt(?=\/|$)/, "") || "/";
  return locale === "pt"
    ? englishPath === "/"
      ? "/pt"
      : `/pt${englishPath}`
    : englishPath;
};
