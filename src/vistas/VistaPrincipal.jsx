import React from "react";
import logo from "/logo_profesor_de_ritmo_final.png";
import { Link } from "react-router-dom";

export default function VistaPrincipal() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
         style={{ backgroundImage: "url('/fondo_interactivo.png')" }}>
      <div className="max-w-5xl w-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl text-white space-y-6">

        {/* Logo y encabezado */}
        <header className="text-center">
          <img
            src={logo}
            alt="Logo Profesor de Ritmo"
            className="mx-auto w-28 h-auto rounded-full shadow-md mb-4"
          />
          <h2 className="text-3xl font-bold">Profesor de Ritmo</h2>
          <p className="text-white/80 text-lg mt-2">
            Una IA generativa musical que enseña, escucha y crea contigo.
          </p>
        </header>

        {/* Acciones */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-4">🎼 Acciones principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/editor"
              className="block p-4 bg-blue-500/30 hover:bg-blue-500/50 rounded-lg text-center font-medium"
            >
              🎵 Escribir partitura
            </Link>
            <Link
              to="/ritmo"
              className="block p-4 bg-green-500/30 hover:bg-green-500/50 rounded-lg text-center font-medium"
            >
              🥁 Generar ritmo
            </Link>
            <a
              href="https://motores-para-profesor-de-ritmo.onrender.com/docs#/default/analizar_midi_analizar_midi_post"
              target="_blank"
              className="block p-4 bg-yellow-500/30 hover:bg-yellow-500/50 rounded-lg text-center font-medium"
            >
              📊 Analizar MIDI
            </a>
            <a
              href="https://motores-para-profesor-de-ritmo.onrender.com/docs#/default/analizar_wav_analizar_wav_post"
              target="_blank"
              className="block p-4 bg-red-500/30 hover:bg-red-500/50 rounded-lg text-center font-medium"
            >
              🔊 Analizar WAV
            </a>
            <a
              href="https://motores-para-profesor-de-ritmo.onrender.com/docs#/default/comparar_ritmos_comparar_ritmos_post"
              target="_blank"
              className="block p-4 bg-purple-500/30 hover:bg-purple-500/50 rounded-lg text-center font-medium"
            >
              🎯 Comparar ritmos
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} Josué Borges Díaz – Proyecto educativo sin fines de lucro.
        </footer>
      </div>
    </div>
  );
}
