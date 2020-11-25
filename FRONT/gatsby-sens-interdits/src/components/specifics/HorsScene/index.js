import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import TabSystemHorsScene from "../../globals/TabSystems/TabSystemHorsScene";

export default function HorsScenePage() {

  const {strapiHorsScenePage} = useStaticQuery(graphql`
      query HorsScene {
        strapiHorsScenePage {
          Title
          content
          }
      }
  `)
  

    
  return (
    <div>
      <ImageCarousel/> {/* TODO : passer les props pour ce composant */}
      <div id="hors-scene-page">
        <div>
          <CalendarLarge />
        </div>
        <div >
            <h3>{strapiHorsScenePage.Title}</h3>
            <p>{strapiHorsScenePage.content}</p>
            <TabSystemHorsScene/>
        </div>
      </div>
    </div>
  );
}

 
