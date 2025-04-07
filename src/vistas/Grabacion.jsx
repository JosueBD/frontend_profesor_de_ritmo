import React from "react";
import { useTranslation } from "react-i18next";

const Grabacion = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      <h1 className="text-3xl font-bold">
        {t("grabacion_titulo") || "Grabación en vivo"}
      </h1>
      <p className="text-white/80">
        {t("grabacion_subtitulo") || "Usa tu micrófono para grabar ritmo o voz."}
      </p>

      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold hover:scale-105 transition">
        🎤 {t("boton_iniciar_grabacion") || "Iniciar Grabación"}
      </button>
    </div>
  );
};

export default Grabacion;
