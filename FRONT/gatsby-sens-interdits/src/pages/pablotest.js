import React from "react";
import SpecificCalendar from "../components/globals/Calendar/SpectacleCalendar";
import { useStaticQuery, graphql } from "gatsby";

export default function PabloTest() {
  const data = useStaticQuery(graphql`
    query {
      spectacle: strapiSpectacle(id: { eq: "Spectacle_8" }) {
        title
        id
        strapiId
        duration
        country
        place
        info
        horaires {
          Day
        }
      }
    }
  `);

  return <SpecificCalendar spectacle={data} />;
}
