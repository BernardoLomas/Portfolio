import i18 from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en/common.json"
import pt from "./locales/pt/common.json"

const savedLanguage = localStorage.getItem("language") || "en";

i18
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            pt: { translation: pt },
        },
        lng: savedLanguage,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        }
    });

export default i18;