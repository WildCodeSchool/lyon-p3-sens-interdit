import React, {useContext, useEffect, useState, useRef} from "react";
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
    const [filters, _setFilters] = useState({});
    const [filtersList, _setFiltersList] = useState(defaultFiltersList);
    const filtersListRef = useRef(filtersList);
    const filtersRef = useRef(filters);

    function setFiltersList(data) {
        filtersListRef.current = data;
        _setFiltersList(data);
    }
    function setFilters(data) {
        filtersRef.current = data;
        _setFilters(data);
    }

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
        let tmpFiltersList = defaultFiltersList;
        results.forEach(archive => {
            for (let i in lists) {
                if (archive[lists[i]] !== null && !tmpFiltersList[i].includes(archive[lists[i]])) {
                    tmpFiltersList[i].push(archive[lists[i]]);
                }
            }
        });
        setFiltersList(tmpFiltersList);
    }

    function buildFilters(elems) {
        let uri = '';
        if (Object.keys(elems).length > 0) {
            for (let i in elems) {
                let elem = elems[i];
                if (elem !== '') {
                    uri += `&${listsSing[i]}=${elem}`
                }
            }
        }
        return uri;
    }

    useEffect(() => {
        let uri = buildFilters(filtersRef.current);
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

    useEffect(() => {
        setFilters([]);
    }, [])


    return (
        <div id="archives-production">
            <h1 className="to-uppercase">
                {LANG !== "_en" ?
                    <>Découvrez <span>les archives diffusion-production</span></>
                    :
                    <>Explore <span>the production's archives</span></>
                }
            </h1>
            <Filters language={language} filtersList={filtersListRef.current} filters={filtersRef.current} setFilters={setFilters}/>
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
