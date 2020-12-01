import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

export default props => {
  const [english, setEnglish] = useState(false);
  const toggleEnglish = () => {
    setEnglish(english => !english);
  };

  return (
    <LanguageContext.Provider value={{ english, toggleEnglish }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
