import React from "react";
import { useTranslation } from "react-i18next";

const Generador = () => {
  const { t } = useTranslation();
  return <p>{t("generador_texto")}</p>;
};

export default Generador;
