import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./public/locales/en.json";
import translationTR from "./public/locales/tr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
