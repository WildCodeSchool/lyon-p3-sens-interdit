import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import LanguageContext from "../../context/LanguageContext";

export default function Navbar() {
  const { LANG } = useContext(LanguageContext);
  const { strapiGlobalMenu } = useStaticQuery(graphql`
    query MyQueryHeader {
      strapiGlobalMenu {
        global_menu_link {
          id
          title
          title_en
          url
        }
      }
    }
  `);
  return (
    <nav>
      <ul className="nav-bar">
        {strapiGlobalMenu.global_menu_link.map(elem => (
          <li key={elem.id} className={elem.id === 14 ? "hidden":""}>
            <a href={elem.url}>{elem["title" + LANG]}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
