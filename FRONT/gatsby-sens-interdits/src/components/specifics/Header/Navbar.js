import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import LanguageContext from "../../context/LanguageContext";
import { Link } from "gatsby";
import { FestivalContext } from "../../context/FestivalContext";

export default function Navbar() {
  const { LANG } = useContext(LanguageContext);
  const { currentFestivalStrapiId, currentFestivalTitle } = useContext(
    FestivalContext
  );

  const { strapiGlobalMenu } = useStaticQuery(graphql`
    query MyQueryHeader {
      strapiGlobalMenu {
        home {
          id
          title
          title_en
          visible
        }
        festival {
          id
          title
          title_en
          visible
        }
        production {
          id
          title
          title_en
          visible
        }
        transmission {
          id
          title
          title_en
          visible
        }
        association {
          id
          title
          title_en
          visible
        }
        news {
          id
          title
          title_en
          visible
        }
        archives {
          id
          title
          title_en
          visible
        }
      }
    }
  `);
  return (
    <nav>
      <ul className="nav-bar">
        {strapiGlobalMenu.home.visible ? (
          <li>
            <Link to="/">{strapiGlobalMenu.home["title" + LANG]}</Link>
          </li>
        ) : null}
        {strapiGlobalMenu.festival.visible ? (
          <li>
            <Link
              to={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}`}
              // TODO: gestion context pas de festival en cours (boolean false sur chaque festival)
            >
              {strapiGlobalMenu.festival["title" + LANG]}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.production.visible ? (
          <li>
            <Link to="/diffusion-production">
              {strapiGlobalMenu.production["title" + LANG]}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.transmission.visible ? (
          <li>
            <Link to="/transmissions">
              {strapiGlobalMenu.transmission["title" + LANG]}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.association.visible ? (
          <li>
            <Link to="/association">
              {strapiGlobalMenu.association["title" + LANG]}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.news.visible ? (
          <li>
            <Link to="/actualites">
              {strapiGlobalMenu.news["title" + LANG]}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.archives.visible ? (
          <li>
            <Link to="/archives">
              {strapiGlobalMenu.archives["title" + LANG]}
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
