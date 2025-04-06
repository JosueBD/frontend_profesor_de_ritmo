import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Carga archivos desde public/locales
  .use(LanguageDetector) // Detecta idioma automáticamente
  .use(initReactI18next)
  .init({
    fallbackLng: "es", // Idioma por defecto
    debug: false,
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
