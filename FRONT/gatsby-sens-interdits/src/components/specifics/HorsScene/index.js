import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./index.css";
import "../../../assets/styles/global.css";

import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
// import TabSystemHorsScene from "../../globals/TabSystems/TabSystemHorsScene";
import TabSystemV from "../../globals/TabSystems/TabSystemV"

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
    }
  `)

  const tabContent = strapiHorsSceneQuery.allStrapiHorsSceneTab.nodes[0].horsscenetab;
  console.log ("tabcontent", tabContent)

  return (
    <div>
      <ImageCarousel/> {/* TODO : passer les props pour ce composant */}
      <div id="hors-scene-page">
        <div id="hors-scene-pres">
          <div>
            <h3 className=".to-uppercase">{strapiHorsSceneQuery.strapiHorsScenePage.Title}</h3>
            <p>{strapiHorsSceneQuery.strapiHorsScenePage.content}</p>
          </div>
          <div id="hors-scene-Cal">
            <CalendarLarge />
          </div>
        </div>
        <div id="hors-scene-tabsystem">
            {/* <TabSystemHorsScene tabContent={tabContent} />    */}
            <TabSystemV tabContent={tabContent} />                     
        </div> 
      </div>
    </div>
  );
}

 
