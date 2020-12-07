import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function Ticketing() {
  const { language } = useContext(LanguageContext);
  const url = "http://localhost:8000";
  return (
    <div className="billetterie-programme">
      <a
        href="https://sensinterdits.mapado.com/"
        title="billetterie"
        className="highlight to-uppercase"
        target="_blank"
        rel="noreferrer"
      >
        {language === "fr" ? "Billetterie" : "Tickets Infos"}
      </a>
      <a
        href={url + "/programme"}
        title="programme"
        className="highlight to-uppercase"
      >
        {language === "fr" ? "Programme" : "Program"}
      </a>
    </div>
  );
}
