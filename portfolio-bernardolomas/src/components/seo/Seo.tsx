import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  description: string;
};

export default function Seo({ title, description }: Props) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("language", i18n.language);
  }, [title, description, i18n.language]);

  return null;
}
