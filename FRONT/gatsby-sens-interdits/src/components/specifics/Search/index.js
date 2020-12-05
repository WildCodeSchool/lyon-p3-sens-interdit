import React, {useEffect, useState} from "react";
import queryString from 'query-string';
import fakeData from './fakeData.json';
import Result from "./Result.js";

let searchUrl = process.env.GATSBY_API_URL + '/search?s=';

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
                console.log(headers.status);
                if (headers.status === 200) {
                    return headers.json()
                } else {
                    return null;
                }
            })
            .then(results => {
                console.log('**************')
                console.log(results)
                if (results !== null) {
                    setData(results);
                } else {
                    setData(fakeData);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <>
            {(data.length > 0) ?
                <>
                    <h2>{data.length} résulat{data.length > 1 ? 's' : ''} trouvé{data.length > 1 ? 's' : ''}</h2>
                    {data.map(item => (
                        <Result
                            key={item.id}
                            title={item.title}
                            image={item.img || null}
                            description={item.description}
                            created_at={item.date}
                            type={item.type || null}
                            url={item.url}
                        />
                    ))}
                </>
                :
                <>
                    <h2>{data.length} résulat{data.length > 1 ? 's' : ''} trouvé{data.length > 1 ? 's' : ''}</h2>

                </>
            }
        </>
    )
}
