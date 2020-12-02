import React, { useState, useEffect } from "react";
import LanguageContext from "./LanguageContext";

export default props => {
  const [language, setLanguage] = useState("fr");
  const [LANG, setLANG] = useState("");

  useEffect(() => {
    language === "en" ? setLANG("_en") : setLANG("");
  }, [language]);

  const toggleLanguage = () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
  };

  return (
    <LanguageContext.Provider value={{ language, LANG, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
