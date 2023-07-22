import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translations: {
          "Sobre": "Sobre",
          "Contato": "Contato",
        }
      },
      en: {
        translations: {
          "Sobre": "About",
          "Contato": "Contact",
        }
      }
    },
    fallbackLng: "pt",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
