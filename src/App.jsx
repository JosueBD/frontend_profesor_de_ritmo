import React from "react";
import BienvenidaAnimada from "./BienvenidaAnimada";
import VistaPrincipal from "./VistaPrincipal";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <BienvenidaAnimada />
      <h1 className="text-3xl font-bold mt-6">Profesor de Ritmo</h1>
      <p className="text-center text-lg max-w-xl mt-2 mb-6">
        Una IA generativa musical que enseña, escucha y crea contigo.
      </p>
      <VistaPrincipal />
    </div>
  );
}
