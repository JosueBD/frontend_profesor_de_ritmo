import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Api from "./componentes/Api";
import Editor from "./componentes/EditorPartitura";
import Generador from "./componentes/Generador"; // O RitmoGenerador si prefieres
import Inicio from "./componentes/Inicio"; // O BienvenidaAnimada si tienes animación
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <nav className="p-4 flex flex-wrap gap-4 bg-gray-100 justify-center text-sm md:text-base">
        <Link to="/">{t("inicio") || "🏠 Inicio"}</Link>
        <Link to="/editor">🎼 {t("editor") || "Editor"}</Link>
        <Link to="/api">📚 {t("api") || "API"}</Link>
        <Link to="/generador">🥁 {t("generador") || "Generador"}</Link>
        <button onClick={() => cambiarIdioma("es")}>Español</button>
        <button onClick={() => cambiarIdioma("en")}>English</button>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/generador" element={<Generador />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
