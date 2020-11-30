import React from 'react';
import GeneriquePage from '../components/specifics/Generique';
import { graphql, useStaticQuery } from "gatsby";

export default function Ecole() {
    const { strapiEcole } = useStaticQuery(graphql`
    query MyQueryEcole {
        strapiEcole {
            id
            title
            description
            tab_element {
              id
              title
              content
            }
            image {
              id
              url
              name
            }
          }
      }`)
    return (
        <div>
            <GeneriquePage image={strapiEcole.image[0].url} title={strapiEcole.title} description={strapiEcole.description} tab_element={strapiEcole.tab_element} />
        </div>
    )
};