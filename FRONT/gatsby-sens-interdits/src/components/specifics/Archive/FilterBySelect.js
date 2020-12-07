import React, { useContext, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Thumbnail from "../../globals/Thumbnail";
import "./FilterBySelect.css";
import LanguageContext from "../../context/LanguageContext";

const FilterBySelect = () => {
  const { language } = useContext(LanguageContext);

  const { allStrapiArchivesOld } = useStaticQuery(graphql`
    query PageQuerySelect {
      allStrapiArchivesOld (filter: {categorie: {eq: "tournee"}}){
        edges {
          node {
            id
            titre
            date_1
            pays
            lieu
            annee
            credits_2
            photo_1
          }
        }
      }
    }
  `);

  const allArchives = allStrapiArchivesOld.edges;

  const listCountries = allArchives.map((countrie) => countrie.node.pays).sort();
  const allCountries = listCountries.filter((el, i, arr) => i === arr.indexOf(el));

  const listDirectors = allArchives.map((director) => director.node.credits_2).sort();
  const allDirectors = listDirectors.filter((el, i, arr) => i === arr.indexOf(el));

  const listLocations = allArchives.map((location) => location.node.lieu).sort();
  const allLocations = listLocations.filter((el, i, arr) => i === arr.indexOf(el));

  const listYears = allArchives.map((year) => year.node.annee).sort();
  const allYears = listYears.filter((el, i, arr) => i === arr.indexOf(el));

  const [countrieSelected, setCountrieselected] = useState("");
  const [yearSelected, setYearSelected] = useState("");
  const [directorSelected, setDirectorSelected] = useState("");
  const [locationSelected, setLocationSelected] = useState("");
  const [data, setData] = useState(allArchives);

  const handleCountrie = (e) => {
    setCountrieselected(e.target.value)
    const countrieFilter = allArchives.filter((item) => item.node.pays == countrieSelected);
    setData(countrieFilter)

  }

  const handleYear = (e) => {

    const yearFilter = allArchives.filter((item) => item.node.annee == yearSelected);
    setData(yearFilter)
    setYearSelected(e.target.value)

  }

  const handleDirector = (e) => {
    const directorFilter = allArchives.filter((item) => item.node.credits_2 == directorSelected);
    setData(directorFilter);
    setDirectorSelected(e.target.value);
  }

  const handleLocation = (e) => {
    setLocationSelected(e.target.value);
    const locationFilter = allArchives.filter((item) => item.node.lieu == locationSelected);
    setData(locationFilter);
  }



  return (
    <div className="my-filters to-uppercase">
      <label htmlFor="my-filters">
        {language === "fr" ? "Filtrer par :" : "Filter"}
      </label>
      <div className="select-flex-wrapper">
        <select className="countrieSelect to-uppercase" onChange={handleCountrie}>
          <option value={countrieSelected}>{language === "fr" ? "Pays" : "Country"}</option>
          {allCountries.map(countrie => (
            <option>{countrie}</option>
          ))}
        </select>
        <select className="directorSelect to-uppercase" onChange={handleDirector}>
          <option value={directorSelected}>{language === "fr" ? "Metteur en scène" : "Director"}</option>
          {allDirectors.map(director => (
            <option>{director}</option>
          ))}
        </select>
        <select className="locationSelect to-uppercase" onChange={handleLocation}>
          <option value={locationSelected}>{language === "fr" ? "Lieux" : "Location"}</option>
          {allLocations.map(location => (
            <option>{location}</option>
          ))}
        </select>
        <select className="yearSelect to-uppercase" onChange={handleYear}>
          <option value={yearSelected}>{language === "fr" ? "Année" : "Year"}</option>
          {allYears.map(year => (
            <option>{year}</option>
          ))}
        </select>
      </div>
      <div className="archive-transmission-grid-wrapper">
        {data.map(elem => (
          <Thumbnail
            key={elem.node.id}
            url={"http://localhost:8000/" + elem.node.id}
            date={elem.node.date_1}
            country={elem.node.pays}
            name={elem.node.titre}
            team={elem.node.credits_2}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBySelect;
