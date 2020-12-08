import React, {useContext, useEffect, useState} from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import ThumbnailOldArchive from "../../globals/ThumbnailOldArchive";
import Filters from "./Filters";
import LanguageContext from "../../context/LanguageContext";

export default function Archives() {
    const {LANG, language} = useContext(LanguageContext);

    const [filters, setFilters] = useState({});
    const [filtersList, setFiltersList] = useState({
        countries: [],
        years: [],
        directors: [],
        locations: []
    });


    const archives = useStaticQuery(graphql`
    query MyQueryArchives {
      allStrapiArchivesOld(filter: { categorie: { eq: "" } }) {
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
            strapiId
          }
        }
      },
      
    }
  `);

    const lists = [
        {countries: 'pays'},
        {locations: 'lieu'},
        {years: 'annee'},
        {directors: 'credits_2'},
    ]
    function buildFiltersList(archives) {
        let tmpFiltersList = {...filtersList};
        archives.allStrapiArchivesOld.edges.forEach(elem => {
            elem = elem.node;
            lists.forEach(list => {
                let key = Object.keys(list)[0];
                let field = list[key];
                if (!filtersList[key].includes(elem[field]) && elem[field] !== null && elem[field] !== '') {
                    tmpFiltersList[key].push(elem[field]);
                }
            })
        });
        setFiltersList(tmpFiltersList);
    }

    useEffect(() => {
        console.log(archives);
        buildFiltersList(archives);
    }, [])

    useEffect(() => {
        console.log('*************');
        console.log(filters);

    }, [filters])


    return (
        <div id="archives-production">
            <h1 className="to-uppercase">
                {LANG !== "_en" ?
                    <>Découvrez <span>les archives diffusion-production</span></>
                    :
                    <>Explore <span>the production's archives</span></>
                }
            </h1>
            <Filters language={language} filtersList={filtersList} filters={filters} setFilters={setFilters}/>
            {<div className="archive-transmission-grid-wrapper">
                {archives.allStrapiArchivesOld.edges.map(elem => (
                    <ThumbnailOldArchive
                        id={elem.node.strapiId}
                        key={elem.node.id}
                        country={elem.node.pays}
                        name={elem.node.titre}
                        team={elem.node.credits_2}
                        affiche={`${process.env.GATSBY_API_URL}/images/archives${elem.node.photo_1}`}
                    />
                ))}
            </div>}
        </div>
    )
}
