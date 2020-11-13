import React from "react"
import SpectacleInfos from "../components/globalscomponents/spectaclepagecomponents/SpectacleInfos"
import TabSystemH from "../components/globalscomponents/TabSystems/TabSystemH"
import Thumbnail from "../components/globalscomponents/Thumbnail/Thumbnail"
import ImageCarousel from "../components/globalscomponents/Carousel/ImageCarousel"
import CalendarLarge from "../components/globalscomponents/Calendar/CalendarLarge"

import "./../components/globalscomponents/spectaclepagecomponents/SpectaclePage.css"

import photoTest from "../img/img-sens-interdit.jpg"

const Spectacle = () => {
  return (
    <div>
      <ImageCarousel />

      <div className="content-spectaclepage">
        <div className="country-label">
          <p>Kosovo</p>
        </div>

        <CalendarLarge />

        <SpectacleInfos />

        <TabSystemH />

        <div className="content">
          <p className="content-title">Autour du spectacle</p>
          <div className="display-miniTab">
            <Thumbnail
              affiche={photoTest}
              date="26 Octobre"
              country="Russie"
              name="Titre du spectacle"
              team="Metteur en scène"
            />
            <Thumbnail
              affiche={photoTest}
              date="26 Octobre"
              country="Russie"
              name="Titre du spectacle"
              team="Metteur en scène"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spectacle
