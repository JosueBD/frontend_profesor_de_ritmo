import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function SidebarLayout({ children }) {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen flex relative">
      {/* Fondo visual */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/fondo_interactivo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Capa oscura para legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

      {/* Sidebar */}
      <aside className="relative z-10 w-64 bg-white bg-opacity-80 backdrop-blur-md shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Profesor de Ritmo</h2>
        <nav className="space-y-4">
          <Link to="inicio" smooth className="block cursor-pointer text-blue-800 hover:underline">
            🏠 Inicio
          </Link>
          <Link to="grabacion" smooth className="block cursor-pointer text-blue-800 hover:underline">
            🎙️ Grabación
          </Link>
          <Link to="editor" smooth className="block cursor-pointer text-blue-800 hover:underline">
            🎼 Editor
          </Link>
          <a
            href="https://motores-para-profesor-de-ritmo.onrender.com/docs"
            target="_blank"
            className="block text-blue-800 hover:underline"
          >
            📚 API
          </a>
        </nav>

        {/* Selector de idioma */}
        <div className="flex justify-center gap-4 mt-10">
          <button onClick={() => i18n.changeLanguage("es")}>🇪🇸</button>
          <button onClick={() => i18n.changeLanguage("en")}>🇺🇸</button>
        </div>
      </aside>

      {/* Contenido */}
      <main className="flex-1 relative z-10 p-8 text-white space-y-10">
        {children}
      </main>
    </div>
  );
}
