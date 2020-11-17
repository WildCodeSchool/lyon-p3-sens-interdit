import React from "react";
import "./Index.css";
import SpectacleInfos from "./SpectacleInfos";
import TabSystemH from "../../globals/TabSystems/TabSystemH";
import Thumbnail from "../../globals/Thumbnail";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";

const SpectaclePage = () => {
  return (
    <div className="global-spectacle-page">
      <ImageCarousel />
      <div className="content-spectacle-page">
        <div className="country-label">
          <p>Kosovo</p>
        </div>
        <CalendarLarge />
        <SpectacleInfos />
        <TabSystemH />
        <div className="content">
          <p className="content-title to-uppercase">Autour du spectacle</p>
          <div className="display-mini-tab">
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
  );
};

export default SpectaclePage;
