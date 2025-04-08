import React from "react";
import { Routes, Route } from "react-router-dom"; // ⬅️ FALTA ESTO
import SidebarLayout from "./layouts/SidebarLayout";

import VistaPrincipal from "./vistas/VistaPrincipal";
import Editor from "./vistas/Editor";
import Api from "./vistas/Api";
import Ritmo from "./vistas/Ritmo";
import VistaGrabacionAudio from "./VistaGrabacionAudio";

function App() {
  return (
    <SidebarLayout>
      <Routes>
        <Route path="/" element={<VistaPrincipal />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/api" element={<Api />} />
        <Route path="/grabacion" element={<VistaGrabacionAudio />} />
        <Route path="/ritmo" element={<Ritmo />} />
      </Routes>
    </SidebarLayout>
  );
}

export default App;
