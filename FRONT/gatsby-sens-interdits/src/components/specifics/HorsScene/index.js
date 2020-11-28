import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./index.css";
import "../../../assets/styles/global.css";

import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import TabSystemV from "../../globals/TabSystems/TabSystemV"

export default function HorsScenePage () {

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
  `)

  const horsSceneTabQuery= strapiHorsSceneQuery.allStrapiHorsSceneTab.nodes[0].horsscenetab;
  const horsScenePageQuery = strapiHorsSceneQuery.strapiHorsScenePage;
  const spectacleQuery = strapiHorsSceneQuery.allStrapiSpectacle.nodes;
  // console.log ('horsSceneTabQuery', [horsSceneTabQuery]);
  // console.log ('spectacleQuery', spectacleQuery);



 

  return (
    <div>
      <ImageCarousel/> {/* TODO : passer les props pour ce composant */}
      <div id="hors-scene-page">
        <div className="red-arrow"></div>
        <div id="hors-scene-pres">
          <div>
            <h3 className="to-uppercase">{horsScenePageQuery.Title}</h3>
            <p>{horsScenePageQuery.content}</p>
          </div>
          <div id="hors-scene-Cal">
            <p>A update une fois le composant finit</p>
            <CalendarLarge />
          </div>
        </div>
        <div id="hors-scene-tabsystem">
            <TabSystemV tabContent={horsSceneTabQuery} spectacleQuery={spectacleQuery} />                     
        </div> 
      </div>
    </div>
  );
}

 
