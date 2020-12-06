import React, { useState } from "react";
import picto from "../../../assets/img/picto.svg";
import tabSystemClick from '../../../utils/tab-system';
import Article from "../Articles/Article";
import "../../../assets/styles/global.css";
import "./tabSystemH.css";
import TabSystemContent from "./TabSystemContent"


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

export default function TabSystemH({ tabContent , articles, textOverFlow, linkStatus}) {
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
              <div
                className={"tab-content " + (activeTabContent === tab.id || (firstLoad && i === 0) ? "active-tab" : "disabled-tab")}
              >
                    { articles !== undefined ? 
                      articles.map(article =>
                        tab.title === "Toutes les actualités" ?
                          <Article article={article} textOverFlow={textOverFlow} linkStatus={linkStatus}/> 
                          :
                          article.typeofarticles.map(cat => 
                            cat.category === tab.title ?
                              <Article article={article} textOverFlow={textOverFlow} linkStatus={linkStatus}/>
                              : null)
                      )
                    : 
                    <TabSystemContent tab={tab} DisplayPicture={DisplayPicture}/>
                      } 
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}


