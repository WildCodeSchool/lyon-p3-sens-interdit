import React, { useContext, useState } from "react";

import picto from "../../../assets/img/picto.svg";
import "./tabSystemV.css";
import Thumbnail from "../Thumbnail";
import tabSystemClick from "../../../utils/tab-system";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { sluggify } from "../../../utils/Sluggify";
import LanguageContext from "../../context/LanguageContext";
dayjs.locale("fr");
dayjs.extend(localizedFormat);

function DisplayPicture({ imageContent }) {
  return (
    <>
      <div className="display-img-tab-element">
        {imageContent.map(img => (
          <div key={img.id}>
            <p>{img.credit}</p>
            {img.image.map(elem => (
              <img
                key={elem.url}
                src={process.env.GATSBY_API_URL + elem.url}
                alt="noalt"
                width="150"
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default function TabSystemV({ tabContent, spectacleQuery }) {
  const { LANG } = useContext(LanguageContext);
  const [activeTabContent, setActiveTabContent] = useState(null);
  const [activeClass, setActiveClass] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

  function handleOnClick(e) {
    if (firstLoad) {
      setFirstLoad(false);
    }
    tabSystemClick(e, setActiveTabContent, setActiveClass);
  }

  return (
    <div className="tab-moduleV">
      {tabContent.map((tab, i) => (
        <div className="tab-moduleV" key={tab.id}>
          <div
            className={
              "tab-titleV " +
              (activeClass === tab.id || (firstLoad && i === 0) ? "active" : "")
            }
            id={"tab-link_" + tab.id}
            data-id={tab.id}
            onClick={handleOnClick}
          >
            <img src={picto} alt="" width="30" height="30" data-id={tab.id} />
            <h3 className="tab-link" data-id={tab.id}>
              {tab["title" + LANG]}
            </h3>
          </div>
          <div
            className={
              "tab-contentV " +
              (activeTabContent === tab.id || (firstLoad && i === 0)
                ? "active-tab"
                : "disabled-tab")
            }
          >
            {tab["content" + LANG]}
            {tab.credited_image !== undefined ? (
              <DisplayPicture
                imageContent={
                  tab.credited_image !== undefined ? tab.credited_image : ""
                }
              />
            ) : (
              ""
            )}

            {spectacleQuery !== undefined ? (
              <div className="thumbnail-list">
                {spectacleQuery.map(spectacle =>
                  spectacle.type_of_events.map((cat, i) =>
                    cat["category" + LANG] === tab["title" + LANG] ? (
                      <Thumbnail
                        key={spectacle["title" + LANG] + spectacle.day}
                        affiche={
                          spectacle.thumbnail
                            ? spectacle.thumbnail.internal.description.split(
                                '"'
                              )[1]
                            : photoTest
                        }
                        date={
                          spectacle.day
                            ? dayjs(spectacle.day).format("ddd D MMM à HH:mm")
                            : "inconnue"
                        }
                        country={
                          spectacle["country" + LANG]
                            ? spectacle["country" + LANG]
                            : "inconnu"
                        }
                        name={spectacle["title" + LANG]}
                        id={spectacle.strapiId}
                        team={spectacle.author ? spectacle.author : "inconnu"}
                        url={"/spectacle/" + sluggify(spectacle.title)}
                      />
                    ) : (
                      ""
                    )
                  )
                )}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
