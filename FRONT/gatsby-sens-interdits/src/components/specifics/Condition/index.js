import React, { useContext } from "react";
import "./index.css";
import "../../../assets/styles/global.css";
import { graphql, useStaticQuery } from "gatsby";
import LanguageContext from "../../context/LanguageContext";

export default function ConditionsPage() {
  const { language } = useContext(LanguageContext);
  const { strapiConditions } = useStaticQuery(graphql`
    query MyQueryConditions {
      strapiConditions {
        content
        id
      }
    }
  `);
  return (
    <div>
      <div className="container">
        <h1 className="to-uppercase">
          {language === "fr"
            ? "Conditions Générales d'utilisation"
            : "General terms and conditions of use"}
        </h1>
        <div className="content-conditions">{strapiConditions.content}</div>
      </div>
    </div>
  );
}
