import React from 'react';
import GeneriquePage from '../components/specifics/Generique';
import { graphql, useStaticQuery } from "gatsby";

export default function Webradio() {
    const { strapiWebradio } = useStaticQuery(graphql`
    query MyQueryWebradio {
        strapiWebradio {
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
            <GeneriquePage image={strapiWebradio.image[0].url} title={strapiWebradio.title} description={strapiWebradio.description} tab_element={strapiWebradio.tab_element} />
        </div>
    )
};