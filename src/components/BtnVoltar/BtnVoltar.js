import React from "react";
import { useLanguage } from "../../LanguageContext"; // Certifique-se de importar o contexto de idioma

export default function BtnVoltar() {
  const { language } = useLanguage(); // Obtém o idioma atual do contexto

  // Define as traduções com base no idioma
  const translations = {
    "en-US": {
      buttonText: "Back",
    },
    "pt-BR": {
      buttonText: "Voltar",
    },
  };

  // Obtém as traduções com base no idioma atual
  const t = translations[language];

  const handleVoltar = () => {
    window.history.back();
  };

  return (
    <div style={{ backgroundColor: "#F6F1E4", display: "flex", textAlign: "left", margin: "0", paddingLeft: "5%" }}>
      <button
        onClick={handleVoltar}
        style={{
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#10477F",
          color: "white",
          fontSize: "18px",
          margin: "2% 0 1% 0",
          cursor: "pointer",
        }}
      >
        {t.buttonText}
      </button>
    </div>
  );
}
