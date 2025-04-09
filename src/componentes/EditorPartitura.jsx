import React, { useState } from "react";
import PartituraViewer from "../components/PartituraViewer";

const EditorPartitura = () => {
  const [musicXML, setMusicXML] = useState("");

  const generarPartitura = async () => {
    try {
      const res = await fetch("https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notas: ["C4", "D4", "E4", "F4"] }),
      });

      const xml = await res.text();
      setMusicXML(xml);
    } catch (err) {
      console.error("Error al generar partitura:", err);
    }
  };

  return (
    <div>
      <button onClick={generarPartitura}>🎶 Generar Partitura</button>
      <PartituraViewer musicXML={musicXML} />
    </div>
  );
};

export default EditorPartitura;
