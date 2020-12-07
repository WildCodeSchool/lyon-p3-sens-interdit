import React, { useContext } from "react";
import FestivalPoster from "./FestivalPoster";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import FilterTab from "../Programme/FilterTab";
import Thumbnail from "../../globals/Thumbnail";
import { graphql, useStaticQuery } from "gatsby";
import FilterBySelect from "./FilterBySelect";

import "./Archive.css";
import "../../../assets/styles/global.css";
import LanguageContext from "../../context/LanguageContext";

function Archive(props) {
  const { LANG } = useContext(LanguageContext);

  const festivals = [
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
    {
      title: "Édition 2013",
      posterUrl:
        "https://i.pinimg.com/originals/a5/5d/f0/a55df0b59a4a8400374af61cb71e7ae0.jpg",
    },
  ];

  const data = useStaticQuery(graphql`
    query MyQueryArchive {
      strapiArchiveDescription {
        title
        title_en
        description
        description_en
      }
      allStrapiArchivesOld {
        edges {
          node {
            titre
            id
            credits_2
            pays
            photo_1
          }
        }
      }
    }
  `);

  return (
    <>
      <ImageCarousel
        displayed={true}
        images={props.images}
        title={props.title ? props.title : ""}
      />
      <div className="container archive-global-styling">
        <p className="archive-description">
          {data.strapiArchiveDescription["description" + LANG]}
        </p>
        {LANG !== "_en" ? (
          <h1 className="to-uppercase">
            Découvrez <span>les archives du festival</span>
          </h1>
        ) : (
          <h1 className="to-uppercase">
            Discover <span>the festival's archives</span>
          </h1>
        )}
        <div className="archive-festivals-grid-wrapper">
          {festivals.map(festival => {
            return (
              <FestivalPoster
                title={festival.title}
                poster={festival.posterUrl}
                url=""
              />
            );
          })}
        </div>
        {LANG !== "_en" ? (
          <h1 className="to-uppercase">
            Découvrez <span>les archives diffusion-production</span>
          </h1>
        ) : (
          <h1 className="to-uppercase">
            Discover <span>the production's archives</span>
          </h1>
        )}
        <FilterBySelect />
        <div className="archive-transmission-grid-wrapper">
          {data.allStrapiArchivesOld.edges.map(elem => (
            <Thumbnail
              key={elem.node.id}
              url={"http://localhost:8000/" + elem.node.id}
              date={elem.node.date_1}
              country={elem.node.pays}
              name={elem.node.titre}
              team={elem.node.credits_2}
              affiche={elem.node.photo_1}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Archive;
