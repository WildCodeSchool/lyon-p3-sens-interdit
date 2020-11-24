import React from 'react';
import logosens from '../../../assets/img/logoheader.png';
import { graphql, useStaticQuery } from "gatsby";


export default function Logo() {


    const { strapiLogoPrincipal } = useStaticQuery(graphql`
    query MyQueryLogo {
        strapiLogoPrincipal {
          Logo {
            id
          }
        }
      }
      `);
    return (
        <div className="main-logo">
            <a href="https://www.sensinterdits.org" title="site sens-interdits">
                <img src={process.env.GATSBY_API_URL + strapiLogoPrincipal.Logo} alt={"logo du festival sens-interdits"} />
            </a>
        </div>
    )
}