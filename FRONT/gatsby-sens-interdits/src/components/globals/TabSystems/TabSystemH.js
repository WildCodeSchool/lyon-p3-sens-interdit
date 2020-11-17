import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import "./tabSystemH.css";

import { graphql, useStaticQuery } from "gatsby";

export default function TabSystemH() {
  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");

  function handleOnClick(e) {
    setActiveTabContent(e.target.id);
    setActiveClass(e.target.id);
  }

  const { strapiSpectacle } = useStaticQuery(graphql`
    query MyQueryTabContent {
      strapiSpectacle {
        tab_element {
          credited_image {
            credit
            id
            image {
              name
              url
              alternativeText
            }
          }
          title
          content
          image {
            url
            name
          }
        }
      }
    }
  `);

  return (
    <div className="tab-module">
      <div>
        {strapiSpectacle.tab_element.map(tab => (
          <div className="tab-title">
            <img
              src={picto}
              alt="pictogramme cliquable"
              weight="30"
              height="30"
            />
            <h3
              title="action"
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
        ))}
      </div>
      <div>
        {strapiSpectacle.tab_element.map(tab => (
          <div
            id="tab-content"
            className={
              activeTabContent === tab.title ? "active-tab" : "disabled-tab"
            }
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
