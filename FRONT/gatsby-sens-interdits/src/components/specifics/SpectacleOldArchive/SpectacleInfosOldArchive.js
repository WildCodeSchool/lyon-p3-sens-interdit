import React from "react";
import "./../Spectacle/SpectacleInfos.css";

const SpectacleInfosOldArchive = ({
  country,
  duration,
  info,
}) => {
  return (
    <div className="spectacle-info">
      <div className="red-arrow"></div>
      <div className="spectacle-info-container">
        <div className="info-container">
          <p>Infos Pratiques</p>
            <ul>
              <li>Pays : {country.toUpperCase()}</li>
              <li>Durée : {duration}</li>
              <li>{info}</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default SpectacleInfosOldArchive;
