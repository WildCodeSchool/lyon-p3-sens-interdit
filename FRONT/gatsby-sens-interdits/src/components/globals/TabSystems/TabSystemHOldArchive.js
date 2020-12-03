import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import picto from "../../../assets/img/picto.svg";
import "./tabSystemH.css";

export default function TabSystemHOldArchive({ tabContent }) {
  const [activeTabContent, setActiveTabContent] = useState("");

  function handleOnClick(e) {
    setActiveTabContent(e.target.id);
    // setActiveClass(e.target.id);
  }
  return (
    <div className="tab-module">
      <div>
        {tabContent.map(tab => (
          <div className="tab-title" key={tab.id}>
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
                "tab-link " + (activeTabContent === tab.title ? "active" : "")
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
        {tabContent.map(tab => (
          <div key={tab.id}>
            <div
              id="tab-content"
              className={
                activeTabContent === tab.title ? "active-tab" : "disabled-tab"
              }
            >
              <ReactMarkdown source={tab.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
