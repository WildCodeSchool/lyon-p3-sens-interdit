import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
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
  const { checkEnContext } = useContext(LanguageContext);
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
        <div id="festival-calendar"></div>
        <div id="festival-description">
          <h2 className="to-uppercase">
            {checkEnContext(festival.title, festival.title_en)}
          </h2>
          <p>{checkEnContext(festival.content, festival.content_en)}</p>
        </div>
        <nav id="festival-menu">
          {festival.program.visible ? (
            <DisplayTabMenu
              title={checkEnContext(festival.program, festival.program_en)}
              // url={`/festival/${festivalSlug}${festivalId}/programme`}
              url={`/programme`}
              image={festival.program.image[0].url}
            />
          ) : null}
          {festival.off_stage.visible ? (
            <DisplayTabMenu
              title={checkEnContext(
                festival.off_stage.title,
                festival.off_stage.title_en
              )}
              // url={`/festival/${festivalSlug}${festivalId}/hors-scene`}
              url={`/hors-scene`}
              image={festival.off_stage.image[0].url}
            />
          ) : null}
          {festival.school.visible ? (
            <DisplayTabMenu
              title={checkEnContext(
                festival.school.title,
                festival.school.title_en
              )}
              // url={`/festival/${festivalSlug}${festivalId}/ecole`}
              url={`/ecole`}
              image={festival.school.image[0].url}
            />
          ) : null}
          {festival.squaremenu.length !== 0 &&
            festival.squaremenu.map(elem => (
              <DisplayTabMenu
                key={elem.id}
                title={checkEnContext(elem.title, elem.title_en)}
                url={elem.url}
                image={elem.image[0].url}
              />
            ))}
          {festival.info.visible ? (
            <DisplayTabMenu
              title={checkEnContext(
                festival.info.title,
                festival.info.title_en
              )}
              url={`/festival/${festivalSlug}${festivalId}/infos`}
              image={festival.info.image[0].url}
            />
          ) : null}
          {festival.place.visible ? (
            <DisplayTabMenu
              title={checkEnContext(
                festival.place.title,
                festival.place.title_en
              )}
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
      title_en
      year
      content
      content_en
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
        title_en
        image {
          url
        }
        visible
      }
      off_stage {
        id
        title
        title_en
        visible
        image {
          url
        }
      }
      school {
        id
        title
        title_en
        visible
        image {
          url
        }
      }
      info {
        id
        title
        title_en
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
        title_en
        visible
      }
      squaremenu {
        id
        title
        title_en
        url
        image {
          url
        }
      }
    }
  }
`;
