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
          {festival.programme.visible ? (
            <DisplayTabMenu
              title={festival.programme.title}
              // url={`/festival/${festivalSlug}${festivalId}/programme`}
              url={`/programme`}
              image={festival.programme.image[0].url}
            />
          ) : null}
          {festival.hors_scene.visible ? (
            <DisplayTabMenu
              title={festival.hors_scene.title}
              // url={`/festival/${festivalSlug}${festivalId}/hors-scene`}
              url={`/hors-scene`}
              image={festival.hors_scene.image[0].url}
            />
          ) : null}
          {festival.ecole.visible ? (
            <DisplayTabMenu
              title={festival.ecole.title}
              // url={`/festival/${festivalSlug}${festivalId}/ecole`}
              url={`/ecole`}
              image={festival.ecole.image[0].url}
            />
          ) : null}
          {festival.squaremenu.length !== 0 &&
            festival.squaremenu.map(elem => (
              <DisplayTabMenu
                key={elem.id}
                title={elem.title}
                url={elem.url}
                image={elem.image[0].url}
              />
            ))}
          {festival.info_pratique.visible ? (
            <DisplayTabMenu
              title={festival.info_pratique.title}
              url={`/festival/${festivalSlug}${festivalId}/infos`}
              image={festival.info_pratique.image[0].url}
            />
          ) : null}
          {festival.lieux.visible ? (
            <DisplayTabMenu
              title={festival.lieux.title}
              url={`/festival/${festivalSlug}${festivalId}/lieux`}
              image={festival.lieux.image[0].url}
            />
          ) : null}
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
      programme {
        title
        image {
          url
        }
        visible
      }
      hors_scene {
        id
        title
        visible
        image {
          url
        }
      }
      ecole {
        id
        title
        visible
        image {
          url
        }
      }
      info_pratique {
        id
        title
        visible
        image {
          url
        }
      }
      lieux {
        id
        image {
          url
        }
        title
        visible
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
