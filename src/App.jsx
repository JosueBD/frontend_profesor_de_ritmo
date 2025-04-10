import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EditorPartitura from "./componentes/EditorPartitura";
import Generador from "./componentes/Generador";
import Inicio from "./componentes/Inicio";
import Api from "./componentes/Api";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <nav className="p-4 flex gap-4 bg-gray-100">
        <Link to="/">{t("inicio")}</Link>
        <Link to="/editor">🎼 {t("editor")}</Link>
        <Link to="/api">📚 {t("api")}</Link>
        <Link to="/generador">🥁 {t("generador")}</Link>
        <button onClick={() => cambiarIdioma("es")}>Español</button>
        <button onClick={() => cambiarIdioma("en")}>English</button>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/editor" element={<EditorPartitura />} />
          <Route path="/generador" element={<Generador />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
