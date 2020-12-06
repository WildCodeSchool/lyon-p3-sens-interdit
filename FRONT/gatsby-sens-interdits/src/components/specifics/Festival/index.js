import React from "react";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import "./festival.css";
import "../../../assets/styles/global.css";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import { graphql, useStaticQuery } from "gatsby";

export default function FestivalPage() {
  const { allStrapiFestival } = useStaticQuery(graphql`
    query strapiFestival {
        allStrapiFestival {
            nodes {
              id
              title
              year
              content
              carousel {
                id
                image {
                  credit
                  id
                  image {
                    url
                  }
                }
              }
            }
          }
      }`)
  const imageArray =
    allStrapiFestival.nodes[0].carousel !== null
      ? allStrapiFestival.nodes[0].carousel.image.map(image => image.image)
      : false;
  return (
    <div className="global-festival">
      <ImageCarousel images={imageArray} />
      <div id="festival-content" className="container">
        <div id="festival-calendar">
          <CalendarLarge />
        </div>
        <div id="festival-description">
          <h3>{allStrapiFestival.nodes[0].title}</h3>
          <p>{allStrapiFestival.nodes[0].content}</p>
        </div>
        <nav id="festival-menu">
          {allStrapiFestival.nodes[0].squaremenu.map(elem =>
            <DisplayTabMenu key={elem.id} title={elem.title} url={elem.url} image={elem.image[0].url} />
          )
          }
        </nav>
      </div>
    </div>

  )
}


