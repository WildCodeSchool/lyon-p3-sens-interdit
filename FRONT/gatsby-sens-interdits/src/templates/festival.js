import React from "react";
import { graphql } from "gatsby";

import "./festival.css";
import CalendarLarge from "../components/globals/Calendar/CalendarLarge";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";
import DisplayTabMenu from "../components/globals/DisplayTabMenu/DisplayTabMenu";

const { sluggify } = require("./../utils/Sluggify");

function removePageNameForUrl(text, pageName) {
  return text.replace(pageName, "");
}

export default function FestivalPage({ data }) {
  const festival = data.festival;

  let festivalSlug = sluggify(festival.title);
  let festivalId = removePageNameForUrl(festival.id, "Festival");
  const imageArray =
    festival.carousel !== null
      ? festival.carousel.image.map(image => image.image)
      : false;
  return (
    <div className="global-festival">
      <ImageCarousel images={imageArray} />
      <div id="festival-content">
        <div id="festival-calendar">
          <CalendarLarge />
        </div>
        <div id="festival-description">
          <h3>{festival.title}</h3>
          <p>{festival.content}</p>
        </div>
        <nav id="festival-menu">
          {festival.squaremenu.map(elem => (
            <DisplayTabMenu
              key={elem.id}
              title={elem.title}
              url={elem.url}
              image={elem.image[0].url}
            />
          ))}
          <DisplayTabMenu
            title="TEST INFOS"
            url={`/festival/${festivalSlug}${festivalId}/infos`}
            image={festival.squaremenu[0].image[0].url}
          />
          <DisplayTabMenu
            title="TEST LIEUX"
            url={`/festival/${festivalSlug}${festivalId}/lieux`}
            image={festival.squaremenu[0].image[0].url}
          />
        </nav>
      </div>
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    festival: strapiFestival(id: { eq: $id }) {
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
      squaremenu {
        id
        title
        url
        image {
          url
        }
      }
    }
  }
`;
