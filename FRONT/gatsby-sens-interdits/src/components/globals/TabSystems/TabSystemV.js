import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import "./tabSystemV.css";

export default function TabSystemV({ tabContent }) {
  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");

  function handleOnClick(e) {
    setActiveTabContent(e.target.id);
    setActiveClass(e.target.id);
  }

  return (
    <div className="tab-moduleV">
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
            {tab.content}
          </div>
        </div>
      ))}
    </div>
  );
}

