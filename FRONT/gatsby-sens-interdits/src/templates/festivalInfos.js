import React from "react";
import { graphql } from "gatsby";

import GeneriquePage from "../components/specifics/Generique";

export default function FestivalInfosPage({ data }) {
  const festivalInfo = data.festivalInfo;

  return (
    <div>
      <GeneriquePage
        image={festivalInfo.image[0].url}
        title="Informations Pratiques"
        description={festivalInfo.description}
        tab_element={festivalInfo.tab_element}
      />
    </div>
  );
}

export const query = graphql`
  query($id: Int) {
    festivalInfo: strapiInfopratique(strapiId: { eq: $id }) {
      id
      strapiId
      description
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
    }
  }
`;
