import React, { useContext } from "react";
import { graphql } from "gatsby";
import LanguageContext from "../components/context/LanguageContext";

import "./festival.css";
import "../assets/styles/global.css";
import GeneriquePage from "../components/specifics/Generique";

export default function FestivalInfosPage({ data }) {
  const { checkEnContext } = useContext(LanguageContext);

  const festivalPlace = data.festivalPlace;

  return (
    <div>
      <GeneriquePage
        image={festivalPlace.image !== undefined && festivalPlace.image[0].url}
        title="Lieux"
        description={checkEnContext(
          festivalPlace.description,
          festivalPlace.description_en
        )}
        tab_element={checkEnContext(
          festivalPlace.tab_element,
          festivalPlace.tab_element_en
        )}
      />
    </div>
  );
}

export const query = graphql`
  query($placeId: Int) {
    festivalPlace: strapiFestivalplace(strapiId: { eq: $placeId }) {
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
