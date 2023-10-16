import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import DetalhesComponentes from 'components/DetalhesComponentes/DetalhesComponentes'
import styles from './BannerDetalhes.module.css'
import icon1 from '../../img/destaqueIcon.png'
import icon2 from '../../img/estatisticaIcon.png'
import icon3 from '../../img/frotaIcon.png'
import icon4 from '../../img/expedicoesIcon.png'

export default function BannerDetalhes() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      title1: "HIGHLIGHTS OF THE MONTH",
      description1:
        "Those who stand out at Cometa Airlines deserve recognition. Birthdays and the TOP of the month. Get to know those who soared high!",
      title2: "COMPANY STATISTICS",
      description2:
        "No one is as strong as all of us together. Always in the ascension flight. Get to know the key numbers of Cometa Airlines!",
      title3: "OUR FLEET",
      description3:
        "To meet all needs. Get to know all the aircraft in our fleet!",
      title4: "OUR EXPEDITIONS",
      description4:
        "Guaranteed fun on National and International Tours. Get to know the Tours of Cometa Airlines!",
    },
    "pt-BR": {
      title1: "DESTAQUES DO MÊS",
      description1:
        "Quem se destaca na Cometa Airlines merece destaque. Aniversariantes e os TOP do mês. Conheça os que voaram alto!",
      title2: "ESTATÍSTICAS DA CIA",
      description2:
        "Ninguém é tão forte como todos nós juntos. Sempre em voo de ascensão. Conheça os principais números da Cometa Airlines!",
      title3: "NOSSA FROTA",
      description3:
        "Para atender todas as necessidades. Conheça todas as aeronaves da nossa frota!",
      title4: "NOSSaS expedições",
      description4:
        "Diversão garantida em Tours Nacionais e Internacionais. Conheça as Tours da Cometa Airlines!",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <section className={styles.containerPai}>
      <div className={styles.container}>
        <div className={styles.div}>
          <DetalhesComponentes imagem={icon1} titulo={t.title1} descricao={t.description1}></DetalhesComponentes>
        </div>
        <div className={styles.div}>
          <DetalhesComponentes imagem={icon2} titulo={t.title2} descricao={t.description2}></DetalhesComponentes>
        </div>
        <div className={styles.div}>
          <DetalhesComponentes imagem={icon3} titulo={t.title3} descricao={t.description3}></DetalhesComponentes>
        </div>
        <div className={styles.div}>
          <DetalhesComponentes imagem={icon4} titulo={t.title4} descricao={t.description4}></DetalhesComponentes>
        </div>
      </div>
    </section>
  );
}
