import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./FilterBySelect.css"

const FilterBySelect = () => {

    const { allStrapiArchivesOld } = useStaticQuery(graphql`
    query PageQuerySelect{
      allStrapiArchivesOld{
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
  `)

    const allArchives = allStrapiArchivesOld.edges;

    const listCountries = allArchives.map((countrie) => countrie.node.pays).sort();
    const allCountries =  new Set(listCountries);
    const listDirectors = allArchives.map((director) => director.node.credits_2).sort();
    const allDirectors =  new Set(listDirectors);

    const listLocations = allArchives.map((location) => location.node.lieu).sort();
    const allLocations =  new Set(listLocations);

    const listYears = allArchives.map((year) => year.node.annee).sort();
    const allYears =  new Set(listYears);

    return (
        <>

            <div className="my-filters">
                <label htmlFor="my-filters" >FILTREZ PAR :</label>
                <select className="countrieSelect">
                    <option>PAYS</option>
                    {
                        allCountries.map((countrie) => (
                            <option>{countrie}</option>
                        ))
                    }
                </select>
                <p className="red-line"></p>
                <select className="directorSelect">
                    <option>METTEUR EN SCÈNE</option>
                    {
                        allDirectors.map((director) => (
                            <option>{director}</option>

                        ))
                    }
                </select>
                <p className="red-line"></p>
                <select className="locationSelect">
                    <option>LIEUX</option>
                    {
                        allLocations.map((location) => (
                            <option>{location}</option>

                        ))
                    }
                </select>
                <p className="red-line"></p>
                <select className="yearSelect">
                    <option>ANNEÉ</option>
                    {
                        allYears.map((year) => (
                            <option>{year}</option>

                        ))
                    }
                </select>
                <p className="red-line"></p>
            </div>

        </>

    )
}

export default FilterBySelect;