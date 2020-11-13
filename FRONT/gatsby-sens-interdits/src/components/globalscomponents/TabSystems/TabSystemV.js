import React, { useState, useEffect } from "react"
import axios from "axios"
import picto from "../../../img/picto.svg"
import "./tabSystemV.css";

function TabSystemV() {
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
                <div id="tab-contentV"
                    className={
                    activeTabContent === tab.title ? "active-tab" : "disabled-tab"
                    }
                >
                    {tab.content}
                </div>
            </div>
        ))}
    </div>  
  )
};

export default TabSystemV;
