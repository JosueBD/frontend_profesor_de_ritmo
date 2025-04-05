import React, { useEffect, useRef, useState } from "react";
import Vex from "vexflow";

export default function EditorPartitura() {
  const containerRef = useRef(null);
  const [clave, setClave] = useState("treble");
  const [compas, setCompas] = useState("4/4");
  const [notas, setNotas] = useState("C4/q D4/q E4/q F4/q");

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = ""; // Limpiar antes de renderizar

    const VF = Vex.Flow;
    const renderer = new VF.Renderer(containerRef.current, VF.Renderer.Backends.SVG);

    renderer.resize(500, 200);
    const context = renderer.getContext();
    context.setFont("Arial", 10);

    const stave = new VF.Stave(10, 40, 400);
    stave.addClef(clave).addTimeSignature(compas);
    stave.setContext(context).draw();

    const notes = notas.split(" ").map((n) => VF.FlowParser.parseNoteData(n));
    const staveNotes = notes.map((data) => new VF.StaveNote(data));

    VF.Formatter.FormatAndDraw(context, stave, staveNotes);
  }, [clave, compas, notas]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🎼 Editor de Partitura (Estilo MuseScore)</h2>
      <div className="flex gap-4">
        <label>
          Clave:
          <select value={clave} onChange={(e) => setClave(e.target.value)} className="ml-2 border px-2 py-1">
            <option value="treble">Sol (𝄞)</option>
            <option value="bass">Fa (𝄢)</option>
          </select>
        </label>
        <label>
          Compás:
          <input
            value={compas}
            onChange={(e) => setCompas(e.target.value)}
            className="ml-2 border px-2 py-1 w-20"
            placeholder="4/4"
          />
        </label>
        <label>
          Notas:
          <input
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            className="ml-2 border px-2 py-1 w-64"
            placeholder="C4/q D4/q"
          />
        </label>
      </div>
      <div ref={containerRef} className="border rounded-lg p-4 bg-white shadow-md"></div>
    </div>
  );
}
