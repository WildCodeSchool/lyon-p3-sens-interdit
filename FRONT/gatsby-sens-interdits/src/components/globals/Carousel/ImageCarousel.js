import React from "react";
import "./ImageCarousel.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { graphql, useStaticQuery } from "gatsby";

export default function ImageCarousel() {
  const { strapiSpectacle } = useStaticQuery(graphql`
    query MyQuery {
      strapiSpectacle {
        carousel {
          id
          image {
            id
            image {
              name
              url
            }
          }
        }
        title
      }
    }
  `);

  const imgUrlTest =
    "https://images.unsplash.com/photo-1518365658347-c4906efc5636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=923&q=80";
  return (
    <div className="carousel-wrapper">
      <div className="red"></div>
      <div className="image-text">
        <p>{strapiSpectacle.title}</p>
        <button>Réserver</button>
      </div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {strapiSpectacle.carousel.image.map(image => (
          <div className="size-adjustment" id={image.image.name}>
            <img src={imgUrlTest} alt={image.image.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
