import React from "react";
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
    <div style={{ backgroundColor: "#10477F", display: "flex" }}>
      <div style={{ padding: "2% 0 4% 20%" }}>
        <p style={{ fontSize: "60px", color: "#FFF", margin: "0" }}>{t.text}</p>
        <hr style={{ maxWidth: "100%" }}></hr>
      </div>
    </div>
  );
}
