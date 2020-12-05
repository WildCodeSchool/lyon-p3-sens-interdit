import React, {useEffect, useState} from "react";
import queryString from 'query-string';

import Result from "./Result.js";
import fakeData from "./fakeData.json";
export default function ResultPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let search = queryString.parse(location.s);
    fetch(process.env.GATSBY_API_URL+'/search?s='+search)
        .then(headers => headers.json)
        .then(results => {
            setData(results);
        })
        .catch(err => {
          console.log(err);
        });
  }, []);
  return (
    <>
      <h2>{data.length} résulat{data.length > 1 ? 's':''} trouvé{data.length > 1 ? 's':''}</h2>
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
  );
}
