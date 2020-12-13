import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { Link } from "gatsby";

export default function ListLink() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="footer-list-link footer-one">
      <ul>
        <li>
          <Link to="/partners" title="Partenaires" className="underlined">
            {language === "fr" ? "Partenaires" : "Partners"}
          </Link>
        </li>
        <li>
          <Link to="/mentions" title="Mentions Légales" className="underlined">
            {language === "fr" ? "Mentions Légales" : "Legal Notice"}
          </Link>
        </li>
        <li>
          <Link to="/conditions" title="Conditions Générales d'utilisation" className="underlined">
            {language === "fr"
              ? "Conditions générales d'utilisation"
              : "General terms and conditions of use"}
          </Link>
        </li>
        <li>
          <Link to="/sitemap" title="Plan du site" className="underlined">
            {language === "fr" ? "Plan du site" : "Sitemap"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
