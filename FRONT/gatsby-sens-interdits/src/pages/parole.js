import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import GeneriquePage from "../components/specifics/Generique";

export default function Parole() {
  const { checkEnContext } = useContext(LanguageContext);

  const data = useStaticQuery(graphql`
    query paroleQuery {
      strapiParole {
        id
        image {
          url
          id
        }
        tab_element {
          id
          title
          content
        }
        tab_element_en {
          id
          title
          content
        }
        title
        title_en
        description
        description_en
      }
    }
  `);

  return (
    <GeneriquePage
      image={data.strapiParole.image[0].url}
      title={checkEnContext(
        data.strapiParole.title,
        data.strapiParole.title_en
      )}
      description={checkEnContext(
        data.strapiParole.description,
        data.strapiParole.description_en
      )}
      tab_element={checkEnContext(
        data.strapiParole.tab_element,
        data.strapiParole.tab_element_en
      )}
    />
  );
}
