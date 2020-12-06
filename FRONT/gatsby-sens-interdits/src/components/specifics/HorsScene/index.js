import React, { useState, useEffect } from "react";
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
dayjs.locale("fr");
dayjs.extend(localizedFormat);

export default function HorsScenePage() {
  const strapiHorsSceneQuery = useStaticQuery(graphql`
    query strapiHorsSceneQuery {
      allStrapiHorsSceneTab {
        nodes {
          horsscenetab {
            content
            title
            id
          }
        }
      }
      strapiHorsScenePage {
        Title
        id
        content
      }
      allStrapiSpectacle {
        nodes {
          title
          strapiId
          horaires {
            Day
          }
          country
          place
          author
          thumbnail {
            internal {
              description
            }
          }
          type_of_events {
            category
          }
        }
      }
    }
  `);

  const horsSceneTabQuery =
    strapiHorsSceneQuery.allStrapiHorsSceneTab.nodes[0].horsscenetab;
  const horsScenePageQuery = strapiHorsSceneQuery.strapiHorsScenePage;
  const spectacleQuery = strapiHorsSceneQuery.allStrapiSpectacle.nodes;

  ////
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
      return <h3>Loading ...</h3>;
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
            name={spectacle.title}
            id={spectacle.strapiId}
            team={spectacle.author ? spectacle.author : "inconnu"}
            url={"/spectacle/" + sluggify(spectacle.title)}
          />
        );
      });
    }
  };
  ////

  return (
    <div>
      <ImageCarousel /> {/* TODO : passer les props pour ce composant */}
      <div className="container">
        <div className="red-arrow"></div>
        <div id="hors-scene-pres">
          <div id="hors-scene-pres-content">
            <h3 className="to-uppercase">{horsScenePageQuery.Title}</h3>
            <p>{horsScenePageQuery.content}</p>
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
