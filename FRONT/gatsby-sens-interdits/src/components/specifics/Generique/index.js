import React, { useContext } from "react";
import TabSystemV from "../../globals/TabSystems/TabSystemV.js";
import "./index.css";
import "../../../assets/styles/global.css";
import SEO from "../../SEO/seo";
import LanguageContext from "../../context/LanguageContext";


export default function GeneriquePage(props) {
  const { checkEnContext , LANG} = useContext(LanguageContext);

  return (
    <div className="container">
      <SEO title={checkEnContext(props.title, props.title_en)} 
        description={checkEnContext(props.description,props.description_en)}  
        image={image !== undefined ? props.image : ""} />
      <div className="image-generique-page">
        <img src={process.env.GATSBY_API_URL + props.image} alt={props.name} />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <TabSystemV tabContent={props.tab_element} />
      </div>
    </div>
  );
}
