import { graphql } from "gatsby";
import React from "react";
import SEO from "../components/SEO/seo";
import ThumbnailOldArchive from "../components/globals/ThumbnailOldArchive";
import TabSystemHOldArchive from "../components/globals/TabSystems/TabSystemHOldArchive";

import "./archiveSpectacle.css";
import "../assets/styles/global.css";
import ImageCarouselOldArchive from "../components/globals/CarouselOldArchive/ImageCarouselOldArchive";
import SpectacleInfosOldArchive from "../components/specifics/SpectacleOldArchive/SpectacleInfosOldArchive";

export default function ArchiveSpectaclePage({ data }) {
  const image = [
    data.strapiArchivesOld.photo_1,
    data.strapiArchivesOld.photo_2,
    data.strapiArchivesOld.photo_3,
    data.strapiArchivesOld.photo_4,
    data.strapiArchivesOld.photo_5,
    data.strapiArchivesOld.photo_6,
    data.strapiArchivesOld.photo_7,
    data.strapiArchivesOld.photo_8,
    data.strapiArchivesOld.photo_9,
    data.strapiArchivesOld.photo_10,
    data.strapiArchivesOld.photo_11,
    data.strapiArchivesOld.photo_12,
    data.strapiArchivesOld.photo_13,
  ];
  const imageArray = [];
  for (const elem of image) {
    if (elem !== null && elem !== undefined && elem !== "") {
      imageArray.push(`${process.env.GATSBY_IMAGE_URL}` + elem);
    }
  }

  // navigating between spectacle

  const thisID = data.strapiArchivesOld.strapiId;
  const listArch = data.allStrapiArchivesOld.nodes;
  const suivSpect = listArch.find(node => node.strapiId === thisID + 1);
  const precSpect = listArch.find(node => node.strapiId === thisID - 1);

  return (
    <div className="global-spectacle-page">
      <SEO title={data.strapiArchivesOld.titre !== undefined ? data.strapiArchivesOld.titre : ""} 
        description={data.strapiArchivesOld.presentation}  
        image={image !== undefined ? image[0] : ""} />
      <ImageCarouselOldArchive
        title={data.strapiArchivesOld.titre}
        images={imageArray}
        displayed={true}
      />
      <div className="content-spectacle-page container">
        <div className="country-label">
          <p>{data.strapiArchivesOld.pays}</p>
        </div>
        <SpectacleInfosOldArchive
          country={data.strapiArchivesOld.pays}
          duration={data.strapiArchivesOld.duree}
          info={data.strapiArchivesOld.a_noter}
        />
        <TabSystemHOldArchive
          tabContent={data.strapiArchivesOld.tableElementArchiveOld}
        />
        <div className="content">
          <div className="red-arrow-spectacle"></div>
          <p className="content-title to-uppercase"></p>
          <div className="display-mini-tab">
            

            {precSpect != undefined ? (
              <ThumbnailOldArchive
                id={precSpect.strapiId}
                key={precSpect.id}
                country={precSpect.pays}
                name={precSpect.titre}
                team={precSpect.credits_2}
                affiche={`${process.env.GATSBY_IMAGE_URL}` + precSpect.photo_1}
              />
            ) : (
              ""
            )}
            {suivSpect != undefined ? (
              <ThumbnailOldArchive
                id={suivSpect.strapiId}
                key={suivSpect.id}
                country={suivSpect.pays}
                name={suivSpect.titre}
                team={suivSpect.credits_2}
                affiche={`${process.env.GATSBY_IMAGE_URL}` + suivSpect.photo_1}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// This query needs to be dynamic based on the id of the spectacle
// (example: id="test-spectacle" --> the route will be: http://localhost:8000/spectacle/test-spectacle/
export const query = graphql`
  query MyQueryArchiveDeux($strapiId: Int!) {
    strapiArchivesOld(strapiId: { eq: $strapiId }) {
      id
      strapiId
      titre
      duree
      pays
      lieu
      presentation
      a_noter
      photo_1
      photo_2
      photo_3
      photo_4
      photo_5
      photo_6
      photo_7
      photo_8
      photo_9
      photo_10
      photo_11
      photo_12
      photo_13
      url1
      tableElementArchiveOld {
        content
        title
        id
      }
    }
    allStrapiArchivesOld {
      nodes {
        id
        strapiId
        titre
        pays
        photo_1
        credits_2
      }
    }
  }
`;
