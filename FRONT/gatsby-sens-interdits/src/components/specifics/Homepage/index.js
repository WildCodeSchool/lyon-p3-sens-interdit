import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./Index.css";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu.js";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";

export default function Homepage() {
  const { strapiHomepage } = useStaticQuery(graphql`
  query MyQueryHome {
    strapiHomepage {
      carousel {
        id
        image {
          id
          image {
            url
          }
        }
      }
      id
      
      description
    }
  }`)
  const imageArray =
    strapiHomepage.carousel !== null
      ? strapiHomepage.carousel.image.map(image => image.image)
      : false;
  return (

    <>
      <ImageCarousel images={imageArray} />

      <div className="global-homepage">
        {strapiHomepage.description ?
          <div>
            <div className="red-arrow"></div>
            <div className="description-content">
              {strapiHomepage.description}
            </div>
          </div>

          : null}


        {/* <div className="content-homepage">
          {strapiHomepage.squaremenu.map(elem => (
            <DisplayTabMenu key={elem.id} title={elem.title} image={elem.image[0].url} url={elem.url} />
          ))}
        </div> */}
      </div>
    </>
  );
}
