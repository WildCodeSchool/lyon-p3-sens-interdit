import React from "react";
import FestivalPoster from "./FestivalPoster";
import ImageCarousel from "../../globals/Carousel/ImageCarousel";
import FilterTab from "../Programme/FilterTab";
import ThumbnailOldArchive from "../../globals/ThumbnailOldarchive";
import photoTest from "../../../assets/img/img-sens-interdit.jpg";
import { graphql, useStaticQuery } from "gatsby";
import sensinterdits2009 from "../../../assets/img/affiches/sensinterdits2009.jpeg";
import sensinterdits2011 from "../../../assets/img/affiches/sensinterdits2011.jpeg";
import sensinterdits2013 from "../../../assets/img/affiches/sensinterdits2013.jpeg";
import sensinterdits2015 from "../../../assets/img/affiches/sensinterdits2015.jpeg";
import sensinterdits2017 from "../../../assets/img/affiches/sensinterdits2017.jpeg";
import sensinterdits2019 from "../../../assets/img/affiches/sensinterdits2019.png";

import "./Archive.css";

function Archive(props) {
  const title = "Bonjour";
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const festivals = [
    {
      title: "Édition 2019",
      posterUrl:sensinterdits2019,
      url:"http://localhost:8000/programme_2019/",
    },
    {
      title: "Édition 2017",
      posterUrl:sensinterdits2017,
      url:"http://localhost:8000/programme_2017/",
    },
    {
      title: "Édition 2015",
      posterUrl:sensinterdits2015,
      url:"http://localhost:8000/programme_2015/",
    },
    {
      title: "Édition 2013",
      posterUrl:sensinterdits2013,
      url:"http://localhost:8000/programme_2013/",
    },
    {
      title: "Édition 2011",
      posterUrl:sensinterdits2011,
      url:"http://localhost:8000/programme_2011/",
    },
    {
      title: "Édition 2009",
      posterUrl:sensinterdits2009,
      url:"http://localhost:8000/programme_2009/",
    },
  ];
 
  const { allStrapiArchivesOld } = useStaticQuery(graphql`
  query MyQueryArchive {
    allStrapiArchivesOld(filter: {categorie: {eq: "hors_scene"}}) {
      edges {
        node {
        titre
        strapiId
        id
        credits_2
        pays
        photo_1
      }
    }
  }
  }`)
  return (
    <>
    
        <ImageCarousel displayed={true} images={props.images} title={title} />
      <div className="global-margin archive-global-styling">
        <p className="archive-description">{content}</p>
        <h1 className="to-uppercase">
          Découvrez <span>les archives du festival</span>
        </h1>
        <FilterTab />
        <div className="archive-festivals-grid-wrapper">
          {festivals.map(festival => {
            return (
              <FestivalPoster
                title={festival.title}
                poster={festival.posterUrl}
                url={festival.url}
              />
            );
          })}
        </div>
        <h1 className="to-uppercase">
          Découvrez <span>les archives diffusion-transmission</span>
        </h1>
        <FilterTab />
        <div className="archive-transmission-grid-wrapper">
        {allStrapiArchivesOld.edges.map(elem => (
          <ThumbnailOldArchive
            id={elem.node.strapiId}
            key={elem.node.id}
            country={elem.node.pays}
            name={elem.node.titre}
            team={elem.node.credits_2}
            affiche={`${process.env.GATSBY_IMAGE_URL}`+elem.node.photo_1}
          />
            
        ))}
        
        </div>
      </div>
    </>
  );
}

export default Archive;
