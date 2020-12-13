import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";

export default function Ticketing() {
  const { language } = useContext(LanguageContext);
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
      <Link
        to={"/programme"}
        title="programme"
        className="highlight to-uppercase"
      >
        {language === "fr" ? "Programme" : "Program"}
      </Link>
    </div>
  );
}
