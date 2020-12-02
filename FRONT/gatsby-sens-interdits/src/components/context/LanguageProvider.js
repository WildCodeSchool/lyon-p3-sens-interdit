import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

export default props => {
  const [language, setLanguage] = useState("fr");
  const toggleLanguage = () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
