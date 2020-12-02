import React from "react";
import { graphql } from "gatsby";

import "./festival.css";
import GeneriquePage from "../components/specifics/Generique";

export default function FestivalInfosPage({ data }) {
  const festivalPlace = data.festivalPlace;

  return (
    <div>
      <GeneriquePage
        image={festivalPlace.image[0].url}
        title="Lieux"
        description={festivalPlace.description}
        tab_element={festivalPlace.tab_element}
      />
    </div>
  );
}

export const query = graphql`
  query($id: Int) {
    festivalPlace: strapiFestivalplace(strapiId: { eq: $id }) {
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
