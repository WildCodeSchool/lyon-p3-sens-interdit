import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import "./tabSystemH.css";

function DisplayPicture({ imageContent }) {
  return (
    <>
      {imageContent.map(img => (
        <div key={img.id}>
          <p>{img.credit}</p>
          {img.image.map(elem => (
            <img
              src={process.env.GATSBY_API_URL + elem.url}
              alt="noalt"
              width="150"
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default function TabSystemH({ tabContent }) {
  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");

  function handleOnClick(e) {
    setActiveTabContent(e.target.id);
    setActiveClass(e.target.id);
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
        {tabContent.map(tab => (
          <div key={tab.id}>
            {/* <div
              id="tab-content"
              className={
                activeTabContent === tab.title ? "active-tab" : "disabled-tab"
              }
            >
              <p>{tab.content}</p>
              {tab.credited_image.lenght !== 0 ? (
                <DisplayPicture imageContent={tab.credited_image} />
              ) : null}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
