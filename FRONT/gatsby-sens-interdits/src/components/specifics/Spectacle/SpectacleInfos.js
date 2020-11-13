import React from "react"
import "./SpectacleInfos.css"

import handiPicto from "../../../assets/img/handivisuel.svg"
import partnerLogo from "../../../assets/img/logo_lpa.png"

const SpectacleInfos = () => {
  // just to display something on the page
  const arrayHandiPicto = [handiPicto, handiPicto, handiPicto]
  const arrayPartnerLogo = [partnerLogo, partnerLogo, partnerLogo]

  return (
    <div className="spectacle-info">
      <div className="spectacle-info-container">
        <div className="info-container">
          <p>Infos Pratiques</p>
          <ul>
            <li>Pays : KOSOVO</li>
            <li>Durée : 1h30</li>
            <li>Spectacle en russe surtitré et doublé en français</li>
            <li>A partir de 10 ans</li>
          </ul>
        </div>
        <div className="accessibility-logo">
          {arrayHandiPicto.map((picto, i) => (
            <img key={i} src={picto} alt="picto" width="70" height="70" />
          ))}
        </div>
        <div className="partners-logo">
          {arrayPartnerLogo.map((picto, i) => (
            <img key={i} src={picto} alt="picto" width="70" height="70" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpectacleInfos
