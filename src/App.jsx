import React from "react";
import { useTranslation } from "react-i18next";
import BienvenidaAnimada from "./BienvenidaAnimada";
import VistaPrincipal from "./VistaPrincipal";
import VistaGrabacionAudio from "./VistaGrabacionAudio";
import EditorPartitura from "./EditorPartitura";


export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-10">
      <header className="text-center">
        <BienvenidaAnimada />
        <h1 className="text-4xl font-bold mt-4">{t("title")}</h1>
        <p className="text-lg mt-2">{t("subtitle")}</p>

        {/* Selector visual de idioma */}
        <div className="mt-4 flex justify-center space-x-4">
          <button onClick={() => i18n.changeLanguage("es")} className="text-2xl">
            🇪🇸
          </button>
          <button onClick={() => i18n.changeLanguage("en")} className="text-2xl">
            🇺🇸
          </button>
        </div>
      </header>

      <main className="space-y-10">
  <VistaPrincipal />
  <VistaGrabacionAudio />
  <EditorPartitura />
</main>

    </div>
  );
}
