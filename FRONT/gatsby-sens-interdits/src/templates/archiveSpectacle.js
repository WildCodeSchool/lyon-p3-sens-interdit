import { graphql } from "gatsby";
import React from "react";
import "./index.css";

export default function ArchiveSpectaclePage({ data }) {

  return (
    <div className="global-spectacle-page">
      <p>{data.strapiArchivesOld.titre}</p>
      <p>{data.strapiArchivesOld.presentation}</p>
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
    tableElementArchiveOld{
    content
    }
  }
}
`
