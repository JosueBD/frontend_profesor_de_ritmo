// src/componentes/PartituraViewer.jsx

import React, { useEffect, useRef } from "react";
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

const PartituraViewer = ({ musicXML }) => {
  const containerRef = useRef(null);
  const osmdRef = useRef(null);

  useEffect(() => {
    if (musicXML && containerRef.current) {
      if (!osmdRef.current) {
        osmdRef.current = new OpenSheetMusicDisplay(containerRef.current, {
          autoResize: true,
          drawTitle: false,
          drawPartNames: false,
        });
      }

      osmdRef.current
        .load(musicXML)
        .then(() => osmdRef.current.render())
        .catch((err) => console.error("Error al renderizar partitura:", err));
    }
  }, [musicXML]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[280px] overflow-x-auto"
      style={{ backgroundColor: "#ffffff", padding: "1rem", borderRadius: "0.5rem" }}
    />
  );
};

export default PartituraViewer;
