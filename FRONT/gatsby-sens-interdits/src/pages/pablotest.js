import React from "react";
import SpecificCalendar from "../components/globals/Calendar/SpecificCalendar";
import { useStaticQuery, graphql } from "gatsby";

export default function Sitemap() {
  const data = useStaticQuery(graphql`
    query {
      spectacle: strapiSpectacle(id: { eq: "Spectacle_8" }) {
        title
        title_en
        id
        strapiId
        duration
        duration_en
        country
        country_en
        place
        place_en
        info
        info_en
        tarif {
          tarif
          category {
            category
          }
        }
        carousel {
          id
          image {
            image {
              url
              name
            }
            id
          }
        }
        tab_element {
          content
          id
          title
          credited_image {
            credit
            id
            image {
              url
            }
          }
        }
        tab_element_en {
          content
          id
          title
          credited_image {
            credit
            id
            image {
              url
            }
          }
        }
        spectacle_info {
          id
          info
        }
        spectacle_info_en {
          id
          info
        }
        accessibility {
          url
          name
          id
        }
        partners {
          url
          id
          image {
            url
          }
        }
        horaires {
            Day
          }
      }
    }
  `);

  return <SpecificCalendar spectacle={data}/>;
}
