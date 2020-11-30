import React from "react";
import { graphql, useStaticQuery, Link, StaticQuery } from "gatsby";
// import Pagination from "./Pagination";

const FilterTab = (pageContext) => {

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`


  const { allStrapiArchivesOld } = useStaticQuery(graphql`  
 
  query MyQueryArchivesOld($skip: Int!, $limit: Int!) {
    allStrapiArchivesOld (skip: $skip, limit: $limit, sort: {fields: annee, order: DESC}) {
      edges {
        node {
          id
          pays
          titre
          credits_2
          annee
          presentation
        }
      }
    }
  }
  `)


  return (
    <>
      {allStrapiArchivesOld.edges.map(archive => (
        <div key={archive.node.id}>
          <h2>{archive.node.pays}</h2>
          <h2>{archive.node.titre}</h2>
          <p>{archive.node.credits_2}</p>
          {/* <Link to={archive.node.id}>{archive.node.presentation}</Link> */}
        </div>
      ))}

      {!isFirst && (
        <Link to={prevPage} rel="prev">
          Previos Page
        </Link>

      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page
        </Link>

      )}

    </>

  );
}

export default FilterTab;









