import React from "react";
import Result from "./Result";
import { graphql, useStaticQuery } from "gatsby";
export default function ResultPage() {
  const data = useStaticQuery(graphql``);
  return;
  <>
        <h2>Résultats de la recherche:</h2>
        
    {data.map(item => {
      <Result
        title={data.title}
        image={data.url}
        description={data.description}
      />;
    })}
      
  </>;
}
