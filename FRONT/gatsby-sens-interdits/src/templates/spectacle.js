import React, { useContext } from "react";
import { graphql } from "gatsby";
import "./spectacle.css";
import "../assets/styles/global.css";
import SEO from "../components/SEO/seo";

import SpectacleInfos from "../components/specifics/Spectacle/SpectacleInfos.js";
import TabSystemH from "../components/globals/TabSystems/TabSystemH";
import Thumbnail from "../components/globals/Thumbnail";
import SpectacleCalendar from "../components/globals/Calendar/SpectacleCalendar";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";

import photoTest from "../assets/img/img-sens-interdit.jpg";
import LanguageContext from "../components/context/LanguageContext";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

export default function SpectaclePage({ data }) {
  const { language, LANG, checkEnContext } = useContext(LanguageContext);

  const spectacle = data.spectacle;

  const imageArray =
    spectacle.carousel !== null
      ? spectacle.carousel.image.map(image => image.image)
      : false;

  const description = spectacle.info;
  const description_en = spectacle.info_en;
  const image = spectacle.carousel.image[0].image[0].url;

  // navigating between spectacle

  const thisID = spectacle.strapiId;
  const listAll = data.allStrapiSpectacle.nodes;
  const suivSpect = listAll.find(node => node.strapiId === thisID + 1);
  const precSpect = listAll.find(node => node.strapiId === thisID - 1);

  return (
    <div className="global-spectacle-page">
      <SEO
        title={checkEnContext(spectacle.title, spectacle.title_en)}
        description={checkEnContext(description, description_en)}
        image={image !== undefined ? image : ""}
      />
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
        <SpectacleCalendar
          className="spectacle-calendar"
          spectacle={spectacle}
        />
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
            {precSpect != undefined ? (
              <Thumbnail
                id={precSpect.strapiId}
                key={precSpect.id}
                country={precSpect.country}
                date={dayjs(spectacle.horaires[0].Day).format("ddd D MMM à HH:mm")}
                name={precSpect.title}
                team={precSpect.author}
                affiche={
                  `${process.env.GATSBY_IMAGE_URL}` +
                  precSpect.carousel.image[0].image[0].url
                }
              />
            ) : (
              ""
            )}
            {suivSpect != undefined ? (
              <Thumbnail
                id={suivSpect.strapiId}
                key={suivSpect.id}
                date={dayjs(spectacle.horaires[0].Day).format("ddd D MMM à HH:mm")}
                country={suivSpect.country}
                name={suivSpect.title}
                team={suivSpect.author}
                affiche={
                  `${process.env.GATSBY_IMAGE_URL}` +
                  suivSpect.carousel.image[0].image[0].url
                }
              />
            ) : (
              ""
            )}
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
          info
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
    allStrapiSpectacle {
      nodes {
        id
        strapiId
        title
        country
        carousel {
          image {
            image {
              url
            }
          }
        }
        author
        horaires {
          Day
        }
      }
    }
  }
`;
