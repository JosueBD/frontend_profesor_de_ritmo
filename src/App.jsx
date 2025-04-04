import React from "react";
import BienvenidaAnimada from "./BienvenidaAnimada";
import VistaPrincipal from "./VistaPrincipal";
import VistaGrabacionAudio from "./VistaGrabacionAudio";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-10">
      <header className="text-center">
        <BienvenidaAnimada />
        <h1 className="text-4xl font-bold mt-4">Profesor de Ritmo</h1>
        <p className="text-lg mt-2">
          Una IA generativa musical que enseña, escucha y crea contigo.
        </p>
      </header>

      <main className="space-y-10">
        <VistaPrincipal />
        <VistaGrabacionAudio />
      </main>
    </div>
  );
}

