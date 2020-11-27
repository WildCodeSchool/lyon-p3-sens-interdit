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
      squaremenu {
        id
        title
        url
        image {
          url
        }
      }
      description
    }
  }`)
  return (

    <>
      <ImageCarousel />

      <div className="global-homepage">
        {strapiHomepage.description ?
          <div>
            <div className="red-arrow"></div>
            <div className="description-content">
              {strapiHomepage.description}
            </div>
          </div>

          : null}


        <div className="content-homepage">
          {strapiHomepage.squaremenu.map(elem => (
            <DisplayTabMenu key={elem.id} title={elem.title} image={elem.image[0].url} url={process.env.GATSBY_API_URL + elem.url} />
          ))}
        </div>
      </div>
    </>
  );
}
