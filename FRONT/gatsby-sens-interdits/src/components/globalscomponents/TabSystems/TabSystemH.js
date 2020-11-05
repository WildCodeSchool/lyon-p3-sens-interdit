import React, { useState, useEffect } from "react"
import axios from "axios"
import picto from "../../../img/picto.svg"
import "./tabsystem.css"

function TabSystemH() {
  const [isLoading, setIsLoading] = useState(true)
  const [contentTab, setContentTab] = useState([])
  const [activeTabContent, setActiveTabContent] = useState("")
  const [activeClass, setActiveClass] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:1337/spectacles")
      .then(response => response.data)
      .then(data => {
        setContentTab(data[0].tab_element)
        setActiveTabContent(data[0].tab_element[0].title)
        setActiveClass(data[0].tab_element[0].title)
        setIsLoading(false)
      })
  }, [])

  function handleOnClick(e) {
    setActiveTabContent(e.target.id)
    setActiveClass(e.target.id)
  }

  return isLoading ? (
    <p>Loading please wait </p>
  ) : (
    <div className="tab-module">
      {contentTab.map(tab => (
        <>
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
          <div
            className={
              activeTabContent === tab.title ? "active-tab" : "disabled-tab"
            }
          >
            {tab.content}
          </div>
        </>
      ))}
    </div>
  )
  {
    /* // <div className="tab-module">
    //   <ul>
    //     <li>
    //       <a
    //         href="#"
    //         title=""
    //         className={
    //           "tab-link" + " " + (activeClass === "about" ? "active" : "")
    //         }
    //         id="about"
    //         onClick={handleOnClick}
    //       >
    //         <img
    //           src={picto}
    //           alt="pictogramme cliquable"
    //           weight="30"
    //           height="30"
    //         />
    //         À propos
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         title=""
    //         className={
    //           "tab-link" + " " + (activeClass === "biography" ? "active" : "")
    //         }
    //         id="biography"
    //         onClick={handleOnClick}
    //       >
    //         <img
    //           src={picto}
    //           alt="pictogramme cliquable"
    //           weight="30"
    //           height="30"
    //         />
    //         Biographie
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         title=""
    //         className={
    //           "tab-link" +
    //           " " +
    //           (activeClass === "distribution" ? "active" : "")
    //         }
    //         id="distribution"
    //         onClick={handleOnClick}
    //       >
    //         <img
    //           src={picto}
    //           alt="pictogramme cliquable"
    //           weight="30"
    //           height="30"
    //         />
    //         Distribution
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         title=""
    //         className={
    //           "tab-link" + " " + (activeClass === "press" ? "active" : "")
    //         }
    //         id="press"
    //         onClick={handleOnClick}
    //       >
    //         <img
    //           src={picto}
    //           alt="pictogramme cliquable"
    //           weight="30"
    //           height="30"
    //         />
    //         Dans la press
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         title=""
    //         className={
    //           "tab-link" + " " + (activeClass === "picturial" ? "active" : "")
    //         }
    //         id="picturial"
    //         onClick={handleOnClick}
    //       >
    //         <img
    //           src={picto}
    //           alt="pictogramme cliquable"
    //           weight="30"
    //           height="30"
    //         />
    //         En image
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#"
    //         title=""
    //         className={
    //           "tab-link" + " " + (activeClass === "withPublic" ? "active" : "")
    //         }
    //         id="withPublic"
    //         onClick={handleOnClick}
    //       >
    //         <img
    //           src={picto}
    //           alt="pictogramme cliquable"
    //           weight="30"
    //           height="30"
    //         />
    //         Avec les publics
    //       </a>
    //     </li>
    //   </ul>

    //   <div>{displayContentTab(contentTab)}</div>
    // </div> */
  }
}

export default TabSystemH
