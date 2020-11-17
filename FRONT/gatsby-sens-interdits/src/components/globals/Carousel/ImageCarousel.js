import React from "react";
import RedTitleCard from "./RedTitleCard";
import "./ImageCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import placeholder from "../../../assets/img/placeholder-photo-slider.jpg";

function ImageCarousel(props) {
  return props.isLoading ? (
    <>
      <div className="carousel-loading">
        <img src={placeholder} alt="placeholder_photo" />
      </div>
    </>
  ) : (
    <>
      <RedTitleCard title={props.title} displayed={props.displayed} />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {props.images.map(image => (
          <div className="size-adjustment">
            <img src={"http://localhost:1337" + image.url} alt={image.name} />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default ImageCarousel;
