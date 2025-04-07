import React from "react";
import { useTranslation } from "react-i18next";

const Editor = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      <h1 className="text-3xl font-bold">
        {t("editor_titulo") || "Editor de Ritmos"}
      </h1>
      <p className="text-white/80">
        {t("editor_subtitulo") || "Edita tus ritmos en una interfaz visual."}
      </p>

      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-blue-600 text-white font-bold shadow hover:scale-105 transition">
        ✏️ {t("boton_abrir_editor") || "Abrir Editor"}
      </button>
    </div>
  );
};

export default Editor;
