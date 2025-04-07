import React from "react";
import { useTranslation } from "react-i18next";
import EditorPartitura from "../componentes/EditorPartitura";

const Editor = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 px-4">
      <h1 className="text-3xl font-bold">
        {t("editor_titulo") || "Editor de Ritmos"}
      </h1>
      <p className="text-white/80 mb-4">
        {t("editor_subtitulo") || "Edita tus ritmos en una interfaz visual."}
      </p>

      <EditorPartitura />
    </div>
  );
};

export default Editor;
