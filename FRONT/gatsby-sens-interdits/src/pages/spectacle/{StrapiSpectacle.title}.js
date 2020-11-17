import { graphql } from "gatsby";
import React from "react";
import "./Index.css";

import SpectacleInfos from "../../components/specifics/Spectacle/SpectacleInfos.js";
import TabSystemH from "../../components/globals/TabSystems/TabSystemH";
import Thumbnail from "../../components/globals/Thumbnail";
import CalendarLarge from "../../components/globals/Calendar/CalendarLarge";
import ImageCarousel from "../../components/globals/Carousel/ImageCarousel";

import photoTest from "./../../assets/img/img-sens-interdit.jpg";

export default function SpectaclePage({ data }) {
  const spectacle = data.spectacle;

  console.log(spectacle.tab_element.length === 0); // true or false

  const imageArray =
    spectacle.carousel !== null
      ? spectacle.carousel.image.map(image => image.image)
      : false;

  return (
    <div className="global-spectacle-page">
      <ImageCarousel
        title={spectacle.title}
        images={imageArray}
        displayed={true}
      />
      <div className="content-spectacle-page">
        <div className="country-label">
          <p>Kosovo</p>
        </div>
        <CalendarLarge />
        <SpectacleInfos />
        {spectacle.tab_element.lenght === 0 ? (
          ""
        ) : (
          <TabSystemH tabContent={spectacle.tab_element} />
        )}
        <div className="content">
          <p className="content-title to-uppercase">Autour du spectacle</p>
          <div className="display-mini-tab">
            <Thumbnail
              affiche={photoTest}
              date="26 Octobre"
              country="Russie"
              name="Titre du spectacle"
              team="Metteur en scène"
            />
            <Thumbnail
              affiche={photoTest}
              date="26 Octobre"
              country="Russie"
              name="Titre du spectacle"
              team="Metteur en scène"
            />
          </div>
        </div>
      </div>
      <p>{spectacle.title} </p>
    </div>
  );
}

// This query needs to be dynamic based on the strapiId passed in via context in gatsby-node.js
export const query = graphql`
  query($id: String!) {
    spectacle: strapiSpectacle(id: { eq: $id }) {
      title
      id
      strapiId
      duration
      carousel {
        id
        image {
          image {
            url
            name
          }
          id
        }
      }
      tab_element {
        content
        id
        title
        credited_image {
          credit
          id
          image {
            url
          }
        }
      }
    }
  }
`;
