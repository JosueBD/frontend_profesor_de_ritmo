import React from "react";
import logo from "/logo_profesor_de_ritmo_final.png"; // Ruta pública

export default function VistaPrincipal() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Encabezado */}
      <header className="text-center mb-6">
        <img src={logo} alt="Logo Profesor de Ritmo" className="mx-auto w-28 h-auto rounded-full shadow-md mb-4" />
        <h2 className="text-3xl font-bold">Profesor de Ritmo</h2>
        <p className="text-gray-600 text-lg mt-2">Una IA generativa musical que enseña, escucha y crea contigo.</p>
      </header>

      {/* Acciones */}
      <section>
        <h3 className="text-2xl font-semibold text-center mb-4">🎼 Acciones principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica?formato=png&texto=C4 D4 E4&clave=G&compas=2/4"
            target="_blank"
            className="block p-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-center font-medium"
          >
            🎵 Escribir partitura
          </a>
          <a
            href="https://motores-para-profesor-de-ritmo.onrender.com/generar_ritmo"
            target="_blank"
            className="block p-4 bg-green-100 hover:bg-green-200 rounded-lg text-center font-medium"
          >
            🥁 Generar ritmo
          </a>
          <a
            href="https://motores-para-profesor-de-ritmo.onrender.com/docs#/default/analizar_midi_analizar_midi_post"
            target="_blank"
            className="block p-4 bg-yellow-100 hover:bg-yellow-200 rounded-lg text-center font-medium"
          >
            📊 Analizar MIDI
          </a>
          <a
            href="https://motores-para-profesor-de-ritmo.onrender.com/docs#/default/analizar_wav_analizar_wav_post"
            target="_blank"
            className="block p-4 bg-red-100 hover:bg-red-200 rounded-lg text-center font-medium"
          >
            🔊 Analizar WAV
          </a>
          <a
            href="https://motores-para-profesor-de-ritmo.onrender.com/docs#/default/comparar_ritmos_comparar_ritmos_post"
            target="_blank"
            className="block p-4 bg-purple-100 hover:bg-purple-200 rounded-lg text-center font-medium"
          >
            🎯 Comparar ritmos
          </a>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Josué Borges Díaz – Proyecto educativo sin fines de lucro.
      </footer>
    </div>
  );
}
