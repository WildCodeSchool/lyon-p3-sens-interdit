//Tab system page Hors Scene
import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import Thumbnail from "../Thumbnail";
import "./tabSystemV.css";


export default function TabSystemHorsScene() {

    const tabContent =[{title: "Débats"}, {title: "Expositions"},{title: "Projections"}, {title: "Concerts"},{title: "Performances"}, {title: "Partenaires"}];
    const templinktoevent = [{categorie:"Débat", event:"event1"},{categorie:"Débat", event:"event2"},{categorie:"Partenaires", event:"event4"},{categorie:"Expositions", event:"event4"},{categorie:"Concerts", event:"event5"},{categorie:"Débat", event:"event6"}]
    const [activeTabContent, setActiveTabContent] = useState("");
    const [activeClass, setActiveClass] = useState("");
  
    function handleOnClick(e) {
      setActiveTabContent(e.target.id);
      setActiveClass(e.target.id);
    }
  
    return (
      <div className="tab-module-HS">
        {tabContent.map(tab => (
          <div className="tab-moduleV">
            <div className="tab-titleV">
              <img
                src={picto}
                alt="pictogramme cliquable"
                weight="30"
                height="30"
              />
              <h3
                id={tab.title}
                className={
                  "tab-link " + (activeClass === tab.title ? "active" : "")
                }
                onClick={handleOnClick}
                onKeyDown={handleOnClick}
              >
                {tab.title}
              </h3>
            </div>
            <div
              id="tab-contentV"
              className={
                activeTabContent === tab.title ? "active-tab" : "disabled-tab"
              }
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
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
              Maecenas adipiscing ante non diam sodales hendrerit.</p>
              <div className="Thumbnail-list"> 
                {templinktoevent.map((item)=> (<Thumbnail/>))}
              </div>
            </div>
          </div>
        ))} 
      </div>
    );
  }
  
  