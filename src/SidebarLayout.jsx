import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import esFlag from "../assets/es.svg";
import usFlag from "../assets/us.svg";

const SidebarLayout = ({ children }) => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-64 p-6 bg-white/20 backdrop-blur-lg shadow-xl flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="text-3xl font-extrabold text-center text-black drop-shadow mb-8">
            Profesor de Ritmo
          </div>

          {/* Navegación */}
          <nav className="space-y-4">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-full text-center font-semibold ${
                location.pathname === "/" ? "bg-white text-black" : "hover:bg-white/30"
              }`}
            >
              🏠 Inicio
            </Link>
            <Link
              to="/grabacion"
              className={`block px-4 py-2 rounded-full text-center font-semibold ${
                location.pathname === "/grabacion" ? "bg-white text-black" : "hover:bg-white/30"
              }`}
            >
              🎙️ Grabación
            </Link>
            <Link
              to="/editor"
              className={`block px-4 py-2 rounded-full text-center font-semibold ${
                location.pathname === "/editor" ? "bg-white text-black" : "hover:bg-white/30"
              }`}
            >
              🎼 Editor
            </Link>
            <Link
              to="/api"
              className={`block px-4 py-2 rounded-full text-center font-semibold ${
                location.pathname === "/api" ? "bg-white text-black" : "hover:bg-white/30"
              }`}
            >
              📚 API
            </Link>
          </nav>
        </div>

        {/* Selector de idioma */}
        <div className="flex justify-center space-x-4 mt-8">
          <button onClick={() => changeLanguage("es")} aria-label="Español">
            <img src={esFlag} alt="Español" className="w-6 h-6" />
          </button>
          <button onClick={() => changeLanguage("en")} aria-label="English">
            <img src={usFlag} alt="English" className="w-6 h-6" />
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
};

export default SidebarLayout;
