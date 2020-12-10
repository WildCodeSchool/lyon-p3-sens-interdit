import React, { useContext } from "react";
import { graphql } from "gatsby";
import "./spectacle.css";
import "../assets/styles/global.css";

import SpectacleInfos from "../components/specifics/Spectacle/SpectacleInfos.js";
import TabSystemH from "../components/globals/TabSystems/TabSystemH";
import Thumbnail from "../components/globals/Thumbnail";
import SpectacleCalendar from "../components/globals/Calendar/SpectacleCalendar";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";

import photoTest from "../assets/img/img-sens-interdit.jpg";
import LanguageContext from "../components/context/LanguageContext";

export default function SpectaclePage({ data }) {
  const { language, LANG, checkEnContext } = useContext(LanguageContext);

  const spectacle = data.spectacle;

  const imageArray =
    spectacle.carousel !== null
      ? spectacle.carousel.image.map(image => image.image)
      : false;

  return (
    <div className="global-spectacle-page">
      <ImageCarousel
        title={checkEnContext(spectacle.title, spectacle.title_en)}
        images={imageArray}
        displayed={true}
        booking={data.spectacle.reserver}
      />
      <div className="content-spectacle-page container">
        <div className="country-label">
          <p>{checkEnContext(spectacle.country, spectacle.country_en)}</p>
        </div>
        <SpectacleCalendar className="spectacle-calendar" spectacle={spectacle} />
        <SpectacleInfos
          language={language}
          tarif={spectacle.tarif}
          country={checkEnContext(spectacle.country, spectacle.country_en)}
          duration={checkEnContext(spectacle.duration, spectacle.duration_en)}
          partners={spectacle.partners}
          accessibility={spectacle.accessibility}
          info={checkEnContext(
            spectacle.spectacle_info,
            spectacle.spectacle_info_en
          )}
           className="spectacle-infos-content"
        />
        {spectacle["tab_element" + LANG] === 0 ? (
          ""
        ) : (
          <TabSystemH
            tabContent={checkEnContext(
              spectacle.tab_element,
              spectacle.tab_element_en
            )}
          />
        )}
        <div className="content">
          <div className="red-arrow-spectacle"></div>
          <p className="content-title to-uppercase">
            {language === "fr" ? "Autour du spectacle" : "More"}
          </p>
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

export const query = graphql`
  query($id: String!) {
    spectacle: strapiSpectacle(id: { eq: $id }) {
      title
      title_en
      id
      reserver
      horaires {
        Day
      }
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
