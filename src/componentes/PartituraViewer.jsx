// src/components/PartituraViewer.jsx
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
        });
      }
      osmdRef.current
        .load(musicXML)
        .then(() => osmdRef.current.render())
        .catch((err) => console.error("Error al renderizar:", err));
    }
  }, [musicXML]);

  return <div ref={containerRef} style={{ width: "100%" }} />;
};

export default PartituraViewer;
