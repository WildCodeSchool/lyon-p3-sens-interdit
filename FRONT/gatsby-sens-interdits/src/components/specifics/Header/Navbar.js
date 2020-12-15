import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import LanguageContext from "../../context/LanguageContext";
import { Link } from "gatsby";
import { FestivalContext } from "../../context/FestivalContext";
import ListLink from "../Footer/ListLink";

export default function Navbar(props) {
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
            <Link to="/"   className="underlined">
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
              className="underlined">
              {checkEnContext(
                strapiGlobalMenu.festival.title,
                strapiGlobalMenu.festival.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.production.visible ? (
          <li>
            <Link to="/diffusion-production"  className="underlined">
              {checkEnContext(
                strapiGlobalMenu.production.title,
                strapiGlobalMenu.production.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.transmission.visible ? (
          <li>
            <Link to="/transmissions"  className="underlined">
              {checkEnContext(
                strapiGlobalMenu.transmission.title,
                strapiGlobalMenu.transmission.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.association.visible ? (
          <li>
            <Link to="/association"  className="underlined">
              {checkEnContext(
                strapiGlobalMenu.association.title,
                strapiGlobalMenu.association.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.news.visible ? (
          <li>
            <Link to="/actualites"  className="underlined">
              {checkEnContext(
                strapiGlobalMenu.news.title,
                strapiGlobalMenu.news.title_en
              )}
            </Link>
          </li>
        ) : null}
        {strapiGlobalMenu.archives.visible ? (
          <li>
            <Link to="/archives"  className="underlined">
              {checkEnContext(
                strapiGlobalMenu.archives.title,
                strapiGlobalMenu.archives.title_en
              )}
            </Link>
          </li>
        ) : null}
      </ul>
        {props.isMobile !== undefined && props.isMobile ? <ListLink />:null}
    </nav>
  );
}
