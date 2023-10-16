import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import DetalhesComponentes from "components/DetalhesComponentes/DetalhesComponentes";
import styles from "./BannerMissao.module.css";
import icon1 from "../../img/iconMissao.png";
import icon2 from "../../img/iconeVisao.png";

export default function BannerMissao() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      title1: "MONTHLY HIGHLIGHTS",
      title2: "COMPANY STATISTICS",
      desc1:
        "Those who stand out at Cometa Airlines deserve recognition. Birthdays and the TOP of the month. Get to know those who flew high!",
      desc2:
        "No one is as strong as all of us together. Always on an ascending flight. Get to know Cometa Airlines' key numbers!",
    },
    "pt-BR": {
      title1: "DESTAQUES DO MÊS",
      title2: "ESTATÍSTICAS DA CIA",
      desc1:
        "Quem se destaca na Cometa Airlines merece destaque. Aniversariantes e os TOP do mês. Conheça os que voaram alto!",
      desc2:
        "Ninguém é tão forte como todos nós juntos. Sempre em voo de ascensão. Conheça os principais números da Cometa Airlines!",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <section className={styles.containerPai}>
      <div className={styles.container}>
        <div className={styles.div}>
          <DetalhesComponentes imagem={icon1} titulo={t.title1} descricao={t.desc1} />
        </div>
        <div className={styles.div}>
          <DetalhesComponentes imagem={icon2} titulo={t.title2} descricao={t.desc2} />
        </div>
      </div>
    </section>
  );
}
