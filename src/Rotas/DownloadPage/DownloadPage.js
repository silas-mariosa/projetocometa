import React from "react";
import { useLanguage } from "../../LanguageContext";
import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import image from '../../img/FlightSimulator_2023-10-07_17-59-03.png'
import TabelaDownload from "components/TabelaDownload/TabelaDownload";

export default function DownloadPage() {
  const { language } = useLanguage();

  // Defina as traduções com base no idioma
  const translations = {
    "en-US": {
      pageTitle: "Downloads Area",
    },
    "pt-BR": {
      pageTitle: "Área de downloads",
    },
  };

  // Obtenha as traduções com base no idioma atual
  const t = translations[language];

  return (
    <>
      <BannerTopoPagina
        image={image}
        titulo={t.pageTitle}
      />
      <TabelaDownload/>
    </>
  );
}
