import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt-BR"); // Inicialmente, o idioma é português

  const toggleLanguage = () => {
    setLanguage(language === "pt-BR" ? "en-US" : "pt-BR");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
