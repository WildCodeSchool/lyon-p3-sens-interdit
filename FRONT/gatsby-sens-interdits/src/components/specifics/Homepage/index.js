import React from "react";
import "./Index.css";
import lefestival from "../../../assets/img/photosFiltre/lefestival.png";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu.js";
import aveclespublics from "../../../assets/img/photosFiltre/aveclespublics.png";
import spectaclesentournee from "../../../assets/img/photosFiltre/spectaclesentournee.png";
import lassociation from "../../../assets/img/photosFiltre/lassociation.png";
//import ImageCarousel from "../../globals/Carousel/ImageCarousel";

export default function Homepage() {
  return (
    <div className="global-homepage">
      {/* <ImageCarousel /> we need to pass props to this component */}
      <div className="content-homepage">
        <DisplayTabMenu image={lefestival} title="Le Festival" />
        <DisplayTabMenu image={aveclespublics} title="Avec les publics" />
        <DisplayTabMenu
          image={spectaclesentournee}
          title="Spectacles en tournée"
        />
        <DisplayTabMenu image={lassociation} title="L'association'" />
      </div>
    </div>
  );
}
