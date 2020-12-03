import React, { useState } from "react";
import FestivalContext from "./FestivalContext";

export default props => {
  const [language, setLanguage] = useState("fr");
  const toggleLanguage = () => {
    language === "fr" ? setLanguage("en") : setLanguage("fr");
  };

  return (
    <FestivalContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </FestivalContext.Provider>
  );
};
