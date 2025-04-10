import React from "react";
import { useTranslation } from "react-i18next";

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4 px-4">
      <h1 className="text-4xl font-bold">
        {t("bienvenido_titulo") || "Bienvenido a Profesor de Ritmo"}
      </h1>
      <p className="text-white/80 text-lg">
        {t("bienvenido_subtitulo") || "Tu IA generativa para dominar el ritmo musical."}
      </p>
    </div>
  );
};

export default Inicio;
