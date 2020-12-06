import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./FilterBySelect.css";
import LanguageContext from "../../context/LanguageContext";

const FilterBySelect = () => {
  const { language } = useContext(LanguageContext);

  const { allStrapiArchivesOld } = useStaticQuery(graphql`
    query PageQuerySelect {
      allStrapiArchivesOld {
        edges {
          node {
            id
            titre
            pays
            lieu
            annee
            credits_2
          }
        }
      }
    }
  `);

  const allArchives = allStrapiArchivesOld.edges;

  const listCountries = allArchives.map(countrie => countrie.node.pays).sort();
  const allCountries = [...new Set(listCountries)];
  const listDirectors = allArchives
    .map(director => director.node.credits_2)
    .sort();
  const allDirectors = [...new Set(listDirectors)];

  const listLocations = allArchives.map(location => location.node.lieu).sort();
  const allLocations = [...new Set(listLocations)];

  const listYears = allArchives.map(year => year.node.annee).sort();
  const allYears = [...new Set(listYears)];

  return (
    <div className="my-filters to-uppercase">
      <label htmlFor="my-filters">
        {language === "fr" ? "Filtrer par :" : "Filter"}
      </label>
      <div className="select-flex-wrapper">
        <select className="countrieSelect to-uppercase">
          <option>{language === "fr" ? "Pays" : "Country"}</option>
          {allCountries.map(countrie => (
            <option>{countrie}</option>
          ))}
        </select>
        <select className="directorSelect to-uppercase">
          <option>{language === "fr" ? "Metteur en scène" : "Director"}</option>
          {allDirectors.map(director => (
            <option>{director}</option>
          ))}
        </select>
        <select className="locationSelect to-uppercase">
          <option>{language === "fr" ? "Lieux" : "Location"}</option>
          {allLocations.map(location => (
            <option>{location}</option>
          ))}
        </select>
        <select className="yearSelect to-uppercase">
          <option>{language === "fr" ? "Année" : "Year"}</option>
          {allYears.map(year => (
            <option>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBySelect;
