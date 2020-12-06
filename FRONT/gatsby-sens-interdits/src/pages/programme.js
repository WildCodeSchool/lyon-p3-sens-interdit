import React, { useContext } from "react";
import ProgrammePage from "../components/specifics/Programme";
import { graphql, useStaticQuery } from "gatsby";

import { FestivalContext } from "../components/context/FestivalContext";

export default function Programme() {
  const { currentFestivalStrapiId } = useContext(FestivalContext);

  const data = useStaticQuery(graphql`
    query {
      allStrapiSpectacle {
        nodes {
          title
          festival {
            id
          }
          strapiId
          horaires {
            Day
          }
          country
          place
          author
          thumbnail {
            internal {
              description
            }
          }
        }
      }
    }
  `);

  // filter spectacles to only display the spectacles related to the current festival
  const listSpectacles = data.allStrapiSpectacle.nodes.filter(
    spectacle => spectacle.festival.id === currentFestivalStrapiId
  );

  return <ProgrammePage list={listSpectacles} />;
}
