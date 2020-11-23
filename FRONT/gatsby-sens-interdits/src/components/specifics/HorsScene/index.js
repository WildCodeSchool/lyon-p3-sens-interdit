import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import "./index.css";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import TabSystemHorsScene from "../../globals/TabSystems/TabSystemHorsScene";

export default function HorsScenePage() {

  // const {strapiHorsscenepage} = useStaticQuery(graphql`
  //   query {
  

      //   }

  //   }`)


    
  return (
    <div>
      <ImageCarousel/> {/* TODO : passer les props pour ce composant */}
      <div id="hors-scene-page">
        <div>
          <CalendarLarge />
        </div>
        <div >
            <h3>HORS-SCENE</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
              massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
              nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
              sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
              consequat in, pretium a, enim. Pellentesque congue. Ut in risus
              volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
              Praesent egestas leo in pede. Praesent blandit odio eu enim.
              Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
              Maecenas adipiscing ante non diam sodales hendrerit.
            </p>
            <TabSystemHorsScene/>
        </div>
      </div>
    </div>
  );
}

 
