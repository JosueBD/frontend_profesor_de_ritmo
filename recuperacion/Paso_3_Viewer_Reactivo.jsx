import React, { useEffect, useRef } from "react";
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

const PartituraViewer = ({ musicXML }) => {
  const container = useRef(null);
  const osmd = useRef(null);

  useEffect(() => {
    if (musicXML && container.current) {
      if (!osmd.current) {
        osmd.current = new OpenSheetMusicDisplay(container.current, { autoResize: true });
      }
      osmd.current.load(musicXML).then(() => osmd.current.render());
    }
  }, [musicXML]);

  return <div ref={container} style={{ background: "#fff", padding: "1rem" }} />;
};

export default PartituraViewer;
