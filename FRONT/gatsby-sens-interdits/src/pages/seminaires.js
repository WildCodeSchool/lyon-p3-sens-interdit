import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import { graphql, useStaticQuery } from "gatsby";
import GeneriquePage from "../components/specifics/Generique";

export default function Scolaire() {
  const { checkEnContext } = useContext(LanguageContext);

  const { strapiSeminaire } = useStaticQuery(graphql`
    query seminaireQuery {
      strapiSeminaire {
        description
        description_en
        title
        title_en
        image {
          url
          id
        }
        tab_element {
          id
          content
          title
          image {
            url
          }
        }
        tab_element_en {
          id
          content
          title
          image {
            url
          }
        }
      }
    }
  `);

  return (
    <GeneriquePage
      image={strapiSeminaire.image[0].url}
      title={checkEnContext(strapiSeminaire.title, strapiSeminaire.title_en)}
      description={checkEnContext(
        strapiSeminaire.description,
        strapiSeminaire.description_en
      )}
      tab_element={checkEnContext(
        strapiSeminaire.tab_element,
        strapiSeminaire.tab_element_en
      )}
    />
  );
}
