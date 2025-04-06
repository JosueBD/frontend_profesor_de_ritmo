import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function SidebarLayout({ children }) {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen flex relative">

      {/* Fondo visual */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/fondo_interactivo.png')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
      </div>

      {/* Sidebar */}
      <aside className="relative z-10 w-64 bg-white bg-opacity-80 backdrop-blur-md shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Profesor de Ritmo</h2>

        <nav className="space-y-4 text-blue-800">
          <Link to="inicio" smooth className="block cursor-pointer hover:underline">🏠 Inicio</Link>
          <Link to="grabacion" smooth className="block cursor-pointer hover:underline">🎙️ Grabación</Link>
          <Link to="editor" smooth className="block cursor-pointer hover:underline">🎼 Editor de Partitura</Link>
          <a
            href="https://motores-para-profesor-de-ritmo.onrender.com/docs"
            target="_blank"
            className="block hover:underline"
          >
            📚 Documentación API
          </a>
        </nav>

        {/* Selector de idioma */}
        <div className="flex justify-center gap-4 mt-10 text-2xl">
          <button onClick={() => i18n.changeLanguage("es")}>🇪🇸</button>
          <button onClick={() => i18n.changeLanguage("en")}>🇺🇸</button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="relative z-10 flex-1 p-8 text-white space-y-10">
        {children}
      </main>
    </div>
  );
}
