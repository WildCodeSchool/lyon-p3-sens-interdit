import React from "react";
import ImageCarousel from "../Carousel/ImageCarousel";
import DisplayTabMenu from "../homepagecomponents/DisplayTabMenu";
import "./TransmissionsPage.css";

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
      <ImageCarousel />
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
