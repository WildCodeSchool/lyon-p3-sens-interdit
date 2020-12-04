import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
const { sluggify } = require("./../../utils/Sluggify");

export const FestivalContext = React.createContext({});

export const FestivalContextProvider = ({ children }) => {
  const [currentFestivalId, setCurrentFestivalId] = useState("");
  const [currentFestivalStrapiId, setCurrentFestivalStrapiId] = useState(null);
  const [currentFestivalTitle, setCurrentFestivalTitle] = useState("");

  const { festivals } = useStaticQuery(graphql`
    query {
      festivals: allStrapiFestival {
        nodes {
          id
          strapiId
          visible
          title
        }
      }
    }
  `);

  let currentFestival = festivals.nodes.filter(festival => festival.visible)[0];

  useEffect(() => {
    setCurrentFestivalId(currentFestival.id);
    setCurrentFestivalStrapiId(currentFestival.strapiId);
    setCurrentFestivalTitle(sluggify(currentFestival.title));
  }, [currentFestival.id, currentFestival.strapiId, currentFestival.title]);

  return (
    <FestivalContext.Provider
      value={{
        currentFestivalId,
        currentFestivalStrapiId,
        currentFestivalTitle,
      }}
    >
      {children}
    </FestivalContext.Provider>
  );
};
