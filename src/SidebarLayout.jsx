import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const VistaPrincipal = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 text-center">
      {/* Logo ya presente en SidebarLayout */}

      {/* Bienvenida breve */}
      <div className="max-w-2xl space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
          {t("bienvenido_titulo") || "Bienvenido a Profesor de Ritmo"}
        </h1>
        <p className="text-lg md:text-xl text-white/80">
          {t("bienvenido_subtitulo") || "Tu IA generativa para dominar el ritmo musical."}
        </p>
      </div>

      {/* Separador estético */}
      <hr className="border-t border-white/30 w-48 my-6" />

      {/* Botones de navegación principales */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/grabacion"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 text-black font-bold shadow-lg hover:scale-105 transform transition"
        >
          🎙️ {t("boton_grabacion") || "Empezar Grabación"}
        </Link>

        <Link
          to="/editor"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transform transition"
        >
          🎼 {t("boton_editor") || "Abrir Editor"}
        </Link>

        <Link
          to="/api"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 text-black font-bold shadow-lg hover:scale-105 transform transition"
        >
          📚 {t("boton_api") || "Acceder a la API"}
        </Link>
      </div>
    </div>
  );
};

export default VistaPrincipal;
