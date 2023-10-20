import React from "react";
import { useLanguage } from "../../LanguageContext";
import styles from "./Assinatura.module.css";

export default function Assinatura() {
  const { language } = useLanguage();

  const translations = {
    "en-US": {
      copyrights: "Copyright © 2023 | Cometa Virtual Airlines. Developed by",
      privacy_notice: "Privacy Notice (LGPD)",
      developer_name: "Silas Mariosa",
    },
    "pt-BR": {
      copyrights: "Direitos autorais © 2023 | Cometa Virtual Airlines. Desenvolvido por",
      privacy_notice: "Aviso de Privacidade (LGPD)",
      developer_name: "Silas Mariosa",
    },
  };

  const t = translations[language];

  return (
    <div className={styles.assinatura}>
      <div className={styles.flexContainer}>
        <div className={styles.copyrights}>
          {t.copyrights}{" "}
          <a
            href="http://silasmariosa.com.br"
            alt="site criador"
            className={styles.developerName}
          >
            {t.developer_name}
          </a>
        </div>
        <div className={styles.privacyLink}>
          <a href="/lgpd" className={styles.privacyNoticeLink}>
            {t.privacy_notice}
          </a>
        </div>
      </div>
    </div>
  );
}
