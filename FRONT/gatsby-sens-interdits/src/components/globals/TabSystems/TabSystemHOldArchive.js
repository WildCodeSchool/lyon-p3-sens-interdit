import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import tabSystemClick from "../../../utils/tab-system";
import picto from "../../../assets/img/picto.svg";
import "./tabSystemH.css";

export default function TabSystemHOldArchive({ 
  tabContent
   }) {
  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);

  function handleOnClick(e) {
    if (firstLoad) {
      setFirstLoad(false);
    }
    tabSystemClick(e, setActiveTabContent, setActiveClass);
  }
  return (
    <div className="tab-module">
      <div>
        {tabContent.map((tab,i) => (
          <div className={
              "tab-title " +
              (activeClass === tab.id || (firstLoad && i === 0) ? "active" : "")
            }
            key={tab.id}
            id={"tab-link_" + tab.id}
            data-id={tab.id}
            onClick={handleOnClick}
            onKeyDown={() => {}}
            role="button"
            >
            <img
              src={picto}
              alt="pictogramme cliquable"
              weight="30"
              height="30"
            />
            <h3
              id={tab.id}
              className="tab-link "
            >
              {tab.title}
            </h3>
          </div>
        ))}
      </div>
      <div>
        {tabContent.map((tab, i) => (
          <div key={tab.id}>
            <div
              className={
                "tab-content " +
                (activeTabContent === tab.id || (firstLoad && i === 0)
                  ? "active-tab"
                  : "disabled-tab")
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
