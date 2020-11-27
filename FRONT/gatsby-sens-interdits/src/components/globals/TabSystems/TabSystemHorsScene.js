//Tab system page Hors Scene
import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import Thumbnail from "../Thumbnail";
import "./tabSystemV.css";


export default function TabSystemHorsScene(props) {
  // console.log("prop tabsy hs", props)
    const tabContent = props.tabContent;
    console.log ('prop tab system hs ', tabContent)

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
              <p>{tab.content}</p>
              <div className="Thumbnail-list"> 
                {templinktoevent.map((item)=> (<Thumbnail/>))}
              </div>
            </div>
          </div>
        ))} 
      </div>
    );
  }
  
  