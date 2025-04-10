import React from "react";
import { useTranslation } from "react-i18next";

const Api = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      <h1 className="text-3xl font-bold">
        {t("api_titulo") || "Acceso a la API"}
      </h1>
      <p className="text-white/80">
        {t("api_subtitulo") || "Integra la IA generativa en tus propias apps musicales."}
      </p>

      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-black font-bold hover:scale-105 transition">
        🔗 {t("boton_documentacion_api") || "Ver documentación"}
      </button>
    </div>
  );
};

export default Api;
