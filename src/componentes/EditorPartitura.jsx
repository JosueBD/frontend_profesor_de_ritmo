import React, { useState } from "react";
import PartituraViewer from "../components/PartituraViewer";

const EditorPartitura = () => {
  const [musicXML, setMusicXML] = useState("");

  const generarPartitura = async () => {
    try {
      const texto = "C4 D4 E4 F4"; // Puedes adaptar este texto desde un input si quieres
      const res = await fetch(`https://motores-para-profesor-de-ritmo.onrender.com/escribir_musica?texto=${encodeURIComponent(texto)}`, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`Error en la respuesta del servidor: ${res.statusText}`);
      }

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
