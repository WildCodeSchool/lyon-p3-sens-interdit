import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function FrEn() {
  const { english, toggleEnglish } = useContext(LanguageContext);
  return (
    <a className="fr-en" onClick={toggleEnglish}>
      <p className={!english ? "active-language" : ""}>FR</p>
      <span> | </span>
      <p className={english ? "active-language" : ""}>EN</p>
    </a>
  );
}
