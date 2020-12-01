import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function FrEn() {
  const { english, toggleEnglish } = useContext(LanguageContext);
  return (
    <button className="fr-en" onClick={toggleEnglish}>
      <p>FR</p>
      <span> | </span>
      <p>EN</p>
    </button>
  );
}
