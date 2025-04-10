import React from "react";
import { useTranslation } from "react-i18next";

const Inicio = () => {
  const { t } = useTranslation();
  return <h1 className="text-xl font-bold">{t("bienvenida")}</h1>;
};

export default Inicio;
