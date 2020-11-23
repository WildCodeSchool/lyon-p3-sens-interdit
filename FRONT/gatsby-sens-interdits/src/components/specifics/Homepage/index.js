import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./Index.css";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu.js";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";

export default function Homepage() {
  const { strapiHomeDisplayTab } = useStaticQuery(graphql`
  query MyQuery {
    strapiHomeDisplayTab {
      Display_tab_menu {
        id
        title
        url
        image{
          url
        }
      }
    }
  }`)
  return (
    <div className="global-homepage">
      <ImageCarousel />
      <div className="content-homepage">
        {strapiHomeDisplayTab.Display_tab_menu.map(elem => (
          <DisplayTabMenu key={elem.id} title={elem.title} image={elem.image[0].url} url={elem.url} />
        ))}
      </div>
    </div>
  );
}
