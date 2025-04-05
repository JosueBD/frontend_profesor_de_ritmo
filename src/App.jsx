import React, { useState } from "react";
import BienvenidaAnimada from "./BienvenidaAnimada";
import VistaPrincipal from "./VistaPrincipal";
import VistaGrabacionAudio from "./VistaGrabacionAudio";
import EditorPartitura from "./EditorPartitura";
import SidebarLayout from "./SidebarLayout";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function App() {
  const [view, setView] = useState("inicio");
  const { t, i18n } = useTranslation();

  const renderView = () => {
    switch (view) {
      case "grabacion":
        return <VistaGrabacionAudio />;
      case "partitura":
        return <EditorPartitura />;
      default:
        return (
          <>
            <BienvenidaAnimada />
            <VistaPrincipal />
          </>
        );
    }
  };

  return (
    <SidebarLayout onNavigate={setView}>
      {/* Selector de idioma */}
      <div className="flex justify-end space-x-4 mb-6">
        <button onClick={() => i18n.changeLanguage("es")} className="text-xl">
          🇪🇸
        </button>
        <button onClick={() => i18n.changeLanguage("en")} className="text-xl">
          🇺🇸
        </button>
      </div>

      {renderView()}
    </SidebarLayout>
  );
}
