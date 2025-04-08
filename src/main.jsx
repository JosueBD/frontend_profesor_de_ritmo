import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";
import { BrowserRouter } from "react-router-dom";

// 👇 FORZAR idioma español si no hay uno guardado
if (!localStorage.getItem("i18nextLng")) {
  localStorage.setItem("i18nextLng", "es");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
