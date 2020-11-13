import React, { useState, useEffect } from "react";
import AxiosCallToApi from "../AxiosCallToApi";
import picto from "../../../img/picto.svg";
import "./tabSystemH.css";

function TabSystemH() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentTab, setContentTab] = useState([]);
  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");

  useEffect(() => {
    AxiosCallToApi(tabSystemUri, tabSystemDataTreatmeant);
  }, []);

  const tabSystemUri = "spectacles";

  function tabSystemDataTreatmeant(data) {
    setContentTab(data[0].tab_element);
    setActiveTabContent(data[0].tab_element[0].title);
    setActiveClass(data[0].tab_element[0].title);
    setIsLoading(false);
  }

  function handleOnClick(e) {
    setActiveTabContent(e.target.id);
    setActiveClass(e.target.id);
  }

  return isLoading ? (
    <p>Loading please wait </p>
  ) : (
    <div className="tab-module">
      <div>
        {contentTab.map(tab => (
          <div className="tab-title">
            <img
              src={picto}
              alt="pictogramme cliquable"
              weight="30"
              height="30"
            />
            <h3
              id={tab.title}
              className={
                "tab-link" + " " + (activeClass === tab.title ? "active" : "")
              }
              id={tab.title}
              onClick={handleOnClick}
            >
              {tab.title}
            </h3>
          </div>
        ))}
      </div>
      <div>
        {contentTab.map(tab => (
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

export default TabSystemH;
