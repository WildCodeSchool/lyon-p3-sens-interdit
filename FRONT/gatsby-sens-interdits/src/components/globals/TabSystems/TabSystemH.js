import React, { useContext, useState } from "react";
import picto from "../../../assets/img/picto.svg";
import tabSystemClick from "../../../utils/tab-system";
import Article from "../Articles/Article";
import "../../../assets/styles/global.css";
import "./tabSystemH.css";
import "./tabSystemGlobal.css";
import TabSystemContent from "./TabSystemContent";
import LanguageContext from "../../context/LanguageContext";

function DisplayPicture({ imageContent }) {
  return (
    <>
      {imageContent.map(img => (
        <div key={img.id} className="pictures-in-tab-system">
          <p>{img.credit}</p>
          <div className="picture-tabsyst-container">
            {img.image.map(elem => (
              <div key={elem.url +img.credit+ elem.url}>
                <img
                  key={elem.url}
                  src={process.env.GATSBY_API_URL + elem.url}
                  alt="noalt"
                  className="picture-in-tabsystem"
                />
              </div>
            ))}
          </div>

        </div>
      ))}
    </>
  );
}

export default function TabSystemH({
  tabContent,
  articles,
  textOverFlow,
  linkStatus,
}) {
  const [activeTabContent, setActiveTabContent] = useState("");
  const [activeClass, setActiveClass] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const { checkEnContext } = useContext(LanguageContext);

  function handleOnClick(e) {
    if (firstLoad) {
      setFirstLoad(false);
    }
    tabSystemClick(e, setActiveTabContent, setActiveClass);
  }

  return (
    <div className="tab-module">
      <div>
        {tabContent.map((tab, i) => (
          <div
            className={
              "tab-title " +
              (activeClass === tab.id || (firstLoad && i === 0) ? "active" : "")
            }
            key={tab.id}
            id={"tab-link_" + tab.id}
            data-id={tab.id}
            onClick={handleOnClick}
            onKeyDown={() => { }}
            role="button"
          >
            <img src={picto} alt="" width="30" height="30" data-id={tab.id} />

            <h3 data-id={tab.id} className="tab-link ">
              {checkEnContext(tab.title, tab.title_en)}
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
              {articles !== undefined ? (
                articles.map(article =>
                  checkEnContext(tab.title, tab.title_en) ===
                    "Toutes les actualités" ||
                    checkEnContext(tab.title, tab.title_en) ===
                    "All categories" ? (
                      <Article
                        article={article}
                        textOverFlow={textOverFlow}
                        linkStatus={linkStatus}
                      />
                    ) : (
                      article.typeofarticles.map(cat =>
                        checkEnContext(cat.category, cat.category_en) ===
                          checkEnContext(tab.title, tab.title_en) ? (
                            <Article
                              article={article}
                              textOverFlow={textOverFlow}
                              linkStatus={linkStatus}
                            />
                          ) : null
                      )
                    )
                )
              ) : (
                  <TabSystemContent tab={tab} DisplayPicture={DisplayPicture} />
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
