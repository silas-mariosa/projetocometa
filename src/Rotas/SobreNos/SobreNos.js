import React from "react";
import { useLanguage } from "../../LanguageContext";
import BannerTopoPagina from "components/BannerTopoPagina/BannerTopoPagina";
import image from "../../img/sobreNos.png";
import BannerDescricao from "components/BannerDescricao/BannerDescricao";
import BannerMissao from "components/BannerMissao/BannerMissao";
import BannerBottomText from "components/BannerBottomText/BannerBottonText";
import aviao from '../../img/Microsoft_Flight_Simulator_Screenshot_2023.06.26_-_21.27.51.74.png'

export default function SobreNos() {
  const { language } = useLanguage();

  // Defina as traduções diretamente no componente
  const translations = {
    "en-US": {
      pageTitle: "About Us",
      bannerTitle: "FLY COMETA!",
      bannerTextOne:
        "In mid-April 2022, the company COVI Linhas Aéreas (Virtual Commanders) began its activities in the field of Virtual Airline in flight simulators. As soon as the services began, it achieved widespread success in publicity and collaborators. At the beginning of 2023, the company suffered some changes and had its activities suspended until further notice. Until, on June 1st, the company returns to action with a new look and a new name; So that's when Cometa Aviation came into being. Today, we can say that Cometa is like a family, it is in full activity and expanding. We have God as our guide and friendship as the principle of everything. Therefore, we invite all commanders who have flight simulators as a hobby and who want to be part of this family. Everyone here is welcome. Go Comet!.",
      bannerTextTwo:
        "Passion for Performance and Big Dream is the feeling that has moved us since June 2012 and that makes the eyes shine and fills the hearts of our members and followers with pride. That's why today we are among the Virtual Airlines with the greatest respect and credibility in virtual aviation in Latin America.",
      missionTitle: "Did You Know?",
      missionTextOne:
        "This organization model of COMETA was the reason for an International Certification by VATSIM. This ratifies our commitment and seriousness to flight simulation based on real procedures according to official documents and manuals.",
      missionTextTwo:
        "We have a Training Academy with complete courses for Virtual Private Pilot and Virtual Commercial Pilot, as well as Aircraft Familiarization courses.",
      historyTitle: "OUR HISTORY",
      historyText:
        "Your history text goes here... (update with the actual text)",
    },
    "pt-BR": {
      pageTitle: "Sobre nós",
      bannerTitle: "VOE COMETA!",
      bannerTextOne:
        "Em meados do mês de abril de 2022, a empresa COVI Linhas Aéreas (Comandantes Virtuais) dava início às suas atividades no ramo de Companhia Aérea Virtual em simuladores de vôos. Assim que iniciou os serviços, alcançou amplo sucesso na divulgação e colaboradores. Ao iniciar o ano de 2023, a empresa sofreu com algumas mudanças e teve suas atividades paralisadas até segunda ordem. Até que, em 1° de junho, a empresa volta à ativa com uma nova roupagem e um novo nome; então foi aí que surgiu a Aviação Cometa. Hoje, podemos dizer que a Cometa é como uma família,  está em plena atividade e em plena expansão. Temos Deus nosso guia e a amizade como o princípio de tudo. E por isso, convidamos a todos os comandantes que têm o simulador de vôo como um hobby e que queiram fazer parte desta família. Todos aqui são bem-vindos. Vai Cometa!.",
      bannerTextTwo:
        "Paixão pela Performance e Sonho Grande é o sentimento que nos move desde junho de 2012 e que faz brilhar os olhos e encher o coração de orgulho de nossos membros e seguidores. Também é por isso que hoje estamos entre as Virtuais Airlines com maior respeito e credibilidade na aviação virtual da América Latina.",
      missionTitle: "Você sabia?",
      missionTextOne:
        "Este modelo de organização da COMETA foi motivo de uma Certificação Internacional pela VATSIM. Isso ratifica nosso compromisso e seriedade com a simulação de voo baseado em procedimentos reais de acordo com documentos e manuais oficiais.",
      missionTextTwo:
        "Temos uma Academia de Formação com cursos completos para Piloto Privado e Piloto Comercial Virtual, bem como cursos de Familiarização de Aeronaves.",
      historyTitle: "NOSSA HISTÓRIA",
      historyText:
        "Sua história vai aqui... (atualize com o texto real)",
    },
  };

  const currentTranslations = translations[language];

  return (
    <section>
      <BannerTopoPagina image={image} titulo={currentTranslations.pageTitle} />
      <BannerDescricao
        titulo={currentTranslations.bannerTitle}
        textoUm={currentTranslations.bannerTextOne}
        textoDois={currentTranslations.bannerTextTwo}
      />
      <BannerMissao />
      <BannerDescricao
        titulo={currentTranslations.missionTitle}
        textoUm={currentTranslations.missionTextOne}
        textoDois={currentTranslations.missionTextTwo}
      />
      <BannerBottomText
        src={aviao}
        titulo={currentTranslations.historyTitle}
        texto={currentTranslations.historyText}
      />
    </section>
  );
}
