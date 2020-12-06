import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function FrEn() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <a className="fr-en" onClick={toggleLanguage} onKeyDown={()=>{}}>
      <p className={language === "fr" ? "active-language" : ""}>FR</p>
      <span> | </span>
      <p className={language === "en" ? "active-language" : ""}>EN</p>
    </a>
  );
}
