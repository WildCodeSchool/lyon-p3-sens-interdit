import React from "react"
import TabSystemH from "../components/globalscomponents/TabSystems/TabSystemH"
import Slider from "../components/globalscomponents/Slider/Slider"
import Calendar from "../components/globalscomponents/Calendar/Calendar"
import Thumbnail from "../components/globalscomponents/Thumbnail/Thumbnail"

import styled from "styled-components"
import handiPicto from "../img/handivisuel.svg"
import partnerLogo from "../img/logo_lpa.png"
import "../styles/spectacle.css"

const SpectacleGrid = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: repeat(3, minmax(100px, auto));
  gap: 0px 0px;
  grid-template-areas:
    "country-label calendar spectacle-info"
    "tab-module tab-module spectacle-info"
    "content content content";
`

const Spectacle = () => {
  // just to display something on the page
  const arrayHandiPicto = [handiPicto, handiPicto, handiPicto]
  const arrayPartnerLogo = [partnerLogo, partnerLogo, partnerLogo]

  return (
    <>
      <Slider />
      <SpectacleGrid>
        <div className="country-label">
          <p>Kosovo</p>
        </div>
        <Calendar />

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

        <TabSystemH />
        <div className="content">
          <p>Autour du spectacle</p>
          <div className="wrapper-content">
            <Thumbnail />
            <Thumbnail />
          </div>
        </div>
      </SpectacleGrid>
    </>
  )
}

export default Spectacle
