import { graphql } from "gatsby";
import React from "react";
import "./index.css";

export default function ArchiveSpectaclePage({ data }) {

const image = [data.strapiArchivesOld.photo_1,
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
  data.strapiArchivesOld.photo_13];
const imageArray = [];


for (const elem of image){
  if((elem !== null) && (elem !== undefined) && (elem !== "")){
    imageArray.push(elem);
  }
}

  return (
    <div className="global-spectacle-page">
     <ImageCarouselOldArchive
        title={data.strapiArchivesOld.titre}
        images={imageArray}
        displayed={true}
      />
      <div className="content-spectacle-page">
        <div className="country-label">
          <p>{data.strapiArchivesOld.pays}</p>
        </div>
      <SpectacleInfosOldArchive
          country={data.strapiArchivesOld.pays}
          duration={data.strapiArchivesOld.duree}
          info={data.strapiArchivesOld.a_noter}
        />

        </div>
    </div>
  );
}

// This query needs to be dynamic based on the id of the spectacle
// (example: id="test-spectacle" --> the route will be: http://localhost:8000/spectacle/test-spectacle/
export const query = graphql`
query MyQueryArchiveDeux($id: String!) {
  strapiArchivesOld(id: {eq: $id}) {
    id
    titre
    duree
    pays
    lieu
    presentation
    tableElementArchiveOld {
          content
          title
          id
        }
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
  }
}
`
