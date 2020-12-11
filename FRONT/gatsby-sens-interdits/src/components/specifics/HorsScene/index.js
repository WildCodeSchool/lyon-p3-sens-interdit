import React, { useState, useEffect, useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css";
import "../../../assets/styles/global.css";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import Thumbnail from "../../globals/Thumbnail";
import TabSystemV from "../../globals/TabSystems/TabSystemV";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { sluggify } from "../../../utils/Sluggify";
import SEO from "../../../components/SEO/seo";
import LanguageContext from "../../context/LanguageContext";

dayjs.locale("fr");
dayjs.extend(localizedFormat);

export default function HorsScenePage() {
  const [random, setRandom] = useState(0);

  const { language, checkEnContext , LANG} = useContext(LanguageContext);

  const strapiHorsSceneQuery = useStaticQuery(graphql`
    query strapiHorsSceneQuery {
      allStrapiHorsSceneTab {
        nodes {
          horsscenetab {
            content
            content_en
            title
            title_en
            id
          }
        }
      }
      strapiHorsScenePage {
        title
        title_en
        id
        content
        content_en
        carousel {
          id
          image {
            id
            image {
              url
            }
          }
        }
        seo_horscenepage {
          description
          description_en
          image {
            url
          }
          image_en {
            url
          }
          title
          title_en
        }
      }
      allStrapiSpectacle {
        nodes {
          title
          title_en
          reserver
          strapiId
          archive
          horaires {
            Day
          }
          country
          country_en
          place
          place_en
          author
          thumbnail {
            internal {
              description
            }
          }
          type_of_events {
            category
            category_en
          }
          carousel {
            id
            image {
              id
              image {
                url
              }
            }
          }
        }
      }
    }
  `);

  const horsSceneTabQuery =
    strapiHorsSceneQuery.allStrapiHorsSceneTab.nodes[0].horsscenetab;
  const horsScenePageQuery = strapiHorsSceneQuery.strapiHorsScenePage;
  const spectacleQuery = strapiHorsSceneQuery.allStrapiSpectacle.nodes;

  let seo = horsScenePageQuery.seo_horscenepage;
  const title = LANG === 'en' ?  seo.title_en : seo.title;
  const description = LANG === 'en' ? seo.description_en: seo.description;
  const image = LANG === 'en' ? seo.image[0].url_en : seo.image[0].url;

  /*CAROUSEL*/
  const imageArray =
    strapiHorsSceneQuery.strapiHorsScenePage.carousel !== null
      ? strapiHorsSceneQuery.strapiHorsScenePage.carousel.image.map(
          image => image.image
        )
      : false;

  const redSquareArray =
    strapiHorsSceneQuery.allStrapiSpectacle.nodes[0].carousel !== null
      ? strapiHorsSceneQuery.allStrapiSpectacle.nodes.filter(
        spec =>
          spec.type_of_events.length !== 0 &&
          spec.type_of_events.category !== "Spectacles"
      )
      : false;


  useEffect(() => {
    setRandom(Math.floor(Math.random() * Math.floor(redSquareArray.length)));
  }, []);

  const [list, setList] = useState("");

  const fullList = [];

  spectacleQuery.map(spectacle => {
    if (spectacle.horaires[0]) {
      return fullList.push(...listTreatment(spectacle));
    } else {
      return fullList.push(spectacle);
    }
  });

  function listTreatment(spectacle) {
    let treatment = [];
    spectacle.horaires.forEach(date => {
      let data = { ...spectacle };
      data.day = date.Day;

      treatment.push(data);
    });

    return treatment;
  }

  const majState = () => {
    const filteredList = fullList.filter(spectacle => {
      if (spectacle.day) {
        return dayjs(spectacle.day).isSame(dayjs(), "day");
      } else {
        return false;
      }
    });
    setList(filteredList);
  };

  useEffect(() => {
    majState();
  }, [spectacleQuery]);

  function dateFilter(date) {
    const filteredList = fullList.filter(spectacle => {
      if (spectacle.day) {
        return dayjs(spectacle.day).isSame(dayjs(date), "day");
      } else {
        return false;
      }
    });

    setList(filteredList);
  }

  const affichageList = () => {
    if (list.length === 0 || list === undefined) {
      return (
        <h3>
          {language === "fr"
            ? "Il n'y a pas d'évenement programmé ce jour"
            : "There is no event programmed for this date"}
        </h3>
      );
    } else {
      return list.map(spectacle => {
        return (
          <Thumbnail
            key={spectacle.title + spectacle.day}
            affiche={
              spectacle.thumbnail
                ? spectacle.thumbnail.internal.description.split('"')[1]
                : photoTest
            }
            date={
              spectacle.day
                ? dayjs(spectacle.day).format("ddd D MMM à HH:mm")
                : "inconnue"
            }
            country={spectacle.country ? spectacle.country : "inconnu"}
            name={(spectacle.title)}
            id={spectacle.strapiId}
            team={spectacle.author ? spectacle.author : "inconnu"}
          />
        );
      });
    }
  };

  return (
    <div>
      <SEO title={title !== undefined ? title : checkEnContext(horsScenePageQuery.title,horsScenePageQuery.title_en)}
        description={description !== undefined ? description : ""}
        image={image !== undefined ? image : ""} />
      <ImageCarousel
        images={imageArray}
        title={checkEnContext(
          redSquareArray[random].title,
          redSquareArray[random].title_en
        )}
        booking={redSquareArray[random].reserver}
        country={checkEnContext(
          redSquareArray[random].country,
          redSquareArray[random].country_en
        )}
        displayed={true}
      />
      <div className="container">
        <div className="red-arrow"></div>
        <div id="hors-scene-pres">
          <div id="hors-scene-pres-content">
            <h3 className="to-uppercase">
              {checkEnContext(
                horsScenePageQuery.title,
                horsScenePageQuery.title_en
              )}
            </h3>
            <p>
              {checkEnContext(
                horsScenePageQuery.content,
                horsScenePageQuery.content_en
              )}
            </p>
          </div>
          <div id="hors-scene-Cal">
            <CalendarLarge dateSetter={dateFilter} />
            <div className="hors-scene-thumbnail"> {affichageList(list)} </div>
          </div>
        </div>
        <div id="hors-scene-tabsystem">
          <TabSystemV
            tabContent={horsSceneTabQuery}
            spectacleQuery={spectacleQuery}
          />
        </div>
      </div>
    </div>
  );
}
