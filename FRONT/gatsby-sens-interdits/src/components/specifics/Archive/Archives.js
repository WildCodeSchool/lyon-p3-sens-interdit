import React, {useContext, useEffect, useState} from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import ThumbnailOldArchive from "../../globals/ThumbnailOldArchive";
import Filters from "./Filters";
import LanguageContext from "../../context/LanguageContext";

export default function Archives() {
    const {LANG, language} = useContext(LanguageContext);
    const defaultFiltersList = {
        countries: [],
        years: [],
        directors: [],
        locations: []
    };
    const [archives, setArchives] = useState([]);
    const [filters, setFilters] = useState({});
    const [filtersList, setFiltersList] = useState(defaultFiltersList);

    const lists = {
        countries: 'pays',
        locations: 'lieu',
        years: 'annee',
        directors: 'credits_2'
    }
    const listsSing = { // TODO: do it bette, merge both obj
        country: 'pays',
        location: 'lieu',
        year: 'annee',
        director: 'credits_2'
    }

    function buildFiltersList(results) {
        let tmpFiltersList = (filters.length > 0) ? {...defaultFiltersList} : filtersList;
        results.forEach(elem => {
            for (let key in lists) {
                let field = lists[key];
                if ((filtersList[key] !== undefined && !filtersList[key].includes(elem[field]))
                    && elem[field] !== null && elem[field] !== '') {

                    if (tmpFiltersList[key] === undefined) {
                        tmpFiltersList[key] = [];
                    }

                    tmpFiltersList[key].push(elem[field]);
                }
            }
        });
        setFiltersList(tmpFiltersList);
    }

    function buildFilters() {
        let uri = '';
        for (let i in filters) {
            let filter = filters[i];
            if (filter !== '') {
                uri += `&${listsSing[i]}=${filter}`
            }
        }
        return uri;
    }

    useEffect(() => {
        let uri = buildFilters(filters);
        fetch(process.env.GATSBY_API_URL + '/archives-olds?categorie=tournee' + uri)
            .then(headers => {
                if (headers.status === 200) {
                    return headers.json()
                } else {
                    console.log(headers);
                }
            })
            .then(results => {
                setArchives(results)
                buildFiltersList(results);
            })
            .catch(err => {
                console.log(err);
            })
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
            <div className="archive-transmission-grid-wrapper">
                {archives.length > 0 ?
                    archives.map(elem => (
                    <ThumbnailOldArchive
                        id={elem.id}
                        date={elem.annee}
                        key={elem.id}
                        country={elem.pays}
                        name={elem.titre}
                        team={elem.credits_2}
                        affiche={`${process.env.GATSBY_API_URL}/images/archives${elem.photo_1}`}
                    />
                ))
                :
                    <></>
                }
            </div>
        </div>
    )
}
