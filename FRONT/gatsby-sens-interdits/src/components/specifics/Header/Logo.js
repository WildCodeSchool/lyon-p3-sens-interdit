import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";


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
            <Link to="/" title="Sens Interdits">
                <img src={process.env.GATSBY_API_URL + strapiLogoPrincipal.Logo[0].url} alt={strapiLogoPrincipal.title} />
            </Link>
        </div>
    )
}
