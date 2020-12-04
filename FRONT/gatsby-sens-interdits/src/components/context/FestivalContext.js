import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

export const FestivalContext = React.createContext({});

export const FestivalContextProvider = ({ children }) => {
  const [currentFestivalId, setCurrentFestivalId] = useState("");
  const [currentFestivalStrapiId, setCurrentFestivalStrapiId] = useState(null);

  const { festivals } = useStaticQuery(graphql`
    query {
      festivals: allStrapiFestival {
        nodes {
          id
          strapiId
          visible
        }
      }
    }
  `);

  let currentFestival = festivals.nodes.filter(festival => festival.visible)[0];

  useEffect(() => {
    setCurrentFestivalId(currentFestival.id);
    setCurrentFestivalStrapiId(currentFestival.strapiId);
  }, [currentFestival.id, currentFestival.strapiId]);

  return (
    <FestivalContext.Provider
      value={{ currentFestivalId, currentFestivalStrapiId }}
    >
      {children}
    </FestivalContext.Provider>
  );
};
