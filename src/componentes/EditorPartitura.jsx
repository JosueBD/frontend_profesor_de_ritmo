import React, { useState } from "react";

export default function EditorPartitura() {
  const [clave, setClave] = useState("G");
  const [compas, setCompas] = useState("2/4");
  const [notas, setNotas] = useState("C4 D4 E4 F4 G4 A4 B4 C5");
  const [mostrarNombres, setMostrarNombres] = useState(true);
  const [colorear, setColorear] = useState(true);
  const [imagenURL, setImagenURL] = useState(null);

  const handleGenerar = async () => {
    const query = new URLSearchParams({
      texto: notas,
      compas,
      clave,
      formato: "png",
      nombres: mostrarNombres ? "1" : "0",
      colores: colorear ? "1" : "0",
    });

    const url = `https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica?${query.toString()}`;
    setImagenURL(url);
  };

  const handleExportar = (formato) => {
    const query = new URLSearchParams({
      texto: notas,
      compas,
      clave,
      formato,
      nombres: mostrarNombres ? "1" : "0",
      colores: colorear ? "1" : "0",
    });

    window.open(`https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica?${query.toString()}`, "_blank");
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md max-w-4xl w-full mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">🎼 Editor de Partitura</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium">Clave:</label>
          <select
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            className="w-full mt-1 p-2 rounded border bg-white text-black"
          >
            <option value="G">Sol (𝄞)</option>
            <option value="F">Fa (𝄢)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Compás:</label>
          <input
            type="text"
            value={compas}
            onChange={(e) => setCompas(e.target.value)}
            className="w-full mt-1 p-2 rounded border text-black"
            placeholder="Ej: 4/4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Notas:</label>
          <input
            type="text"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            className="w-full mt-1 p-2 rounded border text-black"
            placeholder="Ej: C4 D4 E4 F4"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={mostrarNombres}
            onChange={() => setMostrarNombres(!mostrarNombres)}
          />
          Mostrar nombres
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={colorear}
            onChange={() => setColorear(!colorear)}
          />
          Colorear notas
        </label>

        <button
          onClick={handleGenerar}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🎶 Generar Partitura
        </button>
      </div>

      {imagenURL && (
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold mb-2">Vista de la Partitura:</h3>
          <img
            src={imagenURL}
            alt="Partitura generada"
            className="mx-auto rounded border shadow"
          />
        </div>
      )}

      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleExportar("pdf")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          📄 Exportar PDF
        </button>
        <button
          onClick={() => handleExportar("midi")}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          🎵 Exportar MIDI
        </button>
        <button
          onClick={() => handleExportar("wav")}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          🔊 Exportar WAV
        </button>
      </div>
    </div>
  );
}
