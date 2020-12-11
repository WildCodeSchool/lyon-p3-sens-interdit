import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./../Spectacle/SpectacleInfos.css";
import "../../../assets/styles/global.css";

const SpectacleInfosOldArchive = ({ country, duration, info }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="spectacle-info container">
      <div className="red-arrow"></div>
      <div className="spectacle-info-container">
        <div className="info-container">
          <p>
            {language === "fr" ? "Infos Pratiques" : "Practical Information"}
          </p>
          <ul>
            <li>
              {language === "fr" ? "Pays : " : "Country : "}
              {country.toUpperCase()}
            </li>
            <li>
              {language === "fr" ? "Durée : " : "Duration : "}
              {duration}
            </li>
            <li>{info}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpectacleInfosOldArchive;
