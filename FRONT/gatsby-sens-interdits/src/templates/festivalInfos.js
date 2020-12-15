import React, { useContext } from "react";
import { graphql } from "gatsby";
import LanguageContext from "../components/context/LanguageContext";

import GeneriquePage from "../components/specifics/Generique";

export default function FestivalInfosPage({ data }) {
  const { checkEnContext } = useContext(LanguageContext);

  const festivalInfo = data.festivalInfo;

  return (
    <div>
      <GeneriquePage
        image={festivalInfo.image !== undefined && festivalInfo.image[0].url}
        title="Informations Pratiques"
        description={checkEnContext(
          festivalInfo.description,
          festivalInfo.description_en
        )}
        tab_element={checkEnContext(
          festivalInfo.tab_element,
          festivalInfo.tab_element_en
        )}
      />
    </div>
  );
}

export const query = graphql`
  query($infoId: Int) {
    festivalInfo: strapiInfopratique(strapiId: { eq: $infoId }) {
      id
      strapiId
      description
      description_en
      image {
        url
        name
        id
      }
      tab_element {
        content
        id
        title
        logo {
          id
          url
          image {
            url
            id
          }
        }
      }
      tab_element_en {
        content
        id
        title
        logo {
          id
          url
          image {
            url
            id
          }
        }
      }
    }
  }
`;
