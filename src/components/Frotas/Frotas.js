import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma
import styles from "./Frotas.module.css";
import CardFrota from "components/CardFrota/CardFrota";
import DadosFrota from "components/Frotas/frota.json";

export default function Frotas() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      title: "Aircraft",
    },
    "pt-BR": {
      title: "Aeronaves",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <section className={styles.section}>
      <div className={styles.containerExpedicao}>
        <div className={styles.divExpedicao}>
          <p className={styles.titulo}>{t.title}</p>
          <hr className={styles.line}></hr>
        </div>
        <div className={styles.containerCards}>
          {DadosFrota.frota.map((dados) => (
            <CardFrota
              key={dados.id}
              src={dados.image}
              aeronave={dados.titulo}
              tipo={dados.tipo}
              asa={dados.asa}
              id={dados.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
