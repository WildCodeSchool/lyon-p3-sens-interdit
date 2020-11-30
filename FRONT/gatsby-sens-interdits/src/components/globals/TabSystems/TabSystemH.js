import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import "./tabSystemH.css";
import tabSystemClick from '../../../utils/tab-system';

function DisplayPicture({ imageContent }) {
  return (
    <>
      {imageContent.map(img => (
        <div key={img.id}>
          <p>{img.credit}</p>
          {img.image.map(elem => (
            <img key={elem.url}
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
  const [firstLoad, setFirstLoad] = useState(true);
    console.log(tabContent);
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
          <div className={"tab-title " + (activeClass === tab.id || (firstLoad && i === 0) ? "active" : "")}
               key={tab.id}
               id={'tab-link_'+tab.id}
               data-id={tab.id}
               onClick={handleOnClick}>
            <img
              src={picto}
              alt=""
              width="30"
              height="30"
              data-id={tab.id}
            />
            <h3
              data-id={tab.id}
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
            <div className={"tab-content toto " + (activeTabContent === tab.id || (firstLoad && i === 0) ? "active-tab" : "disabled-tab")}
            >
              <div>
                {tab.content === undefined ?
                  tab.articlecontent !== undefined ? tab.articlecontent.map(article =>
                      <div key={article.id}>
                        <p>{article.date}</p>
                        <h3>{article.title}</h3>
{/*
                        <img>{article.image !== null ? article.image:""}</img>
*/}
                        <p>{article.article}</p>
{/*
                        <img>{article.image !== null ? article.image:""}</img>
*/}
                      </div>
                  ) : null
                  : <p>{tab.content}</p>
                  }
              </div>
              {tab.credited_image !== undefined && tab.credited_image.lenght !== 0 ? (
                <DisplayPicture imageContent={tab.credited_image} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
