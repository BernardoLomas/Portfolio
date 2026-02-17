import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function Seo({
  title,
  description,
  image = "https://bernardolomas.dev/og.png",
  url,
}: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);
  const pageUrl =
    url ??
    (typeof window !== "undefined"
      ? window.location.href
      : "https://bernardolomas.dev");

  const fullTitle = `${title} | Bernardo Lomas`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:locale" content={lang === "pt" ? "pt_BR" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
