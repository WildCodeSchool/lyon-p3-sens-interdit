import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

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

export default function TabSystemV ({tabContent, spectacleQuery}) {

  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");

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
            {tab.credited_image !== undefined ? (
              <DisplayPicture imageContent={tab.credited_image} />
            ) : ""}
            <div className="thumbnail-list"> 
              {spectacleQuery.map (spect => 
                        spect.type_of_events.map(cat => 
                              cat.category === tab.title ? 
                                  <Thumbnail 
                                                  name={spect.title} 
                                                  team={spect.author === null ? "" : spect.author}
                                                  country={spect.country === null ? "" : spect.country}
                                                  // date={}
                                                  // affiche={}
                                                  // url={}
                                                />
                              : ""
                        )
                      )
               }
            </div>
          </div>
        </div>
      ))} 
    </div>
  );
}

