import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import GeneriquePage from "../components/specifics/Generique";

export default function Parole() {
  const data = useStaticQuery(graphql`
    query paroleQuery {
      strapiParole {
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
      image={data.strapiParole.image[0].url}
      title={data.strapiParole.title}
      description={data.strapiParole.description}
      tab_element={data.strapiParole.tab_element}
    />
  );
}
