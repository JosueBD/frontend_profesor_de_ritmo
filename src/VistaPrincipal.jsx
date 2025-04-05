import React from "react";
import logo from "../public/logo_profesor_de_ritmo.png"; // Asegúrate de que esté en /public/

// Dentro del return de VistaPrincipal:
<img
  src={logo}
  alt="Logo Profesor de Ritmo"
  className="mx-auto w-32 h-auto mb-4 rounded-full shadow"
/>


export default function VistaPrincipal() {
  return (
    <div className="w-full max-w-4xl space-y-4 mt-8">
      <h2 className="text-2xl font-semibold text-center">🎼 Acciones principales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <a
          href="https://motores-para-profesor-de-ritmo.onrender.com/docs#/default/escribir_musica_escribir_musica_get"
          target="_blank"
          className="block p-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-center font-medium"
        >
          🎵 Escribir partitura
        </a>
        <a
          href="https://motores-para-profesor-de-ritmo.onrender.com/docs#/default/generar_ritmo_generar_ritmo_get"
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
    </div>
  );
}
