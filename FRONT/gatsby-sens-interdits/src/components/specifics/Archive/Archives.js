import React, {useContext, useEffect, useState} from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import ThumbnailOldArchive from "../../globals/ThumbnailOldArchive";
import Filters from "./Filters";
import LanguageContext from "../../context/LanguageContext";

export default function Archives() {
    const {LANG, language} = useContext(LanguageContext);

    const [archives, setArchives] = useState([]);
    const [filters, setFilters] = useState({});
    const [filtersList, setFiltersList] = useState({
        countries: [],
        years: [],
        directors: [],
        locations: []
    });

    const lists = {
        countries: 'pays',
        locations: 'lieu',
        years: 'annee',
        directors: 'credits_2'
    }
    const listsSing = { // TODO: do it better
        country: 'pays',
        location: 'lieu',
        year: 'annee',
        director: 'credits_2'
    }

    /*
        function emptyFilters() {
            let list = {};
            for(let i in filtersList) {
                list[i] = []
            }
            setFiltersList(list);
        }*/

    function buildFiltersList(archives) {
        console.log('"********************')
        console.log('archives', archives);
        console.log('filtersList', filtersList);
        let tmpFiltersList = filtersList;
        console.log('tmpFiltersList', tmpFiltersList);
        archives.forEach(elem => {
            for (let key in lists) {
                let field = lists[key];
                if ((!filtersList[key] !== undefined && !filtersList[key].includes(elem[field])) && elem[field] !== null && elem[field] !== '') {
                    if (tmpFiltersList[key] === undefined) {
                        tmpFiltersList[key] = [];
                    }
                    tmpFiltersList[key].push(elem[field]);
                }
            }
        });
        console.log(tmpFiltersList);
        setFiltersList(tmpFiltersList);
    }

    function getArchives(uri = '', next) {
        fetch(process.env.GATSBY_API_URL + '/archives-olds?categorie=tournee' + uri)
            .then(headers => {
                if (headers.status === 200) {
                    return headers.json()
                } else {
                    next(headers);
                }
            })
            .then(results => {
                next(null, results);
            })
            .catch(err => {
                next(err);
            })
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
        console.log('---------')
        let uri = buildFilters(filters);
        getArchives(uri, (err, results) => {
            if (err) {
                throw err;
            }

            setArchives(results)
            console.log(results);
            buildFiltersList(results);
            console.log(filtersList);

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
