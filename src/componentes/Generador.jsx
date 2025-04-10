import React from "react";
import { useTranslation } from "react-i18next";

const Generador = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 px-4">
      <h1 className="text-3xl font-bold">
        {t("ritmo_titulo") || "Generador de Ritmos"}
      </h1>
      <p className="text-white/80 text-lg">
        {t("ritmo_subtitulo") || "Crea, reproduce y exporta tus propios patrones rítmicos."}
      </p>

      <div className="flex gap-4">
        <button className="bg-green-500 text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition">
          ▶️ {t("boton_play") || "Reproducir"}
        </button>
        <button className="bg-red-500 text-white font-bold px-6 py-2 rounded-full hover:scale-105 transition">
          ⏹️ {t("boton_stop") || "Detener"}
        </button>
        <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-full hover:scale-105 transition">
          💾 {t("boton_exportar_wav") || "Exportar como WAV"}
        </button>
      </div>
    </div>
  );
};

export default Generador;
