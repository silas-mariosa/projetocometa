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
        "Gold Virtual Airlines is a Virtual Airline company dedicated to the simulation of commercial flights using software and online computer networks.",
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
        "A Gold Virtual Airlines é uma empresa Aérea Virtual dedicada à simulação de voos comerciais utilizando Software’s e redes mundiais de computadores on line.",
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
