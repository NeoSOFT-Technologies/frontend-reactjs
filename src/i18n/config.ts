import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hindi from "./locales/hi/translations.json";
import english from "./locales/en/translations.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: english,
    },
    hi: {
      translations: hindi,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "hi"];

export { default } from "i18next";
