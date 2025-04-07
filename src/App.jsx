import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./vistas/VistaPrincipal";
import Grabacion from "./vistas/Grabacion";
import Editor from "./vistas/Editor";
import Api from "./vistas/Api";
import Ritmo from "./vistas/Ritmo";
import SidebarLayout from "./layouts/SidebarLayout";
import "./i18n";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <SidebarLayout>
          <Routes>
            <Route path="/" element={<VistaPrincipal />} />
            <Route path="/grabacion" element={<Grabacion />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/api" element={<Api />} />
            <Route path="/ritmo" element={<Ritmo />} />
          </Routes>
        </SidebarLayout>
      </Router>
    </Suspense>
  );
}

export default App;
