import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import CardExpedicao from "components/CardExpedicao/CardExpedicao";
import styles from "./Expedicao.module.css";
import expedicoes from "./expedicoes.json";
import { Link } from "react-router-dom";

export default function Expedicao() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      title: "COMETA EXPEDITIONS",
      buttonLabel: "See more...",
    },
    "pt-BR": {
      title: "EXPEDIÇÕES COMETA",
      buttonLabel: "Ver mais...",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <section className={styles.section}>
      <div className={styles.containerExpedicao}>
        <div className={styles.divExpedicao}>
          <p className={styles.titulo}>{t.title}</p>
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.containerCards}>
          {expedicoes.rotas.map((response) => (
            <Link to={`/expedicoes/${response.id}`}>
              <CardExpedicao key={response.id} image={response.imagem} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.containerBtn}>
        <a className={styles.btn} href="/expedicoes" alt="expedicoes">
          {t.buttonLabel}
        </a>
      </div>
    </section>
  );
}
