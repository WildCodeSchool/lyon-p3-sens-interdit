import React from "react";
import Result from "./Result";
import fakeData from "./fakeData.json";
import { graphql, useStaticQuery } from "gatsby";
export default function ResultPage() {
  const data = fakeData;
  return (
    <>
          <h2>Résultats de la recherche:</h2>
          
      {data.map(item => (
        <Result
          key={item.id}
          title={item.title}
          image={item.url}
          description={item.description}
        />
      ))}
        
    </>
  );
}
