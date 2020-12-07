import React, {useEffect, useState} from "react";
import queryString from 'query-string';
import Result from "./Result.js";

let searchUrl = process.env.GATSBY_API_URL + '/search?s=';
// TODO remove console log
export default function ResultPage() {
    const [data, setData] = useState([]);
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
                } else {
                    //setData(fakeData);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleNewSearch = (e) => {
        e.preventDefault();
        document.querySelector('.search-magnifier').click();
    }
    return (
        <>
            {(data.length > 0) ?
                <div className="container">
                    <h2>{data.length} résulat{data.length > 1 ? 's' : ''} trouvé{data.length > 1 ? 's' : ''}</h2>
                    {data.map(item => (
                        <Result
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
                :
                <div className="container flex">
                    <h2>{data.length} résulat{data.length > 1 ? 's' : ''} trouvé{data.length > 1 ? 's' : ''}</h2>
                    <button onClick={handleNewSearch}>Effectuer une nouvelle recherche</button>
                </div>
            }
        </>
    )
}
