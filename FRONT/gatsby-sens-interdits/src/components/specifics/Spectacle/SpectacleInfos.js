import React from "react";
import "./SpectacleInfos.css";
import "../../../assets/styles/global.css";


const SpectacleInfos = ({
  tarif,
  language,
  country,
  duration,
  partners,
  accessibility,
  info,
}) => {
  return (
    <div className="spectacle-info">
      <div className="red-arrow"></div>
      <div className="spectacle-info-container">
        <div className="info-container">
          <p>
            {language === "fr" ? "Infos Pratiques" : "Practical Information"}
          </p>
          <ul>
            <li>
              {language === "fr" ? "Pays :" : "Country :"}
              {country !== null ? country.toUpperCase() : ""}
            </li>
            <li>
              {language === "fr" ? "Durée :" : "Duration :"}
              {duration !== null ? duration : ""}
            </li>
            {info.map(el => (
              <li key={el.id}>{el.info}</li>
            ))}
          </ul>
        </div>
        <div className="accessibility-logo">
          {accessibility.map(picto => (
            <img
              key={picto.id}
              src={process.env.GATSBY_API_URL + picto.url}
              alt="pic"
              width="70"
              height="70"
            />
          ))}
        </div>
        <div className="info-container">
          <span style={{ margin: "0", paddingLeft: "20px" }}>
            {tarif !== null ? tarif.tarif : ""}
          </span>
          <ul>
            {tarif.category.map((el, i) => (
              <li key={i}>{el.category}</li>
            ))}
          </ul>
        </div>
        <div className="partners-logo">
          {partners.map(picto => (
            <a
              key={picto.id}
              href={picto.url}
              title="title here"
              target="blank"
            >
              {/* TODO set default image **/}
              <img
                src={
                  picto.image[0] !== undefined
                    ? process.env.GATSBY_API_URL + picto.image[0].url
                    : null
                }
                alt="logo"
                width="70"
                height="70"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpectacleInfos;
