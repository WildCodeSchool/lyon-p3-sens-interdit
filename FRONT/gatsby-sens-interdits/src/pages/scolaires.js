import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import GeneriquePage from "../components/specifics/Generique";

export default function Scolaire() {
  const data = useStaticQuery(graphql`
    query scolaireQuery {
      strapiScolaire {
        id
        image {
          url
          id
        }
        tab_element {
          title
          content
        }
        title
        description
      }
    }
  `);

  return (
    <GeneriquePage
      image={data.strapiScolaire.image[0].url}
      title={data.strapiScolaire.title}
      description={data.strapiScolaire.description}
      tab_element={data.strapiScolaire.tab_element}
    />
  );
}
