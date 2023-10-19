import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import styles from './BannerEstatisticas.module.css'
import result from '../Tabela/result.json'

export default function BannerEstatisticas() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      title1: "ACTIVE PILOTS",
      title2: "FLIGHTS",
      title3: "AIRCRAFT MODELS",
      title4: "FLIGHT HOURS",
    },
    "pt-BR": {
      title1: "PILOTOS ATIVOS",
      title2: "VOOS",
      title3: "MODELOS DE AERONAVES",
      title4: "HORAS DE VOO",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  var dados = result.data.map(dados => dados.flights)
  var soma = dados.reduce(function(acumulador, valor){
    return acumulador + valor
  }, 0)
  var horas = result.data.map(dados => dados.hours)
  var somaHoras = horas.reduce(function(acumulador, valor){
    return acumulador + valor
  }, 0)
  console.log(somaHoras)

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.numero}>{result.data.length}</p>
        <p className={styles.titulo}>{t.title1}</p>
      </div>
      <div className={styles.box}>
        <p className={styles.numero}>{soma}</p>
        <p className={styles.titulo}>{t.title2}</p>
      </div>
      <div className={styles.box}>
        <p className={styles.numero}>7</p>
        <p className={styles.titulo}>{t.title3}</p>
      </div>
      <div className={styles.box}>
        <p className={styles.numero}>{Math.floor(somaHoras)}</p>
        <p className={styles.titulo}>{t.title4}</p>
      </div>
    </div>
  );
}
