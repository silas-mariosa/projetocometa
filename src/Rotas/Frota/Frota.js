import React from "react";
import { useLanguage } from "../../LanguageContext";
import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import BannerDescricao from "components/BannerDescricao/BannerDescricao";
import Frotas from 'components/Frotas/Frotas'
import image from '../../img/nossaFrota.png';

export default function Frota() {
  const { language } = useLanguage();

  // Defina as traduções com base no idioma
  const translations = {
    "en-US": {
      pageTitle: "Our Fleet",
      bannerTitle: "A COMPLETE FLEET FOR GUARANTEED FUN",
      bannerText: "Modern, young, safe, and high-tech. That's the COMETA Virtual Airlines fleet, which daily carries hundreds of passengers and cargo to their destinations. We have a multi-performance fleet ranging from the C172 for short visual intermunicipal flights to the Boeing 747-400 for long-haul intercontinental flights. COMETA Virtual consists of three fleet lines.",
    },
    "pt-BR": {
      pageTitle: "Nossa Frota",
      bannerTitle: "UMA FROTA COMPLETA PARA DIVERSÃO GARANTIDA",
      bannerText: "Moderna, jovem, segura e com alta tecnologia. Assim é a frota COMETA Virtual Airlines, que diariamente leva centenas de passageiros e cargas a seus destinos. Temos uma frota multi performance que vai desde o C172 para realização de voos visuais intermunicipais até o Boeing 747-400 para voos longos intercontinentais. A COMETA Virtual é composta por três linhas de frota.",
    },
  };

  // Obtenha as traduções com base no idioma atual
  const t = translations[language];

  return (
    <section>
      <BannerTopoPagina image={image} titulo={t.pageTitle} />
      <BannerDescricao
        titulo={t.bannerTitle}
        textoUm={t.bannerText}
      />
      <Frotas />
    </section>
  );
}
