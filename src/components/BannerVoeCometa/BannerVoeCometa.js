import React from "react";
import styles from "./BannerVoeCometa.module.css"
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma

export default function BannerVoeCometa() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      text: "FLY WITH COMETA!",
    },
    "pt-BR": {
      text: "VOE COMETA!",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <div className={styles.class1}>
      <div className={styles.class2}>
        <p className={styles.p}>{t.text}</p>
        <hr className={styles.hr}></hr>
      </div>
    </div>
  );
}
