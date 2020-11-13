import React, { useState, useEffect } from "react";
import AxiosCallToApi from "../Function/AxiosCallToApi.js";
import picto from "../../../assets/img/picto.svg";
import "./tabSystemV.css";

function TabSystemV() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [contentTab, setContentTab] = useState([]);
  // const [activeTabContent, setActiveTabContent] = useState("");
  // const [activeClass, setActiveClass] = useState("");

  useEffect(() => {
    AxiosCallToApi(tabSystemUri, tabSystemDataTreatmeant);
  }, []);

  // const tabSystemUri = "spectacles";

  function tabSystemDataTreatmeant(data) {
    // setContentTab(data[0].tab_element);
    // setActiveTabContent(data[0].tab_element[0].title);
    // setActiveClass(data[0].tab_element[0].title);
    // setIsLoading(false);
  }

  function handleOnClick(e) {
    // setActiveTabContent(e.target.id);
    // setActiveClass(e.target.id);
  }

  return isLoading ? (
    <p>Loading please wait </p>
  ) : (
      <div className="tab-moduleV">
        {contentTab.map(tab => (
          <div className="tab-moduleV">
            <div className="tab-titleV">
              <img
                src={picto}
                alt="pictogramme cliquable"
                weight="30"
                height="30"
              />
              <a
                href={handleOnClick}
                id={tab.title}
                className={
                  "tab-link " + (activeClass === tab.title ? "active" : "")
                }
              >
                <h3>{tab.title}</h3>
              </a>
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

export default TabSystemV;
