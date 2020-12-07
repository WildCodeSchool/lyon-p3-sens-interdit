import React, {useEffect, useState} from "react";
import queryString from 'query-string';
import Result from "./Result.js";
import './Result.css';

let searchUrl = process.env.GATSBY_API_URL + '/search?s=';
export default function ResultPage(props) {
    console.log(props)
    const [data, setData] = useState([]);
    const [hasRequested, setHasRequested] = useState(false);
    useEffect(() => {
        let query = queryString.parse(window.location.search);
        searchUrl += query.s;
        if (query.l) {
            searchUrl += '&l=' + query.l;
        }

        fetch(searchUrl)
            .then(headers => {
                if (headers.status === 200) {
                    return headers.json()
                } else {
                    return null;
                }
            })
            .then(({results}) => {
                if (results !== null) {
                    setData(results);
                    setHasRequested(true);
                } else {
                    //setData(fakeData);
                }
            })
            .catch(err => {
                console.log(err);
                setHasRequested(true);
            });
    }, []);

    const handleNewSearch = (e) => {
        e.preventDefault();
        document.querySelector('.search-magnifier').click();
    }
    return (
        <>
            {(data !== undefined && data.length > 0) ?
                <div className="container">
                    <h2><span>{data.length}</span> résulat{data.length > 1 ? 's' : ''} trouvé{data.length > 1 ? 's' : ''}</h2>
                    {data.map((item, i) => (
                        <Result
                            key={i}
                            item={item}
                        />
                    ))}
                </div>
                :
                <div className="container flex" id="no-result">
                    <h2>{hasRequested ? 'Aucun résultat trouvé pour votre recherche':'Recherche en cours...'} </h2>
                    {hasRequested ? <button onClick={handleNewSearch}>Effectuer une nouvelle recherche</button> : ""}
                </div>
            }
        </>
    )
}
