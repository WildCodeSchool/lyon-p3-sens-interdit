import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import "./tabSystemV.css";
import Thumbnail from "../Thumbnail";

function DisplayPicture({ imageContent }) {
  return (
    <>
      <p className="institut-partners">Partenaires Institutionnels</p>
      <div className="display-img-tab-element">
        {imageContent.map(img => (
          <div key={img.id}>
            <p>{img.credit}</p>
            {img.image.map(elem => (
              <img
                key={elem.url}
                src={process.env.GATSBY_API_URL + elem.url}
                alt="noalt"
                width="150"
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default function TabSystemV({ tabContent }) {

  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");
  const templinktoevent = [{categorie:"Débat", event:"event1"},{categorie:"Débat", event:"event2"},{categorie:"Partenaires", event:"event4"},{categorie:"Expositions", event:"event4"},{categorie:"Concerts", event:"event5"},{categorie:"Débat", event:"event6"}]


  function handleOnClick(e) {
    setActiveTabContent(e.target.id);
    setActiveClass(e.target.id);
  }

  return (
    <div className="tab-moduleV">
      {tabContent.map(tab => (
        <div className="tab-moduleV" key={tab.id}>
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
            {tab.content}
            {tab.credited_image[0] !== undefined ? (
              <DisplayPicture imageContent={tab.credited_image} />
            ) : ""}
            <div className="Thumbnail-list"> 
                {templinktoevent.map((item)=> (<Thumbnail/>))}
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

