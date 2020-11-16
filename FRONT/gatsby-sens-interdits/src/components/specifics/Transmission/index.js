import React, { useState, useEffect } from "react";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import AxiosCallToApi from "../../../utils/AxiosCallToApi";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import "./TransmissionsPage.css";

function TransmissionsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesCarousel, setCarouselImages] = useState([]);
  const [datasPublic, setDataPublic] = useState([]);
  const [datasPro, setDataPro] = useState([]);
  const [description, setDescription] = useState("");

  const uriTransmissions = "transmissions/1";

  function datasTransmissionTreatment(data) {
    setDescription(data.content);
    setDataPublic(data.public_card_content);
    setDataPro(data.pro_card_content);
    setCarouselImages(data.slider_image.image);
    setIsLoading(false);
  }

  useEffect(() => {
    AxiosCallToApi(uriTransmissions, datasTransmissionTreatment);
  }, []);

  return (
    <>
      <ImageCarousel
        isLoading={isLoading}
        images={imagesCarousel}
        displayed={false}
      />
      <div className="global-margin">
        <div className="red-arrow"></div>
        <div className="transmission-content">
          <h1>
            <span>Ateliers-</span>Transmission
          </h1>
          <p>{description}</p>
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
