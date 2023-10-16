import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import styles from './BannerEstatisticas.module.css'

export default function BannerEstatisticas() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      title1: "ACTIVE PILOTS",
      title2: "AVAILABLE ROUTES",
      title3: "AIRCRAFT MODELS",
      title4: "FLIGHTS IN 2023",
    },
    "pt-BR": {
      title1: "PILOTOS ATIVOS",
      title2: "ROTAS DISPONÍVEIS",
      title3: "MODELOS DE AERONAVES",
      title4: "NR. DE VOOS EM 2023",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.numero}>115</p>
        <p className={styles.titulo}>{t.title1}</p>
      </div>
      <div className={styles.box}>
        <p className={styles.numero}>7779</p>
        <p className={styles.titulo}>{t.title2}</p>
      </div>
      <div className={styles.box}>
        <p className={styles.numero}>54</p>
        <p className={styles.titulo}>{t.title3}</p>
      </div>
      <div className={styles.box}>
        <p className={styles.numero}>6501</p>
        <p className={styles.titulo}>{t.title4}</p>
      </div>
    </div>
  );
}
