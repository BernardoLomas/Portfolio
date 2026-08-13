import { Helmet } from "react-helmet-async";
import { SITE_URL, localizedPath } from "../../config/site";
import { useLocale } from "../../hooks/useLocale";

type Props = {
  title: string;
  description: string;
  path: string;
  image?: string;
  robots?: string;
  jsonLd?: Record<string, unknown>;
};
export default function Seo({
  title,
  description,
  path,
  image = `${SITE_URL}/og.png`,
  robots = "index, follow",
  jsonLd,
}: Props) {
  const locale = useLocale();
  const canonical = `${SITE_URL}${localizedPath(path, locale)}`;
  const en = `${SITE_URL}${localizedPath(path, "en")}`;
  const pt = `${SITE_URL}${localizedPath(path, "pt")}`;
  return (
    <Helmet>
      <html lang={locale === "pt" ? "pt-BR" : "en"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={en} />
      <link rel="alternate" hrefLang="pt-BR" href={pt} />
      <link rel="alternate" hrefLang="x-default" href={en} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:locale"
        content={locale === "pt" ? "pt_BR" : "en_US"}
      />
      <meta
        property="og:locale:alternate"
        content={locale === "pt" ? "en_US" : "pt_BR"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
