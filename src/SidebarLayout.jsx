import React from "react";
import { useState } from "react";
import logo from "../public/logo_profesor_de_ritmo_final.png";

export default function SidebarLayout({ children, onNavigate }) {
  const [active, setActive] = useState("inicio");

  const handleNav = (view) => {
    setActive(view);
    onNavigate(view);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col items-center">
        <img
          src={logo}
          alt="Profesor de Ritmo"
          className="w-24 h-24 mb-4 rounded-full"
        />
        <h1 className="text-xl font-bold text-center mb-6">Profesor de Ritmo</h1>

        <nav className="flex flex-col w-full space-y-2">
          <button
            className={`py-2 px-4 rounded text-left ${
              active === "inicio" ? "bg-blue-200 font-semibold" : "hover:bg-gray-200"
            }`}
            onClick={() => handleNav("inicio")}
          >
            🏠 Inicio
          </button>
          <button
            className={`py-2 px-4 rounded text-left ${
              active === "grabacion" ? "bg-blue-200 font-semibold" : "hover:bg-gray-200"
            }`}
            onClick={() => handleNav("grabacion")}
          >
            🎙️ Grabación
          </button>
          <button
            className={`py-2 px-4 rounded text-left ${
              active === "partitura" ? "bg-blue-200 font-semibold" : "hover:bg-gray-200"
            }`}
            onClick={() => handleNav("partitura")}
          >
            🎼 Editor de Partitura
          </button>
          <a
            href="https://motores-para-profesor-de-ritmo.onrender.com/docs"
            target="_blank"
            className="py-2 px-4 rounded hover:bg-gray-200 text-left"
          >
            📚 Documentación API
          </a>
        </nav>
      </aside>

      {/* Contenido dinámico */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
