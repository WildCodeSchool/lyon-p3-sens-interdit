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

  let listOfFestivals = festivals.nodes;
  let visibleFestival = listOfFestivals.filter(festival => festival.visible)[0];
  // in Strapi, in case no festival has the boolean "visible=true",
  // the default festival is the one with the highest id
  let currentFestival = {};

  if (visibleFestival !== undefined) {
    currentFestival = visibleFestival;
  } else {
    let festivalWithMaxId = Math.max(
      ...listOfFestivals.map(festival => festival.strapiId)
    );
    currentFestival = listOfFestivals.filter(
      festival => festival.strapiId === festivalWithMaxId
    )[0];
  }

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
