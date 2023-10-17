import React from "react";
import { useLanguage } from "../../LanguageContext";
import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import BannerDescricao from "components/BannerDescricao/BannerDescricao";
import image from '../../img/FlightSimulator_2023-07-22_19-02-07 1.png';
import Tabela from "components/Tabela/Tabela.js";

export default function NossaTripulacao() {
  const { language } = useLanguage();

  // Defina as traduções diretamente no componente
  const translations = {
    "en-US": {
      pageTitle: "Our Crew",
      bannerTitle: "NO ONE IS AS STRONG AS ALL OF US TOGETHER",
      bannerText:
        "No one is anything alone. And if we want to do something great, important, and that makes us proud, we need to do it as a team. Achieving success with a collective effort is much more enjoyable. Teamwork is unity and friendship for a common good and a common goal, which is why it is much nobler than an individual battle. We are proud to say that our members are more than a team; they are a great family! Come be a crew member of COMETA Virtual Airlines.",
    },
    "pt-BR": {
      pageTitle: "Nossa Tripulação",
      bannerTitle: "NINGUÉM É TÃO FORTE COMO NÓS TODOS JUNTOS",
      bannerText:
        "Ninguém é nada sozinho. E se queremos fazer algo grande, importante e que nos traga orgulho, precisamos fazer em equipe. Alcançar o sucesso com um esforço coletivo é muito mais prazeroso. O trabalho em equipe é união e amizade em prol de um bem e de um objetivo comum, por isso é muito mais nobre do que uma batalha individual. Temos orgulho em dizer que os nossos membros são mais que uma equipe, são uma grande família! Venha ser um tripulante da COMETA Virtual Airlines.",
    },
  };

  const currentTranslations = translations[language];

  return (
    <section>
      <BannerTopoPagina image={image} titulo={currentTranslations.pageTitle} />
      <BannerDescricao
        titulo={currentTranslations.bannerTitle}
        textoUm={currentTranslations.bannerText}
      />
      <Tabela />
    </section>
  );
}
