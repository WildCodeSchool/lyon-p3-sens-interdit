import React, { useContext } from "react";
import LanguageContext from "../components/context/LanguageContext";
import GeneriquePage from "../components/specifics/Generique";
import { graphql, useStaticQuery } from "gatsby";

export default function Ecole() {
  const { checkEnContext } = useContext(LanguageContext);

  const { strapiEcole } = useStaticQuery(graphql`
    query MyQueryEcole {
      strapiEcole {
        id
        title
        title_en
        description
        description_en
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
        image {
          id
          url
          name
        }
      }
    }
  `);
  return (
    <div>
      <GeneriquePage
        image={strapiEcole.image[0].url}
        title={checkEnContext(strapiEcole.title, strapiEcole.title_en)}
        description={checkEnContext(
          strapiEcole.description,
          strapiEcole.description_en
        )}
        tab_element={checkEnContext(
          strapiEcole.tab_element,
          strapiEcole.tab_element_en
        )}
      />
    </div>
  );
}
