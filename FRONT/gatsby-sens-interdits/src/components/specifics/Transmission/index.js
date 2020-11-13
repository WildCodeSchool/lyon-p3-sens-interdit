import React from "react";
import { Carousel } from "react-responsive-carousel";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import "./TransmissionsPage.css";
import placeholder from "../../../assets/img/placeholder-photo-slider.jpg";

const imageTransmission = [
  {
    title: "placeholder",
    url: "",
  },
];

const datasTransmission = {
  title: "Ateliers-Transmission",
  content:
    "Cette année encore, le Festival ouvre une fenêtre sur le monde avec 22 spectacles à découvrir dans 19 lieux et théâtres partenaires. De la Russie au Mexique, du Burkina Faso au Rwanda, de la Syrie à la Belgique, Sens Interdits invite le spectateur à se laisser guider par sa curiosité ! Cette annéeencore, le Festival ouvre une fenêtre sur le monde avec 22 spectacles à découvrir dans 19 lieux et théâtres partenaires. De la Russie au Mexique, duBurkina Faso au Rwanda, de la Syrie à la Belgique, Sens Interdits invite le spectateur à se laisser guider par sa curiosité !Cette année encore, le Festivalouvre une fenêtre sur le monde avec 22 spectacles à découvrir dans 19 lieux et théâtres partenaires. De la Russie au Mexique, du Burkina Faso au Rwanda, de la Syrie à la Belgique, Sens Interdits invite le spectateur à se laisser guider par sa curiosité !",
};

const datasPublic = [
  {
    text: "Web radio",
    image: "",
  },
  { text: "Paroles d'exil", image: "" },
  { text: "Scolaires", image: "" },
];

const datasPro = [
  {
    text: "Ecole",
    image: "",
  },
  { text: "Seminaires", image: "" },
];

function TransmissionsPage() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {imageTransmission.map(image => (
          <div className="size-adjustment">
            <img src={placeholder} alt={image.title} />
          </div>
        ))}
      </Carousel>
      <div className="global-margin">
        <div className="red-arrow"></div>
        <div className="transmission-content">
          <h1>{datasTransmission.title}</h1>
          <p>{datasTransmission.content}</p>
        </div>
        <div className="transmission-grid-layout">
          <div className="transmission-public">
            <h1>
              Avec <span>les publics</span>
            </h1>
            {datasPublic.map(data => (
              <DisplayTabMenu image={data.image} title={data.text} />
            ))}
          </div>
          <div className="transmission-pro">
            <h1>
              Avec <span>les professionnels</span>
            </h1>
            {datasPro.map(data => (
              <DisplayTabMenu image={data.image} title={data.text} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TransmissionsPage;
