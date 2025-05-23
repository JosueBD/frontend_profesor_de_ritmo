import React, { useState } from "react";
import PartituraViewer from "./PartituraViewer";

const EditorPartitura = () => {
  const [notas, setNotas] = useState("C4 D4 E4 F4");
  const [musicXML, setMusicXML] = useState("");
  const [error, setError] = useState(null);

  const generarPartitura = async () => {
    try {
      setError(null);

      const res = await fetch("https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ texto: notas })
      });

      if (!res.ok) {
        throw new Error("Error del servidor al generar la partitura.");
      }

      const xml = await res.text();

      // ✅ Validación más segura: evitar XML incompleto o inválido
      if (!xml || xml.length < 200 || !xml.includes("<score-partwise")) {
        throw new Error("La partitura generada no es válida o está incompleta.");
      }

      setMusicXML(xml);
    } catch (err) {
      setError(err.message);
      setMusicXML(""); // Limpia la visualización si falla
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">🎼 Editor de Partitura</h2>

      {/* Entrada para notas */}
      <input
        type="text"
        value={notas}
        onChange={(e) => setNotas(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Escribe las notas aquí (ej: C4 D4 E4)"
      />

      <button onClick={generarPartitura} className="bg-blue-600 text-white px-4 py-2 rounded">
        🎶 Generar Partitura
      </button>

      {/* Mensaje de error si ocurre */}
      {error && (
        <div className="text-red-500 text-center mt-2">
          ⚠️ {error}
        </div>
      )}

      {/* Visualización del pentagrama */}
      <div className="bg-white rounded shadow p-4 min-h-[300px]">
        <PartituraViewer musicXML={musicXML} />
      </div>
    </div>
  );
};

export default EditorPartitura;
