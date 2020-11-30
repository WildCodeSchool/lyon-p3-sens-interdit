import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ScolairePage from "../components/specifics/ScolairePage";

export default function Scolaire() {
  const data = useStaticQuery(graphql`
    query scolaireQuery {
      strapiScolaire {
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
      }
    }
  `);

  return <ScolairePage data={data.strapiScolaire} />;
}
