import React from "react";
import RedTitleCardOld from "./../Carousel/RedTitleCardOld";
import "./../Carousel/ImageCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import placeholder from "../../../assets/img/placeholder-photo-slider.jpg";

function ImageCarouselOldArchive({ title, images, displayed }) {
  return !images ? (
    <>
      <div className="size-adjustment placeholder-carousel">
        <img src={placeholder} alt="placeholder_photo" />
      </div>
    </>
  ) : (
      <>
        <RedTitleCardOld title={title} displayed={displayed} />
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          {images.map(image => (
            <div className="size-adjustment" key={image}>
              <img
                src={image}
                alt={title}
              />
            </div>
          ))}
        </Carousel>
      </>
    );
}

export default ImageCarouselOldArchive;