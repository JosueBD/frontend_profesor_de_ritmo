import React from "react";
import { Routes, Route } from "react-router-dom";

// 👇 Asegúrate que estas rutas coincidan con los nombres de archivo
import VistaPrincipal from "./vistas/VistaPrincipal";
import Editor from "./vistas/Editor";
import Api from "./vistas/Api";
import Ritmo from "./vistas/Ritmo";
import VistaGrabacionAudio from "./VistaGrabacionAudio"; // si no está en /vistas

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<VistaPrincipal />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/api" element={<Api />} />
      <Route path="/ritmo" element={<Ritmo />} />
      <Route path="/grabacion" element={<VistaGrabacionAudio />} />
    </Routes>
  );
};

export default App;
