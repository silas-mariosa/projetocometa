import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma

export default function Assinatura() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
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

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  return (
    <div style={{ color: "#FFF", backgroundColor: "#062b52", padding: "2% 25%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {t.copyrights}{" "}
          <a
            href="http://silasmariosa.com.br"
            target="_blank"
            style={{ color: "#F7D400", textDecoration: "none" }}
          >
            {t.developer_name}
          </a>
        </div>
        <div>
          <a href="#" style={{ color: "#FFF", textDecoration: "none", borderBottom: "1px dashed #FFF" }}>
            {t.privacy_notice}
          </a>
        </div>
      </div>
    </div>
  );
}
