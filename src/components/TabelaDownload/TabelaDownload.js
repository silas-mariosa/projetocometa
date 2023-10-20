import React from "react";
import { useLanguage } from "../../LanguageContext";
import Dados from "./links.json";
import styles from './TabelaDownload.module.css';

export default function TabelaDownload() {
  const { language } = useLanguage();

  // Defina as traduções com base no idioma
  const translations = {
    "en-US": {
      heading: "SKIN LIST",
      model: "Model",
      platform: "Platform",
      link: "Link",
    },
    "pt-BR": {
      heading: "LISTA DE SKINS",
      model: "Modelo",
      platform: "Plataforma",
      link: "Link",
    },
  };

  // Obtenha as traduções com base no idioma atual
  const t = translations[language];

  return (
    <div className={styles.container_tabela}>
      <div className={styles.container}>
        <div className={styles.tabelaContainer}>
          <h2 className={styles.h2}>{t.heading}</h2>
          <table className={styles.table}>
            <tbody className={styles.tbody}>
              {Dados.links.map((dados, index) => (
                <tr key={index} className={styles.tr}>
                  <td className={styles.td}>
                    <div className={styles.divDados}>
                      <strong className={styles.strong}>{t.model}</strong>
                    </div>
                    {dados.modelo}
                  </td>
                  <td className={styles.td}>
                    <div className={styles.divDados}>
                      <strong className={styles.strong}>{t.platform}</strong>
                    </div>
                    {dados.plataforma}
                  </td>
                  <td className={styles.td}>
                    <div className={styles.divDados}>
                      <strong className={styles.strong}>{t.link}</strong>
                    </div>
                    <a alt="acessar" href={dados.link} className={styles.a} style={{ textDecoration: 'none', color: '#000' }}>Acessar...</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
