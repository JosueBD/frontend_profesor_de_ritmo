import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Carga los archivos desde /public/locales/{lng}/translation.json
  .use(LanguageDetector) // Detecta idioma del navegador automáticamente
  .use(initReactI18next) // Integración con React
  .init({
    fallbackLng: "es", // Idioma por defecto si no detecta
    debug: false,
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
