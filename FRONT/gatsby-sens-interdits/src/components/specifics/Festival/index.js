import React from "react";
import CalendarLarge from "../../globals/Calendar/CalendarLarge";
import DisplayTabMenu from "../../globals/DisplayTabMenu/DisplayTabMenu";
import "./festival.css";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import { graphql, useStaticQuery } from "gatsby";

export default function FestivalPage() {
    const { strapiFestival } = useStaticQuery(graphql`
    query strapiFestival {
        strapiFestival {
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
          content
          id
          title
          squaremenu {
            id
            title
            url
            image {
              url
            }
          }
        }
      }`)
    const imageArray =
        strapiFestival.carousel !== null
            ? strapiFestival.carousel.image.map(image => image.image)
            : false;
    return (
        <div className="global-festival">
            <ImageCarousel images={imageArray} />
            <div id="festival-content">
                <div id="festival-calendar">
                    <CalendarLarge />
                </div>
                <div id="festival-description">
                    <h3>{strapiFestival.title}</h3>
                    <p>{strapiFestival.content}</p>
                </div>
                <nav id="festival-menu">
                    {strapiFestival.squaremenu.map(elem =>
                        <DisplayTabMenu key={elem.id} title={elem.title} url={elem.url} image={elem.image[0].url} />
                    )
                    }
                </nav>
            </div>
        </div>

    )
}


