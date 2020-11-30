import React from "react";
import "./../Spectacle/SpectacleInfos.css";

const SpectacleInfosOldArchive = ({
  //tarif,
  country,
  duration,
//   partners,
//   accessibility,
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
        <div className="info-container">
          {/*<span style={{ margin: "0", paddingLeft: "20px" }}>
            {tarif.tarif}
          </span>
           <ul>
            {tarif.category.map((el, i) => (
              <li key={i}>{el.category}</li>
            ))}
          </ul> */}
        </div>
        {/* <div className="partners-logo">
          {partners.map(picto => (
            <a
              key={picto.id}
              href={picto.url}
              title="title here"
              target="_blank"
            >
              <img
                src={process.env.GATSBY_API_URL + picto.image[0].url}
                alt="logo"
                width="70"
                height="70"
              />
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default SpectacleInfosOldArchive;
