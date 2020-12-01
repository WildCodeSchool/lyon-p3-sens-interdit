import { graphql } from "gatsby";
import React, { useContext } from "react";
import "./spectacle.css";

import SpectacleInfos from "../components/specifics/Spectacle/SpectacleInfos.js";
import TabSystemH from "../components/globals/TabSystems/TabSystemH";
import Thumbnail from "../components/globals/Thumbnail";
import CalendarLarge from "../components/globals/Calendar/CalendarLarge";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";


import photoTest from "../assets/img/img-sens-interdit.jpg";
import LanguageContext from "../components/context/LanguageContext";

export default function SpectaclePage({ data }) {
  const { english } = useContext(LanguageContext);

  const spectacle = data.spectacle;

  const imageArray =
    spectacle.carousel !== null
      ? spectacle.carousel.image.map(image => image.image)
      : false;

  return (
    <div className="global-spectacle-page">
      
      <ImageCarousel
        title={
          english && spectacle.title_en ? spectacle.title_en : spectacle.title
        }
        images={imageArray}
        displayed={true}
      />
      <div className="content-spectacle-page">
        <div className="country-label">
          <p>
            {english && spectacle.country_en
              ? spectacle.country_en
              : spectacle.country}
          </p>
        </div>
        <CalendarLarge />
        <SpectacleInfos
          tarif={spectacle.tarif}
          country={
            english && spectacle.country_en
              ? spectacle.country_en
              : spectacle.country
          }
          duration={
            english && spectacle.duration_en
              ? spectacle.duration_en
              : spectacle.duration
          }
          partners={spectacle.partners}
          accessibility={spectacle.accessibility}
          info={
            english && spectacle.spectacle_info_en
              ? spectacle.spectacle_info_en
              : spectacle.spectacle_info
          }
        />
        {spectacle.tab_element.lenght === 0 ? (
          ""
        ) : (
          <TabSystemH
            tabContent={
              english && spectacle.tab_element_en
                ? spectacle.tab_element_en
                : spectacle.tab_element
            }
          />
        )}
        <div className="content">
          <div className="red-arrow-spectacle"></div>
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
    </div>
  );
}

// This query needs to be dynamic based on the id of the spectacle
// (example: id="test-spectacle" --> the route will be: http://localhost:8000/spectacle/test-spectacle/
export const query = graphql`
  query($id: String!) {
    spectacle: strapiSpectacle(id: { eq: $id }) {
      title
      title_en
      id
      strapiId
      duration
      duration_en
      country
      country_en
      place
      place_en
      info
      info_en
      tarif {
        tarif
        category {
          category
        }
      }
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
      tab_element_en {
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
      spectacle_info {
        id
        info
      }
      spectacle_info_en {
        id
        info
      }
      accessibility {
        url
        name
        id
      }
      partners {
        url
        id
        image {
          url
        }
      }
    }
  }
`;
