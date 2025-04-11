import React, { useState } from "react";

const FormularioBasico = () => {
  const [notas, setNotas] = useState("C4 D4 E4 F4");
  const [xml, setXml] = useState("");
  const [error, setError] = useState("");

  const generar = async () => {
    try {
      setError("Cargando...");
      const res = await fetch("https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: notas })
      });
      const data = await res.text();
      if (!data.includes("<score-partwise")) throw new Error("Respuesta inválida");
      setXml(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <input value={notas} onChange={(e) => setNotas(e.target.value)} className="border p-2" />
      <button onClick={generar} className="bg-blue-500 text-white p-2 ml-2">Generar</button>
      {error && <p className="text-red-500">{error}</p>}
      <pre className="text-sm mt-4">{xml}</pre>
    </div>
  );
};

export default FormularioBasico;
