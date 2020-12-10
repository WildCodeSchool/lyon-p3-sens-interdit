import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import LanguageContext from "../../context/LanguageContext";
import { Link } from "gatsby";
import { FestivalContext } from "../../context/FestivalContext";

export default function Navbar() {
  const { checkEnContext } = useContext(LanguageContext);
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
            <Link to="/">
              {checkEnContext(
                strapiGlobalMenu.home.title,
                strapiGlobalMenu.home.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.festival.visible ? (
          <li>
            <Link
              to={`/festival/${currentFestivalTitle}_${currentFestivalStrapiId}`}
            >
              {checkEnContext(
                strapiGlobalMenu.festival.title,
                strapiGlobalMenu.festival.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.production.visible ? (
          <li>
            <Link to="/diffusion-production">
              {checkEnContext(
                strapiGlobalMenu.production.title,
                strapiGlobalMenu.production.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.transmission.visible ? (
          <li>
            <Link to="/transmissions">
              {checkEnContext(
                strapiGlobalMenu.transmission.title,
                strapiGlobalMenu.transmission.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.association.visible ? (
          <li>
            <Link to="/association">
              {checkEnContext(
                strapiGlobalMenu.association.title,
                strapiGlobalMenu.association.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.news.visible ? (
          <li>
            <Link to="/actualites">
              {checkEnContext(
                strapiGlobalMenu.news.title,
                strapiGlobalMenu.news.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.archives.visible ? (
          <li>
            <Link to="/archives">
              {checkEnContext(
                strapiGlobalMenu.archives.title,
                strapiGlobalMenu.archives.title_en
              )}
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
