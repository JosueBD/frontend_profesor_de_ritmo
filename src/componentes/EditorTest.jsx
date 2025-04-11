import React, { useState } from "react";

const EditorTest = () => {
  const [notas, setNotas] = useState("C4 D4 E4 F4");
  const [respuesta, setRespuesta] = useState("");
  const [error, setError] = useState(null);

  const probarFetch = async () => {
    try {
      setError(null);
      setRespuesta("Cargando...");

      const res = await fetch("https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: notas })
      });

      const texto = await res.text();

      if (!res.ok || !texto.includes("<score-partwise")) {
        throw new Error("Respuesta inválida o incompleta");
      }

      setRespuesta(texto);
    } catch (err) {
      setError(err.message);
      setRespuesta("");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-center">🧪 Prueba directa de generación</h2>

      <input
        value={notas}
        onChange={(e) => setNotas(e.target.value)}
        className="border border-gray-400 p-2 w-full rounded"
        placeholder="Ej: C4 D4 E4"
      />

      <button onClick={probarFetch} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Probar conexión con backend
      </button>

      {error && <p className="text-red-500 text-center">❌ {error}</p>}
      {respuesta && (
        <pre className="bg-gray-100 p-2 overflow-x-auto max-h-[300px] text-sm">
          {respuesta}
        </pre>
      )}
    </div>
  );
};

export default EditorTest;
