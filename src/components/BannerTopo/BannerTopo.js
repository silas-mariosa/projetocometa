import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import styles from "./BannerTopo.module.css";
import foto from "../../img/INSCREVA-SE.png";
import icone from "../../img/inscrevaseIcon.png";

export default function BannerTopo() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      text: "How easy it is to fly with Cometa",
      buttonText: "SIGN UP",
    },
    "pt-BR": {
      text: "Como é fácil voar na Cometa",
      buttonText: "INSCREVA-SE",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <p className={styles.p}>{t.text}</p>
        <img className={styles.image} alt="banner top" src={foto}></img>
        <div className={styles.containerBotao}>
          <img className={styles.icone} src={icone}></img>
          <a className={styles.botao} href="/cadastrar">{t.buttonText}</a>
        </div>
      </div>
    </section>
  );
}
