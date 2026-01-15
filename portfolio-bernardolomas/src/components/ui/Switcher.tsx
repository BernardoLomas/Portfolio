import i18n from "../../i18n";

export default function LanguageSwitcher() {
  const currentLanguage = i18n.language.slice(0, 2);

  const changeLanguage = (lng: "en" | "pt") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      <button
        onClick={() => changeLanguage("en")}
        className={`transition ${
          currentLanguage === "en"
            ? "text-emerald-400"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        EN
      </button>

      <span className="text-zinc-500">|</span>

      <button
        onClick={() => changeLanguage("pt")}
        className={`transition ${
          currentLanguage === "pt"
            ? "text-emerald-400"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        PT
      </button>
    </div>
  );
}
