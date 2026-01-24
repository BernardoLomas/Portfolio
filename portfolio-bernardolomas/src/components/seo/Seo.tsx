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
  image = "/og-image.png",
  url = "https://bernardolomas.dev"
}: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const fullTitle = `${title} | Bernardo Lomas`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={`${url}/en`} />
      <link rel="alternate" hrefLang="pt" href={`${url}/pt`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === "pt" ? "pt_BR" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
