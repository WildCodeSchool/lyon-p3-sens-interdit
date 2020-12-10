import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import YouTube from 'react-youtube';
import "../../globals/DisplayTabMenu/DisplayTabMenu.css";
import "../../../assets/styles/global.css";
import "./index.css";
import picto from "../../../assets/img/picto+.svg";



export default function webRadio() {
  const { LANG } = useContext(LanguageContext);


  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    }
  }


  return (
    <div className="container">
      a
    </div>

  )
}