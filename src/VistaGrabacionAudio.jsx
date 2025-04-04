import React, { useState } from "react";

export default function VistaGrabacionAudio() {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!audioFile) return;
    const formData = new FormData();
    formData.append("file", audioFile);

    fetch("https://motores-para-profesor-de-ritmo.onrender.com/analizar_wav", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => alert("🎧 Análisis completado:\n" + JSON.stringify(data, null, 2)))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-center">🎙️ Grabación y análisis de audio</h2>
      <input type="file" accept="audio/wav" onChange={handleFileChange} className="w-full p-2 border rounded" />
      <button
        onClick={handleUpload}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
      >
        📥 Subir y analizar WAV
      </button>
    </div>
  );
}
