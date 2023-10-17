import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Verifica se o idioma está armazenado em localStorage
  const initialLanguage = localStorage.getItem("language") || "pt-BR";

  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    // Quando o idioma muda, atualize o localStorage
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "pt-BR" ? "en-US" : "pt-BR"));
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
