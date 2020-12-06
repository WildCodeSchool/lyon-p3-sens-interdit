import React from "react";
import Result from "./Result.js";
import fakeData from "./fakeData.json";
export default function ResultPage() {
  const data = fakeData;
  return (
    <>
          <h2>Résultats de la recherche:</h2>
          
      {data.map(item => (
        <Result
          key={item.id}
          title={item.title}
          image={item.img}
          description={item.description}
          created_at={item.date}
          type={item.type}
          url={item.url}
        />
      ))}
        
    </>
  );
}
