import React from "react";
import { graphql } from "gatsby";

import "./festival.css";
import "../assets/styles/global.css";
import ImageCarousel from "../components/globals/Carousel/ImageCarousel";
import DisplayTabMenu from "../components/globals/DisplayTabMenu/DisplayTabMenu";

const { sluggify } = require("./../utils/Sluggify");
const {
  removeNameForUrl: removePageNameForUrl,
} = require("./../utils/removeNameForUrl");

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
      <div id="festival-content" className="container">
        <div id="festival-calendar">
        </div>
        <div id="festival-description">
          <h3>{festival.title}</h3>
          <p>{festival.content}</p>
        </div>
        <nav id="festival-menu">
          {festival.program.visible ? (
            <DisplayTabMenu
              title={festival.program.title}
              // url={`/festival/${festivalSlug}${festivalId}/programme`}
              url={`/programme`}
              image={festival.program.image[0].url}
            />
          ) : null}
          {festival.off_stage.visible ? (
            <DisplayTabMenu
              title={festival.off_stage.title}
              // url={`/festival/${festivalSlug}${festivalId}/hors-scene`}
              url={`/hors-scene`}
              image={festival.off_stage.image[0].url}
            />
          ) : null}
          {festival.school.visible ? (
            <DisplayTabMenu
              title={festival.school.title}
              // url={`/festival/${festivalSlug}${festivalId}/ecole`}
              url={`/ecole`}
              image={festival.school.image[0].url}
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
          {festival.info.visible ? (
            <DisplayTabMenu
              title={festival.info.title}
              url={`/festival/${festivalSlug}${festivalId}/infos`}
              image={festival.info.image[0].url}
            />
          ) : null}
          {festival.place.visible ? (
            <DisplayTabMenu
              title={festival.place.title}
              url={`/festival/${festivalSlug}${festivalId}/lieux`}
              image={festival.place.image[0].url}
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
      program {
        title
        image {
          url
        }
        visible
      }
      off_stage {
        id
        title
        visible
        image {
          url
        }
      }
      school {
        id
        title
        visible
        image {
          url
        }
      }
      info {
        id
        title
        visible
        image {
          url
        }
      }
      place {
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
