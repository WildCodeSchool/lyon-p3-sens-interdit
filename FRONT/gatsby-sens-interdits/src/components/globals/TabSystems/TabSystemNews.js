import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import "./TabSystemNews";

function DisplayPicture({ imageContent }) {
  return (
    <>
      {imageContent.map(img => (
        <div>
          <p>{img.credit}</p>
          {img.image.map(elem => (
            <img
              src={"http://localhost:1337" + elem.url}
              alt="noalt"
              width="150"
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default function TabSystemNews({ tabContent }) {
  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");

  function handleOnClick(e) {
    setActiveTabContent(e.target.id);
    setActiveClass(e.target.id);
  }

  return (
    <div className="tab-news-module">
      <div>
        {tabContent.map(tab => (
          <div className="tab-news-title">
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
                "tab-news-link " + (activeClass === tab.title ? "active-news" : "")
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
          <>
            <div
              id="tab-news-content"
              className={
                activeTabContent === tab.title ? "active-tab-news" : "disabled-tab-news"
              }
            >
              <h4>25 octobre 2018</h4>
              <h2>krystian Lupa denonce la situation politique en pologne</h2>
              <p>{tab.content}</p>
              {tab.credited_image.lenght !== 0 ? (
                <DisplayPicture imageContent={tab.credited_image} />
              ) : null}
            </div>
          </>
        ))}
      </div>
      <div>
        {/*composant partage reseaux sociaux*/}
      </div>
    </div>
  );
}
