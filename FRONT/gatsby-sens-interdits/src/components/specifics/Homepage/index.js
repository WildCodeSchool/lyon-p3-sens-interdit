import React from "react";
import "./Index.css";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu.js";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";

export default function Homepage() {
  return (
    <div className="global-homepage">
      <ImageCarousel />
      <div className="content-homepage">
        <DisplayTabMenu title="Le Festival" />
        <DisplayTabMenu title="Avec les publics" />
        <DisplayTabMenu
          title="Spectacles en tournée"
        />
        <DisplayTabMenu title="L'association" />
      </div>
    </div>
  );
}
