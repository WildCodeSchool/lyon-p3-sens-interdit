import React from "react"
import { graphql } from "gatsby"

function ArchivesList(props) {
  const posts = props.data.allStrapiArchivesOld.edges

    return (
        <>
          {posts.map(({ node }) => {
            const titre = node.titre
            return <div key={node.id}>{titre}</div>
          })}
        </>
    );
}
export default ArchivesList;
export const archivesQuery = graphql`
  query archivesQuery($skip: Int!, $limit: Int!) {
    allStrapiArchivesOld(
      sort: { fields: id, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
              titre
              id
              credits_2
              pays
              photo_1
              date_1
        }
      }
    }
  }
`
