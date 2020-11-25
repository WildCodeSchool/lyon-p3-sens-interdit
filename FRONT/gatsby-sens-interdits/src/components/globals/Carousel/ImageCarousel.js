import React from "react";
import RedTitleCard from "./RedTitleCard";
import "./ImageCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import placeholder from "../../../assets/img/placeholder-photo-slider.jpg";

function ImageCarousel({ title, images, displayed }) {
  return !images ? (
    <>
      <div className="carousel-loading">
        <img src={placeholder} alt="placeholder_photo" />
      </div>
    </>
  ) : (
      <>
        <RedTitleCard title={title} displayed={displayed} />
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          {images.map(image => (
            <div className="size-adjustment">
              <img
                src={process.env.GATSBY_API_URL + image[0].url}
                alt={image[0].name}
              />
            </div>
          ))}
        </Carousel>
      </>
    );
}

export default ImageCarousel;
