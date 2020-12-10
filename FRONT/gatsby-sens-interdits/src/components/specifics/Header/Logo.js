import React from 'react';
import { graphql, useStaticQuery } from "gatsby";


export default function Logo() {
    const { strapiLogoPrincipal } = useStaticQuery(graphql`
    query MyQueryLogo {
        strapiLogoPrincipal {
            title
            Logo {
              url
            }
          }
        }
      `);
    return (
        <div className="main-logo">
            <a href="https://www.sensinterdits.org" title="site sens-interdits">
                <img src={process.env.GATSBY_API_URL + strapiLogoPrincipal.Logo[0].url} alt={strapiLogoPrincipal.title} />
            </a>
        </div>
    )
}