import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Seo from "../../components/seo/Seo";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { useLocale } from "../../hooks/useLocale";
import { localizedPath } from "../../config/site";
export default function NotFound() {
  const { t } = useTranslation();
  const locale = useLocale();
  return (
    <>
      <Seo
        title={`${t("notFound.title")} | Bernardo Lomas`}
        description={t("notFound.description")}
        path="/404"
        robots="noindex, follow"
      />
      <Section variant="first">
        <Container>
          <div className="mx-auto max-w-xl py-20 text-center">
            <p className="text-emerald-400">404</p>
            <h1 className="mt-3 text-4xl font-bold">{t("notFound.title")}</h1>
            <p className="mt-4 text-zinc-300">{t("notFound.description")}</p>
            <Link
              to={localizedPath("/", locale)}
              className="mt-7 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-black"
            >
              {t("notFound.home")}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
